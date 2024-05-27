import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../tindernav.css';
import Navbar from '../components/NavBar';
import Recommendations from '../components/Recommendations';

const MainTinder = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
        const response = await axios.get('http://localhost:3001/auth/user', { // Ensure the correct port is used
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCurrentUser(response.data);
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };

    fetchCurrentUser();
  }, []);

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="color-Tinder">
      <Recommendations currentUser={currentUser} />
    </div>
  );
};

export default MainTinder;
