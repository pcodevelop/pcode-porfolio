import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal, Box } from '@mui/material';
import { FaGlobe, FaMobile, FaDesktop, FaTimes, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = {
    websites: [
      {
        title: 'Modern E-commerce Platform',
        description: 'A full-featured e-commerce website built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and secure payments.',
        link: 'https://example.com/ecommerce',
        image: 'https://via.placeholder.com/400x300?text=E-commerce',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
      },
      {
        title: 'Portfolio Website',
        description: 'A responsive portfolio website showcasing creative work and projects. Built with modern web technologies and animations.',
        link: 'https://example.com/portfolio',
        image: 'https://via.placeholder.com/400x300?text=Portfolio',
        technologies: ['React', 'Framer Motion', 'CSS3']
      },
      {
        title: 'Real Estate Platform',
        description: 'A comprehensive real estate website with property listings, search functionality, and virtual tours.',
        link: 'https://example.com/realestate',
        image: 'https://via.placeholder.com/400x300?text=Real+Estate',
        technologies: ['Next.js', 'PostgreSQL', 'Google Maps API']
      }
    ],
    software: [
      {
        title: 'Inventory Management System',
        description: 'Desktop application for managing inventory, tracking sales, and generating reports. Built for small to medium-sized businesses.',
        image: 'https://via.placeholder.com/400x300?text=Inventory',
        technologies: ['Python', 'Qt', 'SQLite']
      },
      {
        title: 'Video Editor Pro',
        description: 'Professional video editing software with advanced features like timeline editing, effects, and format conversion.',
        image: 'https://via.placeholder.com/400x300?text=Video+Editor',
        technologies: ['C++', 'FFmpeg', 'OpenGL']
      },
      {
        title: 'Data Analysis Tool',
        description: 'Desktop software for analyzing and visualizing large datasets with custom reporting features.',
        image: 'https://via.placeholder.com/400x300?text=Data+Analysis',
        technologies: ['Python', 'Pandas', 'Matplotlib']
      }
    ],
    apps: [
      {
        title: 'Fitness Tracker Pro',
        description: 'Mobile app for tracking workouts, nutrition, and health metrics. Includes social features and achievement system.',
        image: 'https://via.placeholder.com/400x300?text=Fitness',
        technologies: ['React Native', 'Firebase', 'HealthKit']
      },
      {
        title: 'Budget Master',
        description: 'Personal finance management app with expense tracking, budgeting, and financial insights.',
        image: 'https://via.placeholder.com/400x300?text=Budget',
        technologies: ['Flutter', 'Firebase', 'Charts']
      },
      {
        title: 'Recipe Finder',
        description: 'Mobile app for discovering and saving recipes, with meal planning and shopping list features.',
        image: 'https://via.placeholder.com/400x300?text=Recipe',
        technologies: ['React Native', 'Redux', 'API Integration']
      }
    ]
  };

  const ProjectCard = ({ project, category }) => (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <button
            className="view-details"
            onClick={() => setSelectedProject(project)}
          >
            View Details
          </button>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="visit-link">
              Visit Website
            </a>
          )}
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description.split('.')[0]}.</p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="technology-tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>My Projects</h2>
        
        <div className="project-categories">
          <div className="category-section">
            <div className="category-header">
              <FaGlobe className="category-icon" />
              <h3>Websites</h3>
            </div>
            <div className="project-grid">
              {projects.websites.map((project, index) => (
                <ProjectCard 
                  key={`website-${index}`} 
                  project={project} 
                  category="websites" 
                />
              ))}
            </div>
          </div>

          <div className="category-section">
            <div className="category-header">
              <FaDesktop className="category-icon" />
              <h3>Software</h3>
            </div>
            <div className="project-grid">
              {projects.software.map((project, index) => (
                <ProjectCard 
                  key={`software-${index}`} 
                  project={project} 
                  category="software" 
                />
              ))}
            </div>
          </div>

          <div className="category-section">
            <div className="category-header">
              <FaMobile className="category-icon" />
              <h3>Mobile Apps</h3>
            </div>
            <div className="project-grid">
              {projects.apps.map((project, index) => (
                <ProjectCard 
                  key={`app-${index}`} 
                  project={project} 
                  category="apps" 
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <Modal
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        aria-labelledby="project-modal"
      >
        <Box className="project-modal">
          {selectedProject && (
            <>
              <button 
                className="modal-close" 
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>
              
              <img src={selectedProject.image} alt={selectedProject.title} />
              
              <div className="modal-content">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
                
                <div className="modal-technologies">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">{tech}</span>
                  ))}
                </div>

                {selectedProject.link && (
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-visit-btn"
                  >
                    <FaGlobe /> Visit Website
                  </a>
                )}
              </div>
            </>
          )}
        </Box>
      </Modal>
    </section>
  );
};

export default Projects;
