import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const whatsappNumber = '+1234567890'; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>your.email@example.com</p>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Location</h3>
                <p>Your City, Country</p>
              </div>
            </div>
          </div>
          <div className="contact-cta">
            <h3>Let's Connect!</h3>
            <p>Feel free to reach out for collaborations or just a friendly chat.</p>
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="whatsapp-icon" />
              Chat on WhatsApp
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
