import React, { useState } from 'react';
import api from '../api';
import Cookies from 'js-cookie';
// import { useHistory } from 'react-router-dom';

interface RegistrationData {
  email: string;
  username: string;
  password: string;
}

const RegistrationForm = () => {
  const [registrationData, setRegistrationData] = useState<RegistrationData>({ email: '', username: '', password: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationData({ ...registrationData, [event.target.name]: event.target.value });
  };

  const handleRegistration = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.post('/auth/local/register', registrationData);
      console.log(response.data);
      
      // Save user data in local storage
      localStorage.setItem('username', response.data.user.username);
      localStorage.setItem('email', response.data.user.email);
      localStorage.setItem('id', response.data.user.id.toString());
  
      // Save JWT token as an HttpOnly cookie
      Cookies.set('token', response.data.jwt, { expires: 7, secure: true, sameSite: 'strict', httpOnly: true });
      
      console.log("Dashboard")
      // Redirect to the dashboard page
      // history.push('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  

  return (
    <form onSubmit={handleRegistration}>
      <input type="email" name="email" onChange={handleInputChange} value={registrationData.email} placeholder="Email" />
      <input type="text" name="username" onChange={handleInputChange} value={registrationData.username} placeholder="Username" />
      <input type="password" name="password" onChange={handleInputChange} value={registrationData.password} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
