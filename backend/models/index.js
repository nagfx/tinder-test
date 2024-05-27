const User = require('./user');
const sequelize = require('../config/database');

const initModels = async () => {
  try {
    await sequelize.sync(
      // { force: true }
    ); // Use { force: true } only for development to drop and recreate tables, remove if in production 
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Unable to create tables, shutting down...', error);
    process.exit(1);
  }
};

module.exports = { initModels, User };
