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

// .btn:hover {
//     background-color: #fff;
//     color: #000;
//     opacity: 0.5;
//     transition: 0.6s ease;
// }

  render() {

    const styles = {
      border: "none",
      padding: "10px 20px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
    }

    return (
      <div className="Login" style={{textAlign: "center"}}>
        <header className="Login-header">
          {(<button>
            <a
              style={styles}
              className="btn btn--Login-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a></button>
          )}
        </header>
      </div>
    );
  }
}

export default Login;