import React from "react";

interface GeneralDonationCardProps {
  title: string;
  description: string;
  img: string; // Single image URL
}

const GeneralDonationCard: React.FC<GeneralDonationCardProps> = ({
  title,
  description,
  img,
}) => {
  return (
    <div
      className="mx-auto bg-white p-6 rounded-[10px] overflow-hidden pt-[50px] pr-[20px] pb-[50px] pl-[20px] shadow-[0px_2px_18px_0px_rgba(0,0,0,0.3)]"
      id="lato-font"
    >
      <a href="#">
        {/* Title */}
        <h1 className="text-[30px] font-[700] leading-[30px] text-center pb-[10px]">
          {title}
        </h1>

        {/* Description */}
        <p className="text-[18px] font-[500] leading-[24px] text-center text-[#666] pb-[1em]">
          {description}
        </p>
      </a>

      {/* Image */}
      <div className="flex justify-center">
        <a href="#">
          <img
            src={img}
            alt="Donation image"
            className="h-12 w-auto object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default GeneralDonationCard;
