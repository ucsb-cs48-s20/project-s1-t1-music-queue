import React from "react";
import Router from "next/router";
import "./style.css";

class Closed extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      access_token: ""
    };
  }

  componentDidMount() {
    let hello = "test";
    this.setState({ access_token: "nice" });
  }

  handleClick() {
    Router.push({
      pathname: "/App", // This needs to route to createRoom first
      query: this.state.access_token
    });
  }

  render() {
    return (
      <div>
        <img src="sad_note.png" alt="none" class="center" />
        <button
          className="form-control btn btn-outline-success"
          value="Add Song"
          onClick={() => {
            handleClick();
          }}
        >
          Continue
        </button>
      </div>
    );
  }
}

export default Closed;

// render(){
//     return (
//                 <div>
//                   <img src="sad_note.jpg" alt="none" class="center" />
//                   <button
//                     className="form-control btn btn-outline-success"
//                     value="Add Song"
//                     onClick={() => {
//                       Router;
//                     }}
//                   >
//                     Continue
//                   </button>
//                 </div>
//         );
// }
