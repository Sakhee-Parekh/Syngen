"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Laptop, Code, Palette, Share2 } from "lucide-react";
import underline from "./images/underline.png";
import FeaturedWorks from "./components/featuredworks";
import TechStack from "./components/techstack";
import BlogPosts from "./components/blogposts";

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
          <p className="text-[#433e3f] text-sm sm:text-xl font-medium">
            Your trusted partner for Design, Web & AI solutions.
          </p>

          <h1 className="font-dmserifdisplay text-black text-5xl md:text-6xl lg:text-8xl font-bold">
            Syngen Solutions
          </h1>
        </div>
        <div className="w-full z-0">
          <Image src={underline} alt="" className="w-full" />
        </div>
      </div>
      <section
        id="services"
        className="flex flex-col w-full h-full px-10 pt-60 pb-20 bg-gradient-to-b from-transparent to-white/90 via-white/90-1% justify-center items-center gap-y-10 mt-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl">
          <div className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition-all duration-300">
            <Laptop className="mx-auto text-4xl text-black mb-4" />
            <h2 className="text-xl font-bold text-black">
              AI Development & Integration
            </h2>
            <p className="mt-4 text-gray-700 text-sm">
              Implementing AI solutions to optimize business processes.
            </p>
          </div>
          <div className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition-all duration-300">
            <Code className="mx-auto text-4xl text-black mb-4" />
            <h2 className="text-xl font-bold text-black">Web Development</h2>
            <p className="mt-4 text-gray-700 text-sm">
              Designing and developing modern, high-performance websites.
            </p>
          </div>
          <div className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition-all duration-300">
            <Palette className="mx-auto text-4xl text-black mb-4" />
            <h2 className="text-xl font-bold text-black">Brand Development</h2>
            <p className="mt-4 text-gray-700 text-sm">
              Crafting unique brand identities to stand out in the market.
            </p>
          </div>
          <div className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition-all duration-300">
            <Share2 className="mx-auto text-4xl text-black mb-4" />
            <h2 className="text-xl font-bold text-black">
              Social Media Jumpstart
            </h2>
            <p className="mt-4 text-gray-700 text-sm">
              Helping companies establish and grow their online presence
              effectively.
            </p>
          </div>
        </div>
      </section>
      <section
        id="clients"
        className="flex flex-col w-full h-full px-10 py-20 justify-center items-start gap-y-10 mt-0"
      >
        <h1 className="font-dmserifdisplay text-black text-4xl md:text-6xl lg:text-8xl font-semibold mb-10">
          Clients
        </h1>
        <FeaturedWorks />
      </section>
      <section
        id="techstack"
        className="flex flex-col w-full h-full px-10 py-20 bg-white/90 justify-center items-center gap-y-10 mt-0"
      >
        <TechStack />
      </section>
      <section
        id="blogs"
        className="flex flex-col md:flex-row w-full h-full px-10 py-20 justify-center items-center gap-10 mt-0"
      >
        <div className="w-full md:w-[60%] md:order-1 order-2">
          <BlogPosts />
        </div>
        <div className="flex flex-col items-center md:items-end w-full md:w-[40%] md:order-2 order-1">
          <h1 className="font-dmserifdisplay text-black text-4xl md:text-6xl lg:text-8xl font-semibold mb-4 text-center md:text-right">
            Research
          </h1>
          <p className="text-sm text-[#433e3f] text-center lg:text-right">
            Dive into cutting-edge research on Generative AI, digital art, and
            much more.
          </p>
        </div>
      </section>
      <section
        id="testimonials"
        className="flex flex-col w-full h-full px-10 py-20 bg-white/90 justify-center items-center gap-y-10 mt-0"
      >
        <h1 className="font-dmserifdisplay text-black text-4xl md:text-6xl font-semibold mb-10">
          Testimonials
        </h1>
        <div className="flex flex-wrap justify-center gap-10 w-full max-w-7xl">
          <div className="bg-neutral-200 p-6 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/4 text-center">
            <p className="text-gray-700 text-sm italic">
              &quot;Syngen Solutions transformed our digital presence. Their AI
              integration increased our efficiency significantly!&quot;
            </p>
            <p className="mt-4 font-semibold text-black">John Doe</p>
            <p className="text-gray-500">CEO, CompanyName</p>
          </div>
          <div className="bg-neutral-200 p-6 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/4 text-center">
            <p className="text-gray-700 text-sm italic">
              &quot;Their team is incredibly creative and responsive. Highly
              recommend their web development services.&quot;
            </p>
            <p className="mt-4 font-semibold text-black">Jane Smith</p>
            <p className="text-gray-500">Marketing Director, AnotherCompany</p>
          </div>
          <div className="bg-neutral-200 p-6 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/4 text-center">
            <p className="text-gray-700 text-sm italic">
              &quot;Our brand identity was taken to the next level. Syngen
              Solutions nailed it!&quot;
            </p>
            <p className="mt-4 font-semibold text-black">Alice Green</p>
            <p className="text-gray-500">Founder, StartupName</p>
          </div>
        </div>
      </section>
      <section
        id="footer"
        className="w-full bg-gradient-to-t from-transparent to-white/90 via-white/90-1% py-20 px-10"
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-black">Syngen Solutions</h2>
            <p className="text-sm text-gray-700">
              Your trusted partner for Design, Web & AI solutions.
            </p>
          </div>
          <div className="flex justify-center mb-6">
            <a
              href="mailto:contact@syngensolutions.com"
              className="bg-black hover:bg-[#433e3f] text-white px-4 py-2 rounded-full hover:text-white transition"
            >
              Contact Us
            </a>
          </div>
          <div className="text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Syngen Solutions. All rights
              reserved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
