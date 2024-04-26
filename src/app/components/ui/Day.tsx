import { log } from "console";
import dayjs from "dayjs";
import { useState } from "react";

type DayProps = {
  day: dayjs.Dayjs;
  rowIdx: number;
  isTaskDone: boolean;
};

const Day = ({ day, rowIdx, isTaskDone }: DayProps) => {
  const getCurrentDay = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "currentDay"
      : "notCurrentDay";
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
          isTaskDone && getCurrentDay() === "currentDay"
            ? `h-4 w-4 m-2 bg-green-400 rounded-sm`
            : `h-4 w-4 m-2 bg-slate-300 rounded-sm`
        }
      ></div>
    </div>
  );
};

export default Day;
