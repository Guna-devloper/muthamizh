import React from "react";
import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="contact-details">
          <p>Address: Ground Floor, Plot No.178, Sri Sakthi Nagar, Vadakuthu, Cuddalore, Tamil Nadu-607303</p>
          <p>Phone: 9876543210</p>
          <p>Email: support@muthamizessentials.com</p>
          <div className="map">
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
        </div>

        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" placeholder="Your Name" required />
            </label>
            <label>
              Email:
              <input type="email" placeholder="Your Email" required />
            </label>
            <label>
              Message:
              <textarea placeholder="Your Message" rows="4" required></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
