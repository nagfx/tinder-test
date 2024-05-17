// src/components/NavBar.js
import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import { Whatshot } from "@mui/icons-material";

const Navbar = ({ currentUser }) => {
  return (
    <AppBar position="static" color="default">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" alignItems="center">
          <IconButton edge="start" color="inherit">
            <PersonIcon />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 1 }}>
            {currentUser.name}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Whatshot sx={{ height: "40px" }} />
        </Box>
        <IconButton edge="end" color="inherit">
          <ForumIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
