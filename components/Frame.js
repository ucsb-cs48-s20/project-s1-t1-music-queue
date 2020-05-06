import React, { Component } from "react";
//creates a spotify player widget

class Frame extends React.Component {
  render(props) {
    console.log("https://open.spotify.com/track/" + this.props.id);
    return (
      <div align="center">
        <iframe
          src={"https://open.spotify.com/track/" + this.props.id}
          width="800"
          height="80"
          frameBorder="0"
          align="middle"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    );
  }
}

export default Frame;
