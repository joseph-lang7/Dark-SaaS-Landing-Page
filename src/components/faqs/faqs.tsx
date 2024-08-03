"use client";
import { useState } from "react";
import FaqItem from "./components/faq-item";
const items = [
  {
    question: "How does the integration ecosystem enhance my productivity?",
    answer:
      "Our integration ecosystem allows you to connect with your favorite tools, ensuring that all your essentials are in one place. By streamlining your workflow and centralizing your tasks, communication, and data, you save time and reduce the complexity of managing multiple apps. This unified approach helps you stay organized and focus on what matters most.",
    key: 1,
  },
  {
    question: "How can I set and track my goals using your platform?",
    answer:
      "Our goal-setting feature enables you to define your objectives clearly and break them down into manageable tasks. You can set deadlines, assign tasks to team members, and monitor progress in real-time. This structured approach ensures that you stay on track and can easily adjust your plan as needed to achieve your targets.",
    key: 2,
  },
  {
    question: "What types of tools can I integrate with your platform?",
    answer:
      "Our platform supports integration with a wide range of popular tools and services, including project management apps, communication platforms, cloud storage solutions, and more. This flexibility allows you to customize your workspace to fit your specific needs, enhancing your productivity and ensuring seamless workflow.",
    key: 3,
  },
  {
    question: "How do you ensure the security of my data?",
    answer:
      "We prioritize the security of your data by implementing end-to-end encryption. This means that your information is encrypted both in transit and at rest, protecting it from unauthorized access. Our robust security protocols ensure that only you and authorized users can access your data, providing peace of mind that your information is safe and secure.",
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
