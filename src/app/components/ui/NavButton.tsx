import React, { FC } from "react";

interface NavButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const NavButton: FC<NavButtonProps> = ({ children }) => {
  return (
    <button className="font-semibold flex items-center gap-1 py-2 px-3 rounded-lg hover:bg-sec hover:text-white duration-300 transition-colors text-xl">
      {children}
    </button>
  );
};

export default NavButton;
