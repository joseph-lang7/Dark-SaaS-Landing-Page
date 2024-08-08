"use client";
import React from "react";
import PlusIcon from "../../../assets/icons/plus-icon.svg";
import MinusIcon from "../../../assets/icons/minus-icon.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
type Props = {
  key: number;
  question: string;
  answer: string;
};

const FaqItem = ({ key, question, answer }: Props) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="flex justify-center">
      <div
        key={key}
        className="text-white w-full md:w-[675px] py-[28px] mx-[12px] border-b border-white/30"
      >
        <button
          onClick={() => setIsToggled(!isToggled)}
          className="flex w-full"
        >
          <span className="flex-1 font-bold text-[18px] text-start">
            {question}
          </span>{" "}
          <span>{isToggled ? <MinusIcon /> : <PlusIcon />}</span>
        </button>
        <AnimatePresence>
          {isToggled && (
            <motion.div
              initial={{ opacity: 0, height: 0, paddingTop: 0 }}
              animate={{ opacity: 1, height: "auto", paddingTop: "8px" }}
              exit={{ opacity: 0, height: 0, paddingTop: 0 }}
            >
              {answer}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FaqItem;
