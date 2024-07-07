import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="contact-info">
          <a href="mailto:info@ecoscrub.co.ke">Email: info@ecoscrub.co.ke</a>
          <a href="tel:0726749849">Phone: 0726749849</a>
          <span>Available: Mon-Sun 8:00am-10:00pm</span>
        </div>
      </div>
      <div className="logo-nav-container">
        <div className="logo">
          <img src="../../public/logo1.jpg" alt="Company Logo" />
          <span className="company-name">ECOSCRUB</span>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li className="dropdown">
              <a href="#commercial">Commercial</a>
              <div className="dropdown-content">
                <a href="#commercial-roof-cleaning">Commercial Roof Cleaning</a>
                <a href="#car-park-cleaning">Car Park Cleaning</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#residential">Residential</a>
              <div className="dropdown-content">
                <a href="#roof-cleaning">Roof Cleaning</a>
                <a href="#drain-unblocking">Drain Unblocking</a>
              </div>
            </li>
            <li><a href="#commercial-bin-cleaning">Commercial Bin Cleaning</a></li>
            <li className="dropdown">
              <a href="#about">About</a>
              <div className="dropdown-content">
                <a href="#our-story">Our Story</a>
                <a href="#contact">Contact Us</a>
              </div>
            </li>
            <li><a href="tel:0726749849" className="call">Call 0726749849</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
