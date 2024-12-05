import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>
        Welcome to <strong>Muthamizh Essentials</strong>, your one-stop shop for fresh groceries, premium spices, and
        quality essentials. We are committed to bringing you the best products at affordable prices.
      </p>
      <p>
        Our mission is to provide every customer with a convenient shopping experience and premium-quality products.
      </p>
      <div className="map">
        <h3>Our Location</h3>
        <iframe
          title="Muthamizh Essentials Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.193823261304!2d79.7442!3d11.7221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baad57b4b04e5b9%3A0x4bc19b19e9b3b38!2sSri%20Sakthi%20Nagar%2C%20Vadakuthu!5e0!3m2!1sen!2sin!4v1697548216315!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default About;
