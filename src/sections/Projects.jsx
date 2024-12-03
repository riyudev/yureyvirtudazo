import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useInView from "../helpers/useInView";
import useWindowWidth from "../helpers/useWindowWidth";
import "../styles/Animation.css";

// Reusable ProjectItem component
function ProjectItem({ title, description, techStack, animationClass }) {
  return (
    <div
      className={`bg-sky-100 dark:bg-slate-700/50 p-4 tablet:p-5 space-y-4 shadow-md dark:shadow-sky-400 rounded-lg flex flex-col h-full ${animationClass}`}
    >
      <h2 className="font-montserratBold text-2xl text-slate-900 dark:text-sky-400">
        {title}
      </h2>
      <p className="font-poppinsRegular text-justify text-slate-900 dark:text-sky-200">
        {description}
      </p>
      <div className="flex flex-wrap items-center font-mono text-sky-50 dark:text-slate-900 text-sm">
        {techStack.map((tech) => (
          <p
            key={tech}
            className="bg-slate-900/50 dark:bg-sky-100/50 py-1 px-2 rounded-full my-1 mx-2"
          >
            {tech}
          </p>
        ))}
      </div>
      <div className="flex justify-between mt-auto">
        {/* VIEW SOURCE Button */}
        {title === "Movie App" ? (
          <a
            href="https://github.com/riyudev/movie-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 active:bg-sky-400/20 tablet:hover:bg-slate-900/50 dark:tablet:hover:bg-sky-400/20 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out"
          >
            <p className="text-sky-400 font-poppinsBold text-sm tracking-widest">
              VIEW SOURCE
            </p>
            <TbBrandGithubFilled className="ml-3 text-xl text-sky-400" />
          </a>
        ) : (
          <button className="flex items-center px-4 py-2 active:bg-sky-400/20 tablet:hover:bg-slate-900/50 dark:tablet:hover:bg-sky-400/20 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out">
            <p className="text-sky-400 font-poppinsBold text-sm tracking-widest">
              VIEW SOURCE
            </p>
            <TbBrandGithubFilled className="ml-3 text-xl text-sky-400" />
          </button>
        )}

        {/* VISIT Button */}
        {title === "Movie App" ? (
          <a
            href="https://movie-app-yurcodes.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 active:bg-sky-400/20 tablet:hover:bg-slate-900/50 dark:tablet:hover:bg-sky-400/20 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out"
          >
            <p className="text-sky-400 font-poppinsBold text-sm tracking-widest">
              VISIT
            </p>
            <ArrowForwardIcon className="ml-3 text-xl text-sky-400" />
          </a>
        ) : (
          <button className="flex items-center px-4 py-2 active:bg-sky-400/20 tablet:hover:bg-slate-900/50 dark:tablet:hover:bg-sky-400/20 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out">
            <p className="text-sky-400 font-poppinsBold text-sm tracking-widest">
              VISIT
            </p>
            <ArrowForwardIcon className="ml-3 text-xl text-sky-400" />
          </button>
        )}
      </div>
    </div>
  );
}

function Projects() {
  const [isInViewHeader, headerRef] = useInView();
  const [isInViewFigure, figureRef] = useInView();
  const windowWidth = useWindowWidth();
  const h1head = windowWidth < 900 ? "slide-y-head" : "slide-x-head";
  const subHead = windowWidth < 900 ? "slide-y-subhead" : "slide-x-subhead";

  const projectData = [
    {
      title: "Movie App",
      description:
        "A simple netflix clone with user login authentication, home page and player page.",
      techStack: [
        "javascript",
        "reactjs",
        "tailwindcss",
        "tmdbAPI",
        "firebase",
      ],
      animationClass: "box-anim1",
    },
    {
      title: "E-commerce App",
      description:
        "A fully responsive online shopping platform with product listings, user login, and payment integration.",
      techStack: ["javascript", "reactjs", "tailwindcss", "mysql"],
      animationClass: "box-anim2",
    },
    {
      title: "Chat Application",
      description:
        "A real-time chat application with WebSocket integration, multiple chat rooms, and user authentication.",
      techStack: ["javascript", "reactjs", "tailwindcss", "nodejs"],
      animationClass: "box-anim3",
    },
    {
      title: "Weather App",
      description:
        "A weather forecasting app displaying real-time weather data for any location using a public API.",
      techStack: ["javascript", "reactjs", "tailwindcss"],
      animationClass: "box-anim4",
    },
    {
      title: "Task Management App",
      description:
        "A productivity tool for creating, managing, and tracking tasks with drag-and-drop functionality.",
      techStack: ["javascript", "reactjs", "tailwindcss"],
      animationClass: "box-anim5",
    },
    {
      title: "Quiz App",
      description:
        "An interactive quiz application with customizable categories, timer-based gameplay, and score tracking.",
      techStack: ["javascript", "reactjs", "tailwindcss"],
      animationClass: "box-anim6",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col pt-20 space-y-6 tablet:space-y-14"
    >
      <header
        ref={headerRef}
        className="flex flex-col items-center tablet:items-start"
      >
        <h1
          className={`font-montserratExtraBold text-4xl text-slate-900 dark:text-sky-50 ${
            isInViewHeader ? `${h1head}` : "opacity-0"
          }`}
        >
          Projects
        </h1>
        <hr
          className={`border-t-2 border-slate-900 dark:border-sky-400/50 my-1 w-40 ${
            isInViewHeader ? "growing-hr" : "invisible"
          }`}
        />
        <p
          className={`font-poppinsBold text-lg text-sky-400 ${
            isInViewHeader ? `${subHead}` : "opacity-0"
          }`}
        >
          My recent works
        </p>
      </header>

      <figure
        ref={figureRef}
        className={`grid grid-cols-1 phone:grid-cols-2 tablet:grid-cols-3 gap-10 bg-slate-900/5 dark:bg-sky-900/15 p-5 tablet:p-12 shadow-lg dark:shadow-sky-400 ${
          isInViewFigure ? "bg-anim" : "opacity-0"
        }`}
      >
        {projectData.map(
          ({ title, description, techStack, animationClass }) => (
            <ProjectItem
              key={title}
              title={title}
              description={description}
              techStack={techStack}
              animationClass={isInViewFigure ? animationClass : "opacity-0"}
            />
          )
        )}
      </figure>
    </section>
  );
}

export default Projects;
