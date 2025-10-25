"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import Image from "next/image";

import QuoteLeft from "../../../../../public/Svgs/quote-left.svg";
import QuoteRight from "../../../../../public/Svgs/quote-right.svg";

const testimonials = [
  {
    heading: "American Legion Ahwatukee Post 64",
    text: "Knowing that I can reach out to the owner of another veteran to aid with our website’s charities’ needs completely across the country has been amazing for this disabled veteran.",
    name: "David Green, Public Affairs Officer",
    location: "American Legion Ahwatukee Post 64",
  },
  {
    heading: "TaShonda Payne",
    text: "…I’m so glad the universe aligned me with you",
    name: "Melanin Magic Foundation",
  },
  {
    heading: "Pardhasaradhi Namburi",
    text: "Free For Charity was absolutely and outstanding — they really did a terrific job for us, they provided us the proper tech guidance and tools in order to help support the nonprofits that we support at Online Impacts.",
  },
  {
    heading: "Keith Ray",
    text: "An awesome charity that helps and supports other charities with technology support Previous Slide",
  },
];

export default function TestimonialSlider() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const handleSlideChange = (swiper) => setActiveIndex(swiper.activeIndex);

  const handleDotClick = (index) => {
    if (swiperInstance) swiperInstance.slideTo(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1150px] text-center">
        <h2
          className="font-[700] text-[#F27022] text-[40px] leading-[44px] mb-7"
        >
          Testimonials
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            onSlideChange={handleSlideChange}
            spaceBetween={30}
            slidesPerView={1}
            loop={false}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="px-12 md:px-20 relative">
                  {/* Left Quote */}
                  <div className="absolute left-[10px] md:left-[50px] top-0 opacity-20 w-6 md:w-9 h-6 md:h-9">
                    <Image src={QuoteLeft} alt="Left Quote" />
                  </div>

                  <h3
                    className="text-[22px] font-bold mb-[10px]  text-[#333] leading-6 italic"
                    id="aria-font"
                  >
                    {t.heading}
                  </h3>
                  <p
                    className="text-[17px] font-[500] text-black italic px-0 sm:px-4 md:px-8"
                    id="aria-font"
                  >
                    {t.text}
                  </p>
                  <p className="text-[14px] font-[500] my-2 text-[#666666]" id="aria-font">{t.name}</p>
                  <p className="text-[14px] font-[500] text-[#2EA3F2]" id="aria-font">{t.location}</p>

                  {/* Right Quote */}
                  <div className="absolute right-[10px] md:right-[50px] bottom-0 opacity-20 w-6 md:w-9 h-6 md:h-9">
                    <Image src={QuoteRight} alt="Right Quote" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Arrow */}
          <button
            ref={prevRef}
            disabled={activeIndex === 0}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10
                       flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all
                       disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            aria-label="Previous testimonial"
          >
            <MdOutlineArrowBackIos  className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            ref={nextRef}
            disabled={activeIndex === testimonials.length - 1}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10
                       flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all
                       disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            aria-label="Next testimonial"
          >
            <MdOutlineArrowForwardIos  className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeIndex === i
                  ? "bg-orange-600 w-8"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
