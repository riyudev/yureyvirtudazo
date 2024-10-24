import React, { useState, useEffect } from "react";
import Profile from "../assets/Muzan.jpg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typewriter from "../components/Typewriter";
import "../styles/Home.css";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const iconSize = windowWidth < 900 ? "38px" : "50px";

  const profileAnimation = windowWidth < 900 ? "fade-down-mobile" : "slide-img";
  const h1Animation = windowWidth < 900 ? "fade-up-h1" : "slide-h1";
  const btnAnimation = windowWidth < 900 ? "fade-up-btn" : "fade-up";
  const socialsAnimation = windowWidth < 900 ? "fade-up-socials" : "fade-up";

  return (
    <section
      id="home"
      className="flex tablet:flex-row flex-col justify-center items-center min-h-screen h-fit space-y-9 tablet:space-y-0 tablet:space-x-10 bg-transparent z-auto scroll-py-6 tablet:scroll-py-0"
    >
      <div
        className={`w-fit tablet:max-w-96 max-w-40 flex justify-center ${profileAnimation}`}
      >
        <img className="rounded-full" src={Profile} alt="Profile" />
      </div>

      <div className="w-full min-h-full tablet:min-h-96 flex flex-col justify-center items-center tablet:items-start">
        <Typewriter />

        <h1
          className={`text-4xl/[45px] tablet:text-5xl/[60px] font-montserratExtraBold mt-3 mb-8 tablet:mb-16 tracking-wide text-slate-900 text-center tablet:text-start ${h1Animation}`}
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
        >
          <span className="text-sky-400">Develop</span> and{" "}
          <span className="text-sky-400">Design</span> things for the web.
        </h1>

        <div className="flex flex-col tablet:flex-row items-center space-y-6 fade-up-btn tablet:space-y-0">
          <div className={btnAnimation}>
            <a
              href="#projects"
              className="inline-block py-2 tablet:py-3 px-3 tablet:px-4 bg-slate-900 rounded-md duration-200 ease-in-out hover:opacity-75 hover:scale-[1.12] active:scale-[0.95] text-[15px] text-sky-400 font-poppinsBold tracking-widest"
            >
              PROJECTS
            </a>
          </div>

          <div
            className={`flex tablet:ml-8 items-center space-x-6 tablet:space-x-3 text-sky-400 ${socialsAnimation}`}
          >
            <a
              href="https://web.facebook.com/yurey.oclarit"
              target="_blank"
              className="hover:scale-[1.15] active:scale-[0.95] hover:opacity-75 duration-200 ease-in-out"
            >
              <FacebookRoundedIcon
                className="bg-slate-900 p-1 rounded-full"
                style={{ fontSize: iconSize }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/yurey-virtudazo-3bba2a284/"
              target="_blank"
              className="hover:scale-[1.15] active:scale-[0.95] hover:opacity-75 duration-200 ease-in-out"
            >
              <LinkedInIcon
                className="bg-slate-900 p-1 rounded-full"
                style={{ fontSize: iconSize }}
              />
            </a>

            <a
              href="https://twitter.com/Yurey_OV/"
              target="_blank"
              className="hover:scale-[1.15] active:scale-[0.95] hover:opacity-75 duration-200 ease-in-out"
            >
              <XIcon
                className="bg-slate-900 p-1 rounded-full"
                style={{ fontSize: iconSize }}
              />
            </a>

            <a
              href="https://github.com/riyudev"
              target="_blank"
              className="hover:scale-[1.15] active:scale-[0.95] hover:opacity-75 duration-200 ease-in-out"
            >
              <GitHubIcon
                className="bg-slate-900 p-1 rounded-full"
                style={{ fontSize: iconSize }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
