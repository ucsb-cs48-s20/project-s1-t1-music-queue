import React, { Component } from "react";
import "../style.css";
//creates a random room code for each virtual room

class RoomCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 1000000,
      max: 9999999,
      roomKey: this.props.roomKey
    };
  }

  componentDidMount() {
    if (this.state.roomKey == 0) {
      this.setState({
        roomKey: this.generateNumber(this.state.min, this.state.max)
      });
    }
  }

  render() {
    console.log(this.state.roomKey);
    return (
      <div style={{ position: "absolute", top: 20, left: 20, color: "white" }}>
        <h1>MusicQ Code:</h1>
        <h1>{this.state.roomKey} </h1>
      </div>
    );
  }
  //export const {key}  = this.state.roomKey;
}

export default RoomCode;
