import { SlPresent } from "react-icons/sl";
import NavButton from "./ui/NavButton";

const Rewards = () => {
  return (
    <div>
      <div className="flex gap-3 pt-16 relative text-xl">
        <SlPresent className="mt-[2px] text-yellow-600 text-2xl" />
        <div>
          <h3 className="font-semibold">Take your reward</h3>
          <p>Grow your day streak to get coins</p>
        </div>
      </div>
      <button className="w-full mt-2 p-2 bg-green-500 rounded-lg text-black hover:brightness-95 duration-300">
        Missions
      </button>
    </div>
  );
};

export default Rewards;
