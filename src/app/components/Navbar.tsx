"use client";
import NavButton from "./ui/NavButton";
import { NavButtons } from "../utils/Helpers";
import { RiCopperCoinLine } from "react-icons/ri";
import { useAppSelector } from "../services/state/store";
import axios from "axios";

const Navbar = () => {
  const state = useAppSelector((state) => state.task.tasks);

  return (
    <div className="flex flex-col gap-4 mr-2 pt-12">
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
