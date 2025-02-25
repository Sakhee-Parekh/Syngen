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

export default function FeaturedWorks() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full h-full py-20">
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background-color: black !important;
        }
        .swiper-container {
          height: 100% !important;
        }

        .swiper-wrapper {
          height: 480px !important;
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
          <div className="w-full relative bg-white h-full rounded-lg overflow-hidden shadow-lg text-black">
            <Image
              src="/path/to/your-image2.jpg"
              alt="Featured Work 2"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">AI Triangle Ventures</h3>
              <p className="mt-2">
                Webpage created for early stage fund investing in the new era of
                enterprise AI startups.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-white h-full rounded-lg overflow-hidden shadow-lg text-black">
            <Image
              src="/path/to/your-image2.jpg"
              alt="Featured Work 2"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">Adobe</h3>
              <p className="mt-2">
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
          <div className="relative h-full bg-white rounded-lg shadow-lg text-black">
            <Image
              src="/path/to/your-image.jpg"
              alt="Featured Work 1"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">Green Ninja</h3>
              <p className="mt-2">
                Developed AI-driven tools for education, such as a Teacher
                Assessment Creator and personalized Teaching Assistant.
                Optimized GPT-3.5 for project-based learning and contributed to
                grant proposals, while designing intuitive UI/UX solutions.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full bg-white rounded-lg shadow-lg text-black">
            <Image
              src="/path/to/your-image.jpg"
              alt="Featured Work 1"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">SJSU</h3>
              <p className="mt-2">
                Developed AI-driven tools for education, such as a Teacher
                Assessment Creator and personalized Teaching Assistant.
                Optimized GPT-3.5 for project-based learning and contributed to
                grant proposals, while designing intuitive UI/UX solutions.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-white h-full rounded-lg overflow-hidden shadow-lg text-black">
            <Image
              src="/path/to/your-image2.jpg"
              alt="Featured Work 2"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">Proppex</h3>
              <p className="mt-2">
                A real estate tech start-up that builds a seamless property
                management platform. Contributed by developing responsive
                prototypes, building ReactJS components, and creating efficient
                data visualizations.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-white h-full rounded-lg overflow-hidden shadow-lg text-black">
            <Image
              src="/path/to/your-image2.jpg"
              alt="Featured Work 2"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">Jora</h3>
              <p className="mt-2">
                Platform that streamlines live event management, offering tools
                for networking, booking, and data insights. Designed and
                developed the website and web app’s UI/UX.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-white h-full rounded-lg overflow-hidden shadow-lg text-black">
            <Image
              src="/path/to/your-image2.jpg"
              alt="Featured Work 2"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">
                University of California, Riverside
              </h3>
              <p className="mt-2">
                Website to advocate for and assist students stuck in leases
                while in the COVID-19 pandemic.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-white h-full rounded-lg overflow-hidden shadow-lg text-black">
            <Image
              src="/path/to/your-image2.jpg"
              alt="Featured Work 2"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">Bay Valley Pediatrics</h3>
              <p className="mt-2">
                Extensive website for a local doctors office, wanting to improve
                their online presence to attract new customers.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-white h-full rounded-lg overflow-hidden shadow-lg text-black">
            <Image
              src="/path/to/your-image2.jpg"
              alt="Featured Work 2"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">Execute PM</h3>
              <p className="mt-2">
                Logo created for Execute PM; A start-up based in Australia
                focused on consulting services.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-white h-full rounded-lg overflow-hidden shadow-lg text-black">
            <Image
              src="/path/to/your-image2.jpg"
              alt="Featured Work 2"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold">Hair by Jess</h3>
              <p className="mt-2">
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
