import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Define the PrivateRoute component
const PrivateRoute = ({ children }) => {
  // Get the current user and loading state from AuthContext
  const { user, loading } = useContext(AuthContext);

  // If the authentication state is still loading, display a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If the user is authenticated, render the children components
  // Otherwise, navigate to the login page
  return user ? children : <Navigate to="/login" />;
};

// Export the PrivateRoute component for use in other parts of the application
export default PrivateRoute;
