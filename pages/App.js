import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import Link from 'next/link'
import Layout from '../components/Layout'
import Results from '../components/Results'
const spotifySearchURL = "https://api.spotify.com/v1/search?q=";

class SearchArtists extends Component {
  constructor(props) {
      super(props);
      this.state = {
          search_term: '',
          artists: []
      }
      this.submitArtistForm = this.submitArtistForm.bind(this);
      this.renderSearchResults = this.renderSearchResults.bind(this);
  }

  componentDidMount = () => {
      if(window.location.href.indexOf('_token')==-1){
          Router.push('/spotify')
      }
      console.log('cdm ran')
  }

  submitArtistForm = (event) => {
      event.preventDefault()
      const { search_term } = this.state
      const { access_token } = this.props.url.query
      console.log(access_token)
      
      if(search_term!=''){
        fetch(`${spotifySearchURL}${search_term}&type=artist&access_token=${access_token}`)
          .then(response => response.json())
          .then(json => {
              this.setState({ artists: json.artists.items })
              return json.artists
          })
      }
  }

  renderSearchResults = () => {
      if(this.state.artists.length > 1){
          const { artists } = this.state
          const { access_token } = this.props.url.query 
          let allResults = []
          artists.forEach((artist, index) => {
              if(artist.images[0]!=undefined){
                  let hasImage = artist.images[0]
                  allResults.push(
                      <Results
                          key={artist.id} 
                          imageURL={hasImage.url}
                          name={artist.name} 
                      >                         
                       <Link href={`/artist-albums?id=${artist.id}&access_token=${access_token}`}>
                          <a className="text-muted">View {artist.name} albums</a>
                       </Link>
                      </Results>
                  )
              }
          })
          return allResults
      }else{
          return ''
      }
  }
  
  render() {
      console.log('this.state', this.state)
      return (
          <Layout>
              <div className="row mt-5 justify-content-center">
                  <h3>
                      {
                          this.state.artists.length > 1 
                          ? 
                          `Search results for "${this.state.search_term}"` 
                          : 
                          'Search the Spotify API for your favorite artist'
                      }
                  </h3>
              </div>
              <div className="row mt-5 justify-content-center">
                  <form onSubmit={event => this.submitArtistForm(event)}>
                      <div className="form-group">
                          <input 
                              type="text" 
                              className="form-control text-center" 
                              placeholder="enter artist name"
                              onChange={event => this.setState({ search_term: event.target.value })} 
                          /> 
                      </div>
                      <div className="form-group">
                          <button type="submit" className="form-control btn btn-outline-success">Search</button> 
                      </div>
                  </form>
              </div>
              <div className="row mt-5">
                  {this.renderSearchResults()}
              </div>
          </Layout>
      );
  }
}


export default SearchArtists;