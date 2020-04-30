import React from "react";
import Table from "./Table";
import "./style.css";

export default function Retrieve(props) {
  let obj = props.data.result;
  // create another array of songs so that you can sort it later
  const songArr = obj.map(item => {
    return {
      key: item._id,
      name: item.name,
      score: item.score
    };
  });

  // sort array of songs; highest scores first and lowest scores last
  songArr.sort((a, b) => (a.score > b.score ? -1 : 1));

  const tableComponents = songArr.map(item => {
    return (
      <Table
        key={item.name}
        name={item.name}
        score={item.score}
        useEffect={() => props.useEffect()}
      />
    );
  });

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Song</th>
            <th>Score</th>
            <th>Upvote</th>
            <th>Downvote</th>
          </tr>
          {tableComponents}
        </tbody>
      </table>
    </div>
  );
}
