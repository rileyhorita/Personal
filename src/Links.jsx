import React, { useState } from 'react';
import './Links.css'

const Links = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="links">
      <button class="lbutton" onClick={toggleMenu}>Links</button>
      {isOpen && (
        <ul className="links-menu">
          <li>
            <a href="https://github.com/rileyhorita" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rileyhorita" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Links;
