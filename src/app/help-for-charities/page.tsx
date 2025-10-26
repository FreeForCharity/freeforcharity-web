"use client";

import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import HelpForCharities from "@/components/help-for-charities-components/Help-for-Charities-and-Nonprofit-Groups";
import AccordionSection from "@/components/help-for-charities-components/AccordianSection";
import ReadyToGetStarted from "@/components/help-for-charities-components/Ready-to-Get-Started-Now";
import CharityNonprofitDirectorFaq from "@/components/help-for-charities-components/Charity-Nonprofit-Director-Faq";
import CallSection from "@/components/help-for-charities-components/call-section";

const Page: React.FC = () => {
  return (
    <div>
      <HeroSection
        heading="Help For Charities"
        paragraph="If you are representing a charity or you currently work for a charity and want to improve your own skills start here to get help for your organization. You get instant access to many of our free tools and products right away!"
        heroImg="/images/volunteer.webp"
      />
      <HelpForCharities />
      <AccordionSection />
      <ReadyToGetStarted />
      <CharityNonprofitDirectorFaq />
      <ReadyToGetStarted />
      <CallSection />
    </div>
  );
};

export default Page;
