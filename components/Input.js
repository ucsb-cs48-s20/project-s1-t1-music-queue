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
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    initialData: {
      result: [
        {
          _id: "FETCHING DATA ... ",
          name: "FETCHING DATA ... ",
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

  // handles changes to name of song dynamically
  const submit = useCallback(
    async event => {
      await fetch("/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        // the body of this song is built from state
        body: JSON.stringify({
          name: name,
          score: score
        })
      });

      // forces a call to the hook useSWR
      await mutate();

      // update sent
      setSent(true);
    },
    [name, score]
  );

  return (
    <div>
      {/* Display current queue of music */}
      <Retrieve data={data} mutate={async () => await mutate()} />
      <hr className="linebreak" />
      {/* Gather name of song */}
      <form>
        <input
          type="text"
          id="sname"
          name="sname"
          value={name}
          onChange={() => setName(event.target.value)}
          placeholder="enter song name ... "
        ></input>
      </form>
      {/* sumbit name and score of song to MongoDB Database*/}
      <button
        onClick={() => submit()}
        className="button"
        style={{ verticalAlign: "middle" }}
      >
        {" "}
        <span> Add Song </span>
      </button>
    </div>
  );
}

export default Input;
