import React from "react";
import EducationalSitesCard from "@/components/UI/EducationalSitesCard";
const index = () => {
  return (
    <div className="bg-[linear-gradient(180deg,rgba(232,141,51,0.5)_0%,rgba(44,96,118,0.89)_100%),url('https://staging.freeforcharity.org/wp-content/uploads/2021/07/pexels-serpstat-572056.jpg'))] bg-cover bg-center pt-[67px] pb-[67px]">
      <div className="py-[27px] w-[80%] mx-auto">
        <h1 className="text-center pb-[10px] tracking-[1px] mb-[11px] text-[40px] text-[#333] font-[700] leading-[44px]">
          Educational Sites for Starting a Business
        </h1>
        <div className="w-[18%] mx-auto h-[5px] bg-[#E88D33]"></div>
      </div>

      <div className="py-[27px] w-[80%] mx-auto max-w-[1080px] grid grid-cols-3 gap-[60px] items-start">
        <EducationalSitesCard
          imageSrc="/Images/custom-logo.png"
          title="ittybiz.com Great site for ultra small business info"
          link="https://example.com"
        />
        <EducationalSitesCard
          imageSrc="/Images/custom-logo.png"
          title="earn1k.com Program for earning your for $1000 on the side by Ramit"
          link="https://example.com"
        />
        <EducationalSitesCard
          imageSrc="/Images/custom-logo.png"
          title="appsumo.com Another program for earning your first money online"
          link="https://example.com"
        />
      </div>

      <div className="py-[27px] w-[50%] mx-auto max-w-[1080px] grid grid-cols-2 gap-[60px] items-start">
        <EducationalSitesCard
          imageSrc="/Images/custom-logo.png"
          title="100startup.com First book on starting a business"
          link="https://example.com"
        />
        <EducationalSitesCard
          imageSrc="/Images/custom-logo.png"
          title="theleanstartup.com The next step up book on starting a business"
          link="https://example.com"
        />
      </div>
    </div>
  );
};

export default index;
