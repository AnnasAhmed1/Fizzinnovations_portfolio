import React from "react";
import CallIcon from "@mui/icons-material/Call";
import MapIcon from "@mui/icons-material/Map";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const HeaderBar = () => {
  const arr = [
    { icon: <CallIcon />, value: "+92 322 6556262" },
    { icon: <MapIcon />, value: "Karachi, Pakistan" },
    { icon: <MailIcon />, value: "fizzinnovations@gmail.com" },
  ];
  const socialMedia = [
    <FacebookIcon />,
    <InstagramIcon />,
    <LinkedInIcon />,
    <TwitterIcon />,
  ];
  return (
    <div
      className="
    flex
    justify-center
    py-4
    max-lg:hidden
    "
    
    >
      {arr.map((v, i) => (
        <p
          key={i}
          className="
        text-[#797B8A]
        flex
        items-center
        gap-2
        border-x
        px-6
        "
        >
          {v.icon}
          {v.value}
        </p>
      ))}
      <div
        className="
      flex
      px-6
      gap-3
      "
      >
        {socialMedia.map((v, i) => (
          <p
            className="
          text-[#b1b2b9]
          "
          >
            {v}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HeaderBar;
