import Image from "next/image";
import React from "react";
import { H4 } from "./helper";

const ServiceCard = ({service,icon}:{service:string,icon:string}) => {
  return (
    <div
      className="
      flex-col
      text-center
      gap-4
      z-[2]
      w-[210px]
      h-[210px]
      bg-white
      shadow-md
      px-4
      py-8
      container1
      flex
      justify-center
      items-center
      hover:text-white
      max-lg:w-[30%]
      max-md:w-full

      "
    >
      <Image
        src={require(`../assets/icons/${icon}`)}
        alt="ui/ux"
        className="w-16 "
      />
      <svg>

      </svg>
      <h2 className={`text-xl font-bold`}>
        {service}
        <br />
        Services
      </h2>
    </div>
  );
};

export default ServiceCard;
