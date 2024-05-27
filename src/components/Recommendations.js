import React, { useState, useEffect } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useSwipeable } from "react-swipeable";
import UserCard from "./UserCard";
import axios from 'axios'; // Import axios for API calls
import { getRecommendations } from "../utils/recommendations";

const Recommendations = ({ currentUser }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [approveCount, setApproveCount] = useState(0);
  const [declineCount, setDeclineCount] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");

  // Function to fetch recommendations on component mount and refresh every 24 hours
  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/users'); // Fetch users from the API
        const users = response.data;
        const recs = getRecommendations(users, currentUser); // Get recommendations based on user data
        setRecommendations(recs); // Set recommendations state
        setCurrentIndex(0); // Reset current index to 0
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchRecommendations(); // Initial fetch of recommendations

    // Refresh recommendations every 24 hours
    const intervalId = setInterval(fetchRecommendations, 24 * 60 * 60 * 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentUser]); // Depend on currentUser to trigger update

  // Function to handle swipe actions (left or right)
  const handleSwipe = (direction) => {
    if (direction === "left" || direction === "right") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length); // Update current index
      if (direction === "left") setDeclineCount(declineCount + 1); // Increment decline count
      if (direction === "right") setApproveCount(approveCount + 1); // Increment approve count
    }
  };

  // Swipe handlers for left and right swipes
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Approve and Decline button click handlers
  const handleApprove = () => handleSwipe("right");
  const handleDecline = () => handleSwipe("left");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        overflow: "hidden",
        paddingTop: 4, // Adjust padding top to lower the card stack
      }}
      {...handlers} // Pass swipe handlers to Box component
    >
      {/* Message at top right corner */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 120,
          display: isMobile ? "none" : "block",
        }}
      >
        <Typography variant="caption" color="textSecondary">
          Recommendations will be refreshed daily
        </Typography>
      </Box>
      {/* Display approve and decline counts */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: 345,
          mb: 2,
        }}
      >
        <Typography>Approved: {approveCount}</Typography>
        <Typography>Declined: {declineCount}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: 345,
          mt: 2,
        }}
      >
        <Typography>Recommendations for the day</Typography>
      </Box>
      {/* Container for user cards */}
      <Box sx={{ position: "relative", width: 345, height: "70%" }}>
        {recommendations.map((user, index) => (
          <Box
            key={user.id}
            sx={{
              position: "absolute",
              top: 50,
              left: 30,
              width: "100%",
              height: "60%",
              zIndex: recommendations.length - index,
              transform:
                index === currentIndex
                  ? "translateX(0)"
                  : `translateX(${(index - currentIndex) * 20}px)`,
              transition: "transform 0.5s, z-index 0s 0.5s",
              opacity: index < currentIndex ? 0 : 1,
            }}
          >
            <UserCard user={user} />
          </Box>
        ))}
      </Box>
      {/* Buttons for approving and declining */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: 345,
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          style={{ backgroundColor: "red", color: "white", minWidth: 150 }}
          onClick={handleDecline}
        >
          Decline
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "green", color: "white", minWidth: 150 }}
          onClick={handleApprove}
        >
          Approve
        </Button>
      </Box>
    </Box>
  );
};

export default Recommendations;
