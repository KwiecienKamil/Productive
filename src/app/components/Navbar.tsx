import Image from "next/image";
import logo from "@/app/assets/logo.png";
import NavButton from "./ui/NavButton";
import { NavButtons } from "../utils/Helpers";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-4">
      <Image src={logo} alt="logo" className="w-[40px] ml-8" />
      {NavButtons.map((button) => (
        <NavButton key={button.id}>
          {button.icon}
          {button.text}
        </NavButton>
      ))}
    </div>
  );
};

export default Navbar;
