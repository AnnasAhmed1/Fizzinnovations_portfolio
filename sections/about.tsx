import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import WhiteButtonComp from "@/components/white_button_comp";
import ButtonComp from "@/components/button_comp";
import { H1, H2 } from "@/components/helper";
import CallIcon from "@mui/icons-material/Call";

import TextWithBackground from "@/components/text_with_background";

const About = () => {
  return (
    <section
      className="
      flex
      px-[12%]
      justify-between
      items-center
      min-h-[100vh]
      max-lg:py-[12%]
      max-md:py-[20%]
      max-sm:py-[35%]
      max-md:flex-col
      max-md:gap-12
      "
    >
      <div
        className={`
      {styles.aboutBackground}
      flex-1
      
      `}
      >
        <Image
          src={require("../assets/about_image.jpeg")}
          alt="about"
          className="
        rounded-[20px]
        "
        />
      </div>
      <div
        className="
      flex-1
      flex
      flex-col
      gap-8
      "
      >
        <TextWithBackground text="About our company" />
        <H1
          initialText="Choose"
          colouredText=" The Best"
          endText=" IT Service Company"
        />
        <p
          className="
        text-[17px]
        text-[#67687A]
        border-l
        border-[blue]
        pl-4
        "
        >
          An IT firm or MSP who keeps your IT running smoothly at all times is
          like a plumber who fixes your pipes; that's what they are supposed to
          do. Many IT firms struggle.
        </p>
        <div
          className="
        
        justify-between
        flex-wrap/
        flex
        border-y
        py-8
        pr-24
        font-bold
        text-lg
        max-lg:pr-4
        max-md:flex-col
        max-md:gap-8
        "
        >
          <h4
            className="
          flex
          items-center
          gap-4
          "
          >
            <Image
              src={require("../assets/icons/reliability_icon.png")}
              alt="reliability"
              className="w-12"
            />
            Moneyback
            <br />
            Gurantee
          </h4>
          <h4
            className="
            flex
            items-center
            gap-4
  
            "
          >
            <Image
              src={require("../assets/icons/operation_icon.png")}
              alt="operation"
              className="w-12"
            />
            Technical
            <br />
            Support
          </h4>
        </div>

        <div
          className="
        flex
        flex-wrap
        pr-16
        justify-between
        items-center
        max-lg:gap-6
        max-sm:pr-0

        "
        >
          <ButtonComp text={"Contact us"} />
          <div
            className="
          flex
          items-center
          gap-2
          "
          >
            <CallIcon
              className="'
            text-[blue]
            rounded-[50%]
            border
            w-[45px]
            h-[45px]
            p-2
            "
            />
            <div>
              <p
                className="
              text-[#67687a]
              text-[15px]
              "
              >
                Call for help
              </p>
              <H2 text="+92 322 65562626" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
