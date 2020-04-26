import React from "react";
import { useState } from "react";
import useSWR from "swr";
import { fetch } from "../utils/fetch";
import Table from "./Table";
import "./style.css";

// //create your forceUpdate hook
// function useForceUpdate() {
//   console.log("updating...");
//   const [value, setValue] = useState(0); // integer state
//   return () => setValue(value => ++value); // update the state to force render
// }

export default function Retrieve(props) {
  // swr returns a data and error parameter
  // const forceUpdate = useForceUpdate();
  const { data, error } = useSWR("/api/all", fetch, {
    // By default, useSWR will call the endpoint we specified (in this case, /api/all) every time we click away from
    // the page. This can be really useful if we want to make sure the web app is always showing the latest data,
    // but in this case, we don't need that behavior. See what happens if you set these options to true or remove them!
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  if (error) {
    return <div>Failed to load</div>;
  }

  if (!data) {
    return <div>Loading</div>;
  }

  let obj = JSON.parse(JSON.stringify(data.result));

  console.log("Retrieve: " + obj);

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
