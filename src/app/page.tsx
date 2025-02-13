"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";

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
    <div
      className="relative w-full min-h-screen flex flex-col items-center py-10 px-3 overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(154, 113, 151, 0.5) 10px, transparent 300px)`,
      }}
    >
      <Navbar />
      <main className="flex w-full h-[90vh] justify-center items-center overflow-auto">
        <div className="flex flex-col gap-8 w-[50%]">
          <h1 className="text-white text-center text-5xl font-semibold">
            Syngen Solutions
          </h1>
          <p
            className="text-white text-center text-base"
            style={{
              letterSpacing: "0em",
            }}
          >
            Syngen Solutions is a versatile consulting service specializing in
            creating tailored websites and seamless AI integrations. Syngen
            Solutions crafts intuitive, user-centered web solutions.
            Additionally, Syngen Solutions offers expert frontend development
            services, working with clients like a Spain-based property
            management company. Whether it’s delivering innovative AI-driven
            functionalities or ensuring smooth, accessible designs, Syngen
            Solutions balances both user experience and functionality to create
            impactful, scalable results for every project.
          </p>
        </div>
      </main>
    </div>
  );
}
