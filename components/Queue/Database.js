import React from "react";
import { useState, useCallback, useEffect } from "react";
import useSWR from "swr";
import { fetch } from "../../utils/fetch";
import "../style.css";
import Table from "./Table";

function Database() {
  // useSWR is like your own state that is backed by an API call
  // mutate w/out parameters just causes refetch of endpoint
  // you can change the arguments with a parameter see repo
  // for further documentation.
  const { data, mutate } = useSWR("/api/all", fetch, {
    // see example repo for explination about booleans
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshInterval: 1500,
    initialData: {
      result: [
        {
          name: "FETCHING DATA ... ",
          albumID: "FETCHING DATA ... ",
          score: "FETCHING DATA ... ",
          rank: 0
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
      <Table data={data} mutate={async () => await mutate()} />
    </div>
  );
}

export default Database;
