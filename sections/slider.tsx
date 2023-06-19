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
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  const services = [
    { title: "Web Development", icon: "web_development" },
    { title: "App Development", icon: "app_development" },
    { title: "SEO", icon: "seo" },
    { title: "Graphic Designing", icon: "graphic_designing" },
    { title: "Video Editing", icon: "video_editing" },
  ];
  const SliderContent = ({
    titleLine1,
    titleLine2,
    detail,
  }: {
    titleLine1: string;
    titleLine2: string;
    detail: string;
  }) => {
    return (
      <div id="home" className="bg-[rgba(0,0,0,0.4)]">
        <div
          className={`
   ${styles.purpleOverlay}
      flex
      flex-col
      gap-6
      max-sm:gap-14
      px-[10%]
      justify-center
      max-sm:h-[0.5vh]
      `}
        >
          <TextWithBackground text="We are IT service agency" fontSize="22" />
          <h1
            className="
          font-bold
          text-6xl
          leading-none/
          max-md:text-[40px]
          max-sm:text-[28px]
          text-white
          animate-text-right-fade-in
          "
          >
            {titleLine1}
            <br />
            {titleLine2}
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
            {detail}
          </p>
          <div className="pt-4">
            <ButtonComp
              text="Our Team"
              className="animate-text-right-fade-in"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Slider {...settings} data-aos="fade-up">
        <div
          className={`
          ${styles.container}
          bg-[url('../assets/bg_slider1.jpeg')]
          
          `}
        >
          <SliderContent
            titleLine1="Nourishing Businesses"
            titleLine2="through Digital Technology."
            detail="Stay ahead in the race and keep your competitive edge intact with our state-of-the-art digital solutions."
          />
        </div>
        <div
          className={`
          ${styles.container}
          bg-[url('../assets/bg-slider2.jpeg')]
          `}
        >
          <SliderContent
            titleLine1="Welcome to the World"
            titleLine2="of Cutting-Edge IT Solutions"
            detail="Stay ahead of the competition and maintain your competitive edge with
           our cutting-edge digital solutions"
          />
        </div>
      </Slider>

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
          {services.map((service, index) => {
            return (
              <>
                <ServiceCard
                  service={service.title}
                  key={index}
                  icon={`${service.icon}.png`}
                />
              </>
            );
          })}
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
  );
}
