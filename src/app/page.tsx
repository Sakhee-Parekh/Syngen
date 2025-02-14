"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import underline from "./images/underline.png";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <main
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(173, 216, 230, 0.5) 0%, rgba(173, 216, 230, 0) 20%)`,
      }}
    >
      <div className="flex flex-col w-full h-[100vh] items-center justify-around py-10">
        <div className="flex flex-col gap-2 w-full pt-20 xs:w-[80%] md:w-[60%] px-3">
          <p className="text-black/70 text-sm sm:text-xl font-medium">
            Your trusted partner for Design, Web & AI solutions.
          </p>

          <h1 className="text-black text-5xl md:text-6xl lg:text-8xl font-bold">
            Syngen Solutions
          </h1>
        </div>
        <div className="w-full z-0">
          <Image src={underline} alt="" className="w-full" />
        </div>
      </div>
      <div className="flex flex-col w-full h-full px-10 pt-96 pb-40 justify-center items-center gap-y-10">
        <h1
          id="projects"
          className="text-black text-4xl md:text-6xl lg:text-8xl font-semibold"
        >
          About
        </h1>
        <div className="flex flex-wrap gap-10 w-full justify-center 1256:justify-end 1256:left-40">
          <div className="bg-[#fffcf2]/80 h-[500px] rounded-lg w-[100%] 1256:w-[39%]">
            body
          </div>
          <div className="bg-[#fffcf2]/80 rounded-lg h-[500px] w-[100%] 1256:w-[39%]">
            body
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-full px-10 pb-40 justify-center items-center gap-y-10">
        <h1
          id="projects"
          className="text-black text-4xl md:text-6xl lg:text-8xl font-semibold"
        >
          Clients
        </h1>
        <div className="flex flex-wrap gap-10 w-full justify-center 1256:justify-end 1256:left-40">
          <div className="bg-[#fffcf2]/80 h-[500px] rounded-lg w-[100%] 1256:w-[25%]">
            body
          </div>
          <div className="bg-[#fffcf2]/80 rounded-lg h-[500px] w-[100%] 1256:w-[25%]">
            body
          </div>
          <div className="bg-[#fffcf2]/80 rounded-lg h-[500px] w-[100%] 1256:w-[25%]">
            body
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full px-10 pb-40 justify-center items-center gap-y-10">
        <h1
          id="projects"
          className="text-black text-4xl md:text-6xl lg:text-8xl font-semibold"
        >
          Research
        </h1>
        <div className="flex flex-wrap gap-10 w-full justify-center 1256:justify-end 1256:left-40">
          <div className="bg-[#fffcf2]/80 h-[500px] rounded-lg w-[100%] 1256:w-[80%]">
            body
          </div>
        </div>
      </div>
    </main>
  );
}
