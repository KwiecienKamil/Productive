"use client";
import { getMonth } from "@/app/utils/Helpers";
import React, { FC, useState } from "react";
import Day from "./Day";
import { useAppDispatch } from "@/app/services/state/store";
import { doneDate, removeTask } from "@/app/services/state/features/taskSlice";
import dayjs from "dayjs";

type TaskCardProps = {
  id: number | undefined;
  title: string | undefined;
  task: object;
};

const TaskCard: FC<TaskCardProps> = ({ id, title, task }) => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [taskDone, setTaskDone] = useState(false);

  const dispatch = useAppDispatch();

  const handleTaskDone = () => {
    dispatch(doneDate(task));
  };

  const handleRemove = () => {
    dispatch(removeTask(task));
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl text-xl" key={id}>
      <div className="p-4 py-2 flex items-center justify-between">
        <h2 className="card-title">{title}</h2>
        <input
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-sec checked:bg-sec checked:before:bg-sec hover:before:opacity-10"
          onClick={handleTaskDone}
        />
        <button onClick={handleRemove}>remove</button>
      </div>
      {currentMonth.map((row, i) => (
        <React.Fragment key={i}>
          <div className="flex justify-between" key={i}>
            {row.map((day, idx) => (
              <Day day={day} rowIdx={i} key={idx} isTaskDone={taskDone} />
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TaskCard;
