import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { Whatshot } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser }) => {
  return (
    <AppBar position="static" color="default">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box display="flex" alignItems="center">
          <IconButton edge="start" color="inherit">
            <PersonIcon />
          </IconButton>
          {currentUser && (
            <Typography variant="h6" sx={{ ml: 1 }}>
              {currentUser.name}
            </Typography>
          )}
        </Box>
        <Box display="flex" justifyContent="center">
          <Whatshot sx={{ height: '40px' }} />
        </Box>
        <Link to="/">
          <IconButton edge="end" color="inherit">
            <HomeIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
