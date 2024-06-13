import { addDiamonds } from "@/app/services/state/features/diamondsSlice";
import { useAppDispatch, useAppSelector } from "@/app/services/state/store";
import React, { FC, useState } from "react";
import { IoDiamondSharp } from "react-icons/io5";
import { toast } from "sonner";
import { MdDone } from "react-icons/md";
import axios from "axios";

type FinishedMission = {
  missionName: string;
  missionValue: number;
};

type DiamondsProps = {
  value: number;
  numberToComplete: number;
  missionId: number;
  finishedMissions: FinishedMission[];
};

const Diamonds: FC<DiamondsProps> = ({
  value,
  numberToComplete,
  finishedMissions,
}) => {
  const state = useAppSelector((state) => state.doneDate.doneDates);
  const tasksState = useAppSelector((state) => state.task.tasks);
  const diamondsState = useAppSelector((state) => state.diamonds.diamonds);

  const dispatch = useAppDispatch();
  const currentUser = localStorage.getItem("user");
  const currentUserId = JSON.parse(currentUser!);

  const numberOfTasksDone = tasksState.length;

  const finishedMissionsValues = finishedMissions.map(
    (item) => item.missionValue
  );

  const handleAddDiamonds = () => {
    if (numberOfTasksDone < numberToComplete && state.length > 0) {
    } else {
      if (value === 5) {
        axios.post("http://localhost:3000/api/addMission", {
          missionName: `Complete Task`,
          missionValue: value,
          User_id: currentUserId.id,
        });
      } else if (value === 10) {
        axios.post("http://localhost:3000/api/addMission", {
          missionName: `Complete 3 Tasks`,
          missionValue: value,
          User_id: currentUserId.id,
        });
      } else if (value === 15) {
        axios.post("http://localhost:3000/api/addMission", {
          missionName: `Complete 5 Tasks`,
          missionValue: value,
          User_id: currentUserId.id,
        });
      }
      dispatch(addDiamonds({ User_id: currentUserId.id, value }));
      toast.success(`Successfully added ${value} diamonds`);
      window.location.reload();
    }
  };
  return finishedMissionsValues.find((number) => number === value) ? (
    <div className="flex items-center justify-center pr-2">
      <MdDone className="text-green-500" />
    </div>
  ) : (
    <div
      className={
        numberOfTasksDone < numberToComplete && state.length > 0
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
