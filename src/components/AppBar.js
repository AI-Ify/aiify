import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { requestUserAuthorization } from '../logic/authorize';

export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" align="left" sx={{ flexGrow: 1 }}>
            AI-ify
          </Typography>
          <Button color="inherit"
            onClick={requestUserAuthorization}
          >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}