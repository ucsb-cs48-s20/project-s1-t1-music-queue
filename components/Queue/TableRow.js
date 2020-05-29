import { useState, useCallback, useEffect } from "react";
import { fetch } from "../../utils/fetch";
import Frame from "./Frame";
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

  // handles changes when upvoting score of each of song dynamically
  const increment = useCallback(
    async (event) => {
      await fetch("/api/increment", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        // the body of this song is built from state
        body: JSON.stringify({
          name: props.name,
          collection: props.collection,
        }),
      });
      // forces a call to the hook useSWR
      props.mutate();
    },
    [score]
  );

  // handles changes when downvoting score of each of song dynamically
  const decrement = useCallback(
    async (event) => {
      await fetch("/api/decrement", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        // the body of this song is built from state
        body: JSON.stringify({
          name: props.name,
          collection: props.collection,
        }),
      });
      // forces a call to the hook useSWR
      props.mutate();
    },
    [score]
  );

  const upvote_label = props.trackID + "upvote";
  console.log(props.trackID);
  const downvote_label = props.trackID + "downvote";
  return (
    <tr>
      {/* output name*/}
      {props.rank == 0 ? (
        <td>
          <SpotifyPlayer
            token={props.access_token}
            uris={["spotify:track:" + props.trackID]}
          />
          {/* <Frame trackID={props.trackID} access_token={props.access_token} /> */}
        </td>
      ) : (
        <td>
          <h3>
            {props.name}
            &emsp;
            <img
              src={props.img}
              className='figure-img img-fluid rounded'
              alt={props.name}
              style={{ height: 100, width: 100 }}
            />{" "}
          </h3>{" "}
        </td>
      )}
      {/* output score */}
      <td>{score}</td>

      <td>
        {/* radio button to upvote*/}
        <div>
          <input
            type='radio'
            id={upvote_label}
            name={props.trackID}
            onChange={() => {
              increment();
              setUpvoteState("upvote_selected");
              setDownvoteState("label");
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
            type='radio'
            id={downvote_label}
            name={props.trackID}
            onChange={() => {
              if (score > 0) {
                setScore(score - 1);
                setDownvoteState("downvote_selected");
                setUpvoteState("label");
                decrement();
              }
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
    </tr>
  );
}
