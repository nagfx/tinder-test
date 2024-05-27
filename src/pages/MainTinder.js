import React, { useState, useEffect } from "react";
import axios from "axios";
import "../tindernav.css"; // Import custom CSS for styling
import Recommendations from "../components/Recommendations"; // Import Recommendations component

const MainTinder = () => {
  const [users, setUsers] = useState([]); // State to store the list of users
  const [currentUser, setCurrentUser] = useState(null); // State to store the current logged-in user

  // useEffect to fetch the current user on component mount
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem("token"); // Get the token from local storage
        const response = await axios.get("http://localhost:3001/auth/user", {
          headers: {
            Authorization: `Bearer ${token}`, // Set the authorization header with the token
          },
        });
        setCurrentUser(response.data); // Set the current user state with the fetched data
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser(); // Call the fetchCurrentUser function
  }, []); // Empty dependency array to run this effect only once on mount

  // useEffect to fetch the list of users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/users");
        setUsers(response.data); // Set the users state with the fetched data
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers(); // Call the fetchUsers function
  }, []); // Empty dependency array to run this effect only once on mount

  // If the current user is not loaded yet, show a loading message
  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="color-Tinder">
      {" "}
      {/* Apply custom CSS class for background color */}
      {/* Pass the current user and list of users as props to the Recommendations component */}
      <Recommendations currentUser={currentUser} users={users} />
    </div>
  );
};

export default MainTinder;
