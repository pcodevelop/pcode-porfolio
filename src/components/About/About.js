import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a passionate Full Stack Developer with expertise in building modern web applications,
              software solutions, and mobile apps. My journey in technology has equipped me with
              a diverse skill set and a problem-solving mindset.
            </p>
            <p>
              I specialize in creating user-friendly, efficient, and scalable solutions that help
              businesses and individuals achieve their goals. My approach combines technical
              excellence with creative design thinking.
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <ul>
                  <li>React.js</li>
                  <li>JavaScript</li>
                  <li>HTML5/CSS3</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Databases</li>
                  <li>APIs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
