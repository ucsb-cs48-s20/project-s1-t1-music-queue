import React, {Component} from "react";
//creates a random room code for each virtual room

class RoomCode extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        min: 1000000,
        max: 9999999,
        number: 1000000,
      }
    }
  
    componentDidMount() {
     this.setState({ number: this.generateNumber(this.state.min, this.state.max)})
    }

    generateNumber = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)+min)
    }
      
     
render(){
    console.log(this.state.number);
  return (
    <div className="roomcode">
      <h1>RoomCode: {this.state.number} </h1>
    </div>
  ) }
};

export default RoomCode;