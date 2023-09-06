import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from './dashboard';
import VideoDetails from './VideoDetails';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/VideoDetails/:id" element={<VideoDetails />} />
        {/* Add more routes as needed */}
      </Routes>
    </React.StrictMode>
  </Router>
);

reportWebVitals();
