require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const { initModels } = require('./models');
const authRoutes = require('./routes/auth');
const path = require('path');
const cors = require('cors');
const userRoutes = require('./routes/user');


const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded data and enabling CORS for all routes
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize passport for authentication
app.use(passport.initialize());
app.use(passport.session());

// Auth routes
app.use('/auth', authRoutes);

// Route to fetch users
app.use('/api', userRoutes);

// Serve the React app
app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Start the server and initialize the database models
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await initModels();
});
