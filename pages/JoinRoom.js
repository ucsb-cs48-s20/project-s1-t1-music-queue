import React from "react";
import { useState, useCallback } from "react";
import useSWR from "swr";
import Layout from "../components/Layout";
import { fetch } from "../utils/fetch";

function JoinRoom() {
  const [roomKey, setRoomKey] = useState("");
  const { collections, mutate } = useSWR("/api/collections", fetch, {
    // see example repo for explination about booleans
    revalidateOnFocus: true,
    revalidateOnReconnect: true
  });

  const handleJoin = useCallback(
    async event => {
      // get the list of currect collections on the MusicQ
      await mutate();
      console.log(collections);
      console.log(roomKey);
      if (collections.includes(roomKey)) {
        console.log("There is a MusicQ is running on " + roomKey);
      } else {
        console.log("MusicQ ISN'T a MusicQ running! on " + roomKey);
      }
    },
    [roomKey, collections]
  );

  return (
    <Layout>
      {/*gather 7-digit MusicQ code*/}
      <div className="form-group" style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="enter 7-digit room key"
          maxLength="7"
          onChange={() => setRoomKey(event.target.value)}
        />
      </div>
      {/*button to join MuiscQ*/}
      <div className="form-group" style={{ textAlign: "center" }}>
        <button
          className="form-control btn btn-outline-success"
          style={{ width: 200 }}
          onClick={() => handleJoin()}
        >
          Join MusicQ
        </button>
      </div>
      <h1> {collections} </h1>
    </Layout>
  );
}

export default JoinRoom;
