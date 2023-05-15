import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import RegistrationForm from './Components/RegistrationForm';
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <RegistrationForm />
        <Routes>
          {/* <Route path="/register" element={<RegistrationForm />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;