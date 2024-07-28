import WhiteArrow from "../../../public/vector-white.svg";
import cursorImage from "../../assets/images/cursor.png";
import messageImage from "../../assets/images/message.png";
import messageImage2 from "../../assets/images/message-2.png";
import cursorImage2 from "../../assets/images/cursor-2.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative overflow-hidden ">
      <div className="absolute h-[375px] w-[750px] sm:w-[2100px] sm:h-[900px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_90%,#9560EB)] top-[calc(100%-120px)]"></div>
      <div className="flex flex-col gap-[32px] pt-[64.5px] pb-[89.5px] px-[27.5px] relative">
        <div className="flex justify-center">
          <a
            href="#"
            className="flex gap-2 items-center text-xs border border-white/30 rounded-lg px-2 py-1 w-max"
          >
            <span className="text-gray-400">Version 2.0 is here</span>
            <span className="font-bold">Read more</span>
            <div className="text-xl">
              <WhiteArrow />
            </div>
          </a>
        </div>
        <div className="flex justify-center">
          <div className="relative w-max">
            <h1 className="text-[54px] lg:text-[200px] sm:text-[120px] tracking-tighter font-bold text-center lg:leading-[165px] sm:leading-[100px] leading-10">
              One Task <br /> at a Time
            </h1>
            <Image
              src={cursorImage2}
              alt="cursor image"
              height="200"
              width="200"
              className="absolute left-[-140px] top-[55%] hidden xl:block"
            />
            <Image
              src={messageImage2}
              alt="message image"
              height="200"
              width="200"
              className="absolute right-[-170px] top-[32%] hidden xl:block"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-[22px] max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-white py-2 px-4 rounded-md text-black font-medium hover:bg-black hover:text-white transition-colors duration-300">
            Get for free
          </button>
        </div>
      </div>
      <Image
        src={cursorImage}
        alt="cursor image"
        height="183"
        width="183"
        className="absolute left-[-10px] top-[22%] hidden sm:block xl:hidden"
      />
      <Image
        src={messageImage}
        alt="message image"
        height="151"
        width="151"
        className="absolute right-[-10px] top-[30%] hidden sm:block xl:hidden"
      />
    </div>
  );
};

export default Hero;
