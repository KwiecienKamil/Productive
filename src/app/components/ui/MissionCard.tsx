import React, { FC } from "react";

type MissionCardProps = {
  title: string;
};

const MissionCard: FC<MissionCardProps> = ({ title }) => {
  return (
    <div className="flex flex-col gap-1">
      <p>{title}</p>
      <div className="w-full p-2 mt-1 bg-[#DCDCDC] rounded-full overflow-hidden flex"></div>
    </div>
  );
};

export default MissionCard;
