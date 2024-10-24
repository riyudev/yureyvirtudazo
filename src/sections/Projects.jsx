import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col pt-20 space-y-6 tablet:space-y-14 min-h-screen"
    >
      <header className="flex flex-col items-center tablet:items-start">
        <h1 className="font-montserratExtraBold text-4xl text-slate-900">
          Projects
        </h1>
        <hr className="border-t-2 border-slate-900 my-1 w-44" />
        <p className="font-poppinsBold text-lg text-sky-400">recent works</p>
      </header>

      <div className="grid grid-cols-1 phone:grid-cols-2 tablet:grid-cols-3 gap-10 bg-slate-900/10 p-12 shadow-md">
        <div className="bg-sky-100 p-5 space-y-4 shadow-lg rounded-lg flex flex-col h-full">
          <h2 className="font-montserratBold text-2xl">Booking System</h2>
          <p className="font-poppinsRegular text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non est
            euismod, faucibus justo sit amet, semper est. Curabitur maximus
            posuere orci vel auctor.
          </p>
          <div className="flex flex-wrap flex-grow items-center font-mono text-white text-sm">
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              javascript
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              reactjs
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              tailwindcss
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              nodejs
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              mongodb
            </p>
          </div>
          <div className="mt-auto">
            <button className="flex items-center px-4 py-2 active:bg-slate-900/50 tablet:hover:bg-slate-900/50 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out">
              <p className="text-sky-400 font-poppinsRegular">VIEW SOURCE</p>
              <TbBrandGithubFilled className="ml-3 text-2xl text-sky-400" />
            </button>
          </div>
        </div>

        <div className="bg-sky-100 p-5 space-y-4 shadow-lg rounded-lg flex flex-col h-full">
          <h2 className="font-montserratBold text-2xl">E-commerce App</h2>
          <p className="font-poppinsRegular text-justify flex-grow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non est
            euismod, faucibus justo sit amet, semper est. Curabitur maximus
            posuere orci vel auctor.
          </p>
          <div className="flex flex-wrap flex-grow items-center font-mono text-white text-sm">
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              javascript
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              reactjs
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              tailwindcss
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              mysql
            </p>
          </div>
          <div className="mt-auto">
            <button className="flex items-center px-4 py-2 active:bg-slate-900/50 tablet:hover:bg-slate-900/50 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out">
              <p className="text-sky-400 font-poppinsRegular">VIEW SOURCE</p>
              <TbBrandGithubFilled className="ml-3 text-2xl text-sky-400" />
            </button>
          </div>
        </div>

        <div className="bg-sky-100 p-5 space-y-4 shadow-lg rounded-lg flex flex-col h-full">
          <h2 className="font-montserratBold text-2xl">Chat Application</h2>
          <p className="font-poppinsRegular text-justify flex-grow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non est
            euismod, faucibus justo sit amet, semper est. Curabitur maximus
            posuere orci vel auctor.
          </p>
          <div className="flex flex-wrap flex-grow items-center font-mono text-white text-sm">
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              javascript
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              reactjs
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              tailwindcss
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              nodejs
            </p>
          </div>
          <div className="mt-auto">
            <button className="flex items-center px-4 py-2 active:bg-slate-900/50 tablet:hover:bg-slate-900/50 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out">
              <p className="text-sky-400 font-poppinsRegular">VIEW SOURCE</p>
              <TbBrandGithubFilled className="ml-3 text-2xl text-sky-400" />
            </button>
          </div>
        </div>

        <div className="bg-sky-100 p-5 space-y-4 shadow-lg rounded-lg flex flex-col h-full">
          <h2 className="font-montserratBold text-2xl">Weather App</h2>
          <p className="font-poppinsRegular text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non est
            euismod, faucibus justo sit amet, semper est. Curabitur maximus
            posuere orci vel auctor.
          </p>
          <div className="flex flex-wrap flex-grow items-center font-mono text-white text-sm">
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              javascript
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              reactjs
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              tailwindcss
            </p>
          </div>
          <div className="mt-auto">
            <button className="flex items-center px-4 py-2 active:bg-slate-900/50 tablet:hover:bg-slate-900/50 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out">
              <p className="text-sky-400 font-poppinsRegular">VIEW SOURCE</p>
              <TbBrandGithubFilled className="ml-3 text-2xl text-sky-400" />
            </button>
          </div>
        </div>

        <div className="bg-sky-100 p-5 space-y-4 shadow-lg rounded-lg flex flex-col h-full">
          <h2 className="font-montserratBold text-2xl">Task Management App</h2>
          <p className="font-poppinsRegular text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non est
            euismod, faucibus justo sit amet, semper est. Curabitur maximus
            posuere orci vel auctor.
          </p>
          <div className="flex flex-wrap flex-grow items-center font-mono text-white text-sm">
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              javascript
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              reactjs
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              tailwindcss
            </p>
          </div>
          <div className="mt-auto">
            <button className="flex items-center px-4 py-2 active:bg-slate-900/50 tablet:hover:bg-slate-900/50 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out">
              <p className="text-sky-400 font-poppinsRegular">VIEW SOURCE</p>
              <TbBrandGithubFilled className="ml-3 text-2xl text-sky-400" />
            </button>
          </div>
        </div>

        <div className="bg-sky-100 p-5 space-y-4 shadow-lg rounded-lg flex flex-col h-full">
          <h2 className="font-montserratBold text-2xl">Quiz App</h2>
          <p className="font-poppinsRegular text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non est
            euismod, faucibus justo sit amet, semper est. Curabitur maximus
            posuere orci vel auctor.
          </p>
          <div className="flex flex-wrap flex-grow items-center font-mono text-white text-sm">
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              javascript
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              reactjs
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              tailwindcss
            </p>
          </div>
          <div className="mt-auto">
            <button className="flex items-center px-4 py-2 active:bg-slate-900/50 tablet:hover:bg-slate-900/50 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out">
              <p className="text-sky-400 font-poppinsRegular">VIEW SOURCE</p>
              <TbBrandGithubFilled className="ml-3 text-2xl text-sky-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
