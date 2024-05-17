import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
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
        {/* Link to home page */}
        <IconButton edge="end" color="inherit" component={Link} to="/">
          <HomeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
