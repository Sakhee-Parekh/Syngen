"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <div className="text-2xl font-bold text-black">Syngen</div>
        <div className="flex gap-x-8 items-center">
          <ul className="flex space-x-8 text-black text-lg">
            <li>
              <a href="#services" className="hover:text-black/60 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#clients" className="hover:text-black/60 transition">
                Clients
              </a>
            </li>
          </ul>
          <div className="flex space-x-4">
            <a
              href="mailto:email@example.com"
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-black/60 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
