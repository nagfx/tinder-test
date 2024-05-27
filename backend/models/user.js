const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    university: {
      type: DataTypes.STRING,
    },
    interests: {
      type: DataTypes.STRING,
      get() {
        const rawValue = this.getDataValue("interests");
        return rawValue ? rawValue.split(",") : [];
      },
      set(val) {
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
    timestamps: true,
  }
);

module.exports = User;
