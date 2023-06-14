import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Home.module.css";
import ButtonComp from "../components/button_comp";
import TextWithBackground from "@/components/text_with_background";
import ServiceCard from "@/components/service_card";
import { H6 } from "@/components/helper";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ServiceDetailsCardHover from "./service_details_card_hover";
import ServiceDetailsCard from "./service_details_card";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ServiceDetailsSlider() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardHover, setCardHover] = useState(false);

  const handleHoverEnter = (index: number) => {
    services[index].hover = true;
    setServices([...services]);
  };
  const handleHoverOut = (index: number) => {
    services[index].hover = false;
    setServices([...services]);
  };
  const settings = {
    // customPaging: function() {
    //   return (
    //     <a>
    //      <div className="w-8 border border-red h-4"></div>
    //     </a>
    //   );
    // },
    dots: true,
    dotsClass: "slick-dots custom-dots",
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    // nextArrow: <SamplePrevArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const lineStyle = {
    height: "3px",
    background: "#DFE0E6", // Adjust the color to your preference
    width: `100%`, // Adjust the width calculation as needed
    transition: "width 0.3s",
  };
  const activeLineStyle = {
    ...lineStyle,
    background: "#7115EF", // Adjust the color for the active line
  };
  const handleBeforeChange = (oldIndex: any, newIndex: any) => {
    console.log(newIndex);
    console.log(oldIndex);
    setCurrentSlide(newIndex / 2);
  };
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,color:"black" }}
        onClick={onClick}
      >
        <ArrowForwardIosIcon />
      </div>
    );
  }

  const handleAfterChange = (currentIndex: any) => {
    console.log(currentIndex);

    setCurrentSlide(currentIndex / 2);
  };
  // const customPaging = (i: any) => (
  //   // <div style={i === currentSlide ? activeLineStyle : lineStyle} />
  //   <a href="">a</a>
  // );
  const sliderRef = useRef(null);

  const mergedSettings = {
    ...settings,
    // beforeChange: handleBeforeChange,
    // customPaging,
  };
  const [services, setServices] = useState([
    {
      title: "Web Development",
      description:
        "Creating tailored web applications that meet your unique needs. From user interface design to complex functionality integration.",
      icon: "web_development",
      hover: false,
    },
    {
      title: "App Development",
      description:
        "Creating custom mobile applications that are designed to fit your unique business needs. From intuitive user interfaces to seamless back-end integration.",
      icon: "app_development",
      hover: false,
    },
    {
      title: "SEO",
      description:
        "Optimizing websites to rank higher in search engine results pages. Reach your target audience and achieve your business goals with our proven SEO strategies.",
      icon: "seo",
      hover: false,
    },
    {
      title: "Graphic Designing",
      description:
        "Creating stunning designs that communicate your brand message and stand out in a crowded marketplace. From logos to marketing materials.",
      icon: "graphic_designing",
      hover: false,
    },
    {
      title: "Video Editing",
      description:
        "Transform your footage into captivating masterpieces. With seamless transitions, stunning visual effects, and meticulous editing.",
      icon: "web_development",
      hover: false,
    },
  ]);

  return (
    <>
      <Slider
        className="
        transition-all
        details_slider/
        min-h-[391px]/
      "
        {...mergedSettings}
        // customPaging={customPaging}
      >
        {services.map((service, index) => (
          <NewComp
            service={service}
            index={index}
            cardHover={cardHover}
            setCardHover={setCardHover}
            services={services}
            setServices={setServices}
          />
          // <div
          //   key={index}
          //   onMouseEnter={() => {
          //     console.log("hamdele");
          //     handleHoverEnter(index);
          //   }}
          //   onMouseLeave={() => {
          //     console.log("hamdele");
          //     handleHoverOut(index);
          //   }}
          // >
          //   {service.hover ? (
          //     <ServiceDetailsCardHover
          //       title={service.title}
          //       icon={service.icon}
          //     />
          //   ) : (
          //     <ServiceDetailsCard
          //       className={``}
          //       title={service.title}
          //       description={service.description}
          //       icon={service.icon}
          //     />
          //   )}
          // </div>
        ))}
      </Slider>
    </>
  );
}

const NewComp = ({
  index,
  service,
  hover = false,
  cardHover,
  setCardHover,
  services,
  setServices,
}: {
  index: any;
  service: any;
  cardHover: any;
  setCardHover: any;
  hover?: boolean;
  services: any;
  setServices: any;
}) => {
  const handleHover = () => {
    setCardHover(!cardHover);
  };
  const handleHoverEnter = (index: number) => {
    services[index].hover = true;
    setServices([...services]);
  };
  const handleHoverOut = (index: number) => {
    services[index].hover = false;
    setServices([...services]);
  };
  return (
    <div
      className={`w-[290px] mb-12 mx-auto 
    transition-all
    ${service.hover ? "h-[300px]" : "h-[300px]"}
    `}
      key={index}
      onMouseEnter={() => {
        console.log("handle");
        handleHover();
        handleHoverEnter(index);
      }}
      onMouseLeave={() => {
        console.log("handle");
        handleHover();
        handleHoverOut(index);
      }}
    >
      {/* <ServiceDetailsCardHover title={service.title} icon={service.icon} /> */}
      {service.hover ? (
        <ServiceDetailsCardHover title={service.title} icon={service.icon} />
      ) : (
        <ServiceDetailsCard
          className={``}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      )}
    </div>
  );
};
