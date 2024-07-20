import React from "react";
import CurrentStreak from "./ui/CurrentStreak";
import StreakPresents from "./StreakPresents";

const DailyStreak = () => {
  return (
    <div className="card w-[28rem] shadow-sm p-4 bg-white">
      <div className="flex items-center justify-between">
        <CurrentStreak />
      </div>
      <StreakPresents />
      <h1 className="mt-8 text-center ">Don't give up!</h1>
    </div>
  );
};

export default DailyStreak;
