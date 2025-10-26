import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface TransparentbtnProps {
  text: string;
}

const Transparentbtn: React.FC<TransparentbtnProps> = ({ text }) => {
  return (
    <div>
      <a
        href="https://www.paypal.com/donate/?hosted_button_id=YOUR_ID"
        className="
              group relative my-4 flex w-full items-center justify-between
              border-2 border-[#2ea3f2] px-4 py-2.5 text-[#2ea3f2]
              transition-all duration-300 rounded
              hover:border-transparent hover:bg-gray-200 mx-auto md:mx-0 max-w-fit
            "
        id="aria-font"
      >
        <span className="text-[17px] font-medium leading-tight sm:text-[18px] md:text-[20px] transition-transform duration-300 group-hover:-translate-x-1">
          {text}
        </span>

        {/* Arrow slides in smoothly on hover */}
        <IoIosArrowForward
          className="h-6 w-6 translate-x-2 opacity-0 text-[#2ea3f2] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          strokeWidth={2}
        />
      </a>
    </div>
  );
};

export default Transparentbtn;
