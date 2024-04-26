import { FaHome } from "react-icons/fa";
import { RiTaskFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

import dayjs from "dayjs";

export const NavButtons = [
  {
    id: 1,
    icon: <FaHome />,
    text: "Home",
  },
  {
    id: 2,
    icon: <RiTaskFill />,
    text: "Missions",
  },
  {
    id: 3,
    icon: <FaUserCircle />,
    text: "Profile",
  },
];

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysArray = new Array(5).fill("").map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysArray;
}
