import React, { FC } from "react";
import { IoDiamondSharp } from "react-icons/io5";

type DiamondsProps = {
  value: number;
};

const Diamonds: FC<DiamondsProps> = ({ value }) => {
  return (
    <div className="flex items-center gap-1 bg-lightGray p-1 rounded-xl cursor-default">
      <span>{value}</span>
      <IoDiamondSharp className="text-blue-600" />
    </div>
  );
};

export default Diamonds;
