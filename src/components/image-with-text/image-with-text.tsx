import React from "react";
import appImage from "../../assets/images/app.png";
import Image from "next/image";
const ImageWithText = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#000,#46217E_34%,#05020A_100%)]">
      <div className="flex flex-col text-white pt-[93px] px-[17.5px] pb-[60px] gap-[20px]">
        <h2 className="text-[32px] font-semibold text-center">
          Intuitive Interface
        </h2>
        <p className="text-center">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes, one
          task at a time.
        </p>
      </div>
      <div className="flex justify-center w-full px-[17px] pb-[84px]">
        <Image
          src={appImage}
          alt="app mockup"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImageWithText;
