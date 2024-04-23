import { AiFillSchedule } from "react-icons/ai";

const WelcomePageTop = () => {
  return (
    <div className="flex justify-center py-8">
      <div className="w-[30%] px-4 py-4 flex items-center justify-between bg-white/5 rounded-xl">
        <AiFillSchedule className="text-xl text-accent" />
        <h1 className="text-welcome_text cursor-default text-lg">Productive</h1>
        <AiFillSchedule className="text-xl text-accent" />
      </div>
    </div>
  );
};

export default WelcomePageTop;
