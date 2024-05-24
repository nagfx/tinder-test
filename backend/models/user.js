const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
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
      const rawValue = this.getDataValue('interests');
      return rawValue ? rawValue.split(',') : [];
    },
    set(val) {
      this.setDataValue('interests', val.join(','));
    },
  },
}, {
  timestamps: true,
});

module.exports = User;
