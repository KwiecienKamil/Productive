"use client";
import { getMonth } from "@/app/utils/Helpers";
import React, { FC, useState } from "react";
import Day from "./Day";
import { useAppDispatch } from "@/app/services/state/store";
import {
  doneDate,
  notDoneTask,
  removeTask,
  updateTaskTitle,
} from "@/app/services/state/features/taskSlice";

import { CiEdit } from "react-icons/ci";
import { FaCheckSquare } from "react-icons/fa";

type TaskCardProps = {
  id: number | undefined;
  title: string | undefined;
  task: object;
};

const TaskCard: FC<TaskCardProps> = ({ id, title, task }) => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [taskDone, setTaskDone] = useState(false);
  const [editingTaskTitle, setEditingTaskTitle] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const dispatch = useAppDispatch();

  const handleTaskDone = () => {
    if (taskDone === true) {
      dispatch(notDoneTask(task));
      setTaskDone(!taskDone);
    } else {
      dispatch(doneDate(task));
      setTaskDone(!taskDone);
    }
  };

  const handleRemove = () => {
    dispatch(removeTask(task));
  };

  const handleNewTaskTitle = () => {
    dispatch(updateTaskTitle({ ...task, title: newTaskTitle }));
    setEditingTaskTitle(!editingTaskTitle);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl text-xl" key={id}>
      <div className="p-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CiEdit
            className="text-2xl cursor-pointer"
            onClick={() => setEditingTaskTitle(!editingTaskTitle)}
          />
          {editingTaskTitle ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="w-[180px]"
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />
              <FaCheckSquare
                className="text-2xl cursor-pointer text-green-400"
                onClick={handleNewTaskTitle}
              />
            </div>
          ) : (
            <h2 className="card-title">{title}</h2>
          )}
        </div>
        <input
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-sec checked:bg-sec checked:before:bg-sec hover:before:opacity-10"
          onClick={handleTaskDone}
        />
      </div>
      {currentMonth.map((row, i) => (
        <React.Fragment key={i}>
          <div className="flex justify-between" key={i}>
            {row.map((day, idx) => (
              <Day day={day} rowIdx={i} key={idx} taskId={id} />
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TaskCard;
