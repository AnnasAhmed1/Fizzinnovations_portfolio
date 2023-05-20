import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Home.module.css";
import ButtonComp from "../components/button_comp";
import TextWithBackground from "@/components/text_with_background";
import ServiceCard from "@/components/service_card";
import { H6 } from "@/components/helper";
import Image from "next/image";
import IconsSlider from "@/components/icons_slider";

export default function SliderComp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // <Slider {...settings}>
    <div>
      <div
        className={`
       ${styles.container}
          flex
          flex-col
          gap-6
          px-[10%]
          justify-center
          `}
      >
        <TextWithBackground text="We are IT service agency" fontSize="22" />
        <h1
          className="
            font-bold
            text-7xl
            max-md:text-[40px]
            max-sm:text-[28px]
            text-white
            animate-text-right-fade-in
            "
        >
          Prosper in this volatile
          <br />
          market funding.
        </h1>
        <p
          className="
            text-xl
            max-md:text-base
            max-sm:text-sm
            text-white
            w-[50%]
            max-lg:w-[60%]
            max-md:w-[90%]
            animate-text-right-fade-in
            "
        >
          We place you at the centre of international networks to advance your
          strategic interests.
        </p>
        <div className="pt-4">
          <ButtonComp text="Our Team" className="animate-text-right-fade-in" />
        </div>
      </div>
      <div
        className="
          bg-[#E1E5ED]
          relative
          pt-40
          pb-16
          px-[10%]
          "
      >
        <div
          className="
              flex
              gap-6
              justify-center
              absolute
              my-0
              top-[-100px]
              right-0
              w-full
              max-lg:flex-wrap
              max-lg:relative
              max-md:flex-col
              "
        >
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
        <div
          className="
        flex
        items-center
        justify-around
        max-md:flex-col
        max-md:gap-8
        max-md:items-start
        "
        >
          <div
            className="
          flex
          items-center
          gap-4
          "
          >
            <H6 text="Join over +15,000 happy clients!" className="" />
            <div
              className="border border-[#B6B7CF] w-20 h-[1px]
          max-lg:w-14
          "
            ></div>
          </div>
          <div
            className="
          w-[60%]
          max-lg:w-[50%]
          max-md:w-full
          "
          >
            <IconsSlider />
          </div>
        </div>
      </div>
    </div>

    // </Slider>
  );
}
