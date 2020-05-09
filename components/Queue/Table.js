import React from "react";
import TableRow from "./TableRow";
import "../style.css";

export default function Table(props) {
  let obj = props.data.result;
  // create another array of songs so that you can sort it later
  const songArr = obj.map(item => {
    return {
      key: item._id,
      albumID: item.albumID,
      name: item.name,
      score: item.score,
      img: item.img
    };
  });

  // sort array of songs; highest scores first and lowest scores last
  songArr.sort((a, b) => (a.score > b.score ? -1 : 1));

  const tableComponents = songArr.map((item, index) => {
    return (
      <TableRow
        name={item.name}
        albumID={item.albumID}
        score={item.score}
        img={item.img}
        mutate={props.mutate}
        rank={index}
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
            <th>Vote</th>
          </tr>
          {tableComponents}
        </tbody>
      </table>
    </div>
  );
}
