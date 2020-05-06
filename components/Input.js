import React from "react";
import { useState, useCallback, useEffect } from "react";
import useSWR from "swr";
import { fetch } from "../utils/fetch";
import "./style.css";
import Retrieve from "./Retrieve";

function Input() {
  // set initial hooks to keep track of state
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [sentDatabase, setSent] = useState(false);

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
          uri: "FETCHING DATA ... ",
          score: "FETCHING DATA ... "
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
      <Retrieve data={data} mutate={async () => await mutate()} />
    </div>
  );
}

export default Input;
