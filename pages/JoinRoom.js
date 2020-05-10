import React from "react";
import { useState, useCallback } from "react";
import useSWR from "swr";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

function JoinRoom() {
  const [roomKey, setRoomKey] = useState("");
  const { collections, mutate } = useSWR("/api/collections", fetch, {
    // see example repo for explination about booleans
    revalidateOnFocus: true,
    revalidateOnReconnect: true
  });

  const handleJoin = useCallback(() => {
    mutate();
    if (collections.contains(roomKey)) {
      console.log("MusicQ is running!");
    } else {
      console.log("MusicQ is not running!");
    }
  }, [roomKey]);

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
          onClick={() => {
            if (roomKey != "") {
              handleJoin;
            }
          }}
        >
          Join MusicQ
        </button>
      </div>
    </Layout>
  );
}

export default JoinRoom;
