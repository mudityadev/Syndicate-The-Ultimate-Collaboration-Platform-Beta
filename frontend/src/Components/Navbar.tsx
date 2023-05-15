// Importing required dependencies
import React, { useState } from 'react';
import api from '../Utils/api';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


// Defining interface for Login Data
interface LoginData {
  identifier: string;
  password: string;
}

// Navbar component
const Navbar = () => {
  const navigate = useNavigate();

  // State for login data
  const [loginData, setLoginData] = useState<LoginData>({ identifier: '', password: '' });

  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  // Function to handle login
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Making API call to authenticate the user
      const response = await api.post('/auth/local', loginData);
      console.log(response.data);
      

      // Storing user data in local storage
      localStorage.setItem('username', response.data.user.username);
      localStorage.setItem('email', response.data.user.email);
      localStorage.setItem('id', response.data.user.id.toString());

      // Storing JWT token as an HttpOnly cookie
      Cookies.set('token', response.data.jwt, { expires: 7, secure: true, sameSite: 'strict', httpOnly: true });
      console.log("login");
      navigate('/dashboard');

    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Rendering the Navbar
  return (
    <nav>
      <div>jfdas</div>
      <form onSubmit={handleLogin}>
        <input type="text" name="identifier" onChange={handleInputChange} value={loginData.identifier} placeholder="identifier" />
        <input type="password" name="password" onChange={handleInputChange} value={loginData.password} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </nav>
  );
};

export default Navbar;
