import React from "react";
import packageImg from "@/app/assets/package.svg";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";

type StreakPresentProps = {
  day: string;
  awardValue: number;
};

const StreakPresent = ({ day, awardValue }: StreakPresentProps) => {
  return (
    <div className="flex items-center justify-center flex-col gap-2 pt-8">
      <Image src={packageImg} alt="package" className="w-[30px] sm:w-[50px]" />
      <div className="flex items-center flex-col">
        <CiCircleCheck className="text-xl sm:text-3xl" />
        <span className="text-sm sm:text-md">{day}</span>
      </div>
    </div>
  );
};

export default StreakPresent;
