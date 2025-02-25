"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import underline from "./images/underline.png";
import FeaturedWorks from "./components/featuredworks";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <main
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(210, 225, 240, 0.62) 0%, rgba(210, 225, 240, 0.19) 7%)`,
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
      <section
        id="services"
        className="flex flex-col w-full h-full px-10 pt-40 pb-40 bg-gradient-to-b from-transparent to-white/90 via-white/90-1% justify-center items-center gap-y-10 mt-0"
      >
        <h1 className="text-black text-4xl md:text-6xl lg:text-8xl font-semibold mb-10">
          Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl">
          <div className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition-all duration-300">
            {/* <Image
              src="/path/to/ai-development-image.jpg"
              alt="AI Development & Integration"
              width={200}
              height={200}
              className="mx-auto mb-4"
            /> */}
            <h2 className="text-2xl font-bold text-black">
              AI Development & Integration
            </h2>
            <p className="mt-4 text-gray-700">
              Implementing AI solutions to optimize business processes.
            </p>
          </div>
          <div className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition-all duration-300">
            <h2 className="text-2xl font-bold text-black">Web Development</h2>
            <p className="mt-4 text-gray-700">
              Designing and developing modern, high-performance websites.
            </p>
          </div>
          <div className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition-all duration-300">
            <h2 className="text-2xl font-bold text-black">Brand Development</h2>
            <p className="mt-4 text-gray-700">
              Crafting unique brand identities to stand out in the market.
            </p>
          </div>
          <div className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition-all duration-300">
            <h2 className="text-2xl font-bold text-black">
              Social Media Jumpstart
            </h2>
            <p className="mt-4 text-gray-700">
              Helping companies establish and grow their online presence
              effectively.
            </p>
          </div>
        </div>
      </section>

      <section
        id="clients"
        className="flex flex-col w-full h-full px-10 pt-40 pb-40 justify-center items-center gap-y-10 mt-0"
      >
        <h1 className="text-black text-4xl md:text-6xl lg:text-8xl font-semibold mb-10">
          Clients
        </h1>
        <FeaturedWorks />
      </section>
    </main>
  );
}
