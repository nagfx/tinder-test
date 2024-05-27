import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";

const Register = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    location: "",
    university: "",
    interests: "",
  });
  // State to manage error messages
  const [error, setError] = useState("");
  // Hook to programmatically navigate to different routes
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Format the data for the API request
      const formattedData = {
        ...formData,
        interests: formData.interests
          .split(",")
          .map((interest) => interest.trim()),
      };
      // Send registration request to the server
      await axios.post("/auth/register", formattedData);
      // Navigate to the login page upon successful registration
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <Box sx={{ width: 300, mx: "auto", mt: 5 }}>
      {" "}
      {/* Center the registration form */}
      <Typography variant="h4" gutterBottom>
        {" "}
        {/* Display a heading */}
        Register
      </Typography>
      {error /* Display error message if there's an error */ && (
        <Typography variant="body2" color="error" gutterBottom>
          {error}
        </Typography>
      )}
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Handle form submission */}
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange} // Handle input changes
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange} // Handle input changes
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange} // Handle input changes
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Re-enter Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange} // Handle input changes
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange} // Handle input changes
          margin="normal"
        />
        <TextField
          fullWidth
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange} // Handle input changes
          margin="normal"
        />
        <TextField
          fullWidth
          label="University"
          name="university"
          value={formData.university}
          onChange={handleChange} // Handle input changes
          margin="normal"
        />
        <TextField
          fullWidth
          label="Interests (comma separated)"
          name="interests"
          value={formData.interests}
          onChange={handleChange} // Handle input changes
          margin="normal"
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;
