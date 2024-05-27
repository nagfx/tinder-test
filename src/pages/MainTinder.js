import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../tindernav.css';
import Recommendations from '../components/Recommendations';

const MainTinder = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/auth/user', {
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

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="color-Tinder">
      <Recommendations currentUser={currentUser} users={users} /> {/* Pass users as a prop */}
    </div>
  );
};

export default MainTinder;
