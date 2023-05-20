import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ButtonComp = ({
  text,
  width = true,
  className,
}: {
  text: string;
  width?: boolean;
  className?: string;
}) => {
  return (
    <button
      className={`
    bg-blue-purple-gradient
    text-white
    font-bold
    py-4
    rounded-[50px]
   ${width ? "w-[180px]" : ""}
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
