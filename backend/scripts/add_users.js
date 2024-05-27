const { Sequelize } = require("sequelize");
const User = require("../models/user");
const sequelize = require("../config/database");
const usersData = require("../../src/data/users");

//Script to add all users from the users.js, one way was to register massively in bulk and make the data from users.js compatible for that,
// that way we can add data into db.

// Function to generate email from user name
const generateEmail = (name) =>
  `${name.toLowerCase().replace(" ", ".")}@example.com`;

// Common password for all users
const commonPassword = "pewpew";

(async () => {
  try {
    await sequelize.sync({ force: true }); // Sync the database

    const users = usersData.map((user) => {
      let interests = "";
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

    // Insert users into the database
    await User.bulkCreate(users);
    console.log("Users added successfully");
  } catch (error) {
    console.error("Error adding users:", error);
  } finally {
    await sequelize.close();
  }
})();
