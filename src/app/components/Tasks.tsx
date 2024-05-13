"use client";

import { FaPlus } from "react-icons/fa";
import NavButton from "./ui/NavButton";
import TaskCard from "./ui/TaskCard";
import { useAppDispatch, useAppSelector } from "../services/state/store";
import { addTask, removeTask } from "../services/state/features/taskSlice";

const Tasks = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.task.tasks);

  const handleAddTask = () => {
    dispatch(
      addTask({
        id: Math.floor(Math.random() * 99999),
        title: "Task",
        doneDates: [],
        isTaskDone: false,
      })
    );
  };

  return (
    <div className="max-h-screen w-[70%] px-4 overflow-scroll scrollbar scrollbar-thumb-transparent">
      <div className="flex items-center gap-4">
        <p className="font-semibold text-lg">{state.length} Tasks</p>
        <NavButton followingHref="#">
          <FaPlus className="text-sm" onClick={handleAddTask} />
        </NavButton>
      </div>
      <div className="pt-4 flex justify-between flex-wrap gap-4">
        {state.map((task) => (
          <TaskCard id={task.id} title={task.title} task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
