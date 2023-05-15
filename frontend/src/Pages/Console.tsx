import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Console = () => {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate('/');
      return;
    }
  }, [username]);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    navigate('/');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {username}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Console;
