import React from "react";
import Image from "next/image";
import { FaInfoCircle } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";

const Index = () => {
  return (
    <div>
      <section className="py-[54px] w-[90%] md:w-[80%] mx-auto">
        <div className="flex mt-[40px]">
          {/* Right Column – ONLY the image wrapper is fixed */}
          <div className="mr-[60px] w-[47.25%] h-auto">
            <div className="relative w-full h-[685px]">
              <Image
                src="/Images/Endowment-Features.webp"
                alt="my image"
                fill
                className="object-cover rounded-[6px] shadow-[0px_40px_112px_-24px_rgba(0,0,0,0.12)]"
                priority
              />
            </div>
          </div>
          {/* Left Column */}
          <div className="w-[47.25%]">
            <h1
              className="mb-[10px] text-[50px] text-[#111111] font-[500] leading-[60px]"
              id="cinzel"
            >
              Endowment Features
            </h1>
            <div className="flex mb-[30px]">
              <div>
                <FaInfoCircle className="text-[#003566] text-[40px]" />
              </div>
              <div className="pl-[15px]">
                <h1
                  className="text-[18px] text-[#111111] pb-[10px] font-[500]"
                  id="cinzel"
                >
                  Sustainable Funding
                </h1>

                <p
                  className="text-[16px] text-[#000000a3] font-[500] leading-[28px]"
                  id="fauna-font"
                >
                  The Endowment ensures that only the investment gains are used,
                  providing a sustainable funding source for the Free For
                  Charity Domain Program.
                </p>
              </div>
            </div>

            <div className="flex mb-[30px]">
              <div>
                <FaChartPie className="text-[#003566] text-[44px]" />
              </div>
              <div className="pl-[15px]">
                <h1
                  className="text-[18px] text-[#111111] pb-[10px] font-[500]"
                  id="cinzel"
                >
                  Long-Term Impact
                </h1>

                <p
                  className="text-[16px] text-[#000000a3] font-[500] leading-[28px]"
                  id="fauna-font"
                >
                  By supporting the Endowment, you contribute to a lasting
                  legacy that will continuously support charities in need of
                  digital resources.
                </p>
              </div>
            </div>

            <div className="flex">
              <div>
                <FaCreditCard className="text-[#003566] text-[50px]" />
              </div>
              <div className="pl-[15px]">
                <h1
                  className="text-[18px] text-[#111111] pb-[10px] font-[500]"
                  id="cinzel"
                >
                  Goal of $1,000,000{" "}
                </h1>

                <p
                  className="text-[16px] text-[#000000a3] font-[500] leading-[28px]"
                  id="fauna-font"
                >
                  Our target is to raise $1,000,000 to secure the future of the
                  program, ensuring ongoing support for countless charities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
