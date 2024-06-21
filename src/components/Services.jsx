import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-content">
        <div className="service-description">
          <h3>About Our Cleaning Services</h3>
          <p>We provide top-notch home and office cleaning services to keep your spaces spotless and inviting. Our team of professionals is dedicated to delivering high-quality cleaning solutions tailored to your specific needs. Trust us to make your environment clean and comfortable.</p>
        </div>
        <div className="service-images">
          <div className="image-wrapper">
            <img src="../../public/homecleaning.PNG" alt="House Cleaning" />
            <h4>House Cleaning</h4>
            <p>Maintaining a clean and healthy home is a crucial aspect of a healthy life. Allow us to take care of your cleaning needs, leaving you free to focus on other essential tasks.</p>
          </div>
          <div className="image-wrapper">
            <img src="../../public/windowcleaning.PNG" alt="Window Cleaning" />
            <h4>Window Cleaning</h4>
            <p>Our team guarantees sparkling clean windows to brighten up your home. Leave the dirt to us.</p>
          </div>
          <div className="image-wrapper">
            <img src="../../public/fascadecleaning.PNG" alt="Facade Cleaning" />
            <h4>Facade Cleaning</h4>
            <p>Your building deserves to shine with the brilliance it exudes. Embrace our cleaning services and let us bring back its true radiance. We are here to help you uphold your buildings grandeur.</p>
          </div>
          <div className="image-wrapper">
            <img src="../../public/drivewaycleaning.PNG" alt="Driveway Cleaning" />
            <h4>Driveway Cleaning</h4>
            <p>Over time, driveways tend to accumulate algae and dirt, resulting in a loss of beauty. Allow us to professionally clean it for you.</p>
          </div>
          <div className="image-wrapper">
            <img src="../../public/roofcleaning.PNG" alt="Roof Cleaning" />
            <h4>Roof Cleaning</h4>
            <p> Our professional roof cleaning services remove moss, algae, and debris to extend the life of your roof and improve its appearance.</p>
          </div>
          <div className="image-wrapper">
            <img src="../../public/carpetcleaning.PNG" alt="Carpet Cleaning" />
            <h4>Carpet Cleaning</h4>
            <p>Carpet Cleaning: We offer deep carpet cleaning services to remove dirt, stains, and allergens, leaving your carpets fresh and clean.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
