import React from "react";
import { useState, useCallback, useEffect } from "react";
import useSWR from "swr";
import { fetch } from "../../utils/fetch";
import "../style.css";
import Table from "./Table";

function Database(props) {
  // useSWR is like your own state that is backed by an API call
  // mutate w/out parameters just causes refetch of endpoint
  // you can change the arguments with a parameter see repo
  // for further documentation.
  const { data, mutate } = useSWR("/api/all?id=" + props.collection, fetch, {
    // see example repo for explination about booleans
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshInterval: 1000,
    initialData: {
      result: [
        {
          name: "FETCHING DATA ... ",
          trackID: "FETCHING DATA ... ",
          score: "FETCHING DATA ... ",
          rank: 0,
          img: "",
          collection: "loading"
        }
      ]
    }
  });

  // re-fectch data from database for initial render. mutate() does this
  // because it is the function that references the data hook above
  // React will call useEffect when any of the dependecies change.
  // Because it an empty array; you call it the first time and never again
  useEffect(() => {
    mutate();
  }, []);

  return (
    <div>
      {/* Display current queue of music */}
      {data.result.collection !== "loading" && (
        <Table
          data={data}
          collection={props.collection}
          mutate={async () => await mutate()}
          access_token={props.access_token}
        />
      )}
    </div>
  );
}

export default Database;
