import React from "react";
import MissionCard from "./ui/MissionCard";

const Quests = () => {
  return (
    <div className="card w-96 shadow-sm p-4 bg-white">
      <h1 className="font-bold">Quests</h1>
      <div className="pt-8 flex flex-col gap-4">
        <MissionCard title="Complete Task" />
        <MissionCard title="Complete 3 Tasks" />
        <MissionCard title="Complete 5 Tasks" />
      </div>
    </div>
  );
};

export default Quests;
