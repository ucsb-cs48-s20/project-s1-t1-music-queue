import { useState, useCallback, useEffect } from "react";
import { fetch } from "../../utils/fetch";
import "../style.css";
import SpotifyPlayer from "react-spotify-web-playback";

export default function TableRow(props) {
  const [score, setScore] = useState(props.score);
  const [upvoteState, setUpvoteState] = useState("label");
  const [downvoteState, setDownvoteState] = useState("label");

  // this callback renders the score when intially
  // rendered
  useEffect(() => {
    setScore(props.score);
  }, [props.score]);

  // on intial load. Check if the user had previouly voted on this
  // song. If the user has upvoted or downvoted in the past, these changes
  // are reflected here
  useEffect(() => {
    if (props.isUpvote) {
      setUpvoteState("upvote_selected");
      setDownvoteState("label");
    } else if (props.isDownvote) {
      setDownvoteState("downvote_selected");
      setUpvoteState("label");
    }
  }, []);

  // handles changes when upvoting score of each of song dynamically
  const increment = useCallback(
    async event => {
      await fetch("/api/increment", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        // the body of this song is built from state
        body: JSON.stringify({
          trackID: props.trackID,
          collection: props.collection,
          userID: props.userID
        })
      });
      // forces a call to the hook useSWR
      props.mutate();
    },
    [score]
  );

  // handles changes when downvoting score of each of song dynamically
  const decrement = useCallback(
    async event => {
      await fetch("/api/decrement", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        // the body of this song is built from state
        body: JSON.stringify({
          trackID: props.trackID,
          collection: props.collection,
          userID: props.userID
        })
      });
      // forces a call to the hook useSWR
      props.mutate();
    },
    [score]
  );

  const deleteSong = useCallback(async event => {
    await fetch("/api/deleteSong", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      // the body of this song is built from state
      body: JSON.stringify({
        trackID: props.trackID,
        collection: props.collection
      })
    });
    // forces a call to the hook useSWR
    props.mutate();
  }, []);

  const upvote_label = props.trackID + "upvote";
  const downvote_label = props.trackID + "downvote";

​
const changeTracks = useCallback(async event => {
  console.log("magicc button clciked");
  //setTracks(["spotify:track:7Jg80rSKiEVhmGE8sVEYf2", ""]);
​  console.log("trackID:" + props.trackID);
  await fetch("/api/spotify", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    // the body of this song is built from state
    body: JSON.stringify({
      access_token: props.access_token,
      trackID: props.trackID
    })
  });
​
  // call to delete the song from the database
​
  // Spotify Player
});

  
  if (props.rank == 0)
  {
    changeTracks();
   
  }


  return (
    <tr>
      {/* output name*/}
      {props.rank == 0 ? (
        <td>
          {/* <SpotifyPlayer
            token={props.access_token}
            uris={["spotify:track:" + props.trackID]}
          /> */}
          <h3>
            {props.name}
            &emsp;
            <img
              src={props.img}
              className="figure-img img-fluid rounded"
              alt={props.name}
              style={{ height: 100, width: 100 }}
            />{" "}
          </h3>{" "}
          {/* <Frame trackID={props.trackID} access_token={props.access_token} /> */}
        </td>
      ) : (
        <td>
          <h3>
            {props.name}
            &emsp;
            <img
              src={props.img}
              className="figure-img img-fluid rounded"
              alt={props.name}
              style={{ height: 100, width: 100 }}
            />{" "}
          </h3>{" "}
        </td>
      )}

      {/* output required number of downvotes to stop playing topmost song*/}
      {props.rank == 0 && <td>Downvotes to stop playing: {score}</td>}

      {/* output just the score for everything but the playing song*/}
      {props.rank != 0 && <td>{score}</td>}

      <td>
        {/* radio button to upvote*/}
        <div>
          <input
            type="radio"
            id={upvote_label}
            name={props.trackID}
            onChange={() => {
              if (!props.isUpvote) {
                setScore(score + 1);
                increment();
                setUpvoteState("upvote_selected");
                setDownvoteState("label");
              }
            }}
            checked={props.isUpvote ? "checked" : ""}
          />
          <label
            className={upvoteState}
            id={upvote_label}
            htmlFor={upvote_label}
          >
            &uarr;
          </label>
        </div>
        {/* radio button to downvote. Score be < 0*/}
        <div>
          <input
            type="radio"
            id={downvote_label}
            name={props.trackID}
            onChange={() => {
              if (!props.isDownvote) {
                if (score > 0) {
                  setScore(score - 1);
                  decrement();
                }
                setDownvoteState("downvote_selected");
                setUpvoteState("label");
              }
            }}
            checked={props.isDownvote ? "checked" : ""}
          />
          <label
            className={downvoteState}
            id={downvote_label}
            htmlFor={downvote_label}
          >
            &darr;
          </label>
        </div>
      </td>

      {/* {props.rank == 0 && (
       <td> <button onClick={() => deleteSong()}> simulate delete </button> </td>
      )} */}
    </tr>
  );
}
