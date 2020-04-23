import React from "react";

class Input extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Vote for the songs you like!</h1>
        <p>
          If you like a song, click thumbs up. If dont like a song, click thumbs
          down.
        </p>
        <button>thumbs up</button>
        <button>thumbs down</button>
      </div>
    );
  }
}

export default Input;
