import React, { FC } from "react";
import { IoDiamondSharp } from "react-icons/io5";
import Diamonds from "./Diamonds";
import { missions } from "@/app/utils/Helpers";

type MissionCompomentProps = {
  id: number;
  title: string;
  value: number;
};

const MissionCompoment: FC<MissionCompomentProps> = ({ title, value, id }) => {
  return (
    <div className="flex flex-col gap-1" key={id}>
      <p>{title}</p>
      <div className="flex items-center justify-between">
        <div className="w-[80%] p-2 mt-1 bg-[#DCDCDC] rounded-full overflow-hidden flex"></div>
        <Diamonds value={value} />
      </div>
    </div>
  );
};

export default MissionCompoment;
