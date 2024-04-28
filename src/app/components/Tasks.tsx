"use client";

import { FaPlus } from "react-icons/fa";
import NavButton from "./ui/NavButton";
import TaskCard from "./ui/TaskCard";
import { useAppDispatch, useAppSelector } from "../services/state/store";
import { addTask, removeTask } from "../services/state/features/taskSlice";

const Tasks = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.task.tasks);

  console.log(state);

  const handleAddTask = () => {
    dispatch(
      addTask({
        id: Math.floor(Math.random() * 99999),
        title: "Task",
        doneDates: [],
      })
    );
  };

  return (
    <div className="max-h-screen w-[70%] px-4 overflow-scroll scrollbar scrollbar-thumb-transparent">
      <div className="flex items-center gap-4">
        <p className="font-semibold text-lg pt-2">10 Tasks</p>
        <NavButton>
          <FaPlus className="text-sm" onClick={handleAddTask} />
        </NavButton>
      </div>
      <div className="pt-4 flex justify-between flex-wrap gap-4">
        {state.map((task) => (
          <TaskCard id={task.id} title={task.title} key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
