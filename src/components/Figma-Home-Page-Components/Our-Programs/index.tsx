import React from "react";
import Image from "next/image";
import OrangeFaqItem from "@/components/UI/OrangeFaqItem";

const index = () => {
  return (
    <div className="py-[52px]">
      <div className="w-[90%] lg:px-[20px] mx-auto">
        <h1
          className="font-[400] text-[40px] lg:text-[48px]  tracking-[0] text-center mx-auto mb-[50px]"
          id="faustina-font"
        >
          Our Programs
        </h1>

        <div className="lg:pl-[50px]">
          <div className="mb-[40px]  flex items-center gap-[20px]">
            <div className="w-[100px] flex items-center justify-center p-2 h-[100px] bg-[#2A6682] rounded-full">
              <div className="relative w-[56px] h-[56px]">
                <Image
                  src="/Svgs/FFC-Domains.svg"
                  alt="FFC-Domains"
                  fill
                ></Image>
              </div>
            </div>
            <h1 className="text-[36px] font-[400] " id="lato-font">
              FFC Domains
            </h1>
          </div>
          <p className="text-[25px] font-[400] " id="lato-font">
            Provides free .org domain names, Microsoft 365 with Outlook email, &
            Microsoft Teams to 501c3 charities.
          </p>
          <div className="flex items-center justify-center py-[30px]">
            <a
              href="#"
              className="inline-flex items-center justify-center w-[328px] h-[62px] rounded-[27px] gap-[10px] 
             px-[32px] py-[18px] bg-[#2A6682] text-white opacity-100 text-[25px]  font-[400]"
              id="lato-font"
            >
              Learn More and Apply
            </a>
          </div>
        </div>

        {/* faqs  */}
        <div>
          <OrangeFaqItem title=".org Domain Registration">
            <ul className="list-disc list-inside">
              <li className="">
                For You: Leverage a .org domain name to enhance your charitys
                credibility, trustworthiness, and online presence, making it
                easier to attract donors and supporters
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="Cloudflare DNS">
            <ul className="list-disc list-inside">
              <li className="">
                For You: Faster website load times and enhanced security
              </li>
              <li className="">
                For Us: Centralized management and automation tools.
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="Charity Email Address">
            <ul className="list-disc list-inside">
              <li className="">
                For You: Using a charity email address (e.g.,
                yourname@yourcharity.org) enhances your organizations
                credibility and professionalism, making it easier to build trust
                with donors, volunteers, and stakeholders
              </li>
              <li className="">
                For Us: We benefit by ensuring charities use professional email
                addresses, which helps maintain our servers integrity and
                provides a more secure and reliable communication platform for
                our volunteers
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="Microsoft 365">
            <ul className="list-disc list-inside">
              <li className="">
                For You: Professional email and collaboration tools
              </li>
              <li className="">
                For Us: Streamlined communication and support processes
              </li>
            </ul>
          </OrangeFaqItem>
        </div>

        <div className="mt-[60px]">
          <div className="lg:pl-[50px] mb-[40px]  flex items-center gap-[20px]">
            <div className="w-[100px] flex items-center justify-center p-2 h-[100px] bg-[#2A6682] rounded-full">
              <div className="relative w-[56px] h-[56px]">
                <Image
                  src="/Svgs/FFC-Hosting.svg"
                  alt="FFC-Domains"
                  fill
                ></Image>
              </div>
            </div>
            <h1 className="text-[36px] font-[400]  " id="lato-font">
              FFC Hosting
            </h1>
          </div>
          <p className="text-[25px] font-[400]  " id="lato-font">
            Free shared hosting for nonprofit organizations, along with
            WordPress installation and management, and access to our premium
            plugins and themes from:
          </p>
          <div className="flex items-center justify-center py-[30px]">
            <a
              href="#"
              className="inline-flex items-center justify-center w-[328px] h-[62px] rounded-[27px] gap-[10px] 
             px-[32px] py-[18px] bg-[#2A6682] text-white opacity-100 text-[25px]  font-[400]"
              id="lato-font"
            >
              Learn More and Apply
            </a>
          </div>
        </div>

        {/* faqs  */}
        <div>
          <OrangeFaqItem title="Northwest Registered Agent">
            <ul className="list-disc list-inside">
              <li className="">
                For You: Leverage Northwest Registered Agents services to
                maintain compliance with state requirements, including
                registered agent services, nonprofit corporation filing, and
                initial charity IRS application.
              </li>
              <li className="">
                For Us: Efficiently support charities by ensuring they meet
                legal requirements and train our volunteers on managing
                compliance, business formation processes, and IRS applications.
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="VolunteerMatch">
            <ul className="list-disc list-inside">
              <li className="">
                For You: Access to a large pool of potential volunteers
              </li>
              <li className="">
                For Us: Validation of your active community engagement
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="TechSoup">
            <ul className="list-disc list-inside">
              <li className="">
                For You: Access to discounted software and technology resources
              </li>
              <li className="">
                For Us: Additional validation of your non-profit status
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="PayPal">
            <ul className="list-disc list-inside">
              <li className="">
                For You: Easy, secure online donation processing
              </li>
              <li className="">
                For Us: Standardized financial transaction system for all
                partners
              </li>
            </ul>
          </OrangeFaqItem>
        </div>

        <div className="lg:w-[90%] mx-auto text-center pb-[54px] pt-[20px]">
          <h1
            className="text-[36px] font-[400] pt-[22px] pb-[30px]"
            id="lato-font"
          >
            Ready to Get Started Now?
          </h1>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-o sm:gap-6 w-[100%] gap-[20px]">
            <a
              href="#"
              className="rounded-[20px] border-[5px] border-[#2A6682] flex items-center justify-center text-black font-[400] text-[25px] px-[28px] py-[16px]"
              id="lato-font"
            >
              501 (c)3 Charities Click Here To Get Started!
            </a>
            <a
              href="#"
              className="rounded-[20px] border-[5px] border-[#2A6682] flex items-center justify-center text-black font-[400] text-[25px] px-[28px] py-[16px]"
              id="lato-font"
            >
              Pre-501 (c)3 Charities Click Here To Get Started!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
