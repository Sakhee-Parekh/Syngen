"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
// import github from "../images/github.svg";
// import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import portfolio from "../images/portfolio.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1256) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* Floating Button */}
      <button
        className="fixed top-8 right-8 z-50 flex justify-center items-center h-10 w-10 text-sm bg-[#edede9] text-black p-6 rounded-lg border-none shadow-xl backdrop-blur-sm hover:bg-[#ebf2fa] transition-all"
        onClick={toggleMenu}
        style={{
          boxShadow: "0 0 10px rgba(129, 195, 215, 0.7)", // Glow effect
          animation: "pulse 9s infinite", // Pulsing effect
        }}
      >
        <span className="material-icons">menu</span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed flex flex-col z-50 justify-between bg-white/90 sm:bg-white/60 items-start top-0 left-0 h-screen rounded-r-lg transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-[100%]"
        } w-[250px] p-8`}
      >
        <div>
          <button className="text-black text-xl" onClick={toggleMenu}>
            <span className="material-icons">close</span>
          </button>

          <nav className="text-black pt-5 text-2xl">
            <ul className="space-y-5">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#81c3d7] transition uppercase"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-[#81c3d7] transition uppercase"
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="hover:text-[#81c3d7] transition uppercase"
                >
                  Research
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex space-x-4">
          {/* <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={instagram} alt="github" width={40} height={40} />
          </a> */}
          {/* <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={github} alt="github" width={40} height={40} />
          </a> */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedin} alt="github" width={40} height={40} />
          </a>
          <a
            href="https://www.artportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={portfolio} alt="github" width={40} height={40} />
          </a>
        </div>
      </div>
    </div>
  );
}
