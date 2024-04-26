import { FaPlus } from "react-icons/fa";
import NavButton from "./ui/NavButton";
import TaskCard from "./ui/TaskCard";

const Tasks = () => {
  return (
    <div className="max-h-screen w-[70%] px-4 overflow-scroll scrollbar scrollbar-thumb-transparent">
      <div className="flex items-center gap-4">
        <p className="font-semibold text-lg pt-2">10 Tasks</p>
        <NavButton>
          <FaPlus className="text-sm" />
        </NavButton>
      </div>
      <div className="pt-4 flex justify-between flex-wrap gap-4">
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default Tasks;
