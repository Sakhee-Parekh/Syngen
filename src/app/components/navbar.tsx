"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full ${
        isScrolled ? "bg-[#f5f5f5]/90" : "bg-[#f5f5f5]/10 transition"
      } shadow-md z-50`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-dmserifdisplay text-2xl font-bold text-black">
          Syngen
        </div>
        <button
          className="lg:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <div
          className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none transition-all duration-300 ${
            isOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 text-black text-lg items-center lg:items-center p-6 lg:p-0">
            <li>
              <a href="#services" className="hover:text-[#433e3f] transition">
                Services
              </a>
            </li>
            <li>
              <a href="#customers" className="hover:text-[#433e3f] transition">
                Customers
              </a>
            </li>
            <li>
              <a href="#research" className="hover:text-[#433e3f] transition">
                Research
              </a>
            </li>
            <li className="mt-4 lg:mt-0">
              <a
                href="syngensolutions09@gmail.com"
                className="bg-black hover:bg-[#433e3f] text-white px-4 py-2 rounded-full hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
