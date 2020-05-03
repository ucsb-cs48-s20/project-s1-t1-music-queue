import React, { Component } from 'react'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'

export const spotifyProfileURL = "https://api.spotify.com/v1/me?access_token=";


class User extends Component {
    constructor(props) {
        super(props);
        
    }

    routeToSearchArtists = (event) => {
        event.preventDefault()
        const { access_token } = this.props.url.query
        Router.push({
            pathname: '/App',
            query: { access_token }
        })
    }

    
    render(){     
        const { user} = this.props   
        
        return(
            <div>
                <div className="row mt-5 justify-content-center">
                    <h3>Welcome {user.display_name.split(" ")[0]}!</h3>
                </div>
                <div className="row mt-2 justify-content-center">
                    <img src={user.images[0].url} className="img-responsive" />
                </div>
                <div className="mt-4 justify-content-center">
                    <p className="text-center">username: {user.display_name}</p>
                    <p className="text-center">email: {user.email}</p>
                    <p className="text-center">follower count: {user.followers.total}</p>
                </div>
                <div className="row mt-5 justify-content-center">
                    <button 
                        className="btn btn-success" 
                        onClick={event => this.routeToSearchArtists(event)}
                    >
                        Search Artists
                    </button>
                </div>

            </div>
        )
    }
}

User.getInitialProps = async function(context) {
    const { access_token } = context.query
    const res = await fetch(spotifyProfileURL+access_token)
    const user = await res.json()
    return { 
        user,
    }
}

export default User