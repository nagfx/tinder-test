// scripts/syncDatabase.js

// Import the initModels function from the models directory
const { initModels } = require("../models");

// Function to synchronize the database
const syncDatabase = async () => {
  // Initialize and synchronize models
  await initModels();
  // Exit the process with a success code (0) once synchronization is complete
  process.exit(0);
};

// Execute the syncDatabase function
syncDatabase();
