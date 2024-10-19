import React from 'react'
import Logo from '../assets/reachright.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Experience() {
  return (
    <section id="experience" className="flex flex-col pt-20 space-y-6 tablet:space-y-14">

      <header className="flex flex-col items-center tablet:items-start">
        <h1 className="font-montserratExtraBold text-4xl text-dark-blue"> 
          Experience
        </h1>
        <hr className="border-t-2 border-dark-blue my-1 w-56" />
        <p className="font-poppinsBold text-lg text-sky-400">
          what I have done?
        </p>
      </header>

      <figure className="flex flex-col tablet:flex-row gap-y-4 tablet:space-x-5 bg-slate-200/90 p-10 tablet:p-12 rounded-lg shadow-md">
          
        <div className="flex flex-col justify-center items-center tablet:items-start bg-sky-100 p-4 shadow-lg rounded-lg">
          <div className="flex px-5 pt-5 pb-2 max-w-xs tablet:max-w-none">
            <img className="tablet:max-w-xs bg-[#02AED6] p-5" src={Logo} alt="Banner" />
          </div>
          
          <hr className="border-t-4 border-dark-blue/50 my-1 w-full" />

          <div className="flex flex-col items-center tablet:items-start space-y-2 pl-5">
            <h2 className="font-montserratBold text-2xl">Web Developer</h2>
            <p className="font-poppinsRegular"> at REACHRIGHT</p>
            <p className="font-poppinsRegular text-xs">6 months - 2023 ~ fulltime</p>
          </div>
            
        </div>
        
        <div className="flex flex-col justify-between space-y-4 bg-sky-100 p-3 shadow-lg rounded-lg">

          <blockquote className="text-justify p-2">
            <p className="font-poppinsRegular text-dark-blue">
            I had the opportunity to craft tailored church websites and update plugins for over 400 sites during my time at REACHRIGHT. Despite being a 1st-year student, I handled significant responsibilities, working under someone else's name as an outsourced developer. I worked full-time (Mon-Fri, 8 hours night-shift) for six months, troubleshooting client websites when requested by the Project Manager, and optimizing responsive websites to enhance user experience.
            </p>
          </blockquote>

          <div className="flex flex-wrap font-mono text-white text-sm">
            <p className="bg-dark-blue/50 py-1 px-2 rounded-full my-1 mx-2">$Wordpress</p>
            <p className="bg-dark-blue/50 py-1 px-2 rounded-full my-1 mx-2">$troubleshooting</p>
            <p className="bg-dark-blue/50 py-1 px-2 rounded-full my-1 mx-2">$responsive_design</p>
            <p className="bg-dark-blue/50 py-1 px-2 rounded-full my-1 mx-2">$tailored_websites</p>
          </div>  

          <div className="flex items-center justify-start space-x-3 text-sky-400">           
            <a href="https://reachrightstudios.com/" target='_blank'
              className="flex items-center justify-center py-1 tablet:py-3 px-2 tablet:pl-4 tablet:pr-3 active:bg-dark-blue/50 tablet:hover:bg-dark-blue/50 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out"
            >
              <p className="tablet:pt-[2px] text-sm text-sky-400 font-poppinsBold tracking-widest">
                VISIT
              </p>
              <ArrowForwardIcon className="ml-2" style={{fontSize: '20px'}} /> 
            </a>
          </div>
        </div>

        
      </figure>   
    </section>
  )
}

export default Experience
