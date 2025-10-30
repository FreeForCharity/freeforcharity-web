// import React from "react";
// import Image from "next/image";
// import { IoIosArrowForward } from "react-icons/io";

// const Index = () => {
//   return (
//     <div className="py-[91px] bg-[linear-gradient(180deg,#0068b7_0%,rgba(44,96,118,0.75)_100%),url('https://staging.freeforcharity.org/wp-content/uploads/2021/07/pexels-cottonbro-4064840.jpg')] bg-[#0f82af] bg-cover bg-center bg-no-repeat">
//       <div className="w-[80%] mx-auto max-w-[1080px] flex items-start">
//         {/* Left Section */}
//         <div className="w-[46%] mr-[86px] flex flex-col items-start">
//           {/* Image */}
//           <div className="relative w-full h-[260px] mb-[30px]">
//             <Image
//               src="https://freeforcharity.org/wp-content/uploads/2021/07/credit-karma-logo.png"
//               alt="Placeholder Image"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Text Content */}
//           <div className="flex-1 text-left">
//             <div className="flex mb-5">
//               <div className="h-[3px] bg-[#e88d33] w-[18%]"></div>
//             </div>

//             <h3 className="text-[28px] font-[600] text-white leading-[36px] pb-[10px] tracking-[1px]">
//               Credit Karma (free add supported)
//             </h3>

//             <div
//               className="text-white text-[18px] leading-[24px] font-[500]"
//               id="lato-font"
//             >
//               Credit Karma actually gives you a FREE credit score and report
//               from transunion. When I say free I mean it. At no time does it
//               even ask you for a credit card so it is impossible to charge you.
//               It uses the same model as Mint.com for income and serves you with
//               information based on what it pulls. This is a great way to get
//               your score and report alerts. You don’t really need all three
//               reports this gets the job done.
//             </div>

//             {/* Button */}
//             <a
//               href="https://example.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//                 relative group inline-flex items-center justify-center gap-2
//                 mt-[25px] px-[30px] py-[6px]
//                 text-white border border-[#f27022] rounded-[10px]
//                 text-[18px] bg-[#f27022]
//                 transition-all duration-300 ease-in-out
//                 shadow-md leading-[31px] font-[600]
//                 hover:shadow-[0px_12px_18px_-6px_#f27022]
//               "
//               id="montserrat-font"
//             >
//               <span className="transition-all duration-300 group-hover:translate-x-1">
//                 Get Started
//               </span>
//               <IoIosArrowForward
//                 className="
//                   opacity-0 translate-x-[-8px]
//                   group-hover:opacity-100 group-hover:translate-x-0
//                   transition-all duration-300 ease-in-out
//                   w-[20px] h-[20px]
//                 "
//               />
//             </a>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="w-[46%] flex flex-col items-start">
//           {/* Image */}
//           <div className="relative w-full h-[260px] mb-[30px]">
//             <Image
//               src="https://freeforcharity.org/wp-content/uploads/2021/07/482664-rescuetime.jpg"
//               alt="Placeholder Image"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Text Content */}
//           <div className="flex-1 text-left">
//             <div className="flex mb-5">
//               <div className="h-[3px] bg-[#e88d33] w-[18%]"></div>
//             </div>

//             <h3 className="text-[28px] font-[600] text-white leading-[36px] pb-[10px] tracking-[1px]">
//               Rescue Time (free with a paid premium version)
//             </h3>

//             <div
//               className="text-white text-[18px] leading-[24px] font-[500]"
//               id="lato-font"
//             >
//               Rescue Time is another FREE tool that really tells you about
//               yourself and how you spend your time. It is amazing once you get
//               it set up. The only downside is that you may not be able to
//               install this on your work computer. NOTE: I use the paid version
//               on my systems.
//             </div>

//             {/* Button */}
//             <a
//               href="https://example.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//                 relative group inline-flex items-center justify-center gap-2
//                 mt-[25px] px-[30px] py-[6px]
//                 text-white border border-[#f27022] rounded-[10px]
//                 text-[18px] bg-[#f27022]
//                 transition-all duration-300 ease-in-out
//                 shadow-md leading-[31px] font-[600]
//                 hover:shadow-[0px_12px_18px_-6px_#f27022]
//               "
//               id="montserrat-font"
//             >
//               <span className="transition-all duration-300 group-hover:translate-x-1">
//                 Get Started
//               </span>
//               <IoIosArrowForward
//                 className="
//                   opacity-0 translate-x-[-8px]
//                   group-hover:opacity-100 group-hover:translate-x-0
//                   transition-all duration-300 ease-in-out
//                   w-[20px] h-[20px]
//                 "
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;
"use client";
import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const EducationalSitesSection = () => {
  return (
    <div className="py-[91px] bg-[linear-gradient(180deg,#0068b7_0%,rgba(44,96,118,0.75)_100%),url('https://staging.freeforcharity.org/wp-content/uploads/2021/07/pexels-cottonbro-4064840.jpg')] bg-[#0f82af] bg-cover bg-center bg-no-repeat">
      <div className="w-[80%] mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2
          className="text-[40px] font-[700] text-white text-center leading-[44px] mb-4 [font-variant:small-caps] tracking-[1px]"
          id="lato-font"
        >
          Educational Sites for
          <span className="text-[#e88d33]"> Everyone</span>
        </h2>

        <div className="h-[5px] bg-[#e88d33] w-[195px] mx-auto mb-12"></div>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-12 w-full justify-center">
          {/* Card 1 */}
          <div className="w-full md:w-[46%] flex flex-col items-center text-center">
            {/* Icon */}
            <div className="relative w-[180px] h-[180px] mb-6">
              <Image
                src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
                alt="Automation"
                fill
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3
                className="text-[24px] font-[700] text-white leading-[31px] pb-[10px]"
                id="faustina-font"
              >
                iwillteachyoutoberich.com Best for automation and earning more
              </h3>

              {/* Button */}
              <a
                href="https://iwillteachyoutoberich.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative group inline-flex items-center justify-center gap-2
                  mt-[25px] px-[30px] py-[6px]
                  text-white border border-[#f27022] rounded-[10px]
                  text-[18px] bg-[#f27022]
                  transition-all duration-300 ease-in-out
                  shadow-md leading-[31px] font-[600]
                  hover:shadow-[0px_12px_18px_-6px_#f27022]
                "
                id="montserrat-font"
              >
                <span className="transition-all duration-300 group-hover:translate-x-1">
                  Check Here!
                </span>
                <IoIosArrowForward
                  className="
                    opacity-0 translate-x-[-8px]
                    group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-300 ease-in-out
                    w-[20px] h-[20px]
                  "
                />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-[46%] flex flex-col items-center text-center">
            {/* Icon */}
            <div className="relative w-[180px] h-[180px] mb-6">
              <Image
                src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
                alt="Automation"
                fill
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3
                className="text-[24px] font-[700] text-white leading-[31px] pb-[10px]"
                id="faustina-font"
              >
                fourhourworkweek.com Another prime automation book and website
              </h3>

              {/* Button */}
              <a
                href="https://fourhourworkweek.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative group inline-flex items-center justify-center gap-2
                  mt-[25px] px-[30px] py-[6px]
                  text-white border border-[#f27022] rounded-[10px]
                  text-[18px] bg-[#f27022]
                  transition-all duration-300 ease-in-out
                  shadow-md leading-[31px] font-[600]
                  hover:shadow-[0px_12px_18px_-6px_#f27022]
                "
                id="montserrat-font"
              >
                <span className="transition-all duration-300 group-hover:translate-x-1">
                  Check Here!
                </span>
                <IoIosArrowForward
                  className="
                    opacity-0 translate-x-[-8px]
                    group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-300 ease-in-out
                    w-[20px] h-[20px]
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalSitesSection;
