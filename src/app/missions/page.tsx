import React from "react";
import Quests from "../components/Quests";
import DailyStreak from "../components/DailyStreak";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="max-h-screen w-[90%] px-4 text-xl">
        <h1 className=" text-sec font-bold">Missions</h1>
        <div className="pt-6 flex gap-8">
          <Quests />
          <DailyStreak />
        </div>
      </div>
    </>
  );
};

export default page;
