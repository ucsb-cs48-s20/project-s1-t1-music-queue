import React from "react";
import { useState, useCallback, useEffect } from "react";
import useSWR from "swr";
import Layout from "../components/Page/Layout";
import Logout from "../components/Logout";
import { fetch } from "../utils/fetch";
import Router from "next/router";
import "./style.css";
import {getAccessToken} from "../utils/getAccesToken"


function JoinRoom() {
  const [roomKey, setRoomKey] = useState("");
  const [access_token, setAccessToken] = useState("");
  const { data, mutate } = useSWR("/api/collection?id=" + roomKey, fetch, {
    // see example repo for explination about booleans
    revalidateOnFocus: true,
    revalidateOnReconnect: true
  });

  // save the access_token provided by Rooms.js
  useEffect(() => {
      let access_token = getAccessToken()
      setAccessToken(access_token);

  });

  const handleJoin = useCallback(
    async event => {
      // get the list of currect collections on the MusicQ
      await mutate();
      if (data) {
        const collectionExists = data.result;
        var p = document.getElementById("errorMsg"); //for error message
        if (collectionExists) {
          //does not display error msg
          p.style.display = "none";
          Router.push({
            pathname: "/App",
            query: { roomKey: roomKey, access_token: access_token }
          });
        } else {
          //displays error msg
          p.style.display = "block";
        }
      }
    },
    [roomKey, data]
  );

  return (
    <div>
    <Layout>
      <p id="errorMsg" style={{ display: "none" }}>
        Wrong Key, please enter a new Key
      </p>
      {/*gather 7-digit MusicQ code*/}
      <div className="form-group" style={{ textAlign: "center" }}>
        <input
          className="keyInput"
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
      {/* <h1> {data} </h1> */}
    </Layout>
    <Logout/>
    </div>
  );
}

export default JoinRoom;
