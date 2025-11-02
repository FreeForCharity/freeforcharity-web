import React from "react";
import Hero from "@/components/Figma-Home-Page-Components/Hero";
import Mission from "@/components/Figma-Home-Page-Components/Mission";
import SupportFreeForCharity from "@/components/Figma-Home-Page-Components/SupportFreeForCharity";
import EndowmentFeatures from "@/components/Figma-Home-Page-Components/Endowment-Features";
import OurPrograms from "@/components/Figma-Home-Page-Components/Our-Programs";

const index = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <SupportFreeForCharity />
      <EndowmentFeatures />
      <OurPrograms />
    </div>
  );
};

export default index;
