import React from "react";
import Logo from "../assets/reachright.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useInView from "../helpers/useInView";
import useWindowWidth from "../helpers/useWindowWidth";
import Salem from "../assets/salem.jpg";
import Gateway from "../assets/gateway.jpg";
import "../styles/Animation.css";

function Experience() {
  const [isInViewHeader, headerRef] = useInView();
  const [isInViewFigure, figureRef] = useInView();
  const [isInViewSample, sampleRef] = useInView();

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
          className={`font-montserratExtraBold text-4xl text-slate-900 dark:text-sky-50 ${
            isInViewHeader ? `${h1head} ` : "opacity-0"
          }`}
        >
          Experience
        </h1>
        <hr
          className={`border-t-2 border-slate-900 dark:border-sky-400/50 my-1 w-56 ${
            isInViewHeader ? "growing-hr" : "invisible"
          }`}
        />
        <p
          className={`font-poppinsBold text-lg text-sky-400 ${
            isInViewHeader ? `${subHead}` : "opacity-0"
          }`}
        >
          What I have done?
        </p>
      </header>

      <figure
        ref={figureRef}
        className={`flex flex-col tablet:flex-row gap-y-4 tablet:space-x-5 bg-slate-900/5 dark:bg-sky-900/15 p-5 tablet:p-12 rounded-lg shadow-lg dark:shadow-sky-400 ${
          isInViewFigure ? "bg-anim" : "opacity-0"
        } `}
      >
        {/*1st div wrapper*/}
        <div
          className={`flex flex-col justify-center items-center tablet:items-start bg-sky-100 dark:bg-slate-700/50 p-4 shadow-md dark:shadow-sky-400 rounded-lg ${
            isInViewFigure ? "box-anim1" : "opacity-0"
          } `}
        >
          <div className="flex px-5 pt-5 pb-2 max-w-xs tablet:max-w-none">
            <img
              className="tablet:max-w-xs bg-[#02AED6] p-5"
              src={Logo}
              alt="Banner"
            />
          </div>

          <hr className="border-t-4 border-slate-900/50 dark:border-sky-400/50 my-1 w-full" />

          <div className="flex flex-col items-center tablet:items-start space-y-2 tablet:pl-5">
            <h2 className="font-montserratBold text-2xl text-slate-900 dark:text-sky-400">
              Web Developer
            </h2>
            <p className="font-poppinsRegular text-slate-900 dark:text-sky-200">
              {" "}
              at REACHRIGHT
            </p>
            <p className="font-poppinsRegular text-xs text-slate-900 dark:text-sky-200">
              1 year - 2023-2024 ~ fulltime
            </p>
          </div>
        </div>

        {/*2nd div wrapper*/}
        <div
          className={`flex flex-col justify-between space-y-4 bg-sky-100 dark:bg-slate-700/50 p-2 pb-3 tablet:p-3 shadow-md dark:shadow-sky-400 rounded-lg ${
            isInViewFigure ? "box-anim1" : "opacity-0"
          } `}
        >
          <blockquote className="text-justify p-2">
            <p className="font-poppinsRegular text-slate-900 dark:text-sky-200">
              I had the opportunity to craft tailored church websites and update
              plugins for over 400 sites during my time at REACHRIGHT. Despite
              being a first timer in this field, I handled significant
              responsibilities, working under someone else's name as an
              outsourced developer. I worked full-time (Mon-Fri, 8 hours
              night-shift) for a year, troubleshooting client websites when
              requested by the Project Manager, and optimizing responsive
              websites to enhance user experience.
            </p>
          </blockquote>

          <div className="flex flex-wrap font-mono text-sky-50 dark:text-slate-900 text-sm">
            {[
              "Wordpress",
              "$troubleshooting",
              "$responsive_design",
              "$tailored_websites",
            ].map((item, index) => (
              <p
                key={index}
                className="bg-slate-900/50 dark:bg-sky-100/50 py-1 px-2 rounded-full my-1 mx-2"
              >
                {item}
              </p>
            ))}
          </div>

          <div className="flex items-center justify-start space-x-3 text-sky-400">
            <a
              href="https://reachrightstudios.com/"
              target="_blank"
              className="flex items-center justify-center py-1 tablet:py-3 px-2 tablet:pl-4 tablet:pr-3 active:bg-slate-900/5 dark:active:bg-sky-400/20 tablet:hover:bg-slate-900/50 dark:tablet:hover:bg-sky-400/20 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out"
            >
              <p className="tablet:pt-[2px] text-sm font-poppinsBold tracking-widest">
                VISIT
              </p>
              <ArrowForwardIcon className="ml-2" style={{ fontSize: "20px" }} />
            </a>
          </div>
        </div>
      </figure>

      <sample
        ref={sampleRef}
        className={`flex flex-col items-center bg-slate-900/5 dark:bg-sky-900/15 p-5 tablet:px-12 tablet:pt-10 tablet:pb-12 rounded-lg shadow-lg dark:shadow-sky-400 space-y-8 ${
          isInViewSample ? "bg-anim" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl text-center font-montserratBold text-slate-900 dark:text-sky-50">
          Sample of Work
        </h1>

        <div className="flex flex-col space-y-12">
          {/**first sample work - GATEWAY FELLOWSHIP CHURCH */}
          <div
            className={`flex flex-col-reverse tablet:flex-row justify-center items-center tablet:space-x-5 ${
              isInViewSample ? "box-anim1" : "opacity-0"
            }`}
          >
            <blockquote className="p-4 bg-sky-100 dark:bg-slate-700/50 shadow-md dark:shadow-md dark:shadow-sky-400 rounded-lg">
              <h2 className="font-poppinsBold text-2xl text-slate-900 dark:text-sky-400 mb-4">
                Gateway Fellowship Church
              </h2>
              <p className="text-justify dark:text-sky-200 font-poppinsRegular mb-7">
                Gateway Fellowship Church is a community-centered platform
                designed to enhance the spiritual journey of its members. As a
                web developer, I focused on creating a responsive, user-friendly
                interface that captures the welcoming essence of the church. The
                platform showcases essential details about church services,
                community events, and volunteer opportunities, aiming to foster
                deeper connections within the congregation.
              </p>
              <a
                href="https://mygateway.tv/"
                target="_blank"
                className="flex items-center justify-center py-1 tablet:py-3 px-2 tablet:pl-4 tablet:pr-3 active:bg-slate-900/5 dark:active:bg-sky-400/20 tablet:hover:bg-slate-900/50 dark:tablet:hover:bg-sky-400/20 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out text-sky-400"
              >
                <p className="tablet:pt-[2px] text-sm font-poppinsBold tracking-widest">
                  VISIT
                </p>
                <ArrowForwardIcon
                  className="ml-2"
                  style={{ fontSize: "20px" }}
                />
              </a>
            </blockquote>

            <div className="flex items-center justify-center max-w-sm tablet:max-w-md w-fit mb-5 tablet:mb-0">
              <img src={Gateway} alt="" className="md:max-w-md rounded-lg" />
            </div>
          </div>

          {/**second sample work - SALEM LUTHERAN CHURCH */}
          <div
            className={`flex flex-col tablet:flex-row justify-center items-center tablet:space-x-5 ${
              isInViewSample ? "box-anim3" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center max-w-sm tablet:max-w-md w-fit mb-5 tablet:mb-0">
              <img src={Salem} alt="" className="md:max-w-md rounded-lg" />
            </div>

            <blockquote className="p-4 bg-sky-100 dark:bg-slate-700/50 shadow-md dark:shadow-md dark:shadow-sky-400 rounded-lg">
              <h2 className="font-poppinsBold text-2xl text-slate-900 dark:text-sky-400 mb-4">
                Salem Lutheran Church
              </h2>
              <p className="text-justify dark:text-sky-200 font-poppinsRegular mb-7">
                Salem Lutheran Church is a digital platform designed to reflect
                the warmth and inclusivity of its congregation while providing
                essential resources to members and visitors. As a developer, my
                primary goal was to create a visually appealing and
                easy-to-navigate website that promotes the church's mission and
                community activities. The platform serves as a bridge between
                the church and its community.
              </p>
              <a
                href="https://salem4u.com/"
                target="_blank"
                className="flex items-center justify-center py-1 tablet:py-3 px-2 tablet:pl-4 tablet:pr-3 active:bg-slate-900/5 dark:active:bg-sky-400/20 tablet:hover:bg-slate-900/50 dark:tablet:hover:bg-sky-400/20 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out text-sky-400"
              >
                <p className="tablet:pt-[2px] text-sm font-poppinsBold tracking-widest">
                  VISIT
                </p>
                <ArrowForwardIcon
                  className="ml-2"
                  style={{ fontSize: "20px" }}
                />
              </a>
            </blockquote>
          </div>
        </div>
      </sample>
    </section>
  );
}

export default Experience;
