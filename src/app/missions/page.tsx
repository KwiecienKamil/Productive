import React from "react";
import Quests from "../components/Quests";
import DailyStreak from "../components/DailyStreak";

const page = () => {
  return (
    <div className="max-h-screen w-[90%] px-4 text-xl">
      <h1 className=" text-sec font-bold">Missions</h1>
      <div className="pt-3 flex gap-8">
        <Quests />
        <DailyStreak />
      </div>
    </div>
  );
};

export default page;
