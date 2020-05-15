import React from "react";
import ReactDOM from "react-dom";
import { useState, useCallback, useEffect } from "react";
import useSWR from "swr";
import Layout from "../components/Layout";
import { fetch } from "../utils/fetch";
import Router from "next/router";
import "./style.css";

function JoinRoom() {
  const [roomKey, setRoomKey] = useState("");
  const [access_token, setAccessToken] = useState("");
  const { data, mutate } = useSWR("/api/collections", fetch, {
    // see example repo for explination about booleans
    revalidateOnFocus: true,
    revalidateOnReconnect: true
  });

  useEffect(() => {
    let url = window.location.href;
    if (url.indexOf("_token") > -1) {
      let access_token = url
        .split("_token=")[1]
        .split("&")[0]
        .trim();
      setAccessToken(access_token);
    }
  });

  const handleJoin = useCallback(
    async event => {
      // get the list of currect collections on the MusicQ
      await mutate();
      const collections = data.result;
      console.log("roomKey " + roomKey);
      console.log("collections: " + collections);
      if (collections.includes(roomKey + "")) {
        Router.push({
          pathname: "/App",
          query: { roomKey: roomKey, access_token: access_token }
        });
      }else{
        var p = document.getElementById("errorMsg");
        p.style.display = "block";  
      }
    },
    [roomKey, data]
  );

  return (
    <Layout>
        <p id="errorMsg">
          Wrong Key, please enter a new Key
        </p>
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
      {/* <h1> {data} </h1> */}
    </Layout>
  );
}

export default JoinRoom;
