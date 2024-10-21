import React, { useState, useEffect } from 'react';
import Banner from '../assets/muz.jpg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import StarIcon from '@mui/icons-material/Star';
import StackIcon from "tech-stack-icons";

function About() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const iconSize = windowWidth < 900 ? '38px' : '45px';
  const socialsAnimation = windowWidth < 900 ? 'fade-up-socials' : 'fade-up';

  return (
    <section id="about" className="flex flex-col pt-20 space-y-6 tablet:space-y-14">

      <header className="flex flex-col items-center tablet:items-start">
        <h1 className="font-montserratExtraBold text-4xl text-dark-blue"> 
          About Me
        </h1>
        <hr className="border-t-2 border-dark-blue my-1 w-48" />
        <p className="font-poppinsBold text-lg text-sky-400">
          what I can do?
        </p>
      </header>

      <figure className="flex flex-col-reverse tablet:flex-row items-center justify-center tablet:space-x-5 bg-dark-blue/5 p-10 tablet:p-12 rounded-lg shadow-md">

        <div className="flex flex-col justify-between space-y-4 bg-sky-100 p-3 shadow-lg rounded-lg">

          <blockquote className="text-justify p-2">
            <p className="font-poppinsRegular text-dark-blue">
            Hi! I'm <b>Yurey</b>, a passionate 2nd-year college student with a love for programming and building web applications. Ever since I started coding, I've been fascinated by the power of technology to create meaningful solutions and improve everyday life. I'm always eager to learn new technologies and expand my skills, whether it's front-end development, back-end systems, or exploring the latest tools in web development.
            </p>
          </blockquote>

          <div className="flex flex-wrap font-mono text-white text-sm">
            <p className="bg-dark-blue/50 py-1 px-2 rounded-full my-1 mx-2">$collaborative_development</p>
            <p className="bg-dark-blue/50 py-1 px-2 rounded-full my-1 mx-2">$responsive_design</p>
            <p className="bg-dark-blue/50 py-1 px-2 rounded-full my-1 mx-2">$creativity</p>
          </div>  

          <div className={`flex items-center justify-start space-x-3 text-sky-400`}>
            
            
              <a href="#contact" 
                className="flex items-center justify-center py-1 tablet:py-3 px-2 tablet:pl-4 tablet:pr-3 active:bg-dark-blue/50 tablet:hover:bg-dark-blue/50 tablet:active:scale-[0.90] rounded-md w-fit duration-100 ease-in-out"
              >
                <p className="tablet:pt-[2px] text-sm text-sky-400 font-poppinsBold tracking-widest">
                  CONTACT
                </p>
                <ArrowDownwardIcon className="ml-2" style={{fontSize: '20px'}} /> 
              </a>
          </div>
        </div>
        
        <div className="flex items-center justify-center max-w-sm tablet:max-w-md w-fit mb-5 tablet:mb-0">
          <img className="tablet:max-w-md rounded-lg" src={Banner} alt="Banner" />
        </div>
      </figure> 

      <div className="flex flex-col space-y-5 bg-dark-blue/5 px-10 tablet:px-12 pt-8 tablet:pt-10 pb-10 tablet:pb-12 rounded-lg shadow-md">
        <header className="flex items-center justify-center">
          <h1 className="font-montserratBold text-3xl text-dark-blue">
            Tech
          </h1>
          <div className="flex items-center justify-center p-2">
            <StarIcon className="text-sky-400" style={{fontSize: iconSize}} />
          </div>
          <h1 className="font-montserratBold text-3xl text-dark-blue">
            Stacks
          </h1>
        </header>

        <div className="flex flex-col tablet:flex-row gap-y-5 justify-center gap-x-5">

          <div className="flex flex-col items-center bg-sky-100 shadow-lg rounded-lg tablet:w-[50%] space-y-7 p-3">
            <h2 className="font-poppinsBold text-2xl text-dark-blue">
              Frontend
            </h2>

            <div className="grid grid-cols-3 gap-1">
              <div className="flex flex-col tablet:hover:bg-slate-300/60 items-center p-5 rounded-md">
                <StackIcon name="html5" className="size-12" />
                <p className="font-poppinsRegular tracking-wide text-sm">HTML5</p>
              </div>

              <div className="flex flex-col tablet:hover:bg-slate-300/60 items-center p-5 rounded-md">
                <StackIcon name="css3" className="size-12" />
                <p className="font-poppinsRegular tracking-wide text-sm">CSS3</p>
              </div>

              <div className="flex flex-col tablet:hover:bg-slate-300/60 items-center p-5 rounded-md">
                <StackIcon name="js" className="size-12" />
                <p className="font-poppinsRegular tracking-wide text-sm">JAVASCRIPT</p>
              </div>

              <div className="flex flex-col tablet:hover:bg-slate-300/60 items-center p-5 rounded-md">
                <StackIcon name="reactjs" className="size-12" />
                <p className="font-poppinsRegular tracking-wide text-sm">REACTJS</p>
              </div>

              <div className="flex flex-col tablet:hover:bg-slate-300/60 items-center p-5 rounded-md">
                <StackIcon name="tailwindcss" className="size-12" />
                <p className="font-poppinsRegular tracking-wide text-sm">TAILWINDCSS</p>
              </div>

              <div className="flex flex-col tablet:hover:bg-slate-300/60 items-center p-5 rounded-md">
                <StackIcon name="git" className="size-12" />
                <p className="font-poppinsRegular tracking-wide text-sm">GIT</p>
              </div>

              <div className="flex flex-col tablet:hover:bg-slate-300/60 items-center p-5 rounded-md">
                <StackIcon name="wordpress" className="size-12" />
                <p className="font-poppinsRegular tracking-wide text-sm">WORDPRESS</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center bg-sky-100 shadow-lg rounded-lg tablet:w-[50%] space-y-7 p-3">
            <h2 className="font-poppinsBold text-2xl text-dark-blue">
              Backend
            </h2>

            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col tablet:hover:bg-slate-300/60 items-center p-5 rounded-md">
                <StackIcon name="nodejs" className="size-12" />
                <p className="font-poppinsRegular tracking-wide text-sm">NODEJS</p>
              </div>

              <div className="flex flex-col tablet:hover:bg-slate-300/60 items-center p-5 rounded-md">
                <StackIcon name="mongodb" className="size-12" />
                <p className="font-poppinsRegular tracking-wider text-sm">MONGODB</p>
              </div>

              <div className="flex flex-col tablet:hover:bg-slate-300/60 items-center p-5 rounded-md">
                <StackIcon name="firebase" className="size-12" />
                <p className="font-poppinsRegular tracking-wide text-sm">FIREBASE</p>
              </div>

              <div className="flex flex-col tablet:hover:bg-slate-300/60 items-center p-5 rounded-md">
                <StackIcon name="git" className="size-12" />
                <p className="font-poppinsRegular tracking-wide text-sm">GIT</p>
              </div>

              <div className="flex flex-col tablet:hover:bg-slate-300/60 items-center p-5 rounded-md">
                <StackIcon name="wordpress" className="size-12" />
                <p className="font-poppinsRegular tracking-wide text-sm">WORDPRESS</p>
              </div>

              <div className="flex flex-col tablet:hover:bg-slate-300/60 items-center p-5 rounded-md">
                <StackIcon name="mysql" className="size-12" />
                <p className="font-poppinsRegular tracking-wide text-sm">MYSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default About
