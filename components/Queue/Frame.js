import React from "react";
//creates a spotify player widget
//"https://open.spotify.com/embed/track/4nK5YrxbMGZstTLbvj6Gxw"
class Frame extends React.Component {
  render(props) {
    return (
      <div align="center" pointerEvents="none">
        <iframe
          src={"https://open.spotify.com/embed/track/" + this.props.trackID}
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
