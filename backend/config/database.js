// backend/config/database.js

// Import the Sequelize library
const { Sequelize } = require("sequelize");

// Import the path module to handle and transform file paths
const path = require("path");

// Initialize a new Sequelize instance
const sequelize = new Sequelize({
  // Specify the dialect as SQLite
  dialect: "sqlite",
  // Set the storage location for the SQLite database file
  storage: path.join(__dirname, "..", "database.sqlite"),
});

// Export the sequelize instance to be used in other parts of the application
module.exports = sequelize;
