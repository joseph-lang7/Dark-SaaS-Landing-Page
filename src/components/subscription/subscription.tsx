import React from "react";
import graph from "../../assets/images/graph.png";
import helix from "../../assets/images/helix.png";
import graph2 from "../../assets/images/graph2.png";
import helix2 from "../../assets/images/helix2.png";
import Image from "next/image";
const Subscription = () => {
  return (
    <div className="flex justify-center relative pb-16  border-b border-[#37353b]">
      <div className="text-white md:w-[540px]">
        <h2 className="text-[32px] md:text-[54px] font-semibold text-center pb-[20px]">
          Get instant access
        </h2>
        <div className="flex justify-center">
          <div className="flex relative">
            <p className="pb-[40px] px-[29px] md:w-[447px] font-[16px] text-center flex">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
            <Image
              src={graph2}
              alt="graph image"
              className="absolute left-[-350px] top-[-150px] xl:block hidden"
            />
            <Image
              src={helix2}
              alt="helix image"
              className="absolute right-[-350px] top-[-10px] xl:block hidden"
            />
          </div>
        </div>
        <div className="flex justify-center pb-[20px]">
          <div className="flex flex-col md:flex-row gap-[10px] w-full px-[52px] md:px-0">
            <input
              type="email"
              placeholder="name@gmail.com"
              className="bg-[#37353b] placeholder-[#959497] w-full pl-[12px] py-[12px] rounded-md"
            />
            <button className="bg-white text-black rounded-md py-[10px] text-[16px] font-bold md:w-[170px] w-full hover:bg-black hover:text-white transition-colors duration-300">
              Get access
            </button>
          </div>
        </div>
        <Image
          src={graph}
          alt="graph image"
          className="absolute left-0 top-[14px] md:block xl:hidden hidden"
        />
        <Image
          src={helix}
          alt="helix image"
          className="absolute right-0 top-[118px] md:block xl:hidden hidden"
        />
      </div>
    </div>
  );
};

export default Subscription;
