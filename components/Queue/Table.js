import React from "react";
import useSWR from "swr";
import { useEffect } from "react";
import { fetch } from "../../utils/fetch";
import TableRow from "./TableRow";
import Router from "next/router";
import Loading from "../Page/Loading";
import "../style.css";

function Table(props) {
  const { data, mutate } = useSWR(
    "/api/collection?id=" + props.collection,
    fetch,
    {
      // see example repo for explination about booleans
      revalidateOnFocus: true,
      revalidateOnReconnect: true
    }
  );

  // does this collection exisit?. If it doesn't, data is false
  // and the user is kicked out of the room
  useEffect(() => {
    if (data && !data.result) {
      Router.push({
        pathname: "/Closed",
        query: {
          access_token: props.access_token
        }
      });
    }
  }, [data]);

  // room is not to be left, instead, the room is to be populated
  // with data from obj
  let obj = props.data.result;
  let loading = obj.some(song => song["name"] === "FETCHING DATA ... ");

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
      {loading && (
        <h1>
          {" "}
          <Loading message={"Loading Songs ... "} />
        </h1>
      )}

      {!loading && (
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
      )}
    </div>
  );
}

export default Table;
