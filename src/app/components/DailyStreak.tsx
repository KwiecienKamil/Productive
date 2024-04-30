import React from "react";

const DailyStreak = () => {
  return (
    <div className="card w-96 shadow-sm p-4 bg-white">
      <div className="p-1">
        <p className="text-gray-400">You're on</p>
        <p className="font-bold">0 day streak</p>
      </div>
    </div>
  );
};

export default DailyStreak;
