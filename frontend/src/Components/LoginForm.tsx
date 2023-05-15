import React, { useState } from 'react';
// Defining interface for Login Data
interface LoginData {
  identifier: string;
  password: string;
}

// LoginForm component
const LoginForm = () => {
  // State for login data
  const [loginData, setLoginData] = useState<LoginData>({ identifier: '', password: '' });

  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  // Function to handle login
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Call to Strapi backend will go here.
  };

  // Rendering the LoginForm
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

export default LoginForm;
