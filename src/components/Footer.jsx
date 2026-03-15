import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <a href="#home" className="footer-logo">
            Portfolio<span>.</span>
          </a>
          <p className="footer-text">
            Designed and built with passion. Bringing ideas to life through code.
          </p>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Xyrylle Claire Matiga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
