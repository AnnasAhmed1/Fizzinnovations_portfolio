import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const IconsSlider = () => {
  const icons = ["figma", "google", "envato", "sketch", "slack"];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="">
      {icons.map((icon, index) => {
        return (
          <div key={index} className="group w-full  h-full overflow-hidden">
            <Image
              src={require(`../assets/icons/${icon}_icon.png`)}
              alt={`${icon} icon`}
              className="w-28 mx-auto
              max-lg:w-24
              max-md:w-28
              "
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default IconsSlider;
