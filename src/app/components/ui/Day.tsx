import { useAppSelector } from "@/app/services/state/store";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

type DayProps = {
  day: dayjs.Dayjs;
  rowIdx: number;
  Task_id: number | undefined;
};

const Day = ({ day, rowIdx, Task_id }: DayProps) => {
  const [doneDates, setDoneDates] = useState();
  const state = useAppSelector((state) => state.task.tasks);

  const currentTask = state.find(
    (currentTask) => currentTask.Task_id === Task_id
  );
  const currentDoneDates = currentTask?.Task_doneDates;

  const getCurrentDay = () => {
    if (currentDoneDates?.length === 0) {
      return "notCurrentDay";
    } else {
      return currentDoneDates?.find((date) => date === day.format("DD-MM-YY"))
        ? "currentDay"
        : "notCurrentDay";
    }
  };
  return (
    <div
      className="w-[50px] flex items-center justify-center flex-col"
      key={rowIdx}
    >
      {rowIdx === 0 && (
        <p className="text-sm">{day.format("ddd").toUpperCase()}</p>
      )}
      <div
        className={
          getCurrentDay() === "currentDay"
            ? `h-4 w-4 m-2 bg-green-400 rounded-sm`
            : `h-4 w-4 m-2 bg-slate-300 rounded-sm`
        }
      ></div>
    </div>
  );
};

export default Day;
