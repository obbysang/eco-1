// src/App.js
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Aboutus from './Aboutus';
import Reviews from './Reviews'
import Services from './Services';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Quote from './quote';

function Homepage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Aboutus/>
      <Reviews/>
      <Services />
      <Testimonials />
      <Quote/>
      <Footer />
    </div>
  );
}

export default Homepage;
