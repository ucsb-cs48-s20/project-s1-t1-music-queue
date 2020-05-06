import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import Link from "next/link";
import Layout from "../components/Layout";
import Results from "../components/Results";
import Input from "../components/Input";
import "./style.css";
import Frame from "../components/Frame"

const spotifySearchURL = "https://api.spotify.com/v1/search?q=";
const spotifyProfileURL = "https://api.spotify.com/v1/me?access_token=";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_term: "",
      tracks: []
    };
    this.submitTrackForm = this.submitTrackForm.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
  }

  componentDidMount = () => {
    if (window.location.href.indexOf("_token") == -1) {
      Router.push("/Login");
    }
    console.log("cdm ran");
  };

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

  renderSearchResults = () => {
    if (this.state.tracks.length > 1) {
      const { tracks } = this.state;
      const { access_token } = this.props.url.query;
      let allResults = [];
      tracks.forEach((track, index) => {
        if (track.album != undefined && track.album.images[0] != undefined) {
          let hasImage = track.album.images[0];
          allResults.push(
            <Results key={track.id} imageURL={hasImage.url} name={track.name}>
              <Link
                href={`/track-albums?id=${track.id}&access_token=${access_token}`}
              >
                <a className="text-muted">View {track.name} albums</a>
              </Link>
            </Results>
          );
        }
      });
      return allResults;
    } else {
      return "";
    }
  };

  render() {
    console.log("this.state", this.state);
    const { user } = this.props;
    return (
      <Layout>
        <Frame id="6rqhFgbbKwnb9MLmUQDhG6"/> {/*pass in song id here*/}
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
