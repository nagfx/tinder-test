// backend/models/user.js

// Import the required modules from Sequelize
const { DataTypes } = require("sequelize");

// Import the configured Sequelize instance for database connection
const sequelize = require("../config/database");

// Define the User model with specified fields and their properties
const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // Automatically increment the ID for each new record
      primaryKey: true, // Set as the primary key for the table
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Name field cannot be null
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Email field cannot be null
      unique: true, // Email must be unique
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, // Password field cannot be null
    },
    gender: {
      type: DataTypes.STRING, // Gender field is optional
    },
    location: {
      type: DataTypes.STRING, // Location field is optional
    },
    university: {
      type: DataTypes.STRING, // University field is optional
    },
    interests: {
      type: DataTypes.STRING, // Interests stored as a comma-separated string
      get() {
        // Custom getter to convert comma-separated string to an array
        const rawValue = this.getDataValue("interests");
        return rawValue ? rawValue.split(",") : [];
      },
      set(val) {
        // Custom setter to handle different types of input
        if (Array.isArray(val)) {
          this.setDataValue("interests", val.join(","));
        } else if (typeof val === "string") {
          this.setDataValue("interests", val);
        } else {
          this.setDataValue("interests", "");
          console.warn("Unexpected data type for interests:", val);
        }
      },
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Export the User model to be used in other parts of the application
module.exports = User;
