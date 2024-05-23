const sequelize = require('../config/database');
const User = require('./user');

const initModels = async () => {
  await sequelize.sync({ force: true }); // Use `force: true` to recreate tables on each run
};

module.exports = { initModels, User };
