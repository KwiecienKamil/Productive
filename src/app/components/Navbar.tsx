"use client";
import NavButton from "./ui/NavButton";
import { NavButtons } from "../utils/Helpers";
import { RiCopperCoinLine } from "react-icons/ri";
import { useAppSelector } from "../services/state/store";

const Navbar = () => {
  const state = useAppSelector((state) => state.task.tasks);

  console.log(state);

  return (
    <div className="flex flex-col gap-4 mr-2">
      <div className="px-[10px] text-2xl">
        <RiCopperCoinLine className="text-yellow-500" />
      </div>
      {NavButtons.map((button) => (
        <NavButton key={button.id} followingHref={button.href}>
          {button.icon}
          {button.text}
        </NavButton>
      ))}
    </div>
  );
};

export default Navbar;
