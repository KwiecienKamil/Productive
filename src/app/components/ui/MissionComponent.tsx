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
  const state = useAppSelector((state) => state.task.tasks);
  const doneDates: any = [];
  state.map((item) => doneDates.push(item.doneDates.length));
  const numberOfTasksDone = doneDates.filter((item: number) => item > 0);

  console.log(numberOfTasksDone.length, numberToComplete);

  return (
    <div className="flex flex-col gap-1" key={id}>
      <p>{title}</p>
      <div className="flex items-center justify-between">
        <div
          className={
            numberOfTasksDone.length <= numberToComplete
              ? "w-[80%] p-2 mt-1 bg-[#DCDCDC] rounded-full overflow-hidden"
              : "w-[80%] p-2 mt-1 bg-green-400 rounded-full overflow-hidden"
          }
        ></div>
        <Diamonds value={value} />
      </div>
    </div>
  );
};

export default MissionCompoment;
