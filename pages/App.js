import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import Layout from "../components/Layout";
import Results from "../components/Search/Results";
import Database from "../components/Queue/Database";
import Loading from "../components/Page/Loading";
import "./style.css";
import RoomCode from "../components/Page/RoomCode";

const spotifySearchURL = "https://api.spotify.com/v1/search?q=";
const spotifyProfileURL = "https://api.spotify.com/v1/me?access_token=";
// songData keeps track of json information that will be rendered by the database
let songData = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_term: "",
      tracks: [],
      collection: "loading",
      isDeleting: false
    };
    this.submitTrackForm = this.submitTrackForm.bind(this);
    this.addSong = this.addSong.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
    this.leaveMusicQ = this.leaveMusicQ.bind(this);
  }

  // When the component first renders you either render the music queue
  // or you don't render anything if the user is NOT logged in!
  componentDidMount = () => {
    // checking access token
    const acc = this.props.url.query.access_token;
    if (!acc) {
      Router.push("/Login");
    }
    // reading roomKey
    const c = this.props.url.query.roomKey;
    this.setState({ collection: c });
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
        trackID: song.id,
        imgURL: song.album.images[2].url,
        collection: this.state.collection
      })
    });
  };

  // Renders each of the components in the search results.
  // it: The add song button, image, and title of song
  renderSearchResults = () => {
    if (this.state.tracks.length > 1) {
      const { tracks } = this.state;
      const { access_token } = this.props.url.query;
      let allResults = [];
      // index to allow current song to be added.
      tracks.forEach((track, index) => {
        if (track.album != undefined && track.album.images[0] != undefined) {
          // console.log(track); Outputs the spotify object returned
          let hasImage = track.album.images[0];
          allResults.push(
            // push information about this song to a result component
            <Results key={index} imageURL={hasImage.url} name={track.name}>
              {/*Button that allows user to add song to database*/}
              <button
                className="form-control btn btn-outline-success"
                value="Add Song"
                onClick={() => {
                  this.addSong(track);
                }}
              >
                Add Song
              </button>
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

  // Button to leave queue. Now links the props.url.query
  leaveMusicQ = async () => {
    const { access_token, isAdmin } = this.props.url.query;
    // Delete this collection ONLY if user is the admin of the MusicQ and
    // this post request kicks all of the users out of the room
    if (isAdmin) {
      this.setState({ isDeleting: true });
      await fetch("/api/deleteCollection", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        // the value of this collection is built by its state variable
        body: JSON.stringify({
          collection: this.state.collection
        })
      });
    }
    // Go back to the rooms screen
    Router.push({
      pathname: "/Rooms",
      query: {
        access_token: access_token
      }
    });
  };

  render() {
    const isAdmin = this.props.url.query.isAdmin;
    // buttonMessage represents the message on the button
    // located at the top right corner of the corner of the screen
    let buttonMessage = "Leave MusicQ";
    if (isAdmin) {
      buttonMessage = "Delete MusicQ";
    }
    return (
      <div className="App">
        <Layout>
          {/*render queue as normal*/}
          {this.state.isDeleting == false && (
            <div>
              <Database
                collection={this.state.collection}
                access_token={this.props.url.query.access_token}
              />
              <hr className="linebreak" />
              <div className="row mt-5 justify-content-center">
                <form onSubmit={event => this.submitTrackForm(event)}>
                  <div className="form-group" style={{ textAlign: "center" }}>
                    <input
                      type="text"
                      placeholder="enter track name"
                      onChange={event =>
                        this.setState({ search_term: event.target.value })
                      }
                    />
                  </div>
                  <div className="form-group" style={{ textAlign: "center" }}>
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
            </div>
          )}

          {/*If the queue is being deleted*/}
          {this.state.isDeleting && (
            <Loading message={"Deleting MusicQ ... "} />
          )}
        </Layout>
        <button
          style={{
            padding: 16,
            display: "block",
            backgroundColor: "lightcoral",
            color: "white",
            textAlign: "center",
            position: "absolute",
            top: 20,
            right: 20
          }}
          onClick={this.leaveMusicQ}
        >
          {buttonMessage}
        </button>
        <RoomCode roomKey={this.props.url.query.roomKey} />
      </div>
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
