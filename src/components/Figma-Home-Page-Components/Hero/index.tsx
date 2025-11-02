import React from "react";
import Image from "next/image";

const CharityHeroBackground = () => {
  return (
    <div className="relative w-full min-h-screen pb-[100px] overflow-hidden">
      {/* 1. Base Blue Layer */}
      <div className="absolute inset-0 bg-[#2E6F8E]" />
      {/* 2. ULTRA-THIN White Diagonal Strip - HALF HEIGHT */}
      <div
        className="absolute inset-0 bg-white"
        style={{
          clipPath: "polygon(0% 108%, 100% 32%, 100% 35%, 0% 111%)",
        }}
      />

      {/* 3. Orange Bottom-Right Section - Starts exactly where white ends */}
      <div
        className="absolute inset-0 bg-[#F57C20]"
        style={{
          clipPath: "polygon(0% 111%, 100% 35%, 100% 100%, 0% 100%)",
        }}
      />

      {/* div with content of the section  */}
      {/* div with content of the section  */}
      <div className="flex items-center justify-between relative z-10 text-white pt-[130px] w-[90%] mx-auto max-w-[1280px] px-[20px]">
        <div className="w-[565px]">
          <h1
            className="text-[60px] font-[500] text-[#FFFFFF] leading-[120%]  mb-[20px]"
            id="faustina-font"
          >
            Welcome to <br /> Free For Charity
          </h1>
          <p
            className="text-[24px] font-[400] leading-[120%] text-[#FFFFFF] mb-[20px]"
            id="lato-font"
          >
            Connecting Students, Professionals, & Businesses with Charities in
            Need
          </p>
          <a
            href="#"
            className="top-[378px]  w-[351px] h-[54px] opacity-100 rounded-[27px] px-[32px] py-[18px] flex items-center justify-center gap-[10px] bg-[#FFFFFF] text-[#113563] text-[20px] font-[400] leading-[100%] mb-[10px]  whitespace-nowrap"
            id="lato-font"
          >
            Volunteer
          </a>
          <div className="flex gap-[5px]">
            <a
              href="#"
              className="top-[442px] w-[173px] h-[54px] opacity-100 rounded-[27px] px-[32px] py-[18px] flex items-center justify-center gap-[10px] bg-[#FFFFFF] text-[#113563] text-[20px] font-[400] leading-[100%] whitespace-nowrap"
              id="lato-font"
            >
              Donate
            </a>
            <a
              href="#"
              className="top-[442px]  w-[173px] h-[54px] opacity-100 rounded-[27px] px-[32px] py-[18px] flex items-center justify-center gap-[10px] bg-[#FFFFFF] text-[#113563] text-[20px] font-[400] leading-[100%] whitespace-nowrap"
              id="lato-font"
            >
              Our Programs
            </a>
          </div>
        </div>
        <div className="p-12 w-[445px] h-[445px] bg-[#FFFFFF] rounded-full">
          <div className="w-full h-full relative">
            <Image
              src="/Images/figma-hero-img.png"
              alt="Hero image"
              fill
              className=""
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharityHeroBackground;
