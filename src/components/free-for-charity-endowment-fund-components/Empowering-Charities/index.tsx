import React from "react";
import Image from "next/image";
import ProgressBar from "@/components/UI/ProgressBar";
const Index = () => {
  return (
    <div>
      <section className="py-[54px] w-[90%] md:w-[80%] mx-auto">
        <h1
          className="pt-[27px] mb-[10px] text-[50px] text-[#111111] text-center font-[500] leading-[60px] pb-[37px]"
          id="cinzel"
        >
          Empowering Charities Through Endowment
        </h1>
        <div className="flex items-stretch mt-[40px]">
          {/* Right Column – ONLY the image wrapper is fixed */}
          <div className="mr-[60px]  w-[36.7%] h-full">
            <div className="relative w-full h-[400px]">
              <Image
                src="/Images/Empowering-Charities.webp"
                alt="my image"
                fill
                className="object-cover rounded-[6px]"
                priority
              />
            </div>
          </div>
          {/* Left Column */}
          <div className="w-[57.8%]">
            <p
              className="text-[16px] text-[#000000a3] font-[500] leading-[28px]"
              id="fauna-font"
            >
              Our Free For Charity Domain Program has already supported over 200
              charitable organizations, providing them with essential digital
              tools to enhance their outreach and impact. With the establishment
              of the endowment we can sustainability maintain our current
              charities and support 100 new charities annually.
            </p>
            <div className="mt-[30px]">
              <ProgressBar title="Charities Supported" percentage={95} />
              <ProgressBar title="Projected Growth" percentage={85} />
              <ProgressBar title="Endowment Utilization" percentage={75} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
