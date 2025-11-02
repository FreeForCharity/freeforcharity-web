import React from "react";
import Hero from "@/components/Figma-Home-Page-Components/Hero";
import Mission from "@/components/Figma-Home-Page-Components/Mission";
import SupportFreeForCharity from "@/components/Figma-Home-Page-Components/SupportFreeForCharity";
import EndowmentFeatures from "@/components/Figma-Home-Page-Components/Endowment-Features";
import OurPrograms from "@/components/Figma-Home-Page-Components/Our-Programs";
import VolunteerwithUs from "@/components/Figma-Home-Page-Components/Volunteer-with-Us";

const index = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <SupportFreeForCharity />
      <EndowmentFeatures />
      <OurPrograms />
      <VolunteerwithUs />
    </div>
  );
};

export default index;
