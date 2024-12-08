import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      localStorage.setItem("darkMode", !prevMode);
      return !prevMode;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 400;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection || "home");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.location.hash === "" || window.location.hash === "#home") {
      window.scrollTo({
        top: document.getElementById("home").offsetTop - 80,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <div className="flex flex-col items-center bg-blue-50 dark:bg-slate-900">
        <Navbar
          activeSection={activeSection}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div className="max-w-7xl w-full px-4 tablet:px-5 space-y-20">
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
