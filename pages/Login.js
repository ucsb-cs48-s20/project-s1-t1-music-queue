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

console.log(clientId);
console.log(redirectUri);
console.log(spotifyWebApiURL);

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

  makeSpotifyCall = event => {
    event.preventDefault();
    const { access_token } = this.state;
    if (access_token === "") {
      document.location = spotifyWebApiURL;
    } else {
      Router.push({
        pathname: "/App",
        query: { access_token }
      });
    }
  };

  render() {
    const styles = {
      border: "0.2em solid black",
      textAlign: "center",
      fontSize: "25px",
      transition: "all 0.25s ease"
    };

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
                {access_token !== "" ? "Make a Room" : "Login to Spotify"}
              </button>
            }
          </header>
        </div>
      </Layout>
    );
  }
}

export default Login;
