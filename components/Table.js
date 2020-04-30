import { useState, useCallback, useEffect } from "react";
import { fetch } from "../utils/fetch";

export default function Table(props) {
  const [score, setScore] = useState(props.score);

  // this callback renders the score when intially
  // rendered
  useEffect(() => {
    setScore(props.score);
  }, [props.score]);

  // this callback renders changes to score
  // dynmaically and updates it for all users
  useEffect(() => {
    // call useEffect of props
  }, [score]);

  // // handles changes when upvoting score of each of song dynamically
  // const updateScore = useCallback(
  //   async event => {
  //     await fetch("/api/add", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       // the body of this song is built from state
  //       body: JSON.stringify({
  //         song: name,
  //         score: score
  //       })
  //     });
  //     // forces a call to the hook useSWR
  //   },
  //   [name, score]
  // );

  return (
    <tr>
      {/* output name and score of song*/}
      <td>{props.name}</td>
      <td>{score}</td>
      <td>
        {/* button to upvote*/}
        <button
          onClick={() => {
            setScore(score + 1);
            //updateScore();
          }}
        >
          {" "}
          upvote
        </button>
      </td>
      <td>
        {/* button to downvote. Cannot be < 0*/}
        <button
          onClick={() => {
            if (score > 0) setScore(score - 1);
            //updateScore();
          }}
        >
          {" "}
          downvote
        </button>
      </td>
    </tr>
  );
}
