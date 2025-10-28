// components/IconTextCard.tsx
import React from "react";

interface IconTextCardProps {
  /** React element – any SVG / icon component */
  icon: React.ReactNode;

  /** Optional aria-label / alt text for the icon */
  iconLabel?: string;

  /** Card text */
  text: string;
}

const IconTextCard: React.FC<IconTextCardProps> = ({
  icon,
  iconLabel = "icon",
  text,
}) => {
  return (
    <div
      className="
        bg-white 
        rounded-[10px] 
        overflow-hidden 
        px-[20px] 
        pt-[50px] 
        pb-[50px] 
        shadow-[0_2px_18px_rgba(0,0,0,0.3)]
        flex flex-col items-center space-y-6 
        w-full max-w-sm mx-auto
      "
    >
      {/* Icon – rendered directly from props */}
      <div
        className="text-[#277CA0] flex items-center justify-center mb-[30px]"
        aria-label={iconLabel}
      >
        {icon}
      </div>

      {/* Text */}
      <h3
        className="text-[30px] font-bold leading-[30px] text-center text-gray-900"
        id="lato-font"
      >
        {text}
      </h3>
    </div>
  );
};

export default IconTextCard;
