import { SlPresent } from "react-icons/sl";
import NavButton from "./ui/NavButton";

const Rewards = () => {
  return (
    <div>
      <div className="flex items-center gap-2 pt-12 relative">
        <SlPresent className="mt-[2px] text-yellow-600" />
        <div>
          <h3 className="text-sm font-semibold">Take your reward</h3>
          <p className="text-xs">Grow your day streak to get coins</p>
        </div>
      </div>
      <button className="w-full text-xs mt-2 p-2 bg-green-500 rounded-lg text-black hover:brightness-95 duration-300">
        Missions
      </button>
    </div>
  );
};

export default Rewards;
