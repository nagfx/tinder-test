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
        const response = await axios.get('/auth/currentUser'); // Endpoint to fetch current user data
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
      <Navbar currentUser={currentUser} />
      <Recommendations currentUser={currentUser} />
    </div>
  );
};

export default MainTinder;
