import React from "react";

interface ResultCardProps {
  title: string;
  description: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ title, description }) => {
  return (
    <div className="w-full h-[300px] px-[20px] flex items-center justify-center flex-col border-[5px] border-[#F58629] rounded-[20px] shadow-[0px_16px_16px_0px_#11253E0F]">
      <h1 className="text-[64px] font-[400]" id="faustina-font">
        {title}
      </h1>
      <p className="text-center text-[25px] font-[400]" id="lato-font">
        {description}
      </p>
    </div>
  );
};

export default ResultCard;
