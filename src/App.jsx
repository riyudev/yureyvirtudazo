import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home'); // Set 'home' as default active section

  useEffect(() => {
    // Function to handle scroll and update active section
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 400; // Adjusted offset to account for navbar height
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection || 'home'); // Default to 'home' if no section is in view
    };

    // Handle scroll on page load to set the correct active section
    handleScroll();

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the "Home" section if the page is loaded or refreshed
  useEffect(() => {
    if (window.location.hash === '' || window.location.hash === '#home') {
      window.scrollTo({
        top: document.getElementById('home').offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-50">
      <Navbar activeSection={activeSection} />
      <div className="max-w-7xl w-full space-y-10 px-5">
        <Home />
        <About />
        <Education />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
