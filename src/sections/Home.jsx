import Profile from "../assets/Muzan.jpg";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typewriter from '../components/Typewriter';
import "../styles/Home.css";

const Home = () => {

  return (
    <section id="home" 
      className="flex tablet:flex-row flex-col justify-center items-center min-h-screen h-fit space-y-10 tablet:space-y-0 tablet:space-x-14 bg-transparent z-auto">

      <div className="w-fit tablet:max-w-96 max-w-56 flex justify-center slide-img">
        <img className="rounded-full" src={Profile} alt="Profile" />
      </div>
      
      <div className="w-full min-h-full tablet:min-h-96 flex flex-col justify-center items-center tablet:items-start">
        <Typewriter />

        <h1 className="text-4xl/[48px] tablet:text-5xl/[60px] font-montserratExtraBold mt-3 mb-8 tablet:mb-16 tracking-wide text-dark-blue slide-h1 text-center tablet:text-start" 
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
          I Love to <span className="text-sky-400">Develop</span> and <span className="text-sky-400">Design</span> things for the web.
        </h1>

        <div className="flex flex-col tablet:flex-row items-center space-y-6 tablet:space-y-0">
          <div className="fade-up">
            <button 
              className="px-4 py-3 bg-dark-blue text-sky-400 font-poppinsBold tracking-widest rounded-md w-fit duration-200 ease-in-out hover:opacity-75 hover:scale-110"
            >
              <a href="#projects">PROJECTS</a>
            </button>
          </div>

          <div className="flex tablet:ml-8 items-center space-x-6 tablet:space-x-3 text-sky-400 slide-socials">
            <a 
              href="https://web.facebook.com/yurey.oclarit" 
              target='_blank' 
              className="hover:scale-110 hover:opacity-75 duration-200 ease-in-out"
            >
              <FacebookRoundedIcon 
                className="bg-dark-blue p-2 rounded-full" 
                style={{ height: '55px', width: '55px' }} 
              />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/yurey-virtudazo-3bba2a284/" 
              target='_blank' 
              className="hover:scale-110 hover:opacity-75 duration-200 ease-in-out"
            >
              <LinkedInIcon 
                className="bg-dark-blue p-2 rounded-full" 
                style={{ height: '55px', width: '55px' }} 
              />
            </a>

            <a 
              href="https://twitter.com/Yurey_OV/" 
              target='_blank' 
              className="hover:scale-110 hover:opacity-75 duration-200 ease-in-out"
            >
              <XIcon 
                className="bg-dark-blue p-2 rounded-full" 
                style={{ height: '55px', width: '55px' }} 
              />
            </a>

            <a 
              href="https://github.com/riyudev" 
              target='_blank' 
              className="hover:scale-110 hover:opacity-75 duration-200 ease-in-out"
            >
              <GitHubIcon 
                className="bg-dark-blue p-2 rounded-full" 
                style={{ height: '55px', width: '55px' }} 
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
