"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  heading: string;
  paragraph: string;
  heroImg: string;
  fontSize: number;
  lineHeight: number;

}

const HeroSection: React.FC<HeroSectionProps> = ({
  heading,
  paragraph,
  heroImg,
  fontSize,
  lineHeight,
}) => {
  return (
    <section
      className="w-full flex items-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(320deg, #f58c23 48%, #ffffff 48%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full mx-auto pt-[120px] md:pt-[170px] pb-[95px]">
        <div className="w-full max-w-[90%] mx-auto flex flex-wrap justify-between">
          {/* Left: Text Content */}
          <div className="w-full lg:w-[45%] space-y-6">
            <h1 className="text-[#f27022] text-5xl lg:text-6xl font-[600] leading-tight mb-3">
              {heading}
            </h1>
            <p
              className={`leading-[30px] font-[500] w-full md:w-[90%]`}
              id="lato-font"
              style={{ fontSize: fontSize ? `${fontSize}px` : "21px", lineHeight: lineHeight ? `${lineHeight}px` : "30px" }}
            >
              {paragraph}
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-[55%] relative pl-[80px] pr-[80px]">
            <Image
              src={heroImg}
              alt="Hero Image"
              width={100}
              height={500}
              className="w-[100%]"
              unoptimized
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
