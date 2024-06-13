import React from "react";
import MissionCompoment from "./ui/MissionComponent";
import { missions } from "../utils/Helpers";

type FinishedMission = {
  missionName: string;
  missionValue: number;
};

type questsProps = {
  finishedMissions: FinishedMission[];
};

const Quests = ({ finishedMissions }: questsProps) => {
  return (
    <div className="card w-[28rem] shadow-sm p-4 bg-sec text-white">
      <h1 className="font-bold">Quests</h1>
      <div className="pt-8 flex flex-col gap-4">
        {missions.map((mission) => (
          <MissionCompoment
            title={mission.title}
            value={mission.value}
            id={mission.id}
            numberToComplete={mission.numberOfTasksToComplete}
            finishedMissions={finishedMissions}
          />
        ))}
      </div>
    </div>
  );
};

export default Quests;
