import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

// Define the UserCard component that receives a user object as a prop
const UserCard = ({ user }) => {
  return (
    // Card component to display user information
    <Card sx={{ maxWidth: 305, marginBottom: 2, height: "80%" }}>
      <CardContent>
        {/* User's name displayed as a heading */}
        <Typography mt={5} ml={2} variant="h5" component="div">
          {user.name}
        </Typography>
        {/* User's gender displayed in secondary text color */}
        <Typography ml={2} sx={{ mb: 1.5 }} color="text.secondary">
          {user.gender}
        </Typography>
        {/* User's location, university, and interests displayed as body text */}
        <Typography ml={2} variant="body2">
          Location: {user.location}
          <br />
          University: {user.university}
          <br />
          Interests: {user.interests.join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Export the UserCard component for use in other parts of the application
export default UserCard;
