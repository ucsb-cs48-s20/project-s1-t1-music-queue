import React from "react";
import Table from "./Table";
import "./style.css";

export default function Retrieve(props) {
  let obj = props.data.result;
  console.log(props);
  const tableComponents = obj.map(item => {
    return (
      <Table key={item._id} song={item.song.song} score={item.song.score} />
    );
  });

  // {data} can't do this with Javascript objects
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Song</th>
            <th>Score</th>
          </tr>
          {tableComponents}
        </tbody>
      </table>
    </div>
  );
}
