import React from "react";

const WhiteButtonComp = ({ text }: { text: string }) => {
  return (
    <div>
      <button
        className={`
    bg-white
    text-white
    font-bold
    px-16
    py-4
    rounded-[50px]
    `}
      >
        {text}
      </button>
    </div>
  );
};

export default WhiteButtonComp;
