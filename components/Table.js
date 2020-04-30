import { useState, useCallBack } from "react";
import { fetch } from "../utils/fetch";

export default function Table(props) {
  const [name, setName] = useState(props.song);
  const [score, setScore] = useState(props.score);

  // // handles changes when upvoting score of each of song dynamically
  // const upvote = useCallBack(
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
      <td>{name}</td>
      <td>{score}</td>
      <td>
        <button onClick={() => setScore(score + 1)}> upvote</button>
      </td>
      <td>
        <button onClick={() => setScore(score - 1)}> downvote</button>
      </td>
    </tr>
  );
}
