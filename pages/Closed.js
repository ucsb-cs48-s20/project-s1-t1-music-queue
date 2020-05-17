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

  componentDidMount() {
    let hello = "test";
    this.setState({ access_token: "nice" });
  }

  handleClick() {
    Router.push({
      pathname: "/App", // This needs to route to createRoom first
      query: this.state.access_token
    });
  }

  render() {
    return (
      <div>
        <img src="sad_note.png" alt="none" class="center" />
        <button
          className="form-control btn btn-outline-success"
          value="Add Song"
          onClick={this.handleClick}
        >
          Continue
        </button>
      </div>
    );
  }
}

export default Closed;
