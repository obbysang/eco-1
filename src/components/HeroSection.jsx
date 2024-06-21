import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-content">
          <h1>Welcome to Cleaning Company</h1>
          <p>Your trusted partner for a sparkling clean home and office</p>
          <p className="welcome-message">We're delighted to have you here!</p>
          <a href="tel:0726749849" className="cta-button">Contact Us Now!</a>
        </div>
        <div className="image-content">
          <img src="../../public/herosection.PNG" alt="Cleaning" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
