import Profile from "../assets/Muzan.jpg";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typewriter from '../components/Typewriter';
import "../styles/Home.css";

const Home = () => {
  return (
    <section id="home" className="flex flex-row items-center min-h-screen space-x-14">
      <div className="w-fit max-w-96 flex justify-center slide-img">
        <img className="rounded-full" src={Profile} alt="Profile" />
      </div>
      
      <div className="w-full min-h-96 flex flex-col justify-center">
        <Typewriter />
        <h1 className="text-5xl/[60px] font-montserratExtraBold mt-3 mb-16 tracking-wide text-dark-blue slide-h1" 
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
          I Love to <span className="text-sky-400">Develop</span> and <span className="text-sky-400">Design</span> things for the web.
        </h1>

        <div className="flex items-center">
          <div className="fade-up">
            <button className="px-4 py-3 bg-dark-blue text-sky-400 font-poppinsBold tracking-widest rounded-md w-fit duration-200 ease-in-out hover:opacity-75 hover:scale-110">
              <a href="#projects">PROJECTS</a>
            </button>
          </div>

          <div className="ml-8 flex items-center space-x-3 text-sky-400 slide-socials">
            <a href="https://web.facebook.com/yurey.oclarit" target='_blank' className="hover:scale-110 hover:opacity-75 duration-200   ease-in-out">
              <FacebookRoundedIcon className="bg-dark-blue p-2 rounded-full" style={{ height: '55px', width: '55px' }} />
            </a>
            
            <a href="https://www.linkedin.com/in/yurey-virtudazo-3bba2a284/" target='_blank' className="hover:scale-110 hover:opacity-75 duration-200 ease-in-out">
              <LinkedInIcon className="bg-dark-blue p-2 rounded-full" style={{ height: '55px', width: '55px' }} />
            </a>

            <a href="https://twitter.com/Yurey_OV/" target='_blank' className="hover:scale-110 hover:opacity-75 duration-200 ease-in-out">
              <XIcon className="bg-dark-blue p-2 rounded-full" style={{ height: '55px', width: '55px' }} />
            </a>

            <a href="" target='_blank' className="hover:scale-110 hover:opacity-75 duration-200 ease-in-out">
              <GitHubIcon className="bg-dark-blue p-2 rounded-full" style={{ height: '55px', width: '55px' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
