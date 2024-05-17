import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSwipeable } from "react-swipeable";
import UserCard from "./UserCard";
import users from "../data/users";
import { getRecommendations } from "../utils/recommendations";

const Recommendations = ({ currentUser }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [approvedCount, setApprovedCount] = useState(0);
  const [declinedCount, setDeclinedCount] = useState(0);

  useEffect(() => {
    const recs = getRecommendations(users, currentUser);
    setRecommendations(recs);
  }, [currentUser]);

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setDeclinedCount((prevCount) => prevCount + 1);
    } else if (direction === "right") {
      setApprovedCount((prevCount) => prevCount + 1);
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

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
      {...handlers}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", width: 345, mb: 2 }}>
        <Typography variant="h5">Approved: {approvedCount}</Typography>
        <Typography variant="h5">Declined: {declinedCount}</Typography>
      </Box>
      <Box sx={{ position: "relative", width: 345, height: "70%" }}> {/* Adjust height to allow larger cards */}
        {recommendations.map((user, index) => (
          <Box
            key={user.id}
            sx={{
              position: "absolute",
              top: 50,
              left: 30,
              width: "100%",
              height: "60%", // Ensure the card container takes full height
              zIndex: recommendations.length - index,
              transform: index === currentIndex ? "translateX(0)" : `translateX(${(index - currentIndex) * 20}px)`,
              transition: "transform 0.5s, z-index 0s 0.5s", // Delay z-index change to keep current card on top during animation
              opacity: index < currentIndex ? 0 : 1, // Hide cards that are swiped away
            }}
          >
            <UserCard user={user} />
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", width: 345, mt: 2 }}>
        <Button variant="contained" color="secondary" onClick={handleDecline}>
          Decline
        </Button>
        <Button variant="contained" color="primary" onClick={handleApprove}>
          Approve
        </Button>
      </Box>
    </Box>
  );
};

export default Recommendations;
