import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap around the application and provide authentication state
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to store the current user
  const [loading, setLoading] = useState(true); // State to manage the loading status

  // useEffect to fetch the current user on component mount
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const token = localStorage.getItem("token"); // Get the token from local storage
      if (token) {
        try {
          // Fetch the current user from the server
          const response = await axios.get("/auth/user", {
            headers: {
              Authorization: `Bearer ${token}`, // Set the authorization header with the token
            },
          });
          setUser(response.data); // Set the user state with the fetched data
        } catch (error) {
          console.error("Error fetching current user:", error);
        }
      }
      setLoading(false); // Set loading to false after attempting to fetch the user
    };

    fetchCurrentUser(); // Call the fetchCurrentUser function
  }, []); // Empty dependency array to run this effect only once on mount

  // Function to handle user login
  const login = async (email, password) => {
    try {
      // Send login request to the server
      const response = await axios.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token); // Store the token in local storage
      setUser(response.data.user); // Set the user state with the logged-in user's data
    } catch (error) {
      console.error("Error during login:", error);
      throw error; // Throw the error to be handled by the calling function
    }
  };

  // Function to handle user logout
  const logout = () => {
    localStorage.removeItem("token"); // Remove the token from local storage
    setUser(null); // Clear the user state
  };

  // Provide the authentication context to child components
  return (
    <AuthContext.Provider value={{ user, loading, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export the AuthContext and AuthProvider for use in other parts of the application
export { AuthContext, AuthProvider };
