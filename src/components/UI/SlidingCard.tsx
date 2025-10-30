"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

type LastPassPromoProps = {
  direction?: "left" | "right"; // "right" = image on right, slides from right to left
  subtitle: string;
  description: React.ReactNode;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  className?: string;
};

export default function LastPassPromo({
  direction = "right",
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  className = "",
}: LastPassPromoProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  // Flex direction
  const flexDirection =
    direction === "left"
      ? "flex-col md:flex-row"
      : "flex-col md:flex-row-reverse";

  // Animation: Image comes from OFF-SCREEN → ON-SCREEN
  const getImageAnimation = () => {
    if (!isVisible) {
      return direction === "left"
        ? "-translate-x-full opacity-0"
        : "translate-x-full opacity-0";
    }
    return "translate-x-0 opacity-100";
  };

  return (
    <section
      className={`py-[30px] w-[80%] mx-auto max-w-[1080px] bg-white ${className}`}
    >
      <div className="">
        <div className={`flex ${flexDirection} items-start gap-[59px]`}>
          {/* Image Section */}
          <div
            ref={imageRef}
            className="flex-1 flex justify-start overflow-hidden"
          >
            <div className="relative w-full">
              <Image
                src={imageSrc}
                alt={subtitle}
                width={400}
                height={120}
                unoptimized
                className={`
                  w-full h-auto object-contain drop-shadow-lg
                  transition-all duration-1000 ease-out
                  ${getImageAnimation()}
                `}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex mb-5">
              <div className="h-[3px] bg-[#e88d33] w-[18%]"></div>
            </div>

            <h3 className="text-[28px] font-[600] text-[#333] leading-[36px] pb-[10px]">
              {subtitle}
            </h3>

            <div
              className="text-[#333] text-[18px] leading-[24px] font-[500]"
              id="lato-font"
            >
              {description}
            </div>

            {/* Animated Button */}
            <a
              href={buttonLink}
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
                {buttonText}
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
    </section>
  );
}
