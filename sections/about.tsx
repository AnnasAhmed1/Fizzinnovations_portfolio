import Image from "next/image";
import React from "react";
import ButtonComp from "@/components/button_comp";
import { H1, H2 } from "@/components/helper";
import CallIcon from "@mui/icons-material/Call";
// import AOS from 'aos';
import "aos/dist/aos.css";

import TextWithBackground from "@/components/text_with_background";

const About = () => {
  return (
    <section
      id="about"
      className="
      flex
      px-[12%]
      justify-between
      items-center
      min-h-[100vh]
      max-lg:py-[12%]
      max-md:py-[20%]
      max-md:flex-col
      max-md:gap-12
      "
      data-aos="fade-up"
      // data-aos-anchor-placement="bottom-center"
      // data-aos-duration="15000"
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
          initialText="Find"
          colouredText=" The Perfect "
          endText="IT Service for Your Business"
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
          At Fizz Innovations, we’re a high-energy team of tech aficionados who
          thrive on creativity and problem-solving. With years of know-how under
          our belts, we’ve got the smarts to build tech that really delivers.
          Our mission is to leverage our skills to help our clients take charge
          of their futures and thrive in today’s rapidly-evolving technological
          landscape.
        </p>
        {/* <div
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
        </div> */}

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
