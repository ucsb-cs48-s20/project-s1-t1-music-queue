import React from "react";
import TableRow from "./TableRow";
import Router from "next/router";
import "../style.css";

export default function Table(props) {
  let obj = props.data.result;

  let leaveQueue = obj.some(song => song["deleteMusicQ"] === true);

  if (leaveQueue) {
    Router.push({
      pathname: "/Closed",
      query: {
        access_token: props.access_token
      }
    });
  }

  // create another array of songs so that you can sort it later
  const songArr = obj.map(item => {
    return {
      key: item._id,
      trackID: item.trackID,
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
        key={item.key}
        name={item.name}
        trackID={item.trackID}
        score={item.score}
        img={item.img}
        mutate={props.mutate}
        rank={index}
        collection={props.collection}
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
