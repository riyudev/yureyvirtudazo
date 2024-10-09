import React, { useState, useEffect } from 'react';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import '../styles/Navbar.css';

const Navbar = ({ activeSection }) => {
  const [showNavbar, setShowNavbar] = useState(true); // Controls navbar visibility on scroll
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Stores the previous scroll position
  const [isScrolled, setIsScrolled] = useState(false); // Tracks whether the user has scrolled down

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Show the navbar when scrolling up and hide when scrolling down
      setShowNavbar(currentScrollPos < prevScrollPos || currentScrollPos === 0);

      // Add border when scrolled and remove when at the top
      setIsScrolled(currentScrollPos > 0);

      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  

  return (
    <nav
      className={`fixed top-0 w-full flex items-center justify-center bg-transparent mx-auto transition-transform ease-in-out z-50 
      ${showNavbar ? 'duration-300 translate-y-0' : 'duration-300 -translate-y-full'} ${isScrolled ? 'border-b' : ''}`}    
    >
      <div className={`flex flex-row items-center justify-center max-w-7xl w-full backdrop-blur-lg bg-blue-50 bg-opacity-80 ${
        isScrolled ? 'py-4 px-5' : 'py-6 px-5'}`}>
        <div className="text-lg font-montserratBold fade-down">
          <a href="#home">@YureyVirtudazo</a>
        </div>

        <div className="flex-end ml-auto space-x-3 font-montserratBold fade-nav">
          <a
            href="#home"
            className={`text-black-500 hover:text-sky-500 underline-animation p-2 ${
              activeSection === 'home' ? 'text-sky-500 active' : ''
            }`}
          >
            Home
          </a>

          <a
            href="#about"
            className={`text-black-500 hover:text-sky-500 underline-animation p-2 ${
              activeSection === 'about' ? 'text-sky-500 active' : ''
            }`}
          >
            About
          </a>

          <a
            href="#education"
            className={`text-black-500 hover:text-sky-500 underline-animation p-2 ${
              activeSection === 'education' ? 'text-sky-500 active' : ''
            }`}
          >
            Education
          </a>

          <a
            href="#projects"
            className={`text-black-500 hover:text-sky-500 underline-animation p-2 ${
              activeSection === 'projects' ? 'text-sky-500 active' : ''
            }`}
          >
            Projects
          </a>
          
          <a
            href="#contact"
            className={`text-black-500 hover:text-sky-500 underline-animation p-2 ${
              activeSection === 'contact' ? 'text-sky-500 active' : ''
            }`}
          >
            Contact
          </a>
        </div>

        <button className="ml-3 fade-nav">
          <Brightness6Icon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
