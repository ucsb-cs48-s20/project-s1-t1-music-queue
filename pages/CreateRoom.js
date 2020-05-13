import React from "react";

class CreateRoom extends React.Component {
  constructor() {
    super();
    this.state = {
      roomKey: "",
      loadingMessage: ""
    };
  }

  render() {
    return <div>create a room</div>;
  }
}

export default CreateRoom;
