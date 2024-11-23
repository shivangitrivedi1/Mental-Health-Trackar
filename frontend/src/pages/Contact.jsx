// src/pages/Contact.js
// import React from 'react';

// const Contact = () => {
//   return (
//     <div>
//       <h2>Contact Us</h2>
//       <p>If you have any questions or need assistance, please reach out to us.</p>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import '../style/ContactUs.css'; // Import the corresponding CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send the form data (could be an API request)
    setResponseMessage('Thank you for reaching out! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or need assistance, please reach out to us. We'd love to hear from you!</p>

      <div className="contact-form">
        <h3>Send us a message</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>

      <div className="contact-info">
        <h3>Our Location</h3>
        <div className="map-container">
          {/* Replace with a real map or link to Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27992159624!2d-74.259865!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDEyJzAxLjAiTiA3NMKwMTQyJzIxLjIiVw!5e0!3m2!1sen!2sus!4v1614567894560!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <h3>Follow Us</h3>
        <div className="social-media-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
