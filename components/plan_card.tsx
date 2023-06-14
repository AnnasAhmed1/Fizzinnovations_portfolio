import React from "react";
import { H2, H4 } from "./helper";
import DoneIcon from "@mui/icons-material/Done";
import ButtonComp from "./button_comp";

const PlanCard = () => {
  const featuresList = [
    "24/7 system monitoring",
    "Security management",
    "Secure finance backup",
    "Remote support",
  ];
  return (
    <div
      className="
    py-[8%]
    max-lg:py-[6%]
    shadow-cardShadow
    bg-white
    rounded-lg
    flex
    flex-col
    gap-6
    items-center/
    justify-center
    "
    >
      <div
        className="
        px-[8%]
        max-sm:px-[3%]
        
        "
      >
        <H4 text="Basic Plan"
        className="
        mb-[10px]
        "
        />
        <p
          className="
        text-[#67687a]
        max-lg:text-sm
        "
        >
          Our purpose is to build solutions that remove barriers preventing
          people.
        </p>
      </div>
      <p
        className="
        bg-blue-purple-gradient
        text-4xl
        text-white
        font-bold
        text-center
        py-3
        "
      >
        $29{" "}
        <span
          className="
        text-base
        font-normal
        "
        >
          / monthly
        </span>
      </p>
      <ul
        className="
        px-[8%]
        max-sm:px-[3%]
        "
      >
        {featuresList?.map((v, i) => (
          <li
            className={`
          text-[#67687a]
          flex
          items-center
          gap-[2px]
          pl-3
          py-3
          ${i%2!==0? "bg-[#EEF2FB]" :""}
          max-lg:text-sm

          `}
          >
            <DoneIcon
              className="
            text-[#7114ef]
            text-base
            font-bold
            "
            />
            {v}
          </li>
        ))}
      </ul>
     

      <button
      className={`
    bg-blue-purple-gradient
    text-white
    font-bold
    text-sm
    rounded-[50px]
    py-3
    mx-[7%]
    max-sm:mx-[3%]
    `}
    >
      Get a free trial
   
    </button>
    </div>
  );
};

export default PlanCard;
