import React from "react";
import "./style.css";

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
  submit() {
    this.setState(prevState => {
      return {
        score: prevState.score,
        name: prevState.name,
        sent_to_database: true
      };
    });
    print(this.state);
  }

  render() {
    return (
      <div>
        <h1>Input to MongoDB Database</h1>

        {/* Gather name of song */}
        <form className>
          <label for="sname">Song Name </label>
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
        <h1 style={{ display: this.state.sent_to_database ? "block" : "none" }}>
          {" "}
          {this.state.name} saved to MongoDB Database{" "}
        </h1>
      </div>
    );
  }
}

export default Input;
