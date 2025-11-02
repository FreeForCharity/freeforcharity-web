import Image from "next/image";
import React from "react";

interface SustainableFundingCardProps {
  imageUrl: string;
  title: string;
  text: string;
}

export const SustainableFundingCard: React.FC<SustainableFundingCardProps> = ({
  imageUrl,
  title,
  text,
}) => {
  return (
    <div className="py-[50px] px-[8px] xl:w-[570px] h-[470px] rounded-[16px] overflow-hidden border-[5px] border-[#2A6682]">
      {/* Image/Icon Section */}
      <div className="flex justify-center">
        <div className="relative w-[88px] h-[90px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain drop-shadow-md"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 text-center">
        <h3
          className="text-[30px] lg:text-[36px] font-[400] text-[#000000] leading-[100%] mb-4"
          id="lato-font"
        >
          {title}
        </h3>
        <p
          className="text-[22px] sm:text-[25px] font-[400] text-[#000000] leading-[120%]"
          id="lato-font"
        >
          {text}
        </p>
      </div>
    </div>
  );
};
