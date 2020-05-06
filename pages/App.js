import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import Link from "next/link";
import Layout from "../components/Layout";
import Results from "../components/Results";
import Input from "../components/Input";
import "./style.css";

const spotifySearchURL = "https://api.spotify.com/v1/search?q=";
const spotifyProfileURL = "https://api.spotify.com/v1/me?access_token=";
// songData keeps track of json information that will be rendered by the database
let songData = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_term: "",
      tracks: []
    };
    this.submitTrackForm = this.submitTrackForm.bind(this);
    this.addSong = this.addSong.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
  }

  // When the component first renders you either render the music queue
  // or you don't render anything if the user is NOT logged in!
  componentDidMount = () => {
    if (window.location.href.indexOf("_token") == -1) {
      Router.push("/Login");
    }
    console.log("cdm ran");
  };

  // Performs the query using the spotify api on the value in the form input
  submitTrackForm = event => {
    event.preventDefault();
    const { search_term } = this.state;
    const { access_token } = this.props.url.query;

    if (search_term != "") {
      fetch(
        `${spotifySearchURL}${search_term}&type=track&access_token=${access_token}`
      )
        .then(response => response.json())
        .then(json => {
          this.setState({ tracks: json.tracks.items });
          return json.tracks;
        });
    }
  };

  // add song to the database. Song is the json object that is passed
  addSong = async song => {
    await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // the body of this song is built from state
      body: JSON.stringify({
        name: song.name,
        score: 0,
        id: song.id
      })
    });
  };

  renderSearchResults = () => {
    if (this.state.tracks.length > 1) {
      const { tracks } = this.state;
      const { access_token } = this.props.url.query;
      let allResults = [];
      // index to allow current song to be added.
      tracks.forEach((track, index) => {
        if (track.album != undefined && track.album.images[0] != undefined) {
          let hasImage = track.album.images[0];
          allResults.push(
            // push information about this song to a result component
            <Results key={index} imageURL={hasImage.url} name={track.name}>
              {/*Button that allows user to add song to database*/}
              <button
                className="button"
                value="Add Song"
                onClick={() => {
                  this.addSong(this.state.tracks[index]);
                }}
              ></button>
            </Results>
          );
          // increment index of song being added
          index++;
        }
      });
      return allResults;
    } else {
      return "";
    }
  };

  render() {
    const { user } = this.props;
    return (
      <Layout>
        <Input />
        <hr className="linebreak" />
        <div className="row mt-5 justify-content-center">
          <form onSubmit={event => this.submitTrackForm(event)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control text-center"
                placeholder="enter track name"
                onChange={event =>
                  this.setState({ search_term: event.target.value })
                }
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="form-control btn btn-outline-success"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="row mt-5">{this.renderSearchResults()}</div>
      </Layout>
    );
  }
}

App.getInitialProps = async function(context) {
  const { access_token } = context.query;
  const res = await fetch(spotifyProfileURL + access_token);
  const user = await res.json();
  return {
    user
  };
};

export default App;
