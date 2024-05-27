// backend/routes/users.js

// Import the Express module and create a new router
const express = require("express");
const router = express.Router();

// Import the User model
const { User } = require("../models");

// Endpoint to fetch all users
router.get("/users", async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.findAll();
    // Respond with the fetched users in JSON format
    res.json(users);
  } catch (error) {
    // Log any errors that occur and respond with a 500 status code
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Export the router to be used in other parts of the application
module.exports = router;
