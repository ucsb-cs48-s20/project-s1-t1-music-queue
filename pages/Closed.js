import React from "react";
import Router from "next/router";
import "./style.css";
import {getAccessToken} from "../utils/getAccessToken"
import Layout from "../components/Page/Layout"

class Closed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      access_token: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount = () => {
    let access_token = getAccessToken()
    this.setState({ access_token });
  };

  handleClick() {
    const { access_token } = this.state;
    Router.push({
      pathname: "/Rooms",
      query: { access_token }
    });
  }

  render() {
    return (
    <div className = "login">
      <Layout>
        <div className = "center">
        <img src="sad_note2.png" alt="none" />
        <h1> MusicQ Closed by Host </h1>
        <button className = "btn btn-outline-success" value="Add Song" onClick={this.handleClick}>
          Back to Homepage
        </button>
        </div>
      </Layout>
    </div>
    );
  }
}

export default Closed;
