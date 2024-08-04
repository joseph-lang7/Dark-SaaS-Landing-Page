import React from "react";
import FeatureCard from "./components/feature-card";

const Features = () => {
  return (
    <div className="pb-[100px]">
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
          <FeatureCard
            title="Integration Ecosystem"
            description="Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place."
          />
          <FeatureCard
            title="Goal setting and tracking"
            description="Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
          />
          <FeatureCard
            title="Secure data encryption"
            description=" With end-to-end encryption, your data is securely stored and protected from unauthorized access."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
