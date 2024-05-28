import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext for authentication state
import { TextField, Button, Box, Typography } from "@mui/material"; // Import Material-UI components

const Login = () => {
  // State to manage form data
  const [formData, setFormData] = useState({ email: "", password: "" });
  // State to manage error messages
  const [errors, setErrors] = useState({ email: "", password: "" });
  // Get the setUser function from AuthContext
  const { setUser } = useContext(AuthContext);
  // Hook to programmatically navigate to different routes
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user starts typing
  };

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    let valid = true;
    let tempErrors = { email: "", password: "" };

    if (!formData.email) {
      tempErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = "Invalid email format";
      valid = false;
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
      valid = false;
    }

    setErrors(tempErrors);

    if (!valid) return;

    try {
      // Send login request to the server
      const response = await axios.post("/auth/login", formData);
      // Store the JWT token in local storage
      localStorage.setItem("token", response.data.token);
      // Set the current user in context
      setUser(response.data.user);
      // Navigate to the home page
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
      // Optionally, you can set an error state for server errors
    }
  };

  return (
    <Box sx={{ width: 300, mx: "auto", mt: 5 }}>
      {/* Center the login form */}
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Handle form submission */}
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange} // Handle input changes
          margin="normal"
          // required disable 'required' so we can use our own regex/validations
          error={Boolean(errors.email)} // Display error state if there's an error
          helperText={errors.email} // Show error message
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange} // Handle input changes
          margin="normal"
          // required disable 'required' so we can use our own regex/validations
          error={Boolean(errors.password)} // Display error state if there's an error
          helperText={errors.password} // Show error message
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
        <Link to="/register">Don't have an account? Sign up here!</Link>
        {/* Link to the registration page */}
      </form>
    </Box>
  );
};

export default Login;
