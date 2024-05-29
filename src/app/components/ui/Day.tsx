import dayjs from "dayjs";

type DayProps = {
  day: dayjs.Dayjs;
  rowIdx: number;
  doneDates: string[];
};

const Day = ({ day, rowIdx, doneDates }: DayProps) => {
  const getCurrentDay = () => {
    if (doneDates?.length === 0) {
      return "notCurrentDay";
    } else {
      return doneDates?.find((date) => date === day.format("DD-MM-YY"))
        ? "currentDay"
        : "notCurrentDay";
    }
  };
  return (
    <div
      className="w-[50px] flex items-center justify-center flex-col"
      key={rowIdx}
    >
      {rowIdx === 0 && (
        <p className="text-sm">{day.format("ddd").toUpperCase()}</p>
      )}
      <div
        className={
          getCurrentDay() === "currentDay"
            ? `h-4 w-4 m-2 bg-green-400 rounded-sm`
            : `h-4 w-4 m-2 bg-slate-300 rounded-sm`
        }
      ></div>
    </div>
  );
};

export default Day;
