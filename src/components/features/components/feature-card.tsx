"use client";
import React, { useEffect, useRef } from "react";
import leafImage from "../../../assets/images/leaf.png";
import Image from "next/image";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
type Props = {
  title: string;
  description: string;
};

const FeatureCard = ({ title, description }: Props) => {
  const border = useRef<HTMLDivElement>(null);
  const offSetX = useMotionValue(-100);
  const offSetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offSetX}px ${offSetY}px, black, transparent`;

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current?.getBoundingClientRect();
      offSetX.set(e.x - borderRect.x);
      offSetY.set(e.y - borderRect.y);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [offSetX, offSetY]);
  return (
    <div className="border border-[#3d3d3d] rounded-md text-white flex flex-col items-center mx-[15px] py-[40px] sm:max-w-[360px] relative">
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        ref={border}
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      ></motion.div>
      <div className="pb-[24px]">
        <div className="bg-white p-[18px] rounded-md">
          <Image src={leafImage} alt="leaf" />
        </div>
      </div>
      <p className="text-[18px] font-bold pb-[8px]">{title}</p>
      <p className="text-center font-medium text-[16px] px-[20px]">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
