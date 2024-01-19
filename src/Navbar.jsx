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
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/pp'>Portfolio</Link></li>
        <Links /> 
      </ul>
    </div>
  );
}

export default Navbar;
