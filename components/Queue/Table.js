import React from "react";
import useSWR from "swr";
import { useEffect, useCallback, useState } from "react";
import { fetch } from "../../utils/fetch";
import TableRow from "./TableRow";
import Router from "next/router";
import Loading from "../Page/Loading";
import "../style.css";
// import SpotifyWebPlayer from "react-spotify-web-playback";
import SpotifyPlayer from "@gmundewadi/react-spotify-web-playback";
import { CHECKBOX_STATUS_INDETERMINATE } from "react-bootstrap-table-next";

function Table(props) {
  const { data, mutate } = useSWR(
    "/api/collection?id=" + props.collection,
    fetch,
    {
      // see example repo for explination about booleans
      revalidateOnFocus: true,
      revalidateOnReconnect: true
    }
  );

  // does this collection exisit?. If it doesn't, data is false
  // and the user is kicked out of the room
  useEffect(() => {
    if (data && !data.result) {
      Router.push({
        pathname: "/Closed",
        query: {
          access_token: props.access_token
        }
      });
    }

    // now we want to see if we should update the SDK
  }, [data]);

  // room is not to be left, instead, the room is to be populated
  // with data from obj
  let obj = props.data.result;
  let loading = obj.some(song => song["name"] === "FETCHING DATA ... ");

  // create another array of songs so that you can sort it later
  let songArr = obj.map(item => {
    // if is particular song has been upvoted/downvoted by the CURRENT user
    const isUpvote = item.upvote.includes(props.userID);
    const isDownvote = item.downvote.includes(props.userID);
    return {
      key: item._id,
      trackID: item.trackID,
      name: item.name,
      score: item.score,
      img: item.img,
      isUpvote: isUpvote,
      isDownvote: isDownvote
    };
  });

  songArr.sort((a, b) => (a.score > b.score ? -1 : 1));

  // song that is currently playing. If there is no song currently playing,
  // the trackID will be set to a default (TBA)
  let currentlyPlayingSong = "";

  const tableComponents = songArr.map((item, index) => {
    // save topmostSong trackID
    if (index == 0) {
      currentlyPlayingSong = item.trackID;
    }

    // the non-topmost songs will be added to the queue. rank == 1 indicates 1st in line TO PLAY
    return (
      <TableRow
        key={item.key}
        name={item.name}
        trackID={item.trackID}
        score={item.score}
        img={item.img}
        mutate={props.mutate}
        rank={index}
        collection={props.collection}
        access_token={props.access_token}
        isUpvote={item.isUpvote}
        isDownvote={item.isDownvote}
        userID={props.userID}
      />
    );
  });

  // checks whether it is the end of the song
  const checkStatus = status => {
    console.log(status);
    console.log(status.isPlaying);
    console.log(status.position);
    status.needsUpdate = true;
    // if the song's position is > 99.99% of the way and the trackID is not null delete
    // OR
    // if the song's position = 0 and is currently not playing and trackID not null delete
    // if (
    //   (status.position >= 99.9 ||
    //     (status.position == 0 && !status.isPlaying)) &&
    //   status.track.id != "" && status.track.id != songAr
    // ) {
    //   removeSong();
    // }
    if (
      !status.isPlaying &&
      status.track.id != "" &&
      (status.position >= 99.9 || status.position == 0)
    ) {
      removeSong();
    }
  };

  const removeSong = async () => {
    await fetch("/api/deleteSong", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      // the value of this collection is built by its state variable
      body: JSON.stringify({
        song: songArr[0],
        collection: props.collection
      })
    });
  };

  return (
    <div>
      {loading
        && (<div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      )}
      {!loading && currentlyPlayingSong && (
        <div>
          <SpotifyPlayer
            token={props.access_token}
            uris={["spotify:track:" + currentlyPlayingSong, ""]}
            autoplay={true}
            play={true}
            callback={checkStatus}
          />
          <table>
            <tbody> 
              <tr className = "table">
                <th style={{width:"700px"}}>Song</th>
                <th style={{width:"70px"}}>Score</th>
                <th style={{width:"70px"}}>Vote</th>
              </tr>
              {tableComponents}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Table;
