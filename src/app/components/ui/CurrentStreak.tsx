import React from "react";

const CurrentStreak = () => {
  return (
    <div className="p-1 flex items-center gap-2 text-[16px] sm:text-xl">
      <p className="text-gray-400">You're on</p>
      <p className="font-bold">
        <span>3</span> day streak
      </p>
    </div>
  );
};

export default CurrentStreak;
