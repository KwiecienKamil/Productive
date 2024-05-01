import React from "react";
import { IoDiamondSharp } from "react-icons/io5";
import CurrentStreak from "./ui/CurrentStreak";
import Diamonds from "./ui/Diamonds";

const DailyStreak = () => {
  return (
    <div className="card w-[28rem] shadow-sm p-4 bg-white">
      <div className="flex items-center justify-between ">
        <CurrentStreak />
      </div>
    </div>
  );
};

export default DailyStreak;
