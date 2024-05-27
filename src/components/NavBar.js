import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { Whatshot } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);

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
          {user && (
            <Typography variant="h6" sx={{ ml: 1 }}>
              {user.name}
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
