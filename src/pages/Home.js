import React, { useState, useContext } from "react";
import "../tindernav.css"; // Import custom CSS for styling
import { Box, Typography } from "@mui/material";
import { DoubleArrow, Whatshot, Nightlife } from "@mui/icons-material"; // Import Material-UI icons
import { Link } from "react-router-dom"; // Import Link for navigation
import { AuthContext } from "../context/AuthContext"; // Import AuthContext for authentication state

const Home = () => {
  const { user, logout } = useContext(AuthContext); // Get the current user and logout function from AuthContext
  const [slideLeft, setSlideLeft] = useState(false); // State to manage the sliding animation

  // Handle link click to add slide animation and navigate after a delay
  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of <Link>
    setSlideLeft(true); // Set slideLeft to true to trigger the animation
    setTimeout(() => {
      // Navigate to the new page after 2 seconds
      window.location.href = "/start";
    }, 2000); // Delay of 2 seconds (2000 milliseconds)
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh", // Full viewport height
          display: "flex", // Flexbox layout
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
        className="color-Tinder" // Apply custom CSS class for background color
      >
        <Link
          to="/start"
          style={{ textDecoration: "none", color: "inherit" }} // Remove underline and inherit color
          onClick={handleLinkClick} // Handle click event
        >
          <Typography
            variant="h2" // Large heading text
            className={slideLeft ? "Slide-Left" : "Slide-Up"} // Apply slide animation based on state
          >
            {/* Display icons and text */}
            <Whatshot
              style={{ verticalAlign: "text-bottom", paddingBottom: "5px" }}
              fontSize="extra-large"
            />{" "}
            Get swiping {user ? user.name : "mate"}{" "}
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
