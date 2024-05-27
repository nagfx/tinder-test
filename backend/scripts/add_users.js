// backend/scripts/add_users.js

// Import required modules
const { Sequelize } = require("sequelize");
const User = require("../models/user");
const sequelize = require("../config/database");
const usersData = require("../../src/data/users");

// Script to add all users from users.js.
// This approach registers users massively in bulk and makes the data from users.js compatible for bulk insertion.

// Function to generate an email from a user's name
const generateEmail = (name) =>
  `${name.toLowerCase().replace(" ", ".")}@example.com`;

// Common password for all users
const commonPassword = "pewpew";

(async () => {
  try {
    // Sync the database, dropping and recreating tables (use with caution in production)
    await sequelize.sync({ force: true });

    // Map the user data to match the database schema
    const users = usersData.map((user) => {
      let interests = "";
      // Handle different data types for interests
      if (Array.isArray(user.interests)) {
        interests = user.interests.join(",");
      } else if (typeof user.interests === "string") {
        interests = user.interests;
      } else {
        console.warn(
          `Unexpected data type for interests in user: ${user.name}`,
          user.interests
        );
      }

      // Return a new user object with the required fields
      return {
        name: user.name || "",
        email: generateEmail(user.name || ""),
        password: commonPassword,
        gender: user.gender || "",
        location: user.location || "",
        university: user.university || "",
        interests: interests,
      };
    });

    // Log the users being added for debugging purposes
    console.log("Users to be added:", users);

    // Insert users into the database in bulk
    await User.bulkCreate(users);
    console.log("Users added successfully");
  } catch (error) {
    // Handle any errors that occur during the insertion process
    console.error("Error adding users:", error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
})();
