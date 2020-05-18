import React from "react";
import RoomCode from "../components/Page/RoomCode";

class CreateRoom extends React.Component {
  constructor() {
    super();
    this.state = {
      roomKey: 0,
      loadingMessage: ""
    };
  }

  render() {
    return <RoomCode />;
  }
}

export default CreateRoom;
