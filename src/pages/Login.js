import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Link } from "@mui/material";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    let valid = true;
    let tempErrors = { email: "", password: "" };

    if (!formData.email) {
      tempErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
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
      // const response = await axios.post("/auth/login", formData);
      // For testing purposes, mock response
      const response = { data: { token: "mockToken", user: {} } };
      // Store the JWT token in local storage
      localStorage.setItem("token", response.data.token);
      // Navigate to the home page
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <Box sx={{ width: 300, mx: "auto", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          // don't use 'required' it will conflict with the regexes i added
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          // don't use 'required' it will conflict with the regexes i added
          error={Boolean(errors.password)}
          helperText={errors.password}
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
      </form>
    </Box>
  );
};

export default Login;
