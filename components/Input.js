import React from "react";
import fetch from "isomorphic-unfetch";
import "./style.css";
import Retrieve from "./Retrieve";
import { Populate } from "./Populate";

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      name: "",
      sent_to_database: false
    };
    this.incrementScore = this.incrementScore.bind(this);
    this.decrementScore = this.decrementScore.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  // increments the score of the particular song
  incrementScore() {
    this.setState(prevState => {
      return {
        score: prevState.score + 1,
        name: prevState.name,
        sent_to_database: false
      };
    });
  }

  // decrements the score of the particular song
  decrementScore() {
    this.setState(prevState => {
      // if the score is 0; don't go negative!
      if (prevState.score == 0) {
        return {
          score: 0,
          name: prevState.name,
          sent_to_database: false
        };
      }
      // score is not 0; subtract 1
      else {
        return {
          score: prevState.score - 1,
          name: prevState.name,
          sent_to_database: false
        };
      }
    });
  }

  // handles changes to name of song dynamically
  nameChange() {
    this.setState(prevState => {
      return {
        score: prevState.score,
        name: event.target.value,
        sent_to_database: false
      };
    });
  }

  // submit information to the MongoDB Database
  async submit() {
    await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // the body of this message is built from state
      body: JSON.stringify({
        song: this.state.name,
        score: this.state.score
      })
    });

    // update state to conditionally render message to user
    this.setState(prevState => {
      return {
        score: prevState.score,
        name: prevState.name,
        sent_to_database: true
      };
    });
  }

  render() {
    return (
      <div>
        {/* Gather name of song */}
        <form>
          <label form="sname">Song Name </label>
          <input
            type="text"
            id="sname"
            name="sname"
            value={this.state.name}
            onChange={this.nameChange}
            placeholder="enter song name"
          ></input>
        </form>

        {/* Gather score of song */}
        <h1>{this.state.score}</h1>
        <button onClick={this.incrementScore}>Upvote</button>
        <button onClick={this.decrementScore}>Downvote</button>
        <br />
        <br />

        {/* sumbit name and score of song to MongoDB Database*/}
        <button
          onClick={this.submit}
          className="button"
          style={{ verticalAlign: "middle" }}
        >
          {" "}
          <span> Save to Database </span>
        </button>

        {/* Conditional rendering to display data sent to MongoDB Database*/}
        <h1 style={{ display: this.state.sent_to_database ? "block" : "none" }}>
          {" "}
          {this.state.name} saved to MongoDB Database{" "}
        </h1>
        <Retrieve update={this.state.sent_to_database} />
      </div>
    );
  }
}

export default Input;
