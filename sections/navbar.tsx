import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ButtonComp from "../components/button_comp";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { H6 } from "../components/helper";
import { Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navs = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "About us",
      link: "about",
    },
    {
      name: "Services",
      link: "services",
    },
    // {
    //   name: "Pricing Plans",
    //   link: "pricing",
    // },
    {
      name: "Recent Projects",
      link: "projects",
    },
    // {
    //   name: "Blog",
    //   link: "blog",
    // },
    {
      name: "Contact us",
      link: "contact",
    },
  ];
  function scrollToSection(e: any, id: string) {
    e.preventDefault();
    const element = document.querySelector(`#${id}`);
    element?.scrollIntoView({ behavior: "smooth" });
  }
  const handleClose = (e: any, v: any) => {
    scrollToSection(e, v);
    setAnchorEl(null);
  };
  return (
    <>
      <nav
        className="
    hidden
    max-lg:flex
    items-center
    justify-between
    "
      >
        <Image
          src={require("../assets/logo.png")}
          alt="logo"
          className="w-32 max-md:w-28 max-sm:w-20 max-sm:pt-2"
        />
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={(event: any) => {
            setAnchorEl(event.currentTarget);
          }}
          className="w-fit min-w-0"
        >
          <MenuIcon
            className="
              text-4xl
              border
              p-1
              mr-4
              "
          />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => {
            setAnchorEl(null);
          }}
          // MenuListProps={{
          //   "aria-labelledby": "basic-button",
          // }}
          // PaperProps={{
          //   className:
          //     "dark:bg-[#252525]  dark:text-white text-[#545454] text-base font-medium",
          // }}
        >
          {navs?.map((v, i) => {
            return (
              <MenuItem
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  // setAnchorEl(null);
                  handleClose(e, v.link);
                }}
              >
                <H6 text={v.name} />
              </MenuItem>
            );
          })}
          {/* <H6 text={"Home"} />
          <MenuItem>
            <H6 text={"About us"} />
          </MenuItem>
          <MenuItem>
            <H6 text={"Services"} />
          </MenuItem>
          <MenuItem>
            <H6 text={"Pricing Plans"} />
          </MenuItem>
          <MenuItem>
            <H6 text={"Portfolio"} />
          </MenuItem>
          <MenuItem>
            <H6 text={"Blog"} />
          </MenuItem>
          <MenuItem>
            <H6 text={"Contact us"} />
          </MenuItem> */}
        </Menu>
      </nav>
      <nav
        className="
      flex
      items-center
      border-gray-300
      border-t
      gap-4
      pr-4
      max-lg:hidden
      "
      >
        <Image
          src={require("../assets/logo.png")}
          alt="logo"
          className="w-32"
        />
        <div
          className="flex flex-1 px-[5%] justify-between
      
      "
        >
          {navs?.map((v, i) => {
            return (
              <a
                className="scroll-smooth cursor-pointer"
                onClick={(e) => scrollToSection(e, v.link)}
              >
                <H6 text={v.name} />
              </a>
            );
          })}
          {/* <H6 text={"Home"} />
          <H6 text={"About us"} />
          <H6 text={"Services"} />
          <H6 text={"Pricing Plans"} />
          <H6 text={"Portfolio"} />
          <H6 text={"Blog"} />
          <H6 text={"Contact us"} /> */}
        </div>
        <form
          action="#"
          className="flex px-4 py-[50.5px] border-x border-gray-300 "
        >
          <input className="block w-24" type="text" placeholder="Search..." />
          <button>
            <SearchIcon
              className="
          text-[#6e6f70]
          "
            />
          </button>
        </form>

        <LanguageIcon
          className="
      text-[#6e6f70]
      "
        />
        <ButtonComp text={"Get a quote now"} />
      </nav>
    </>
  );
}

export default Navbar;
