import React, { Component } from "react";
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

      if(this.state.roomKey == 0)
      {
            this.setState({ roomKey: this.generateNumber(this.state.min, this.state.max)})
      }

    if (this.state.roomKey == 0) {
      this.setState({
        roomKey: this.generateNumber(this.state.min, this.state.max)
      });
    }
      
render(){
    console.log(this.state.roomKey);
  return (
    <div className="roomcode">
      <h1>MusicQ Code: {this.state.roomKey} </h1>
    </div>
  ) }
  //export const {key}  = this.state.roomKey;
};

export default RoomCode;
