import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

export default ProjectItem;
