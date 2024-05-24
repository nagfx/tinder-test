// scripts/syncDatabase.js
const { initModels } = require('../models');

const syncDatabase = async () => {
  await initModels();
  process.exit(0);
};

syncDatabase();
