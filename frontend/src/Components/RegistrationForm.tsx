import React, { useState } from 'react';
import api from '../api';
import Cookies from 'js-cookie';
// import { useHistory } from 'react-router-dom';
// Defining interface for Registration Data
interface RegistrationData {
  email: string;
  username: string;
  password: string;
}

// RegistrationForm component
const RegistrationForm = () => {
  // State for registration data
  const [registrationData, setRegistrationData] = useState<RegistrationData>({ email: '', username: '', password: '' });

  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationData({ ...registrationData, [event.target.name]: event.target.value });
  };

  // Function to handle registration
  const handleRegistration = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Making API call to register the user
      const response = await api.post('/auth/local/register', registrationData);
      console.log(response.data);

      // Storing user data in local storage
      localStorage.setItem('username', response.data.user.username);
      localStorage.setItem('email', response.data.user.email);
      localStorage.setItem('id', response.data.user.id.toString());

      // Storing JWT token as an HttpOnly cookie
      Cookies.set('token', response.data.jwt, { expires: 7, secure: true, sameSite: 'strict', httpOnly: true });
      
      console.log("Dashboard");
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  // Rendering the RegistrationForm
  return (
    <form onSubmit={handleRegistration}>
      <input type="email" name="email" onChange={handleInputChange} value=      {registrationData.email} placeholder="Email" />
      <input type="text" name="username" onChange={handleInputChange} value={registrationData.username} placeholder="Username" />
      <input type="password" name="password" onChange={handleInputChange} value={registrationData.password} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

