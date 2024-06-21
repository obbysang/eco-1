// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-intro">
        <p>About Us.</p>
        <p>Our previous clients have shared their experiences with our services. Take a look.</p>
      </div>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>"Amazing service! My house has never been this clean."</p>
          <h3>Robert Kamau</h3>
        </div>
        <div className="testimonial-card">
          <p>"Professional and efficient. Highly recommend!"</p>
          <h3>Chris Muriuki</h3>
        </div>
        <div className="testimonial-card">
          <p>"Great attention to detail. Will definitely use again."</p>
          <h3>Davis Kipchirchir</h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
