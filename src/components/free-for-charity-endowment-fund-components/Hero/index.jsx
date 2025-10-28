import React from "react";

const Index = () => {
  return (
    <div className="bg-[#003566]">
      <section className="min-h-screen pt-[160px] pb-[80px] w-[90%] md:w-[80%] mx-auto">
        <div className="mx-auto flex items-start">
          {/* Left Column: Heading + Image */}
          <div className="text-center md:text-left mr-[35px]">
            <h1
              className="text-[72px] font-[500] leading-[83px] text-white"
              id="cinzel"
            >
              Empower Charities with Free Domains
            </h1>
          </div>

          {/* Right Column: Button Only */}
          <div className="flex justify-center items-center">
            <a
              href="#"
              className="whitespace-nowrap px-[24px] py-[12px] hover:bg-gray-100 transition shadow-lg text-[#003566] !border-0 rounded-full text-[14px] font-[700] leading-[24px] bg-white"
              id="fauna-font"
            >
              Support the Endowment
            </a>
          </div>
        </div>
        <div>
          <div className="flex justify-center md:justify-start pt-[64px]">
            <img
              src="/Images/hero-img.webp"
              alt="Person signing donation agreement"
              className="w-full max-w-[512px] rounded-[6px] shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
