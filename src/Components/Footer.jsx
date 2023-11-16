import React from 'react';
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="contained">
          <div className="col-lg-12">
            <p>&copy; {new Date().getFullYear()} Riley Horita</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;