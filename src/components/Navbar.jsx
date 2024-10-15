import React, { useState, useEffect } from 'react';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import SourceIcon from '@mui/icons-material/Source';
import PhoneIcon from '@mui/icons-material/Phone';
import '../styles/Navbar.css';

const Navbar = ({ activeSection }) => {
  const [showNavbar, setShowNavbar] = useState(true); 
  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [isScrolled, setIsScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setShowNavbar(currentScrollPos < prevScrollPos || currentScrollPos === 0);

      setIsScrolled(currentScrollPos > 0);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <nav
        className={`hidden tablet:flex fixed top-0 w-full items-center justify-center bg-transparent mx-auto transition-transform ease-in-out z-50 
        ${showNavbar ? 'duration-300 translate-y-0' : 'duration-300 -translate-y-full'} ${isScrolled ? 'border-b' : ''}`}    
      >

        <div className={`flex flex-row items-center justify-center max-w-7xl w-full backdrop-blur-lg bg-blue-50 bg-opacity-80 ${
          isScrolled ? 'py-4 px-5' : 'py-6 px-5'}`}
        >

          <div className="text-lg font-montserratBold fade-down">
            <a href="#home">@YureyVirtudazo</a>
          </div>

          <div className="flex-end ml-auto space-x-3 font-montserratBold fade-nav">          
            <a
              href="#home"
              className={`hover:text-sky-500 underline-animation p-2 ${
                activeSection === 'home' ? 'text-sky-500 active' : ''
              }`}
            >
              Home
            </a>

            <a
              href="#about"
              className={`hover:text-sky-500 underline-animation p-2 ${
                activeSection === 'about' ? 'text-sky-500 active' : ''
              }`}
            >
              About
            </a>

            <a
              href="#education"
              className={`hover:text-sky-500 underline-animation p-2 ${
                activeSection === 'education' ? 'text-sky-500 active' : ''
              }`}
            >
              Education
            </a>

            <a
              href="#projects"
              className={`hover:text-sky-500 underline-animation p-2 ${
                activeSection === 'projects' ? 'text-sky-500 active' : ''
              }`}
            >
              Projects
            </a>
            
            <a
              href="#contact"
              className={`hover:text-sky-500 underline-animation p-2 ${
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
    
      <nav className={`tablet:hidden flex fixed top-0 w-full items-center justify-center mx-auto transition-transform ease-in-out z-50 
        ${showNavbar ? 'duration-100 translate-y-0' : 'duration-100 -translate-y-full'}`}>

        <div className="bg-blue-50 flex flex-col h-full w-full p-2 fade-down border-b-4">

          <div className="flex flex-row items-center justify-center w-full text-black">

            <a href='#home' 
              className={`flex-1 flex justify-center underline-animation p-1 ${
                activeSection === 'home' ? 'text-sky-500 active' : ''
              }`}>
              <HomeIcon style={{ fontSize: '35px' }} />
            </a >

            <a href="#about" 
              className={`flex-1 flex justify-center underline-animation p-1 ${
                activeSection === 'about' ? 'text-sky-500 active' : ''
              }`}>
              <AccountCircleIcon style={{ fontSize: '35px' }} />
            </a>

            <a href="#education" 
              className={`flex-1 flex justify-center underline-animation p-1 ${
                activeSection === 'education' ? 'text-sky-500 active' : ''
              }`}>
              <SchoolRoundedIcon style={{ fontSize: '35px' }} />
            </a>

            <a href="#projects" 
              className={`flex-1 flex justify-center underline-animation p-1 ${
                activeSection === 'projects' ? 'text-sky-500 active' : ''
              }`}>
              <SourceIcon style={{ fontSize: '35px' }} />
            </a>

            <a href="#contact" 
              className={`flex-1 flex justify-center underline-animation p-1 ${
                activeSection === 'contact' ? 'text-sky-500 active' : ''
              }`}>
              <PhoneIcon style={{ fontSize: '35px' }} />
            </a>

            <button className="flex-1 flex justify-center p-1">
              <Brightness6Icon className="text-slate-900" style={{ fontSize: '35px' }} />
            </button> 
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
