import React from 'react';
import './Navbar.css';
import logo from '../../assets/Sample Logo.png'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#community">Community</a>
        <a href="#support">Support</a>
      </div>
      <div className="navbar-auth">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </nav>
  );
};

export default NavBar;
