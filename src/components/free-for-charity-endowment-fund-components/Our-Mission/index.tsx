import React from "react";
import Image from "next/image";

const Index = () => {
  return (
    <div>
      <section className="py-[54px] w-[90%] md:w-[80%] mx-auto">
        <h1
          className="pt-[27px] mb-[10px] text-[50px] text-[#111111] text-center font-[500] leading-[60px] pb-[37px]"
          id="cinzel"
        >
          Our Mission: Empowering Charities
        </h1>
        <div className="flex items-stretch mt-[40px]">
          {/* Left Column */}
          <div className="mr-[60px] w-[47.25%] flex">
            <p
              className="text-[16px] text-[#000000a3] font-[500] leading-[28px]"
              id="fauna-font"
            >
              The Free For Charity Domain Program is dedicated to providing
              essential digital tools to charities at no cost. By offering free
              domain names and setting up Microsoft 365 accounts, we help
              charities establish their online presence and streamline
              communication. Our mission is to ensure that every charity can
              focus on their cause without the burden of digital infrastructure
              costs. Through this program, we aim to empower charities to reach
              wider audiences and amplify their impact.
            </p>
          </div>

          {/* Right Column – ONLY the image wrapper is fixed */}
          <div className="w-[47.25%] h-full">
            <div className="relative w-full h-[500px]">
              <Image
                src="/Images/our-mission.webp"
                alt="my image"
                fill
                className="object-cover rounded-[6px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
