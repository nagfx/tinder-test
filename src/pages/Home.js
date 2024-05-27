import React, { useState, useContext  } from "react";
import "../tindernav.css";
import { Box, Typography } from "@mui/material";
import { DoubleArrow, Whatshot, Nightlife } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';


const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const [slideLeft, setSlideLeft] = useState(false);
  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of <Link>
    setSlideLeft(true);
    setTimeout(() => {
      // Navigate to the new page after 2 seconds
      window.location.href = "/start";
    }, 2000); // Delay of 2 seconds (2000 milliseconds)
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="color-Tinder"
      >
            <Box>
      <h1>Welcome, {user ? user.name : 'mate'}!</h1>
      {user && <button onClick={logout}>Logout</button>}
    </Box>
        <Link
          to="/start"
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={handleLinkClick}
        >
          <Typography
            variant="h2"
            className={slideLeft ? "Slide-Left" : "Slide-Up"}
          >
            <Whatshot
              style={{ verticalAlign: "text-bottom", paddingBottom: "5px" }}
              fontSize="extra-large"
            />{" "}
            Get swiping{" "}
            <Nightlife
              style={{ verticalAlign: "text-bottom", paddingBottom: "5px" }}
              fontSize="extra-large"
            />{" "}
            with uni peeps
            <DoubleArrow fontSize="large" />
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default Home;
