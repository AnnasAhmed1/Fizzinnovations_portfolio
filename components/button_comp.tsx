import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ButtonComp = ({
  text,
  width = true,
  padding,
  className,
}: {
  text: string;
  width?: boolean;
  padding?: string;
  className?: string;
}) => {
  return (
    <button
      className={`
    bg-blue-purple-gradient
    text-white
    font-bold
   ${padding ? padding : "py-4"}
    rounded-[50px]
   ${width ? "w-[180px]" : ""}
   ${className}
    `}
    >
      {text}
      <ArrowForwardIcon
        className="
      ml-2
      "
      />
    </button>
  );
};

export default ButtonComp;
