"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  heading: string;
  paragraph: string;
  heroImg: string;
  fontSize?: number;
  lineHeight?: number;
  imageContainerWidth?: string; // 👈 new prop (e.g., "w-[100%]" or "w-[80%]")
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heading,
  paragraph,
  heroImg,
  fontSize,
  lineHeight,
  imageContainerWidth = "w-[62%]", // 👈 default value
}) => {
  return (
    <section
      className="w-full flex items-center overflow-hidden pt-[80px]"
      style={{
        backgroundImage: "linear-gradient(320deg, #f58c23 48%, #ffffff 48%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[90%] max-w-[100%] mx-auto pt-[90px] pb-[90px]">
        <div className="flex">
          {/* Left: Text Content */}
          <div className="w-full lg:w-[40%]">
            <h1 className="text-[#f27022] text-[60px] font-[600] leading-[78px] mb-[3px]">
              {heading}
            </h1>
            <p
              className="font-[500] w-full mt-[11px]"
              id="lato-font"
              style={{
                fontSize: fontSize ? `${fontSize}px` : "22px",
                lineHeight: lineHeight ? `${lineHeight}px` : "31px",
              }}
            >
              {paragraph}
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-[60%] pr-[50px] pl-[80px]">
            <div className={`relative ${imageContainerWidth} mx-auto`}>
              <Image
                src={heroImg}
                alt="Hero Image"
                width={1200}
                height={600}
                className="w-full h-auto"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
