import React from "react";
import HeartIcon from "./hea";
import Image from "next/image";
import { H3, H4, H5 } from "./helper";

const ServiceDetailsCard = ({ className }: { className: any }) => {
  return (
    <div
      className={`
      ${className}
      flex
      flex-col
      justify-center
      items-center
      w-[290px]
      max-lg:w-[90%]
      max-sm:w-full
      text-center
      bg-white
      shadow-sm
      px-8
      max-lg:px-6
      py-16
      max-lg:py-12
      gap-4
      container
      transition-all duration-500
      relative
      rounded-tl-[50px]
      mt-[80px]
      `}
    >
      <div
        className="
        absolute
        bg-blue-purple-gradient
        top-[-40px]
        w-[75px]
        h-[75px]
        rounded-3xl
        flex
        justify-center
        items-center
        shadow-dark
        "
        style={{
          transform: "rotate(45deg)",
        }}
      >
        <Image
          src={require("../assets/icons/UIUX_icon.png")}
          alt="ui/ux"
          className="w-[42px]"
          style={{
            transform: "rotate(-45deg)",
          }}
        />
      </div>
      <H5 text="UI/UX Design" />
      <div
        className="
        bg-blue-purple-gradient
        w-[45%]
        h-[3px]
        rounded-[50px]
        "
      ></div>
      <p className="text-[#57586d]">
        We're wildly passionate about our purpose, and it has us transforming
        everything.
      </p>
    </div>
  );
};

export default ServiceDetailsCard;
