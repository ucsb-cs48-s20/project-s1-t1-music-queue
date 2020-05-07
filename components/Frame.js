import React from "react";
//creates a spotify player widget

class Frame extends React.Component {
  render(props) {
    console.log("https://open.spotify.com/embed/album/" + this.props.albumID);
    return (
      <div align="center">
        <iframe
          src={"https://open.spotify.com/embed/album/" + this.props.albumID}
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
