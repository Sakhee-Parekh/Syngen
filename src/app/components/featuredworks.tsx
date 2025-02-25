import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PrevButton from "./prevbutton";
import NextButton from "./nextbutton";
import ai from "../images/aitriangle.png";
import adobe from "../images/adobe.jpeg";
import green from "../images/greenninja.png";
import sjsu from "../images/sjsu.png";
import proppex from "../images/proppex.png";
import jora from "../images/jora.png";
import ucr from "../images/ucr.avif";
import bay from "../images/bayvalley.png";
import execute from "../images/execute.jpg";
import jess from "../images/jess.png";

export default function FeaturedWorks() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full h-full">
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background-color: #433e3f !important;
        }
        .swiper-container {
          height: 100% !important;
        }

        .swiper-wrapper {
          height: 450px !important;
        }

        .swiper-slide {
          height: 100% !important;
          width: 350px !important;
        }
      `}</style>
      <Swiper
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSwiper={(swiper: any) => (swiperRef.current = swiper)}
        cssMode={true}
        pagination={true}
        mousewheel={true}
        loop={true}
        keyboard={true}
        autoHeight={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={20}
      >
        <SwiperSlide>
          <div className="w-full relative bg-white/60 h-full rounded-lg overflow-hidden shadow-lg text-black">
            <Image
              src={ai}
              alt="ai triangle ventures"
              width={500}
              height={300}
              className="object-contain w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">AI Triangle Ventures</h3>
              <p className="mt-2 text-sm">
                Webpage created for early stage fund investing in the new era of
                enterprise AI startups.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-white/60 h-full rounded-lg overflow-hidden shadow-lg text-black">
            <Image
              src={adobe}
              alt="adobe"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">Adobe</h3>
              <p className="mt-2 text-sm">
                Performed User Research & Feature Analysis. Focused on
                evaluating features, providing recommendations, and developing
                UX designs for Adobe&apos;s leading illustration and drawing
                software. Performed usability testing on a new mobile app for
                drawing, sketching, and painting.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full bg-white/60 rounded-lg shadow-lg text-black">
            <Image
              src={green}
              alt="green ninja"
              width={500}
              height={300}
              className="object-contain w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">Green Ninja</h3>
              <p className="mt-2 text-sm">
                Developed AI-driven tools for education, such as a Teacher
                Assessment Creator and personalized Teaching Assistant.
                Optimized GPT-3.5 for project-based learning and contributed to
                grant proposals, while designing intuitive UI/UX solutions.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full bg-white/60 rounded-lg shadow-lg text-black">
            <Image
              src={sjsu}
              alt="sjsu"
              width={500}
              height={300}
              className="object-contain w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">SJSU</h3>
              <p className="mt-2 text-sm">
                Key contributions to a $10 million EIR grant proposal to the
                Department of Education for{" "}
                <i>Science Roots: Growing Student Futures</i>—a project
                leveraging GenAI-enhanced, project-based learning in
                collaboration with Green Ninja.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-white/60 h-full rounded-lg overflow-hidden shadow-lg text-black">
            <Image
              src={proppex}
              alt="proppex"
              width={500}
              height={300}
              className="object-fill w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">Proppex</h3>
              <p className="mt-2 text-sm">
                A real estate tech start-up that builds a seamless property
                management platform. Contributed by developing responsive
                prototypes, building ReactJS components, and creating efficient
                data visualizations.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-white/60 h-full rounded-lg overflow-hidden shadow-lg text-black">
            <Image
              src={jora}
              alt="jora"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">Jora</h3>
              <p className="mt-2 text-sm">
                Platform that streamlines live event management, offering tools
                for networking, booking, and data insights. Designed and
                developed the website and web app’s UI/UX.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-white/60 h-full rounded-lg overflow-hidden shadow-lg text-black">
            <Image
              src={ucr}
              alt="ucr"
              width={500}
              height={300}
              className="object-cover object-[35%_45%] w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">
                University of California, Riverside
              </h3>
              <p className="mt-2 text-sm">
                Website to advocate for and assist students stuck in leases
                while in the COVID-19 pandemic.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-white/60 h-full rounded-lg overflow-hidden shadow-lg text-black">
            <Image
              src={bay}
              alt="bay valley"
              width={500}
              height={300}
              className="object-cover object-top w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">Bay Valley Pediatrics</h3>
              <p className="mt-2 text-sm">
                Extensive website for a local doctors office, wanting to improve
                their online presence to attract new customers.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-white/60 h-full rounded-lg overflow-hidden shadow-lg text-black">
            <Image
              src={execute}
              alt="execute pm"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">Execute PM</h3>
              <p className="mt-2 text-sm">
                Logo created for Execute PM; A start-up based in Australia
                focused on consulting services.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-white/60 h-full rounded-lg overflow-hidden shadow-lg text-black">
            <Image
              src={jess}
              alt="hairbyjess"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">Hair by Jess</h3>
              <p className="mt-2 text-sm">
                Simple static website created for small business wanting to
                bring their presence online.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex space-x-4 my-4">
        <PrevButton swiperRef={swiperRef} />
        <NextButton swiperRef={swiperRef} />
      </div>
    </section>
  );
}
