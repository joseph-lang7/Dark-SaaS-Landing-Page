"use client";
import React, { useRef } from "react";
import xlAppImage from "../../assets/images/app-xl.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
const ImageWithText = () => {
  const image = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: image,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

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
      <div className="flex justify-center">
        <motion.div
          className="flex justify-center px-[17px] pb-[84px]"
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            src={xlAppImage}
            alt="app mockup"
            className="w-full h-full object-cover"
            ref={image}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ImageWithText;
