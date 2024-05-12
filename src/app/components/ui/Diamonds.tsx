import { useAppSelector } from "@/app/services/state/store";
import React, { FC } from "react";
import { IoDiamondSharp } from "react-icons/io5";

type DiamondsProps = {
  value: number;
  numberToComplete: number;
};

const Diamonds: FC<DiamondsProps> = ({ value, numberToComplete }) => {
  const state = useAppSelector((state) => state.task.tasks);
  const doneDates: any = [];
  state.map((item) => doneDates.push(item.doneDates.length));
  const numberOfTasksDone = doneDates.filter((item: number) => item > 0);

  const handleAddDiamonds = () => {
    if (numberOfTasksDone.length < numberToComplete) {
    }
  };
  return (
    <div
      className={
        numberOfTasksDone.length < numberToComplete
          ? "flex items-center gap-1 bg-lightGray text-sec p-1 rounded-xl cursor-default"
          : "flex items-center gap-1 bg-pri text-black p-1 rounded-xl cursor-pointer"
      }
      onClick={handleAddDiamonds}
    >
      <span>{value}</span>
      <IoDiamondSharp className="text-blue-600" />
    </div>
  );
};

export default Diamonds;
