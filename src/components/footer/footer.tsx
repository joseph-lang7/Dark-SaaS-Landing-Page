import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { GrPinterest } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiTiktok } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-[76px] pb-[50px] md:pb-[38px] md:pt-[23px] flex justify-center md:justify-between md:px-[40px]">
      <p className="hidden md:inline-block text-[#828084]">
        @ 2024 Your Company, Inc. All rights reserved
      </p>
      <div className="flex gap-4 text-[#828084]">
        <FaXTwitter className="w-[24px] h-[24px] hover:text-white duration-300 transition-colors cursor-pointer" />
        <AiFillInstagram className="w-[24px] h-[24px] hover:text-white duration-300 transition-colors cursor-pointer" />
        <GrPinterest className="w-[24px] h-[24px] hover:text-white duration-300 transition-colors cursor-pointer" />
        <IoLogoLinkedin className="w-[24px] h-[24px] hover:text-white duration-300 transition-colors cursor-pointer" />
        <SiTiktok className="w-[24px] h-[24px] hover:text-white duration-300 transition-colors cursor-pointer" />
        <FaYoutube className="w-[24px] h-[24px] hover:text-white duration-300 transition-colors cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
