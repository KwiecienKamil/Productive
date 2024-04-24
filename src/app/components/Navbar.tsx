import Image from "next/image";
import { FaHome } from "react-icons/fa";
import logo from "@/app/assets/logo.png";
import NavButton from "./ui/NavButton";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-4">
      <Image src={logo} alt="logo" className="w-[50px]" />
    </div>
  );
};

export default Navbar;
