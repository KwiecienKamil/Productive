import Image from "next/image";
import logo from "@/app/assets/logo.png";
import NavButton from "./ui/NavButton";
import { NavButtons } from "../utils/Helpers";
import { RiCopperCoinLine } from "react-icons/ri";

const Navbar = () => {
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
