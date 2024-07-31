"use client";
import React from "react";
import PlusIcon from "../../../assets/icons/plus-icon.svg";
import MinusIcon from "../../../assets/icons/minus-icon.svg";
import { useState } from "react";
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
        <div className="flex items-center">
          <span className="flex-1 font-bold text-[18px]">{question}</span>{" "}
          <button onClick={() => setIsToggled(!isToggled)}>
            {isToggled ? <MinusIcon /> : <PlusIcon />}
          </button>
        </div>
        <div className={`${isToggled ? "block" : "hidden"} pt-2`}>{answer}</div>
      </div>
    </div>
  );
};

export default FaqItem;
