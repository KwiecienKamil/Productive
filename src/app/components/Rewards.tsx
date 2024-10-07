import { SlPresent } from "react-icons/sl";
import Link from "next/link";

const Rewards = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-normal items-center gap-2 pt-12 relative ">
        <SlPresent className="mt-[2px] text-yellow-600 text-2xl" />
        <div>
          <h3 className="font-semibold  text-[11px] xl:text-md xxl:text-lg">
            Take your reward
          </h3>
          <p className=" w-[80px] text-[10px] sm:text-md xxl:max-w-[190px]">
            Grow your day streak to get coins
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="/missions"
          className="text-sm sm:text-lg sm:text-center mt-2 p-1 bg-green-500 rounded-lg text-black hover:brightness-95 duration-300"
        >
          Missions
        </Link>
      </div>
    </div>
  );
};

export default Rewards;
