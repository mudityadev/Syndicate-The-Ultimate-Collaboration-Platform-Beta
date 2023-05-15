import React, { useState } from 'react';
import api from '../api';
import Cookies from 'js-cookie';

interface LoginData {
  identifier: string;
  password: string;
}

const Navbar = () => {
  const [loginData, setLoginData] = useState<LoginData>({ identifier: '', password: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.post('/auth/local', loginData);
      console.log(response.data);

        // Save user data in local storage
        localStorage.setItem('username', response.data.user.username);
        localStorage.setItem('email', response.data.user.email);
        localStorage.setItem('id', response.data.user.id.toString());
    
        // Save JWT token as an HttpOnly cookie
        Cookies.set('token', response.data.jwt, { expires: 7, secure: true, sameSite: 'strict', httpOnly: true });
        
        console.log("login")
      // Save JWT and user data, and redirect to the protected area of your app
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <nav>
      <div>Logo</div>
      <form onSubmit={handleLogin}>
        <input type="text" name="identifier" onChange={handleInputChange} value={loginData.identifier} placeholder="identifier" />
        <input type="password" name="password" onChange={handleInputChange} value={loginData.password} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </nav>
  );
};




export default Navbar;
