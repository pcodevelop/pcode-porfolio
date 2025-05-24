import React from 'react';
import './GetStarted.css';
import { motion } from 'framer-motion';
import { BsWhatsapp } from 'react-icons/bs';
import { FaRegHandshake } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';

const GetStarted = () => {
  const steps = [
    {
      icon: <BsWhatsapp />,
      title: "Reach Out",
      description: "Start with a simple WhatsApp message. Tell us about your project idea or business needs.",
      action: "Message us on WhatsApp",
      link: "https://wa.me/your-number-here"
    },
    {
      icon: <HiOutlineLightBulb />,
      title: "Share Your Idea",
      description: "Tell us about your vision, requirements, and goals. We'll help refine and enhance your concept.",
      action: "Share your vision"
    },
    {
      icon: <FaRegHandshake />,
      title: "Let's Build Together",
      description: "Once aligned on the vision, we'll create a tailored plan and begin bringing your ideas to life.",
      action: "Start your project"
    }
  ];

  return (
    <section className="get-started" id="Get-started">
      <div className="get-started-content">
        <motion.div 
          className="get-started-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Build Something Amazing?</h2>
          <p className="subtitle">The projects above represent just a fraction of our public portfolio. Let's discuss how we can help bring your unique vision to life.</p>
        </motion.div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="step-icon">
                {step.icon}
                <div className="step-number">{index + 1}</div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index === 0 && (
                <a href={step.link} className="step-action whatsapp-action" target="_blank" rel="noopener noreferrer">
                  <BsWhatsapp /> {step.action}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
