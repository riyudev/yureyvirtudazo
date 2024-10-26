import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import StarIcon from "@mui/icons-material/Star";
import StackIcon from "tech-stack-icons";
import Banner from "../assets/muz.jpg";
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
          className={`${
            isInViewHeader
              ? `font-montserratExtraBold text-4xl text-slate-900 ${h1head}`
              : "hidden"
          }`}
        >
          About Me
        </h1>
        <hr
          className={`${
            isInViewHeader
              ? "border-t-2 border-slate-900 my-1 w-48 growing-hr"
              : ""
          }`}
        />
        <p
          className={`${
            isInViewHeader
              ? `font-poppinsBold text-lg text-sky-400 ${subHead}`
              : "hidden"
          }`}
        >
          What I can do?
        </p>
      </header>

      {/* Figure Section */}
      <figure
        ref={figureRef}
        className={`${
          isInViewFigure
            ? "flex flex-col-reverse tablet:flex-row items-center justify-center tablet:space-x-5 bg-slate-900/5 p-10 tablet:p-12 rounded-lg shadow-md bg-anim"
            : ""
        }`}
      >
        <div
          className={`${
            isInViewFigure
              ? "flex flex-col justify-between space-y-4 bg-sky-100 p-3 shadow-lg rounded-lg box-anim1"
              : "hidden"
          }`}
        >
          <blockquote className="text-justify p-2">
            <p className="font-poppinsRegular text-slate-900">
              Hi! I'm <b>Yurey</b>, a passionate 2nd-year college student with a
              love for programming and building web applications. Ever since I
              started coding, I've been fascinated by the power of technology to
              create meaningful solutions and improve everyday life. I'm always
              eager to learn new technologies and expand my skills, whether it's
              front-end development, back-end systems, or exploring the latest
              tools in web development.
            </p>
          </blockquote>
          <div className="flex flex-wrap font-mono text-white text-sm">
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              $collaborative_development
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              $responsive_design
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              $creativity
            </p>
          </div>
          <div className="flex items-center justify-start space-x-3 text-sky-400">
            <a
              href="#contact"
              className="flex items-center justify-center py-1 tablet:py-3 px-2 tablet:pl-4 tablet:pr-3 active:bg-slate-900/50 tablet:hover:bg-slate-900/50 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out"
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
          className={`${
            isInViewFigure
              ? "flex items-center justify-center max-w-sm tablet:max-w-md w-fit mb-5 tablet:mb-0"
              : "hidden"
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
        className={`${
          isInViewTechStack
            ? "flex flex-col space-y-5 bg-slate-900/5 px-10 tablet:px-12 pt-8 tablet:pt-10 pb-10 tablet:pb-12 rounded-lg shadow-md bg-anim"
            : ""
        }`}
      >
        <header
          className={`${
            isInViewTechStack ? "flex items-center justify-center" : "hidden"
          }`}
        >
          <h1 className="font-montserratBold text-3xl text-slate-900">Tech</h1>
          <div className="flex items-center justify-center p-2">
            <StarIcon className="text-sky-400" style={{ fontSize: iconSize }} />
          </div>
          <h1 className="font-montserratBold text-3xl text-slate-900">
            Stacks
          </h1>
        </header>

        <div
          className={`${
            isInViewTechStack
              ? "flex flex-col tablet:flex-row gap-y-5 justify-center gap-x-5"
              : "hidden"
          }`}
        >
          {/* Frontend Box */}
          <div
            className={`${
              isInViewTechStack
                ? "flex flex-col items-center bg-sky-100 shadow-lg rounded-lg tablet:w-[50%] space-y-7 p-3 box-anim1"
                : "hidden"
            }`}
          >
            <h2 className="font-poppinsBold text-2xl text-slate-900">
              Frontend
            </h2>
            <div className="grid grid-cols-3 gap-1">
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
                  className="flex flex-col tablet:hover:bg-slate-300/60 tablet:hover:scale-110 tablet:active:scale-[0.95] active:scale-[0.90] duration-200 ease-in-out items-center p-5 rounded-md cursor-pointer"
                >
                  <StackIcon name={tech} className="size-12" />
                  <p className="font-poppinsRegular tracking-wide text-sm">
                    {tech.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Box */}
          <div
            className={`${
              isInViewTechStack
                ? "flex flex-col items-center bg-sky-100 shadow-lg rounded-lg tablet:w-[50%] space-y-7 p-3 box-anim2"
                : "hidden"
            }`}
          >
            <h2 className="font-poppinsBold text-2xl text-slate-900">
              Backend
            </h2>
            <div className="grid grid-cols-3 gap-3">
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
                  className="flex flex-col tablet:hover:bg-slate-300/60 tablet:hover:scale-110 tablet:active:scale-[0.95] active:scale-[0.90] duration-200 ease-in-out items-center p-5 rounded-md cursor-pointer"
                >
                  <StackIcon name={tech} className="size-12" />
                  <p className="font-poppinsRegular tracking-wide text-sm">
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
