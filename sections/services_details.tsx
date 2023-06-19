import React, { useState } from "react";
import Styles from "../styles/Home.module.css";
import TextWithBackground from "@/components/text_with_background";
import { H1 } from "@/components/helper";
import ServiceDetailsCard from "@/components/service_details_card";
import ServiceDetailsCardHover from "@/components/service_details_card_hover";
import ServiceDetailsSlider from "@/components/service_details_slider";

const ServicesDetails = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHoverEnter = () => {
    setIsHovered(true);
  };
  const handleHoverOut = () => {
    setIsHovered(false);
  };
  return (
    <div
      id="services"
      className={`
    ${Styles.grayBackground}
    flex
    flex-col
    justify-center
    py-[5%]
    px-[5%]
    max-sm:py-0
    max-sm:pt-[50px]
    `}
    >
      <div className="mx-auto">
        <TextWithBackground text="~Our Awesome Services" />
      </div>
      <H1
        initialText="We Are"
        colouredText=" Dedicated "
        endText="To Serve You All Time."
        className="px-[30%] text-center mt-[20px]
        max-lg:px-[12%]
        max-sm:px-0
        "
      />
      <ServiceDetailsSlider />
    </div>
  );
};

export default ServicesDetails;
