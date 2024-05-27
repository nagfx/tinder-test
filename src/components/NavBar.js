import React, { useContext } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import { Whatshot, Logout } from "@mui/icons-material"; // Import Logout icon
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext

const Navbar = () => {
  // Get the user object and logout function from AuthContext
  const { user, logout } = useContext(AuthContext);

  return (
    <AppBar position="static" color="default">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left side of the navbar */}
        <Box display="flex" alignItems="center">
          {/* Icon button with a Person icon */}
          <IconButton edge="start" color="inherit">
            <PersonIcon />
          </IconButton>
          {/* Display user's name if logged in */}
          {user && (
            <Typography variant="h6" sx={{ ml: 1 }}>
              {user.name}
            </Typography>
          )}
        </Box>

        {/* Center of the navbar */}
        <Box display="flex" justifyContent="center">
          {/* Icon representing the app logo or main feature */}
          <Whatshot sx={{ height: "40px" }} />
        </Box>

        {/* Right side of the navbar */}
        <Box display="flex" alignItems="center">
          {/* Home button that links to the home page */}
          <Link to="/">
            <IconButton edge="end" color="inherit">
              <HomeIcon />
            </IconButton>
          </Link>
          {/* Logout button, visible only if the user is logged in */}
          {user && (
            <Box ml={2}>
              <IconButton edge="end" color="inherit" onClick={logout}>
                <Logout />
              </IconButton>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
