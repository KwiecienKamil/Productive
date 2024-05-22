import { SlPresent } from "react-icons/sl";
import Link from "next/link";

const Rewards = () => {
  return (
    <div>
      <div className="flex gap-3 pt-12 relative">
        <SlPresent className="mt-[2px] text-yellow-600 text-2xl" />
        <div>
          <h3 className="font-semibold text-lg">Take your reward</h3>
          <p className="text-md w-[180px]">Grow your day streak to get coins</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="/missions"
          className="w-[80%] text-center mt-2 p-1 bg-green-500 rounded-lg text-black hover:brightness-95 duration-300"
        >
          Missions
        </Link>
      </div>
    </div>
  );
};

export default Rewards;
