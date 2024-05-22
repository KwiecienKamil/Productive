import Link from "next/link";
import React, { FC } from "react";

type NavButtonProps = {
  children: React.ReactNode;
  followingHref: string;
};

const NavButton: FC<NavButtonProps> = ({ children, followingHref }) => {
  return (
    <Link
      href={`${followingHref}`}
      className="font-semibold flex items-center gap-1 py-2 px-3 rounded-lg hover:bg-pri duration-300 transition-colors text-xl"
    >
      {children}
    </Link>
  );
};

export default NavButton;
