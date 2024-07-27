import React from "react";
import leafImage from "../../assets/images/leaf.png";
import Image from "next/image";
const Features = () => {
  return (
    <div className="bg-black pb-[100px]">
      <div className="pt-32">
        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center gap-5 px-[15px] pb-[66px]">
            <h2 className="text-white text-[32px] font-bold sm:text-[54px]">
              Everything you need
            </h2>
            <p className="text-[22px] text-white text-center sm:max-w-[540px]">
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:items-center xl:flex-row xl:justify-center">
          <div className="border border-[#3d3d3d] rounded-md text-white flex flex-col items-center mx-[15px] py-[40px] sm:max-w-[360px]">
            <div className="pb-[24px]">
              <div className="bg-white p-[18px] rounded-md">
                <Image src={leafImage} alt="leaf" />
              </div>
            </div>
            <p className="text-[18px] font-bold pb-[8px]">
              Integration Ecosystem
            </p>
            <p className="text-center font-medium text-[16px] px-[20px]">
              Enhance your productivity by connecting with your favorite tools,
              keeping all your essentials in one place.
            </p>
          </div>
          <div className="border border-[#3d3d3d] rounded-md text-white flex flex-col items-center mx-[15px] py-[40px] sm:max-w-[360px]">
            <div className="pb-[24px]">
              <div className="bg-white p-[18px] rounded-md">
                <Image src={leafImage} alt="leaf" />
              </div>
            </div>
            <p className="text-[18px] font-bold pb-[8px]">
              Goal setting and tracking
            </p>
            <p className="text-center font-medium text-[16px] px-[20px]">
              Define and track your goals, breaking down objectives into
              achievable tasks to keep your targets in sight.
            </p>
          </div>
          <div className="border border-[#3d3d3d] rounded-md text-white flex flex-col items-center mx-[15px] py-[40px] sm:max-w-[360px]">
            <div className="pb-[24px]">
              <div className="bg-white p-[18px] rounded-md">
                <Image src={leafImage} alt="leaf" />
              </div>
            </div>
            <p className="text-[18px] font-bold pb-[8px]">
              Secure data encryption{" "}
            </p>
            <p className="text-center font-medium text-[16px] px-[20px] ">
              With end-to-end encryption, your data is securely stored and
              protected from unauthorized access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
