import { useState, useCallback, useEffect } from "react";
import { fetch } from "../../utils/fetch";
import "../style.css";
import SpotifyPlayer from "react-spotify-web-playback";

export default function TableRow(props) {
  const [score, setScore] = useState(props.score);
  const [vote, updateVote] = useState("");
  const [upvoteState, setUpvoteState] = useState("label");
  const [downvoteState, setDownvoteState] = useState("label");

  // this callback renders the score when intially
  // rendered
  useEffect(() => {
    setScore(props.score);
  }, [props.score]);

  // when the user updates their vote. ONLY used for client-side changes
  // and not the backend
  useEffect(() => {
    // user has upvoted
    if (vote == "upvote") {
      setScore(score + 1);
      increment();
      setUpvoteState("upvote_selected");
      setDownvoteState("label");
    }
    // user has downvoted
    else if (vote == "downvote") {
      if (score > 0) {
        setScore(score - 1);
        decrement();
      }
      setDownvoteState("downvote_selected");
      setUpvoteState("label");
    }
  }, [vote]);

  // on intial load. Check if the user had previouly voted on this
  // song. If the user has upvoted or downvoted in the past, these changes
  // are reflected here
  useEffect(() => {
    if (props.isUpvote) {
      setUpvoteState("upvote_selected");
      setDownvoteState("label");
      document.getElementById(props.trackID + "upvote").checked = true;
    } else if (props.isDownvote) {
      setDownvoteState("downvote_selected");
      setUpvoteState("label");
      document.getElementById(props.trackID + "downvote").checked = true;
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
      props.mutate();
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

  // update the SDK with the topmost song by calling the correct web endpoint
  // specified by spotify documentation. The if condition inside useEffect
  // avoids calling fetch when you don't need to
  useEffect(() => {
    // future: add additional conditions
    if (props.rank == 0) {
      console.log("updating SDK with " + props.name);
      fetch("/api/spotify", {
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
    }
  }, [props.rank]);

  const upvote_label = props.trackID + "upvote";
  const downvote_label = props.trackID + "downvote";

  return (
    <tr>
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
      {/* output required number of downvotes to stop playing topmost song*/}
      {props.rank == 0 && <td>Downvotes to stop playing: {score}</td>}
      {/* output just the score for everything but the playing song*/}
      {props.rank != 0 && <td>{props.score}</td>}
      <td>
        {/* radio button to upvote*/}
        <div>
          <input
            type="radio"
            id={upvote_label}
            name={props.trackID}
            onChange={() => {
              updateVote("upvote");
            }}
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
              updateVote("downvote");
            }}
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
