"use client";
import React, { FC } from "react";
import Diamonds from "./Diamonds";
import { useAppSelector } from "@/app/services/state/store";

type FinishedMission = {
  missionName: string;
  missionValue: number;
};

type MissionCompomentProps = {
  id: number;
  title: string;
  value: number;
  numberToComplete: number;
  finishedMissions: FinishedMission[];
};

const MissionCompoment: FC<MissionCompomentProps> = ({
  title,
  value,
  id,
  numberToComplete,
  finishedMissions,
}) => {
  const tasksState = useAppSelector((state) => state.task.tasks);
  const state = useAppSelector((state) => state.doneDate.doneDates);
  const numberOfTasksDone = tasksState.length;

  return (
    <div className="flex flex-col gap-1" key={id}>
      <p>{title}</p>
      <div className="flex items-center justify-between">
        <div
          className={
            numberOfTasksDone < numberToComplete && state.length > 0
              ? "w-[80%] p-2 mt-1 bg-[#DCDCDC] rounded-full overflow-hidden"
              : "w-[80%] p-2 mt-1 bg-green-400 rounded-full overflow-hidden"
          }
        ></div>
        <Diamonds
          value={value}
          numberToComplete={numberToComplete}
          missionId={id}
          finishedMissions={finishedMissions}
        />
      </div>
    </div>
  );
};

export default MissionCompoment;
