import React, { useState } from "react";
import packageImg from "@/app/assets/package.svg";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
import { toast } from "sonner";

type StreakPresentProps = {
  day: string;
  awardValue: number;
  dayNumber: number;
  streak: any;
};

const StreakPresent = ({
  day,
  awardValue,
  streak,
  dayNumber,
}: StreakPresentProps) => {
  const [awardClaimed, setawardClaimed] = useState(false);

  const handleButtonClick = () => {
    setawardClaimed(true);
    toast("XDD");
  };

  return (
    <div className="flex items-center justify-center flex-col gap-2 pt-8">
      <Image src={packageImg} alt="package" className="w-[30px] sm:w-[50px]" />
      <div className="flex items-center flex-col">
        <CiCircleCheck
          className={`text-xl sm:text-3xl ${
            streak > dayNumber ? "text-green-500" : "text-gray-400"
          }`}
        />
        <span className="text-sm sm:text-md">{day}</span>
        {streak > dayNumber && !awardClaimed && (
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 text-white rounded px-4 py-2 mt-2 hover:bg-blue-600"
          >
            Claim Award
          </button>
        )}
        {awardClaimed && (
          <span className="text-green-500 text-sm mt-2">Award Claimed!</span>
        )}
      </div>
    </div>
  );
};

export default StreakPresent;
