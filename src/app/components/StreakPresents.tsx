import React from "react";
import StreakPresent from "./ui/StreakPresent";
import { streakPresents } from "../utils/Helpers";

const StreakPresents = () => {
  return (
    <div className="flex items-center justify-between px-2">
      {streakPresents.map((item) => (
        <StreakPresent day={item.day} awardValue={item.awardValue} />
      ))}
    </div>
  );
};

export default StreakPresents;
