"use client";
import React, { FC } from "react";
import Diamonds from "./Diamonds";
import { useAppSelector } from "@/app/services/state/store";

type MissionCompomentProps = {
  id: number;
  title: string;
  value: number;
  numberToComplete: number;
};

const MissionCompoment: FC<MissionCompomentProps> = ({
  title,
  value,
  id,
  numberToComplete,
}) => {
  const state = useAppSelector((state) => state.doneDate.doneDates);
  const numberOfTasksDone = state.length - 1;

  return (
    <div className="flex flex-col gap-1" key={id}>
      <p>{title}</p>
      <div className="flex items-center justify-between">
        <div
          className={
            numberOfTasksDone < numberToComplete
              ? "w-[80%] p-2 mt-1 bg-[#DCDCDC] rounded-full overflow-hidden"
              : "w-[80%] p-2 mt-1 bg-green-400 rounded-full overflow-hidden"
          }
        ></div>
        <Diamonds value={value} numberToComplete={numberToComplete} />
      </div>
    </div>
  );
};

export default MissionCompoment;
