import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import Image from "next/image";
import ai from "../images/aitriangle.png";
import adobe from "../images/adobe.png";
import green from "../images/greenninja.png";
import sjsu from "../images/sjsu.png";
import proppex from "../images/proppex.png";
import jora from "../images/jora.png";
import ucr from "../images/ucr.avif";
import execute from "../images/execute.jpg";
import bay from "../images/bayvalley.png";
import jess from "../images/jess.png";

export default function FeaturedWorks() {
  return (
    <section className="w-full h-full z-20 px-10">
      <Splide
        options={{
          type: "loop",
          focus: false,
          perPage: 7,
          perMove: 1,
          gap: "0.5rem",
          height: "160px",
          autoScroll: {
            speed: 0.3,
            pauseOnInteraction: true,
            pauseOnHover: true,
          },
          arrows: false,
          pagination: false,
          rewind: false,
          waitForTransition: true,
          easing: "linear",
          breakpoints: {
            1280: { perPage: 5 },
            1024: { perPage: 4 },
            768: { perPage: 3 },
            640: { perPage: 2 },
            480: { perPage: 1 },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {[
          {
            src: ai,
            alt: "AI Triangle Ventures",
            name: "AI Triangle Ventures",
          },
          { src: sjsu, alt: "SJSU", name: "SJSU" },
          { src: proppex, alt: "Proppex", name: "Proppex" },
          { src: adobe, alt: "Adobe", name: "Adobe" },
          { src: jora, alt: "Jora", name: "Jora" },
          { src: green, alt: "Green Ninja", name: "Green Ninja" },
          {
            src: ucr,
            alt: "University of California, Riverside",
            name: "University of California, Riverside",
          },
        ].map((logo, index) => (
          <SplideSlide key={index}>
            <div className="relative group h-full rounded-lg overflow-hidden text-black flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                height={100}
                className="object-contain w-auto h-[100px] transition-all duration-300 rounded-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center rounded-lg justify-center bg-black/60 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xs font-semibold text-center px-2">
                  {logo.name}
                </h3>
              </div>
            </div>
          </SplideSlide>
        ))}
        {[
          {
            src: bay,
            alt: "Bay Valley Pediatrics",
            name: "Bay Valley Pediatrics",
          },
          {
            src: jess,
            alt: "Hair by Jess",
            name: "Hair by Jess",
          },
        ].map((logo, index) => (
          <SplideSlide key={index}>
            <div className="relative group h-full rounded-lg overflow-hidden text-black flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className="object-cover w-[100px] h-[100px] transition-all duration-300 rounded-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center rounded-lg justify-center bg-black/60 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xs font-semibold text-center px-2">
                  {logo.name}
                </h3>
              </div>
            </div>
          </SplideSlide>
        ))}
        {[{ src: execute, alt: "Execute PM", name: "Execute PM" }].map(
          (logo, index) => (
            <SplideSlide key={index}>
              <div className="relative group h-full rounded-lg overflow-hidden text-black flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  height={100}
                  className="object-contain w-auto h-[100px] transition-all duration-300 rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center rounded-lg justify-center bg-black/60 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xs font-semibold text-center px-2">
                    {logo.name}
                  </h3>
                </div>
              </div>
            </SplideSlide>
          )
        )}
      </Splide>
    </section>
  );
}
