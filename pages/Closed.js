import React from "react";
import Router from "next/router";
import "./style.css";

class Closed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      access_token: ""
    };
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    const { access_token } = this.state;
    Router.push({
      pathname: "/Rooms", // This needs to route to createRoom first
      query: { access_token }
    });
  }

  render() {
    return (
      <div>
        <img src="sad_note.png" alt="none" className="center" />
        <button
          className="form-control btn btn-outline-success"
          value="Add Song"
          onClick={this.handleClick}
        >
          Back
        </button>
      </div>
    );
  }
}

export default Closed;
