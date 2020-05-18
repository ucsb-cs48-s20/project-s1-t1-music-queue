import React from "react";
import ReactDOM from "react-dom";
import { useState, useCallback, useEffect } from "react";
import useSWR from "swr";
import Layout from "../components/Layout";
import { fetch } from "../utils/fetch";
import Router from "next/router";
import RoomCode from "../components/RoomCode"
import "./style.css";

function CreateRoom() {
  const [roomKey, setRoomKey] = useState("");
  const min = 1000000;
  const max =  9999999;
  if(roomKey == 0)
    setRoomKey(Math.floor(Math.random()*(max-min+1)+min));
  const [access_token, setAccessToken] = useState("");

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
  
  const handleCreate = useCallback(
    async event => {
      console.log("roomKey " + roomKey);
      
     // console.log("collections: " + collections);
    await fetch("/api/makeRoom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // the body of this song is built from state
      body: JSON.stringify({
        name: roomKey
      })
    })

      Router.push({
          pathname: "/App",
          query: { roomKey: roomKey, access_token: access_token }
        }); 
      },
    [roomKey,access_token]
  );

  return (
    <Layout>
      {/*generate 7-digit MusicQ code*/}
      {/* <RoomCode roomKey={roomKey}/> */}
      <div className="roomcode">
      <h1>MusicQ Code: {roomKey} </h1>
      </div>
      {/*button to join MuiscQ*/}
      <div className="form-group" style={{ textAlign: "center" }}>
        
        <button
          className="form-control btn btn-outline-success"
          style={{ width: 200 }}
          onClick={() => handleCreate()}
        >
          Go to MusicQ
        </button>
        
      </div>
      {/* <h1> {data} </h1> */}
    </Layout>
  );
}

export default CreateRoom;
