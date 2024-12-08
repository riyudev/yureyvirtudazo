import React from "react";
import ProjectItem from "../helpers/ProjectItem";
import useInView from "../helpers/useInView";
import useWindowWidth from "../helpers/useWindowWidth";
import { ProjectData } from "../helpers/ProjectData";
import "../styles/Animation.css";

function Projects() {
  const [isInViewHeader, headerRef] = useInView();
  const [isInViewFigure, figureRef] = useInView();
  const windowWidth = useWindowWidth();
  const h1head = windowWidth < 900 ? "slide-y-head" : "slide-x-head";
  const subHead = windowWidth < 900 ? "slide-y-subhead" : "slide-x-subhead";

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
        {ProjectData.map(
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
