"use client";
import { useState } from "react";
import FaqItem from "./components/faq-item";
const items = [
  {
    question: "How does the pricing work for teams",
    answer: "Answer 1",
    key: 1,
  },
  {
    question: "How does the pricing work for teams",
    answer: "Answer 2",
    key: 2,
  },
  {
    question: "How does the pricing work for teams",
    answer: "Answer 3",
    key: 3,
  },
  {
    question: "How does the pricing work for teams",
    answer: "Answer 4",
    key: 4,
  },
];
const Faqs = () => {
  return (
    <div className="pt-[77px] bg-gradient-to-b from-[#5D2CA8] to-black">
      <h2 className="font-semibold text-white text-[32px] md:text-[54px] text-center pb-[29px]">
        Frequently asked questions
      </h2>
      <div className="pb-[183px]">
        {items.map(({ question, answer, key }) => (
          <FaqItem key={key} question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
