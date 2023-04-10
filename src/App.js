import logo from './logo.svg';
import React, { useRef, Component } from 'react';
import './App.css';
import MenuAppBar from './components/AppBar'
import { Button, Grid, Switch, TextField } from '@mui/material';
import { Container } from '@mui/system';

export function App() {
  const textFieldRef = useRef('');
  let tracks = ["spotify:track:15Pb9zPDU8AIhvXVxBFuwr", "spotify:episode:43cbJh4ccRD7lzM2730YK3", "spotify:episode:6I3ZzCxRhRkNqnQNo8AZPV"];
  let trackItems = [<div key="embed-iframe-0" id='embed-iframe-0'></div>, <div key='embed-iframe-1' id='embed-iframe-1'></div>, <div key='embed-iframe-2' id='embed-iframe-2'></div>]

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
        
        <iframe width="100%" height="152" title="My Path to Spotify: Women in Engineering " style={{borderRadius: "12"}} frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" src="https://open.spotify.com/embed/episode/7makk4oTQel546B0PZlDM5?utm_source=oembed"></iframe>
        
      </Container>

    </div>
  );
};

export default App;
