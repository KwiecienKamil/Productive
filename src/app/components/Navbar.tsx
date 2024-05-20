"use client";
import NavButton from "./ui/NavButton";
import { NavButtons } from "../utils/Helpers";

const Navbar = () => {
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
