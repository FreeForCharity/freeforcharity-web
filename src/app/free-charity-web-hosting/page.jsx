import React from "react";
import Hero from "@/components/free-charity-web-hosting/Hero";
import Hosting from "@/components/free-charity-web-hosting/hosting";
import AboutFFCHosting from "@/components/free-charity-web-hosting/About-FFC-Hosting";
import ThreeCards from "@/components/free-charity-web-hosting/ThreeCards";

const index = () => {
  return (
    <div>
      <Hero />
      <Hosting />
      <AboutFFCHosting />
      <ThreeCards />
    </div>
  );
};

export default index;
