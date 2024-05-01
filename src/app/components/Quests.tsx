import React from "react";
import MissionCompoment from "./ui/MissionComponent";
import { missions } from "../utils/Helpers";

const Quests = () => {
  return (
    <div className="card w-[28rem] shadow-sm p-4 bg-white">
      <h1 className="font-bold">Quests</h1>
      <div className="pt-8 flex flex-col gap-4">
        {missions.map((mission) => (
          <MissionCompoment
            title={mission.title}
            value={mission.value}
            key={mission.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Quests;
