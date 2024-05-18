import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import { Whatshot } from "@mui/icons-material";

const Navbar = ({ currentUser }) => {
  // Function to handle the home button click to add into UML diagram, to show there is a function to go back to previous page . I was previously just directly onClick running
  // the function to go to link "/" (homepage)
  const handleHomeClick = () => {
    window.location.href = "/";
  };

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
        <IconButton edge="end" color="inherit" onClick={handleHomeClick}>
          <HomeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
