// src/components/ContactUs.js
import React from 'react';
import './quote.css';

const Quote = () => {
  return (
    <section className="contact-us">
      <div className="contact-image">
        <img src="../../public/imagepage.PNG" alt="Contact Us" />
      </div>
      <div className="contact-content">
        <h1>Contact Us</h1>
        <a href="tel:0726749849" className="cta-button">Get a Quote</a>
      </div>
    </section>
  );
};

export default Quote;
