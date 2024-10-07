import React from 'react';
import Profile from "../assets/Muzan.jpg"

const Home = () => {
  return (
    <section id="home" className="flex flex-row items-center min-h-screen space-x-14">

      <div className="w-fit max-w-96 flex justify-center">
        <img className="rounded-full" src={Profile} alt="" />
      </div>
      
      <div className="w-full min-h-96 flex flex-col justify-center">

        <p className="font-mono font-semibold text-3xl text-slate-800" 
           style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          I'm Yurey, a Web Developer.
        </p>

        <h1 className="text-5xl/[60px] font-montserratBold mt-3 mb-8 tracking-wide text-slate-800" 
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
          I Love to <span className="text-sky-400">Develop</span> and <span className="text-sky-400">Design</span> things for the web.
        </h1>

        <button className="px-4 py-3 bg-sky-400 hover:bg-sky-500 hover:scale-110 duration-200 rounded-md w-fit text-white font-poppinsRegular tracking-widest">
          GET RESUME
        </button>

      </div>
    </section>
  )
}

export default Home
