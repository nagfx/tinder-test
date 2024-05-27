// backend/config/passport.js

// Import required modules
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcryptjs");
const { User } = require("../models");

// Configure the LocalStrategy for user authentication using email and password
passport.use(
  new LocalStrategy(
    { usernameField: "email" }, // Use email instead of username
    async (email, password, done) => {
      try {
        // Find user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
          // If user not found, return error
          return done(null, false, { message: "Incorrect email." });
        }
        // Compare provided password with stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          // If password doesn't match, return error
          return done(null, false, { message: "Incorrect password." });
        }
        // If authentication is successful, return user
        return done(null, user);
      } catch (error) {
        // Handle any errors
        return done(error);
      }
    }
  )
);

// JWT strategy options
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); // Extract JWT from the authorization header as a Bearer token
opts.secretOrKey = process.env.JWT_SECRET; // Use secret key from environment variables

// Configure the JwtStrategy for user authentication using JWT
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      // Find user by ID from JWT payload
      const user = await User.findByPk(jwt_payload.id);
      if (user) {
        // If user is found, return user
        return done(null, user);
      } else {
        // If user is not found, return false
        return done(null, false);
      }
    } catch (error) {
      // Handle any errors
      return done(error, false);
    }
  })
);

// Serialize user to store user ID in session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user to retrieve user details from session using user ID
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// Export configured passport
module.exports = passport;
