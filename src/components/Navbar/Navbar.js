import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-brand">
          <h1>Pcode</h1>
        </div>

        <div className="nav-right">
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  onClick={toggleMenu}
                  className={activeSection === item.href.slice(1) ? 'active' : ''}
                >
                  {item.text}
                  {activeSection === item.href.slice(1) && (
                    <div className="active-indicator" />
                  )}
                </a>
              </li>
            ))}
            <li className="mobile-only">
              <a href="#Get-started" className="get-started-btn" onClick={toggleMenu}>
                Get Started
              </a>
            </li>
          </ul>

          <div className="desktop-only">
            <a href="#Get-started" className="get-started-btn">
              Get Started
            </a>
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
