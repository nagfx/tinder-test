import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const UserCard = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 305, marginBottom: 2, height: "80%" }}>
      {" "}
      {/* Set the height to 100% */}
      <CardContent>
        <Typography mt={5} ml={2} variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography ml={2} sx={{ mb: 1.5 }} color="text.secondary">
          {user.gender}
        </Typography>
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

export default UserCard;
