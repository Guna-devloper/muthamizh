import React from "react";
import "./Contact.css";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>
        <strong>Address:</strong> Ground Floor, Plot No.178, Sri Sakthi Nagar,
        Bharath Gas Godown, Vadakuthu, Cuddalore, Tamilnadu-607303
      </p>
      <p>
        <strong>Phone:</strong> +91 9600649083
      </p>
      <p>
        <strong>Email:</strong>muthamizhessentials@gmail.com
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
