import React, { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import XIcon from "@mui/icons-material/X";
import { TbBrandGithubFilled } from "react-icons/tb";

function Footer() {
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

  const iconSize = windowWidth < 900 ? "25px" : "23px";

  return (
    <footer className="flex justify-center w-full border-t-2 mt-10">
      <div className="flex flex-col gap-y-1 items-center pt-3 pb-4 max-w-7xl w-full">
        <div className="flex items-center space-x-3 text-sky-400">
          <a href="https://web.facebook.com/yurey.oclarit" target="_blank">
            <FaFacebookF style={{ fontSize: iconSize }} />
          </a>

          <a
            href="https://www.linkedin.com/in/yurey-virtudazo-3bba2a284/"
            target="_blank"
          >
            <FaLinkedinIn style={{ fontSize: iconSize }} />
          </a>

          <a>
            <TbBrandGithubFilled style={{ fontSize: iconSize }} />
          </a>

          <a href="https://twitter.com/Yurey_OV/" target="_blank">
            <XIcon style={{ fontSize: iconSize }} />
          </a>
        </div>

        <div className="font-montserratBold text-sm gap-y-1 text-center">
          <h2>Designed and Built by: Yurey Virtudazo</h2>
          <h2>Copyright &copy; 2024 - All rights reserve</h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
