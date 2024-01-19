import React from 'react';
import './Navbar.css';
import Links from './Links';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <div className="navbar-title">
        <a href="/about">≽^•⩊•^≼ ♡</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/about">About</a></li>
        <li><Link to={`home`}>Home</Link></li>
        <li><a href="/pp">Portfolio</a></li>
        <Links /> 
      </ul>
    </div>
  );
}

export default Navbar;
