import Image from "next/image";
import React, { useState, useEffect } from "react";
import defaultUserPicture from "../assets/defaultUserPicture.png";
import { RiTaskLine } from "react-icons/ri";
import { FaFire } from "react-icons/fa6";

const ProfileComponent = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [streak, setStreak] = useState(0); // State for the streak
  const pictureRef = React.useRef<HTMLInputElement>(null);

  const currentTasks = localStorage.getItem("tasks");
  const currentTasksvalue = currentTasks ? JSON.parse(currentTasks) : [];

  const currentDonedates = localStorage.getItem("doneDates");
  const currentDonedatesvalue = currentDonedates
    ? JSON.parse(currentDonedates)
    : [];

  useEffect(() => {
    const savedProfileImage = localStorage.getItem("profileImage");
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
    }

    // Calculate the streak when the component loads
    calculateStreak(currentDonedatesvalue);
  }, []);

  // Function to calculate the streak
  const calculateStreak = (
    doneDates: { Task_doneDate: string; Task_id: number }[]
  ) => {
    if (!doneDates.length) {
      setStreak(0);
      return;
    }

    // Parse dates into Date objects and sort them in ascending order
    const dates = doneDates
      .map(
        (task) =>
          new Date(`20${task.Task_doneDate.split("-").reverse().join("-")}`)
      ) // Convert "dd-mm-yy" to "yyyy-mm-dd"
      .sort((a, b) => a.getTime() - b.getTime());

    let currentStreak = 0;
    let maxStreak = 1;

    for (let i = 1; i < dates.length; i++) {
      const prevDate = dates[i - 1];
      const currentDate = dates[i];

      // Check if the difference between currentDate and prevDate is exactly 1 day
      const differenceInTime = currentDate.getTime() - prevDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);

      if (differenceInDays === 1) {
        currentStreak++;
      } else {
        currentStreak = 1; // Reset streak if the gap is more than a day
      }

      maxStreak = Math.max(maxStreak, currentStreak);
    }

    setStreak(maxStreak);
  };

  // Function to convert a file to a base64 string
  const convertToBase64 = (file: File) => {
    return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleImageClick = () => {
    pictureRef.current?.click();
  };

  const handleChangeImage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const base64Image = (await convertToBase64(file)) as string;
      setProfileImage(base64Image);
      localStorage.setItem("profileImage", base64Image);
    }
  };

  return (
    <div className="w-full shadow-sm p-4 pt-10">
      <div className="card w-[28rem] shadow-sm p-4 bg-sec text-white">
        <div className="p-8 flex gap-8">
          <div className="text-[20px] max-w-[200px]" onClick={handleImageClick}>
            {profileImage ? (
              <Image
                src={profileImage}
                alt="User picture"
                width={100}
                height={100}
                className="rounded-full"
              />
            ) : (
              <Image
                src={defaultUserPicture}
                alt="User picture"
                width={80}
                height={80}
              />
            )}
            <input
              type="file"
              ref={pictureRef}
              className="mt-4 hidden"
              onChange={handleChangeImage}
            />
          </div>
          <div className="mt-2">
            <p>
              Hi, <span className="font-bold">Kamil👋</span>
            </p>
            <div className="flex items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-2">
                <RiTaskLine /> Tasks
              </div>
              <button className="px-2 py-1 bg-pri text-sec rounded-lg">
                {currentTasksvalue.length}
              </button>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center justify-between gap-2">
                <FaFire />
                Current Streak
              </div>
              <button className="px-2 py-1 bg-pri text-sec rounded-lg">
                {streak}
              </button>
            </div>
            <p>Keep going!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
