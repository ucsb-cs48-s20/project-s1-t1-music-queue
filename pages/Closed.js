import React from "react";
import Router from "next/router";
import "./style.css";
import {getAccessToken} from "../utils/getAccessToken"

class Closed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      access_token: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount = () => {
    let access_token = getAccessToken()
    this.setState({ access_token });
  };

  handleClick() {
    const { access_token } = this.state;
    console.log("ACCESS_TOKEN " + access_token);
    Router.push({
      pathname: "/Rooms",
      query: { access_token }
    });
  }

  render() {
    return (
      <div className="center">
        <img src="sad_note.png" alt="none" />
        <h1> MusicQ Closed by Host </h1>
        <button className="button" value="Add Song" onClick={this.handleClick}>
          Back to Homepage
        </button>
      </div>
    );
  }
}

export default Closed;
