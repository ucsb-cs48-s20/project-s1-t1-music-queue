import React, { Component } from "react";
import Router from "next/router";
import Layout from "../components/Layout";
import config from "../utils/config";

export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = config.CLIENT_ID;
const redirectUri = config.REDIRECT_URI;
const scopes = ["user-read-currently-playing", "user-read-playback-state"];
const spotifyWebApiURL = `https://accounts.spotify.com/authorize/?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes}`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      access_token: ""
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

  // The purpose of this addition is to make sure that after the user logs in,
  // the page that is displayed is CreateRoom.js and not the login page
  componentDidUpdate() {
    const { access_token } = this.state;
    if (access_token != "") {
      Router.push({
        pathname: "/Rooms",
        query: { access_token }
      });
    }
  }

  makeSpotifyCall = event => {
    event.preventDefault();
    const { access_token } = this.state;
    console.log(access_token);
    if (access_token === "") {
      document.location = spotifyWebApiURL;
    }
    // This is the code that I commented out
    // else {
    //   Router.push({
    //     pathname: "/CreateRoom",
    //     query: { access_token }
    //   });
    // }
  };

  render() {
    const styles = {
      border: "0.2em solid black",
      textAlign: "center",
      fontSize: "25px",
      transition: "all 0.25s ease"
    };

    // you have logged in and are returning to the main page, move forward to creating
    // a new page instead of displaying the login screen
    const { access_token } = this.state;

    return (
      <Layout>
        <div className="Login" style={{ textAlign: "center" }}>
          <br />
          <br />
          <header className="Login-header">
            {
              <button
                onClick={() => {
                  this.makeSpotifyCall(event);
                }}
                className="btn btn--Login-link"
                style={styles}
              >
                Login to Spotify
              </button>
            }
          </header>
        </div>
      </Layout>
    );
  }
}

export default Login;
