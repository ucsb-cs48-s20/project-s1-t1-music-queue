import React, { Component } from "react";
import {generateNumber} from "../../utils/generateNumber"
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
        roomKey: generateNumber(this.state.min, this.state.max)
      });
    }
  }

  render() {
    return (
      <div style={{ position: "absolute", top: 20, left: 20, color: "white"}}>
        <h1>MusicQ Code: {this.state.roomKey}</h1>
      </div>
    );
  }
  //export const {key}  = this.state.roomKey;
}

export default RoomCode;
