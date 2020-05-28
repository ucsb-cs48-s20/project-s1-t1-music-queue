import React from "react";
import useSWR from "swr";
import { useEffect } from "react";
import { fetch } from "../../utils/fetch";
import TableRow from "./TableRow";
import Router from "next/router";
import Loading from "../Page/Loading";
import "../style.css";

// partialSort method from Tim Down. on
// https://stackoverflow.com/questions/7426563/in-javascript-how-do-you-sort-a-subset-of-an-array
function partialSort(arr, start, end) {
  var preSorted = arr.slice(0, start),
    postSorted = arr.slice(end);
  var sorted = arr.slice(start, end).sort();
  arr.length = 0;
  arr.push.apply(arr, preSorted.concat(sorted).concat(postSorted));
  return arr;
}

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
  }, [data]);

  // room is not to be left, instead, the room is to be populated
  // with data from obj
  let obj = props.data.result;
  let loading = obj.some(song => song["name"] === "FETCHING DATA ... ");

  // create another array of songs so that you can sort it later
  let songArr = obj.map(item => {
    return {
      key: item._id,
      trackID: item.trackID,
      name: item.name,
      score: item.score,
      img: item.img
    };
  });

  // ie: sortFirst == true, then you should sort the first song. Score IS 0.
  // If sortFirst == false then you should not sort the first song as the
  // score is NOT zero.
  if (songArr.length > 0) {
    let sortFirst = songArr[0].score == 0;
    if (!sortFirst) {
      // do not sort the first song
      songArr = partialSort(songArr, 1, songArr.length - 1);
      console.log(songArr);
    } else {
      // sort array of songs; highest scores first and lowest scores last
      songArr.sort((a, b) => (a.score > b.score ? -1 : 1));
    }
  }

  const tableComponents = songArr.map((item, index) => {
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
      />
    );
  });

  return (
    <div>
      {loading && (
        <h1>
          {" "}
          <Loading message={"Loading Songs ... "} />
        </h1>
      )}

      {!loading && (
        <div>
          <table>
            <tbody>
              <tr>
                <th>Song</th>
                <th>Score</th>
                <th>Vote</th>
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
