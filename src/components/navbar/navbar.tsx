import React from "react";
import Logo from "../../assets/images/logosass.png";
import MenuIcon from "../../assets/icons/menu.svg";
import FramerIcon from "../../assets/icons/framer.svg";
import Image from "next/image";
const NavBar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src={Logo} alt="Sass logo" className=" object-cover" />
            <span className="text-white gap-2 hidden sm:inline-flex">
              <span>made by</span>
              <FramerIcon />
              <span className="font-bold">Framer</span>
            </span>
          </div>
          <MenuIcon className="text-white sm:hidden" />
          <button className="hidden sm:inline-block bg-white py-2 px-4 rounded-md text-black">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
