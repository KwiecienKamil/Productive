import React from "react";

const NavButton = (children: React.ReactNode) => {
  return (
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-d btn-outline btn-info rounded-lg">
      {children}
    </button>
  );
};

export default NavButton;
