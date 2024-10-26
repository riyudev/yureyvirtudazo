import React from "react";
import Logo from "../assets/reachright.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useInView from "../helpers/useInView";
import useWindowWidth from "../helpers/useWindowWidth";
import "../styles/Animation.css";

function Experience() {
  // Using the useInView hook for each animated element
  const [isInViewHeader, headerRef] = useInView();
  const [isInViewFigure, figureRef] = useInView();

  const windowWidth = useWindowWidth();
  const h1head = windowWidth < 900 ? "slide-y-head" : "slide-x-head";
  const subHead = windowWidth < 900 ? "slide-y-subhead" : "slide-x-subhead";

  return (
    <section
      id="experience"
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
          Experience
        </h1>
        <hr
          className={`${
            isInViewHeader
              ? "border-t-2 border-slate-900 my-1 w-56 growing-hr"
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
          What I have done
        </p>
      </header>

      <figure
        ref={figureRef}
        className={`${
          isInViewFigure
            ? "flex flex-col tablet:flex-row gap-y-4 tablet:space-x-5 bg-slate-200/90 p-10 tablet:p-12 rounded-lg shadow-md bg-anim"
            : ""
        } `}
      >
        {/*1st div wrapper*/}
        <div
          className={`${
            isInViewFigure
              ? "flex flex-col justify-center items-center tablet:items-start bg-sky-100 p-4 shadow-lg rounded-lg tablet:w-[35%] box-anim1"
              : "hidden"
          } `}
        >
          <div className="flex px-5 pt-5 pb-2 max-w-xs tablet:max-w-none">
            <img
              className="tablet:max-w-xs bg-[#02AED6] p-5"
              src={Logo}
              alt="Banner"
            />
          </div>

          <hr className="border-t-4 border-slate-900/50 my-1 w-full" />

          <div className="flex flex-col items-center tablet:items-start space-y-2 tablet:pl-5">
            <h2 className="font-montserratBold text-2xl">Web Developer</h2>
            <p className="font-poppinsRegular"> at REACHRIGHT</p>
            <p className="font-poppinsRegular text-xs">
              6 months - 2023 ~ fulltime
            </p>
          </div>
        </div>

        {/*2nd div wrapper*/}
        <div
          className={`${
            isInViewFigure
              ? "flex flex-col justify-between space-y-4 bg-sky-100 p-3 shadow-lg rounded-lg tablet:w-[65%] box-anim2"
              : "hidden"
          } `}
        >
          <blockquote className="text-justify p-2">
            <p className="font-poppinsRegular text-slate-900">
              I had the opportunity to craft tailored church websites and update
              plugins for over 400 sites during my time at REACHRIGHT. Despite
              being a 1st-year student, I handled significant responsibilities,
              working under someone else's name as an outsourced developer. I
              worked full-time (Mon-Fri, 8 hours night-shift) for six months,
              troubleshooting client websites when requested by the Project
              Manager, and optimizing responsive websites to enhance user
              experience.
            </p>
          </blockquote>

          <div className="flex flex-wrap font-mono text-white text-sm">
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              $Wordpress
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              $troubleshooting
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              $responsive_design
            </p>
            <p className="bg-slate-900/50 py-1 px-2 rounded-full my-1 mx-2">
              $tailored_websites
            </p>
          </div>

          <div className="flex items-center justify-start space-x-3 text-sky-400">
            <a
              href="https://reachrightstudios.com/"
              target="_blank"
              className="flex items-center justify-center py-1 tablet:py-3 px-2 tablet:pl-4 tablet:pr-3 active:bg-slate-900/50 tablet:hover:bg-slate-900/50 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out"
            >
              <p className="tablet:pt-[2px] text-sm text-sky-400 font-poppinsBold tracking-widest">
                VISIT
              </p>
              <ArrowForwardIcon className="ml-2" style={{ fontSize: "20px" }} />
            </a>
          </div>
        </div>
      </figure>
    </section>
  );
}

export default Experience;
