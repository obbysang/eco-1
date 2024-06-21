// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="statement">
            <p>Ecoscrub Cleaning Service</p>
            <p>Dustless Sand-blasting</p>
          </div>
          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="contact-info">
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:info@ecoscrub.co.ke">info@ecoscrub.co.ke</a></p>
            <p>Phone: <a href="tel:0726749849">0726749849</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Ecoscrub Cleaning Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
