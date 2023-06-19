import React from "react";
import Image from "next/image";
import { H3, H4, H5 } from "./helper";
import styles from "../styles/Home.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ServiceDetailsCardHover = ({
  title,
  icon,
}: {
  title: string;
  icon: string;
}) => {
  return (
    <div
      className="
      flex
      flex-col
      justify-center/
      items-center
      w-[290px]
      max-lg:w-[90%]
      max-sm:w-full
      text-center
      bg-white
      shadow-sm
      px-8/
      pb-12
      max-md:pb-6
      gap-12/
      max-lg:gap-8/
      container
      transition-all
      duration-500
      relative
      rounded-tr-[50px]
      mt-[20px]
      h-[360px]
      justify-between
      "
    >
      <div
        className="
        bg-blue-purple-gradient
        w-full
        rounded-tr-[50px]
        "
      >
        <div
          className={`
          h-[160px]
          w-full
          ${styles.overlayBackground}
          flex
          justify-center
          items-center
    
          `}
        >
          <div
            className="
            bg-white
            top-[-40px]
            w-[75px]
            h-[75px]
            rounded-3xl
            flex
            justify-center
            items-center
            shadow-dark
            mx-[auto]
            "
            style={{
              transform: "rotate(45deg)",
            }}
          >
            <Image
              src={require(`../assets/icons/${icon}.png`)}
              alt="ui/ux"
              className="w-[42px]"
              style={{
                transform: "rotate(-45deg)",
              }}
            />
          </div>
        </div>
      </div>

      <H5 text={title} />
      <p
        className={`
            ${styles.gradientText}
            flex
            items-center
            justify-center
            font-bold
            text-[15px]
            `}
      >
        Learn More
        <ChevronRightIcon className={`text-[#63c4ff] mt-[2px] text-[20px]`} />
      </p>
    </div>
  );
};

export default ServiceDetailsCardHover;
