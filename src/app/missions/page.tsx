import React from "react";
import Quests from "../components/Quests";
import DailyStreak from "../components/DailyStreak";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="max-h-screen w-[90%] px-6 pt-2 text-xl">
        <h1 className="text-sec font-bold text-[14px]">Missions</h1>
        <div className="pt-6 flex gap-8">
          <Quests />
          <DailyStreak />
        </div>
      </div>
    </>
  );
};

export default page;
