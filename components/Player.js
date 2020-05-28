import React, { Component } from "react";


class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: props.access_token,
            deviceId: "",
            trackID: props.trackID,
            trackURI: props.trackURI,
            trackName: props.name,
            artistName: "",
            playing: false,
            position: 0,
            duration: 0,
        };
        this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);
    }

    componentDidMount = () => {
        this.checkForPlayer();
    };

    // when we receive a new update from the player
    onStateChanged(state) {
        // only update if we got a real state
        if (state !== null) {
        const {
            current_track: currentTrack,
            position,
            duration,
        } = state.track_window;
        const trackName = currentTrack.name;
        const artistName = currentTrack.artists
            .map(artist => artist.name)
            .join(", ");
        const playing = !state.paused;
        this.setState({
            position,
            duration,
            trackName,
            artistName,
            playing
        });
        } else {
        // state was null, user might have swapped to another device
        this.setState({ error: "Looks like you might have swapped to another device?" });
        }
    }

    createEventHandlers() {
        // currently only premium accounts can use the API
        this.player.on('account_error', e => { console.error(e); });
        // loading/playing the track failed for some reason
        this.player.on('playback_error', e => { console.error(e); });
      
        // Playback status updates
        this.player.on('player_state_changed', state => this.onStateChanged(state));

        // Ready
        this.player.on('ready', async data => {
          let { device_id } = data;
          console.log("Let the music play on!");
          // set the deviceId variable, then let's try
          // to swap music playback to *our* player!
          await this.setState({ deviceId: device_id });
          this.transferPlaybackHere();
        });
    }

    checkForPlayer() {
        window.onSpotifyWebPlaybackSDKReady = () => {
            const { token } = this.state;
            clearInterval(this.playerCheckInterval);
            this.player = new Spotify.Player({
                name: 'Web Playback SDK Quick Start Player',
                getOAuthToken: cb => { cb(token); }
                });
            // set up the player's event handlers
            this.createEventHandlers();
            
            // finally, connect!
            this.player.connect();
        }
    }
    
    onPlayClick() {
        this.player.togglePlay();
    }
      
    transferPlaybackHere() {
        const { deviceId, token } = this.state;
        // https://beta.developer.spotify.com/documentation/web-api/reference/player/transfer-a-users-playback/
        // fetch("https://api.spotify.com/v1/me/player", {
        //     method: "PUT",
        //     headers: {
        //     authorization: `Bearer ${token}`,
        //     "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //     "device_ids": [ deviceId ],
        //     // true: start playing music if it was paused on the other device
        //     // false: paused if paused on other device, start playing music otherwise
        //     "play": true,
        //     }),
        // });
        fetch("https://api.spotify.com/v1/me/player/", {
            method: "PUT",
            headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            // "device_ids": [ deviceId ],
            // true: start playing music if it was paused on the other device
            // false: paused if paused on other device, start playing music otherwise
            "play": true,
            "uris": [{trackURI}],
            }),
        });
    }
    

    render() {
        const {
            token,
            artistName,
            trackName,
            position,
            duration,
            playing,
    } = this.state;
        
        return(
            <div className="App">
                <script src="https://sdk.scdn.co/spotify-player.js"></script>
                <div className="App-header">
                    <h2>Now Playing</h2>
                    <p>A Spotify Web Playback API Demo.</p>
                </div>
                <div>
                    <p>Artist: {artistName}</p>
                    <p>Track: {trackName}</p>
                    <p>
                        <button onClick={() => this.onPlayClick()}>{playing ? "Pause" : "Play"}</button>
                    </p>
                </div>
            </div>
        );
    }
}

export default Player;