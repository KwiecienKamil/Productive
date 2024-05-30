import { addDiamonds } from "@/app/services/state/features/diamondsSlice";
import { useAppDispatch, useAppSelector } from "@/app/services/state/store";
import React, { FC } from "react";
import { IoDiamondSharp } from "react-icons/io5";
import { toast } from "sonner";

type DiamondsProps = {
  value: number;
  numberToComplete: number;
};

const Diamonds: FC<DiamondsProps> = ({ value, numberToComplete }) => {
  const state = useAppSelector((state) => state.doneDate.doneDates);

  const dispatch = useAppDispatch();
  const currentUser = localStorage.getItem("user");
  const currentUserId = JSON.parse(currentUser!);

  const numberOfTasksDone = state.length - 1;

  const handleAddDiamonds = () => {
    if (numberOfTasksDone < numberToComplete) {
    } else {
      dispatch(addDiamonds({ User_id: currentUserId.id, value }));
      toast.success(`Successfully added ${value} diamonds`);
    }
  };
  return (
    <div
      className={
        numberOfTasksDone < numberToComplete
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
