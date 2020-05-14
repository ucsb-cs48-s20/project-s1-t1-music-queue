import { useState, useCallback, useEffect } from "react";
import { fetch } from "../../utils/fetch";
import Frame from "./Frame";

export default function TableRow(props) {
  const [score, setScore] = useState(props.score);

  // this callback renders the score when intially
  // rendered
  useEffect(() => {
    setScore(props.score);
  }, [props.score]);

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
          name: props.name,
          collection: props.collection
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
          name: props.name,
          collection: props.collection
        })
      });
      // forces a call to the hook useSWR
      props.mutate();
    },
    [score]
  );

  console.log(props);
  return (
    <tr>
      {/* output name and score of song*/}
      {props.rank == 0 ? (
        <td>
          <Frame albumID={props.albumID} />
        </td>
      ) : (
        <td>
          <div>
            <h3>{props.name}</h3>{" "}
            <img
              src={props.img}
              className="figure-img img-fluid rounded"
              alt={props.name}
              style={{ height: 100, width: 100 }}
            />{" "}
          </div>
        </td>
      )}

      <td>{score}</td>
      <td>
        {/* button to upvote*/}
        <button
          className="button_upvote"
          onClick={() => {
            setScore(score + 1);
            increment();
          }}
        >
          &uarr;
        </button>
        {/* button to downvote. Cannot be < 0*/}
        <button
          className="button_downvote"
          onClick={() => {
            if (score > 0) {
              setScore(score - 1);
              decrement();
            }
          }}
        >
          {" "}
          &darr;
        </button>
      </td>
    </tr>
  );
}
