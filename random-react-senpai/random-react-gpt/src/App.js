import React, { Component } from 'react';
import spotifyApi from './spotifyService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistTracks: [], // Initialize playlistTracks as an empty array
    };
  }

  componentDidMount() {
    spotifyApi.setClientId(process.env.REACT_APP_SPOTIFY_CLIENT_ID);
    spotifyApi.setRedirectURI('http://localhost:58061');
    spotifyApi.setScope('playlist-read-private');
    spotifyApi.setAccessToken('your_access_token');
    this.getPlaylistTracks(); // Fetch playlist tracks when component mounts
  }

  async getPlaylistTracks() {
    try {
      const response = await spotifyApi.getPlaylistTracks('51qpjQEkvg7wVZQHxK3cjB');
      const tracks = response.items;
      this.setState({ playlistTracks: tracks }); // Update the state with fetched playlist tracks
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { playlistTracks } = this.state;

    return (
      <div>
        <h1>Scraped Spotify Playlist</h1>
        <ul>
          {playlistTracks.map((track) => (
            <li key={track.id}>{track.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
