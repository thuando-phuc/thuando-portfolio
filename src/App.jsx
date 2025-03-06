import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Pages
import Home from './pages/Home';
import Experience from './pages/Experience';
import Awards from './pages/Awards';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen">
        {/* Navigation */}
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'}`}>
          <div className="container mx-auto px-4 flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-secondary"
            >
              <NavLink to="/">Portfolio</NavLink>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <NavLink to="./thuando-portfolio/" className="nav-link">Home</NavLink>
              <NavLink to="/experience" className="nav-link">Experience</NavLink>
              <NavLink to="/awards" className="nav-link">Awards & Activities</NavLink>
              <NavLink to="/projects" className="nav-link">Projects</NavLink>
              <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-light focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'visible' : 'hidden'} md:hidden`}>
          <div className="flex flex-col space-y-6 text-xl">
            <NavLink to="./thuando-portfolio/" className="nav-link" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/experience" className="nav-link" onClick={closeMenu}>Experience</NavLink>
            <NavLink to="/awards" className="nav-link" onClick={closeMenu}>Awards & Activities</NavLink>
            <NavLink to="/projects" className="nav-link" onClick={closeMenu}>Projects</NavLink>
            <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
          </div>
          <div className="mt-12 flex space-x-6">
            <a href="https://github.com/justnas03" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/thuandodev" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:thuando.contact@gmail.com" className="social-icon">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-dark py-8 mt-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-tertiary">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <a href="https://github.com/justnas03" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/thuandodev" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaLinkedin size={20} />
                </a>
                <a href="mailto:thuando.contact@gmail.com" className="social-icon">
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;