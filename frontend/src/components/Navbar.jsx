//src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Mental Health Tracker</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/survey">Survey</Link></li>
        <li><Link to="/test">Test</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/mood-tracker">Mood Tracker</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;


