"use client";

import React from "react";

interface HeroSectionProps {
  heading: string;
  paragraph: string;
  heroImg: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heading, paragraph, heroImg }) => {
  return (
    <section
      className="flex items-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(320deg, #f58c23 48%, #ffffff 48%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-7xl pt-[120px] md:pt-[170px] px-4 md:px-8 pb-[95px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-[#f27022] text-5xl lg:text-6xl font-[600] leading-tight mb-3">
              {heading}
            </h1>
            <p
              className="text-[21px] leading-[30px] font-[500] w-full md:max-w-[80%]"
              id="lato-font"
            >
              {paragraph}
            </p>
          </div>

          {/* Right: Image */}
          <div className="mx-auto lg:mx-0 md:w-[60%]">
            <img
              src={heroImg}
              alt="Hero Image"
              className="drop-shadow-md h-auto"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
