import React, { Component } from "react";
import './login.css';

export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "ca71e6fb2d354ce3a88e314add851724";
const redirectUri = "https://spike-s1-t1-tryspotifyapi.now.sh/callback/";
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

export default App;