import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import StarIcon from "@mui/icons-material/Star";
import StackIcon from "tech-stack-icons";
import Banner from "../assets/yureyface.jpg";
import useInView from "../helpers/useInView";
import useWindowWidth from "../helpers/useWindowWidth";
import "../styles/Animation.css";

function About() {
  // Using the useInView hook for each animated element
  const [isInViewHeader, headerRef] = useInView();
  const [isInViewFigure, figureRef] = useInView();
  const [isInViewTechStack, techStackRef] = useInView();

  const windowWidth = useWindowWidth();
  const h1head = windowWidth < 900 ? "slide-y-head" : "slide-x-head";
  const subHead = windowWidth < 900 ? "slide-y-subhead" : "slide-x-subhead";
  const iconSize = windowWidth < 900 ? "38px" : "45px";

  return (
    <section
      id="about"
      className="flex flex-col pt-20 space-y-6 tablet:space-y-14"
    >
      {/* Header Section */}
      <header
        ref={headerRef}
        className="flex flex-col items-center tablet:items-start"
      >
        <h1
          className={`font-montserratExtraBold text-4xl text-slate-900 dark:text-sky-50 ${
            isInViewHeader ? `${h1head} ` : "opacity-0"
          }`}
        >
          About Me
        </h1>
        <hr
          className={`border-t-2 border-slate-900 dark:border-sky-400/50 my-1 w-48 ${
            isInViewHeader ? "growing-hr" : "invisible"
          }`}
        />
        <p
          className={`font-poppinsBold text-lg text-sky-400 ${
            isInViewHeader ? `${subHead}` : "opacity-0"
          }`}
        >
          What I can do?
        </p>
      </header>

      {/* Figure Section */}
      <figure
        ref={figureRef}
        className={`flex flex-col-reverse tablet:flex-row items-center justify-center tablet:space-x-5 bg-slate-900/5 dark:bg-sky-900/15 p-5 tablet:p-12 rounded-lg shadow-lg dark:shadow-sky-400 ${
          isInViewFigure ? "bg-anim" : "opacity-0"
        }`}
      >
        <div
          className={`flex flex-col justify-between space-y-4 bg-sky-100 dark:bg-slate-700/50 p-2 pb-3 tablet:p-3 shadow-lg dark:shadow-md dark:shadow-sky-400 rounded-lg ${
            isInViewFigure ? "box-anim1" : "opacity-0"
          }`}
        >
          <blockquote className="text-justify p-2">
            <p className="font-poppinsRegular text-sky-950 dark:text-sky-200">
              Hi! I'm <b>Yurey</b>, a passionate junior web developer with a
              love for programming and building web applications. Ever since I
              started coding, I've been fascinated by the power of technology to
              create meaningful solutions and improve everyday life. I'm always
              eager to learn new technologies and expand my skills, whether it's
              front-end development, back-end systems, or exploring the latest
              tools in web development.
            </p>
          </blockquote>
          <div className="flex flex-wrap font-mono text-sky-50 dark:text-slate-900 text-sm">
            {[
              "$collaborative_development",
              "$responsive_design",
              "$creativity",
            ].map((item, index) => (
              <p
                key={index}
                className="bg-slate-900/50 dark:bg-sky-100/50 py-1 px-2 rounded-full my-1 mx-2"
              >
                {item}
              </p>
            ))}
          </div>

          <div className="flex items-center justify-start space-x-3 text-sky-400 ml-1">
            <a
              href="#contact"
              className="flex items-center justify-center py-1 tablet:py-3 px-2 tablet:pl-4 tablet:pr-3 active:bg-slate-900/5 dark:active:bg-sky-400/20 tablet:hover:bg-slate-900/50 dark:tablet:hover:bg-sky-400/20 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out"
            >
              <p className="tablet:pt-[2px] text-sm text-sky-400 font-poppinsBold tracking-widest">
                CONTACT
              </p>
              <ArrowDownwardIcon
                className="ml-2"
                style={{ fontSize: "20px" }}
              />
            </a>
          </div>
        </div>
        <div
          className={`flex items-center justify-center max-w-sm tablet:max-w-md w-fit mb-5 tablet:mb-0 ${
            isInViewFigure ? "box-anim1" : "opacity-0"
          }`}
        >
          <img
            className="tablet:max-w-md rounded-lg"
            src={Banner}
            alt="Banner"
          />
        </div>
      </figure>

      {/* Tech Stack Section */}
      <div
        ref={techStackRef}
        className={`flex flex-col space-y-5 bg-slate-900/5 dark:dark:bg-sky-900/15 p-5 tablet:px-12 tablet:pt-10 tablet:pb-12 rounded-lg shadow-lg dark:shadow-sky-400 transition-opacity duration-700 ${
          isInViewTechStack ? "bg-anim" : "opacity-0"
        }`}
      >
        <header className="flex items-center justify-center">
          <h1 className="font-montserratBold text-3xl text-slate-900 dark:text-sky-50">
            Tech
          </h1>
          <div className="flex items-center justify-center p-2">
            <StarIcon className="text-sky-400" style={{ fontSize: iconSize }} />
          </div>
          <h1 className="font-montserratBold text-3xl text-slate-900 dark:text-sky-50">
            Stacks
          </h1>
        </header>

        <div className="flex flex-col tablet:flex-row gap-y-5 justify-center gap-x-5">
          {/* Frontend Box */}
          <div
            className={`flex flex-col items-center bg-sky-100 dark:bg-slate-700/50 shadow-md dark:shadow-sky-400 rounded-lg tablet:w-[50%] space-y-7 p-2 ${
              isInViewTechStack ? "box-anim1" : "opacity-0"
            }`}
          >
            <h2 className="font-poppinsBold text-2xl text-slate-900 dark:text-sky-400">
              Frontend
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {[
                "html5",
                "css3",
                "js",
                "reactjs",
                "tailwindcss",
                "git",
                "wordpress",
              ].map((tech) => (
                <div
                  key={tech}
                  className="flex flex-col tablet:hover:bg-slate-300/60 dark:tablet:hover:bg-sky-400/20 tablet:hover:scale-110 tablet:active:scale-[0.95] active:scale-[0.90] duration-200 ease-in-out items-center p-5 rounded-md cursor-pointer"
                >
                  <StackIcon name={tech} className="size-12" />
                  <p className="font-poppinsRegular tracking-wide text-sm dark:text-sky-200">
                    {tech.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Box */}
          <div
            className={`flex flex-col items-center bg-sky-100 dark:bg-slate-700/50 shadow-md dark:shadow-sky-400 rounded-lg tablet:w-[50%] space-y-7 p-2 ${
              isInViewTechStack ? "box-anim1" : "opacity-0"
            }`}
          >
            <h2 className="font-poppinsBold text-2xl text-slate-900 dark:text-sky-400">
              Backend
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {[
                "nodejs",
                "mongodb",
                "firebase",
                "git",
                "wordpress",
                "mysql",
              ].map((tech) => (
                <div
                  key={tech}
                  className="flex flex-col tablet:hover:bg-slate-300/60 dark:tablet:hover:bg-sky-400/20 tablet:hover:scale-110 tablet:active:scale-[0.95] active:scale-[0.90] duration-200 ease-in-out items-center p-5 rounded-md cursor-pointer"
                >
                  <StackIcon name={tech} className="size-12" />
                  <p className="font-poppinsRegular tracking-wide text-sm dark:text-sky-200">
                    {tech.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
