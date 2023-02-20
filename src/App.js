import logo from './logo.svg';
import React, { useRef, Component } from 'react';
import './App.css';
import MenuAppBar from './components/AppBar'
import { Button, Grid, Switch, TextField } from '@mui/material';
import { Container } from '@mui/system';

function App() {
  const textFieldRef = useRef('');
  let tracks = ["spotify:episode:7makk4oTQel546B0PZlDM5", "spotify:episode:43cbJh4ccRD7lzM2730YK3", "spotify:episode:6I3ZzCxRhRkNqnQNo8AZPV"]

  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById('embed-iframe');
    let options = {
      width: '100%',
      height: '160',
      uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
    };
    let callback = (EmbedController) => {
      document.querySelectorAll('ul#episodes > li > button').forEach(
        episode => {
          episode.addEventListener('click', () => {
            EmbedController.loadUri(episode.dataset.spotifyId)
          });
        })
    };
    IFrameAPI.createController(element, options, callback);
  };

  return (
    <div className="App">
      <MenuAppBar />

      <Container maxWidth="md">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Basic</Grid>
          <Grid item>
            <Switch />
          </Grid>
          <Grid item>Advanced</Grid>
        </Grid>

        <TextField multiline fullWidth rows={5} inputRef={textFieldRef}></TextField>

        <Button variant="contained" disableElevation
          onClick={() => {
            console.log(textFieldRef.current.value);
          }}
        >Generate!</Button>

        <ul id="episodes">
          <li>
            <button data-spotify-id="spotify:episode:7makk4oTQel546B0PZlDM5">
              My Path to Spotify: Women in Engineering
            </button>
          </li>
          <li>
            <button data-spotify-id="spotify:episode:43cbJh4ccRD7lzM2730YK3">
              What is Backstage?
            </button>
          </li>
          <li>
            <button data-spotify-id="spotify:episode:6I3ZzCxRhRkNqnQNo8AZPV">
              Introducing Nerd Out@Spotify
            </button>
          </li>
        </ul>

        <div id="embed-iframe"></div>

      </Container>

    </div>
  );
}

export default App;
