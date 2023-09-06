// src/App.js

import React from 'react';
import './App.css';
import CustomNavbar from './dashboard'; // Import your custom Navbar component

function App() {
  return (
    <div className="App">
      <CustomNavbar /> {/* Use the CustomNavbar component here */}
      {/* Your content goes here */}
    </div>
  );
}

export default App;
