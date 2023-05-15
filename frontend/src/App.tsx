import React from 'react';


import './App.css';
import Navbar from './Components/Navbar';
import RegistrationForm from './Components/RegistrationForm';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="left-side">
          {/* Add any content for the left side */}
        </div>
        <div className="right-side">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default App;
