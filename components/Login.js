import React, { Component } from "react";
//import './login.css';

export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "1e8d5de1ecae449c848c0a2b909044b7";
const redirectUri = "http://localhost:8000/App";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
];

class Login extends Component {

  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          {(
            <a
              className="btn btn--Login-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
        </header>
      </div>
    );
  }
}

export default Login;