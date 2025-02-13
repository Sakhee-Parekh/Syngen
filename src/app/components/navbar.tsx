"use client";
import { useState } from "react";
import Image from "next/image";
import github from "../images/github.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import portfolio from "../images/portfolio.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        className="fixed top-8 right-8 z-50 flex justify-center items-center h-10 w-10 text-sm bg-[#F8EBE3]/80 text-black p-6 rounded-lg border-none shadow-xl backdrop-blur-sm hover:bg-[#1E1E1E] hover:text-white transition-all"
        onClick={toggleMenu}
        style={{
          boxShadow: "0 0 10px rgba(181, 131, 141, 0.7)", // Glow effect
          animation: "pulse 9s infinite", // Pulsing effect
        }}
      >
        <span className="material-icons">menu</span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed flex flex-col justify-between bg-[#F8EBE3] items-start top-5 left-5 h-[400px] rounded-2xl transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-[110%]"
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
                  className="hover:text-[#E5989B] transition uppercase"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-[#E5989B] transition uppercase"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-[#E5989B] transition uppercase"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={instagram} alt="github" width={40} height={40} />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={github} alt="github" width={40} height={40} />
          </a>
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
