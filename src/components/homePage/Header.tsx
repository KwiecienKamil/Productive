import React from "react";

import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div>
      <img src={logo} alt="Productive Logo" className="w-[80px] p-4" />
    </div>
  );
};

export default Header;
