import React, { useState } from 'react';

interface LoginData {
  identifier: string;
  password: string;
}

const LoginForm = () => {
  const [loginData, setLoginData] = useState<LoginData>({ identifier: '', password: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Call to Strapi backend goes here.
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

export default LoginForm;
