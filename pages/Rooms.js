import React from "react";
import Router from "next/router";
import Layout from "../components/Page/Layout";
import Logout from "../components/Logout";
import { getAccessToken } from "../utils/getAccessToken";

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      access_token: "",
      roomKey: 0,
      isLoadingQ: false
    };
    this.createRoom = this.createRoom.bind(this);
  }

  componentDidMount = () => {
    let access_token = getAccessToken();
    this.setState({ access_token });
  };

  // creates a MusicQ (a collection in the MongoDB database) and assigns
  // a randomized code to this queue
  async createRoom(event) {
    this.setState({ isLoadingQ: true });
    // first, generate the random, 7 digit room key
    const min = 1000000;
    const max = 9999999;
    const roomKey = Math.floor(Math.random() * (max - min + 1) + min);

    await fetch("/api/makeRoom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // the body of this song is built from state
      body: JSON.stringify({
        name: roomKey
      })
    });

    // push to the new MusicQ
    const { access_token } = this.state;
    Router.push({
      pathname: "/App",
      query: {
        roomKey: roomKey,
        access_token: access_token,
        isAdmin: Math.floor(Math.random() * 10000)
      }
    });
  }

  // joins a room using the
  joinRoom() {
    event.preventDefault();
    const { access_token } = this.state;
    Router.push({
      pathname: "/JoinRoom",
      query: { access_token }
    });
  }

  render() {
    const styles = {
      border: "0.2em solid  sblack",
      textAlign: "center",
      fontSize: "25px",
      transition: "all 0.25s ease",
      marginLeft: 50,
      marginRight: 50
    };
    return (
      
        <div className= "login" style={{ textAlign: "center" }}>
          <Layout>
          <header className="Login-header">
            <button
              onClick={() => {
                this.createRoom(event);
              }}
              className="btn btn--Login-link createBtn btn-outline-success"
              style={styles}
            >
              Create a MusicQ
            </button>
            <button
              onClick={() => {
                this.joinRoom(event);
              }}
              className="btn btn--Login-link joinBtn btn-outline-success"
              style={styles}
            >
              Join a MusicQ
            </button>
          </header>
          {this.state.isLoadingQ && <h1> Creating Your MusicQ ... </h1>}
        </Layout>
        <Logout />
      </div>
    );
  }
}

export default Rooms;
