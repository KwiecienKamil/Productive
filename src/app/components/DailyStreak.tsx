import React from "react";
import CurrentStreak from "./ui/CurrentStreak";
import StreakPresents from "./StreakPresents";

const DailyStreak = () => {
  // Getting current streak from local storage
  const currentstreakValue = localStorage.getItem("streak");
  const streak = currentstreakValue ? JSON.parse(currentstreakValue) : [];

  return (
    <div className="card w-[95%] vsm:w-[27rem] md:w-[40%] shadow-sm p-4 bg-sec text-white">
      <div className="flex items-center justify-between">
        <CurrentStreak streak={streak} />
      </div>
      <StreakPresents streak={streak} />
      <h1 className="mt-8 text-center ">Don't give up!</h1>
    </div>
  );
};

export default DailyStreak;
