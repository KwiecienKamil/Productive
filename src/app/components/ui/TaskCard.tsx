"use client";
import { getMonth } from "@/app/utils/Helpers";
import React, { FC, useState } from "react";
import Day from "./Day";
import { useAppDispatch, useAppSelector } from "@/app/services/state/store";
import {
  doneDate,
  notDoneTask,
  removeTask,
  updateTaskTitle,
} from "@/app/services/state/features/taskSlice";

import { CiEdit } from "react-icons/ci";
import { FaCheckSquare } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import axios from "axios";
import dayjs from "dayjs";
import { toast } from "sonner";

type TaskCardProps = {
  Task_id: number | undefined;
  title: string | undefined;
  task: object;
};

const TaskCard: FC<TaskCardProps> = ({ Task_id, title, task }) => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [taskDone, setTaskDone] = useState(false);
  const [editingTaskTitle, setEditingTaskTitle] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [showDeleteOption, setShowDeleteOption] = useState(false);
  const TodaysDate = dayjs().format("DD-MM-YY");

  const dispatch = useAppDispatch();

  const handleTaskDone = () => {
    if (taskDone === true) {
      axios
        .post("http://localhost:3000/api/deleteDoneDate", {
          Task_id,
        })
        .then((res) => {
          if (res.status === 200) {
            dispatch(notDoneTask(task));
            setTaskDone(!taskDone);
          }
        })
        .catch((err) => {
          toast.success("Something went wrong");
        });
    } else {
      axios
        .post("http://localhost:3000/api/addDoneDate", {
          Task_id,
          TodaysDate,
        })
        .then((res) => {
          if (res.status === 200) {
            dispatch(doneDate(task));
            setTaskDone(!taskDone);
          }
        })
        .catch((err) => {
          toast.success("Something went wrong");
        });
    }
  };

  const handleNewTaskTitle = () => {
    dispatch(updateTaskTitle({ ...task, Task_title: newTaskTitle }));
    setEditingTaskTitle(!editingTaskTitle);
    axios.post("http://localhost:3000/api/updateTask", {
      newTaskTitle,
      Task_id,
    });
  };

  const handleRemoveTask = () => {
    dispatch(removeTask(task));
    axios.post("http://localhost:3000/api/removeTask", { Task_id });
  };

  return (
    <div
      className="card w-96 bg-[#30343F] shadow-sm text-xl text-white pb-2"
      key={Task_id}
    >
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
                className="w-[180px] text-black pl-2"
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />
              <FaCheckSquare
                className="text-2xl cursor-pointer text-green-400"
                onClick={handleNewTaskTitle}
              />
            </div>
          ) : (
            <h2 className="card-title cursor-default">{title}</h2>
          )}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-sec checked:bg-sec checked:before:bg-sec hover:before:opacity-10"
            onClick={handleTaskDone}
          />
          <SlOptionsVertical
            className="cursor-pointer hover:text-gray-400 duration-300"
            onClick={() => setShowDeleteOption(!showDeleteOption)}
          />
          {showDeleteOption ? (
            <button className="text-md text-red-500" onClick={handleRemoveTask}>
              Delete
            </button>
          ) : null}
        </div>
      </div>
      {currentMonth.map((row, i) => (
        <React.Fragment key={i}>
          <div className="flex justify-between" key={i}>
            {row.map((day, idx) => (
              <Day day={day} rowIdx={i} key={idx} Task_id={Task_id} />
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TaskCard;
