import React, { useState, useEffect } from "react";
import { MdHome, MdDarkMode, MdLightMode } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { PiStackSimpleFill } from "react-icons/pi";
import { GrContact } from "react-icons/gr";
import flag from "../assets/flagph.png";
import "../styles/Navbar.css";

const Navbar = ({ activeSection, toggleDarkMode, darkMode }) => {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <nav
        className={`hidden tablet:flex fixed top-0 w-full items-center justify-center bg-transparent mx-auto transition-transform ease-in-out z-50 
        ${
          showNavbar
            ? "duration-300 translate-y-0"
            : "duration-300 -translate-y-full"
        } ${isScrolled ? "border-b dark:border-slate-800" : ""}`}
      >
        <div
          className={`flex flex-row items-center justify-center max-w-7xl w-full backdrop-blur-lg bg-blue-50 dark:bg-slate-900 bg-opacity-80 dark:bg-opacity-80 ${
            isScrolled ? "py-4 px-5" : "py-6 px-5"
          }`}
        >
          <div className="flex space-x-1 items-center fade-down">
            <h1 className="text-lg text-slate-900 dark:text-sky-50 font-montserratBold">
              <a href="/">@YureyVirtudazo</a>
            </h1>
            <img src={flag} alt="PH" className="size-5" />
          </div>

          <div className="flex-end ml-auto space-x-3 font-montserratBold fade-nav text-slate-900 dark:text-sky-50">
            <a
              href="#home"
              className={`hover:text-sky-500 underline-animation p-2 ${
                activeSection === "home" ? "text-sky-500 active" : ""
              }`}
            >
              Home
            </a>

            <a
              href="#about"
              className={`hover:text-sky-500 underline-animation p-2 ${
                activeSection === "about" ? "text-sky-500 active" : ""
              }`}
            >
              About
            </a>

            <a
              href="#experience"
              className={`hover:text-sky-500 underline-animation p-2 ${
                activeSection === "experience" ? "text-sky-500 active" : ""
              }`}
            >
              Experience
            </a>

            <a
              href="#projects"
              className={`hover:text-sky-500 underline-animation p-2 ${
                activeSection === "projects" ? "text-sky-500 active" : ""
              }`}
            >
              Projects
            </a>

            <a
              href="#contact"
              className={`hover:text-sky-500 underline-animation p-2 ${
                activeSection === "contact" ? "text-sky-500 active" : ""
              }`}
            >
              Contact
            </a>
          </div>

          <button
            onClick={toggleDarkMode}
            className="ml-3 fade-nav text-3xl text-sky-400"
          >
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
      </nav>

      <nav
        className={`tablet:hidden flex fixed top-0 w-full items-center justify-center mx-auto transition-transform ease-in-out z-50 
        ${
          showNavbar
            ? "duration-100 translate-y-0"
            : "duration-100 -translate-y-full"
        }`}
      >
        <div className="bg-blue-50 dark:bg-slate-800 flex flex-col h-full w-full p-1 fade-down border-b-4 dark:border-b-2 dark:border-sky-700/50">
          <div className="flex flex-row items-center justify-center w-full text-slate-900 dark:text-sky-50">
            <a
              href="#home"
              className={`flex-1 flex justify-center underline-animation p-1 ${
                activeSection === "home" ? "text-sky-500 active" : ""
              }`}
            >
              <MdHome className="text-[35px]" />
            </a>

            <a
              href="#about"
              className={`flex-1 flex justify-center underline-animation p-1 ${
                activeSection === "about" ? "text-sky-500 active" : ""
              }`}
            >
              <IoPersonCircleSharp className="text-[33px]" />
            </a>

            <a
              href="#experience"
              className={`flex-1 flex justify-center underline-animation p-1 ${
                activeSection === "experience" ? "text-sky-500 active" : ""
              }`}
            >
              <BsPersonWorkspace className="p-1 text-[35px]" />
            </a>

            <a
              href="#projects"
              className={`flex-1 flex justify-center underline-animation p-1 ${
                activeSection === "projects" ? "text-sky-500 active" : ""
              }`}
            >
              <PiStackSimpleFill className="text-[35px]" />
            </a>

            <a
              href="#contact"
              className={`flex-1 flex justify-center underline-animation p-1 ${
                activeSection === "contact" ? "text-sky-500 active" : ""
              }`}
            >
              <GrContact className="p-1 text-[35px]" />
            </a>

            <button
              onClick={toggleDarkMode}
              className="flex-1 flex justify-center p-1 bg-sky-400 active:bg-sky-300 rounded-full text-slate-900 text-[33px]"
            >
              {darkMode ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
