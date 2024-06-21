// src/AboutUs.js
import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="about-us">
      <div className="about-image">
        <img src="../../public/aboutus.PNG" alt="About Us" />
      </div>
      <div className="about-content">
        <h1>About Us</h1>
        <h2>Trust us for dust-free sandblasting and professional service.</h2>
        <p>
          We are skilled in dustless sandblasting, offering top-notch cleaning for driveways, facades, and stripping car paints. Our team of experts is always prepared to provide eco-friendly solutions tailored to your needs.
        </p>
        <a href="#" className="explore-button">Explore More</a>
      </div>
    </div>
  );
};

export default Aboutus;
