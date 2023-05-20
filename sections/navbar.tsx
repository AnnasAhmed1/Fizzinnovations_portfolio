import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ButtonComp from "../components/button_comp";
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import { H6 } from "../components/helper";

function Navbar() {
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
      <Image src={require("../assets/logo.png")} alt="logo" className="w-32" />
      <MenuIcon
      className="
      text-4xl
      border
      p-1
      mr-4
      "
      />

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
      <Image src={require("../assets/logo.png")} alt="logo" className="w-32" />
      <div className="flex flex-1 px-[5%] justify-between
      
      ">
        <H6 text={"Home"} />
        <H6 text={"Pages"} />
        <H6 text={"Services"} />
        <H6 text={"Portfolio"} />
        <H6 text={"Blog"} />
        <H6 text={"Elements"} />
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
