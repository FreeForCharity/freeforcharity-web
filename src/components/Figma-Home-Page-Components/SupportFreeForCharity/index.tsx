import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div className="">
      <div className="w-[90%] mx-auto py-[27px] mb-[60px] px-[20px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center w-full md:w-[906px] mx-auto mb-[50px]"
          id="faustina-font"
        >
          Support Free For Charity
        </h1>

        <div className="flex items-center flex-col lg:flex-row gap-[40px] lg:gap-[20px]">
          <div className="flex flex-col w-full lg:w-[50%]">
            <p
              className="mb-[20px] font-[400] text-[25px] leading-[150%] tracking-[0] text-left"
              id="lato-font"
            >
              By donating you help drive our mission ad allow us to support more
              charities with our Domain, Website, and other services. 
            </p>
            <a
              href="#"
              className="bg-[#2A6682] w-[317px] h-[54px] top-[1810px] left-[240px] opacity-100 rounded-[27px] px-[32px] py-[18px] flex items-center justify-center gap-[10px] text-[20px] font-[400] text-[#FFFFFF] mx-auto"
              id="lato-font"
            >
              Donate to Free For Charity
            </a>
          </div>
          <div className="w-full lg:w-[50%]">
            <div className="relative w-full lg:w-[578px] h-[300px] lg:h-[386px]">
              <Image
                src="/Images/support-free-for-charity.png"
                alt="support free for charity image"
                fill
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
