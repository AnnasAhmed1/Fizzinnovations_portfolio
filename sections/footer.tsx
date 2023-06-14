import ButtonComp from "@/components/button_comp";
import React from "react";
import Styles from "../styles/Home.module.css";
import Image from "next/image";
import { H2 } from "@/components/helper";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import TelegramIcon from "@mui/icons-material/Telegram";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const socialMedia = [
    <FacebookIcon />,
    <InstagramIcon />,
    <LinkedInIcon />,
    <TwitterIcon />,
  ];
  return (
    <footer>
      <div
        className={`${Styles.footerBackground} 
     
      `}
      >
        <div
          className="
        bg-[#0F0F35]
        bg-opacity-80
        "
        >
          <div
            className="
          bg-[#0F0F35]
          bg-opacity-75
          flex
          max-md:flex-col
          max-md:items-start
          max-md:gap-8
          items-center
          justify-between
          py-[19px]
          px-[10%]
          
          "
          >
            <div className="">
              <h1
                className="
            text-[30px]
            max-lg:text-2xl
            text-white
            font-bold
            "
              >
                Ready to shake things up with Fizz Innovations?
              </h1>
              <p
                className="
            font-[16px]
            text-[#C9C8C8]
            "
              >
                Drop us a line today, and we'll set up a free consultation to
                discuss your project
              </p>
            </div>

            <ButtonComp text="Get a quote" />
          </div>

          <div
            className="
            text-white
            grid
            grid-cols-4
            max-lg:grid-cols-2
            max-md:grid-cols-1
            max-lg:gap-[60px]
            gap-[30px]
            px-[10%]
            py-[8%]
            "
          >
            <div
              className="
             flex
             flex-col
             gap-[20px]
             "
            >
              <div>
                <H2 text="About Us" className="text-white" />
                <div
                  className="
                bg-[#1475F7]
                w-8
                h-[2px]
                rounded-lg
                my-2
                "
                ></div>
              </div>
              {/* <Image
                src={require("../assets/logo.png")}
                alt="logo"
                className="w-24"
              /> */}
              <p
                className="
              text-[#C9C8C8]
              "
              >
                We work with a passion of taking challenges and creating new
                ones in advertising sector.
              </p>
              <button
                className={`
                bg-blue-purple-gradient
                text-white
                font-bold
                text-sm
                py-2
                w-24
                rounded-[50px]
                `}
              >
                About us
              </button>
            </div>
            <div
              className="
              flex
              flex-col
              gap-[20px]
              "
            >
              <div>
                <H2 text="Newsletter" className="text-white" />
                <div
                  className="
                bg-[#1475F7]
                w-8
                h-[2px]
                rounded-lg
                my-2
                "
                ></div>
              </div>
              <p
                className="
          text-[#C9C8C8]
          "
              >
                Subscribe our newsletter to get our latest update & news.
              </p>
              <form
                action="#"
                className="
                flex
                "
              >
                <input
                  type="text"
                  placeholder="Your mail address"
                  className="
                  text-sm
                  text-white
                  pl-[24px]
                  py-[10px]
                  bg-[#0f0f35]
                  w-full
                  "
                />
                <button
                  className="
                  bg-blue-purple-gradient
                  px-4
                  "
                >
                  <TelegramIcon
                    className="
                    text-xl
                    "
                  />
                </button>
              </form>
              <div
                className="
                flex
                gap-3
                "
              >
                {socialMedia.map((v, i) => (
                  <p
                    className="
                  text-[#C9C8C8]
                  "
                  >
                    {v}
                  </p>
                ))}
              </div>
            </div>
            <div
              className="
            flex
            flex-col
            gap-[20px]
            "
            >
              <div>
                <H2 text="Official info:" className="text-white" />
                <div
                  className="
                bg-[#1475F7]
                w-8
                h-[2px]
                rounded-lg
                my-2
                "
                ></div>
              </div>

              <p
                className="
            text-[#C9C8C8]
            text-[14px]
            flex
            items-center
            gap-2
            "
              >
                <LocationOnIcon className="text-[#1475F7] text-base" />
                Karachi, Pakistan
              </p>
              <p
                className="
            text-[#C9C8C8]
            text-[14px]
            flex
            items-center
            gap-2
            "
              >
                <CallIcon className="text-[#1475F7] text-base" />
                0332-655-6262
              </p>
              <p
                className="
            text-[14px]
            font-bold
            "
              >
                Open Hours:
                <br />
                <span
                  className="font-normal text-[#C9C8C8]
             "
                >
                  Mon-Sun: 9 am - 12 am
                </span>
              </p>
            </div>
            <div
              className="
            flex
            flex-col
            gap-[20px]
            "
            >
              <div>
                <H2 text="Gallery" className="text-white" />
                <div
                  className="
                bg-[#1475F7]
                w-8
                h-[2px]
                rounded-lg
                my-2
                "
                ></div>
              </div>

              <div
                className="
            grid
            grid-cols-3
            gap-[10px]
            "
              >
                <Image
                  src={require("../assets/images/gallery_image1.jpeg")}
                  alt="gallery"
                />
                <Image
                  src={require("../assets/images/gallery_image2.jpeg")}
                  alt="gallery"
                />
                <Image
                  src={require("../assets/images/gallery_image3.jpeg")}
                  alt="gallery"
                />
                <Image
                  src={require("../assets/images/gallery_image4.jpeg")}
                  alt="gallery"
                />
                <Image
                  src={require("../assets/images/gallery_image5.jpeg")}
                  alt="gallery"
                />
                <Image
                  src={require("../assets/images/gallery_image6.jpeg")}
                  alt="gallery"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
