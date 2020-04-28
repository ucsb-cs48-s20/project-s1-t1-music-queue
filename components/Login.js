import React, { Component } from "react";
//import './login.css';

export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = process.env.CLIENT_ID;
const redirectUri = process.env.REDIRECT_URI;
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