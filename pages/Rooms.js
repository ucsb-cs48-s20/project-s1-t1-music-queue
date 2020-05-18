import React from "react";
import Router from "next/router";
import Layout from "../components/Layout";

class CreateRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      access_token: "",
      roomKey: 0
    };
  }

  componentDidMount = () => {
    let url = window.location.href;
    if (url.indexOf("_token") > -1) {
      let access_token = url
        .split("_token=")[1]
        .split("&")[0]
        .trim();
      this.setState({ access_token });
    }
  };

  createRoom(event) {
    event.preventDefault();
    const { access_token } = this.state;
    const { roomKey } = this.state;
    Router.push({
      pathname: "/App", // This needs to route to createRoom first
      query: { roomKey, access_token }
    });
  }

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
      <Layout>
        <div className="Login" style={{ textAlign: "center" }}>
          <header className="Login-header">
            <button
              onClick={() => {
                this.createRoom(event);
              }}
              className="btn btn--Login-link"
              style={styles}
            >
              Create a MusiqQ
            </button>
            <button
              onClick={() => {
                this.joinRoom(event);
              }}
              className="btn btn--Login-link"
              style={styles}
            >
              Join a MusicQ
            </button>
          </header>
        </div>
      </Layout>
    );
  }
}

export default CreateRoom;
