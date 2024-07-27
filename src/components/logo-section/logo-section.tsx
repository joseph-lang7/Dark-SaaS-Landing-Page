import acmeImage from "../../assets/images/acme.png";
import quantumImage from "../../assets/images/quantum.png";
import echoImage from "../../assets/images/echo.png";
import celestialImage from "../../assets/images/celestial.png";
import pulseImage from "../../assets/images/pulse.png";
import apexImage from "../../assets/images/apex.png";
import Image from "next/image";
const LogoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black pb-[62px] pt-[20px]">
      <h4 className="text-[#7A7A7A] w-[185px] sm:w-max text-sm text-center pb-[38px]">
        Trusted by the world&apos;s most innovative teams
      </h4>
      <div className="flex flex-col gap-3 md:grid md:grid-cols-1 xl:grid-cols-2 xl:hidden">
        <div className="flex gap-7 justify-between">
          <Image src={acmeImage} alt="acme logo" height="32" width="146" />
          <Image
            src={quantumImage}
            alt="quantum logo"
            height="32"
            width="125"
          />
          <Image
            src={echoImage}
            alt="echo logo"
            height="28"
            width="160"
            className="md:inline-block hidden"
          />
        </div>
        <div className="flex gap-7 justify-between md:justify-center">
          <Image
            src={echoImage}
            alt="echo logo"
            height="28"
            width="160"
            className="md:hidden"
          />
          <Image
            src={celestialImage}
            alt="celestial logo"
            height="28"
            width="115"
          />
          <Image
            src={pulseImage}
            alt="pulse logo"
            height="22"
            width="100"
            className="hidden md:inline-block"
          />
          <Image
            src={apexImage}
            alt="apex logo"
            height="27"
            width="85"
            className="hidden md:inline-block"
          />
        </div>
        <div className="flex gap-7 justify-center">
          <Image
            src={pulseImage}
            alt="pulse logo"
            height="22"
            width="100"
            className="md:hidden"
          />
          <Image
            src={apexImage}
            alt="apex logo"
            height="27"
            width="85"
            className="md:hidden"
          />
        </div>
      </div>
      <div className="gap-12 hidden xl:flex">
        <Image src={acmeImage} alt="acme logo" height="32" width="146" />
        <Image src={quantumImage} alt="quantum logo" height="32" width="125" />
        <Image src={echoImage} alt="echo logo" height="28" width="160" />
        <Image
          src={celestialImage}
          alt="celestial logo"
          height="28"
          width="115"
        />
        <Image
          src={pulseImage}
          alt="pulse logo"
          height="22"
          width="100"
          className="hidden md:inline-block"
        />
        <Image
          src={apexImage}
          alt="apex logo"
          height="27"
          width="85"
          className="hidden md:inline-block"
        />
      </div>
    </div>
  );
};

export default LogoSection;
