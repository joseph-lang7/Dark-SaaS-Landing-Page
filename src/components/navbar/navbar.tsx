import React from "react";
import Logo from "../../assets/images/logosass.png";
import MenuIcon from "../../assets/icons/menu.svg";
import FramerIcon from "../../assets/icons/framer.svg";
import Image from "next/image";
const NavBar = () => {
  return (
    <div>
      <div className="px-2 py-2">
        <div className="flex items-center justify-between lg:px-8">
          <div className="flex items-center">
            <Image src={Logo} alt="Sass logo" className=" object-cover" />
            <span className="text-white gap-2 hidden sm:inline-flex">
              <span>made by</span>
              <FramerIcon />
              <span className="font-bold">Framer</span>
            </span>
          </div>
          <MenuIcon className="text-white sm:hidden" />
          <button className="hidden sm:inline-block bg-white py-2 px-4 rounded-md text-black hover:bg-black hover:text-white transition-colors duration-300">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
