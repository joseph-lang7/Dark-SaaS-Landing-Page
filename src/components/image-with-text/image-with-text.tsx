import React from "react";
import appImage from "../../assets/images/app.png";
import mdAppImage from "../../assets/images/app-md.png";
import xlAppImage from "../../assets/images/app-xl.png";
import Image from "next/image";
const ImageWithText = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#5D2CA8]">
      <div className="flex flex-col text-white pt-[93px] px-[17.5px] pb-[60px] gap-[20px]">
        <h2 className="text-[32px] md:text-[54px] font-semibold text-center">
          Intuitive Interface
        </h2>
        <div className="flex justify-center">
          <p className="text-center max-w-[535px] w-full">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
      </div>
      {/* Small App Image */}
      <div className="flex justify-center">
        <div className="flex w-[356px] h-[220px] md:hidden justify-center px-[17px] pb-[84px]">
          <Image
            src={appImage}
            alt="app mockup"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Medium App Image */}
      <div className="flex justify-center">
        <div className="justify-center w-[704px] h-[437px] px-[17px] pb-[84px] hidden md:flex xl:hidden">
          <Image
            src={mdAppImage}
            alt="app mockup"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Large App Image */}
      <div className="flex w-full justify-center">
        <div className="justify-center w-[1092px] h-[678px] px-[17px] pb-[84px] hidden xl:flex">
          <Image
            src={xlAppImage}
            alt="app mockup"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
