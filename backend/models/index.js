// backend/models/index.js

// Import the User model
const User = require("./user");

// Import the configured Sequelize instance
const sequelize = require("../config/database");

// Function to initialize models and create tables
const initModels = async () => {
  try {
    // Sync all defined models to the DB.
    await sequelize
      .sync
      // { force: true }
      (); // Use { force: true } only for development to drop and recreate tables, remove if in production
    console.log("Database & tables created!");
  } catch (error) {
    // Handle any errors during table creation
    console.error("Unable to create tables, shutting down...", error);
    process.exit(1); // Exit the process with failure code
  }
};

// Export the initialization function and User model
module.exports = { initModels, User };
