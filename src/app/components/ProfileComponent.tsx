import Image from "next/image";
import React, { useState, useEffect } from "react";
import defaultUserPicture from "../assets/defaultUserPicture.png";
import { IoDiamondSharp } from "react-icons/io5";

const ProfileComponent = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);
  const pictureRef = React.useRef<HTMLInputElement>(null);

  // Getting Tasks from local storage
  const currentTasks = localStorage.getItem("tasks");
  const currentTasksvalue = currentTasks ? JSON.parse(currentTasks) : [];

  // Getting Diamonds value from local storage
  const userDiamondsInString = localStorage.getItem("User Diamonds");
  const userDiamonds = JSON.parse(userDiamondsInString!);

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

  // Function to calculate the streak based on unique days
  const calculateStreak = (
    doneDates: { Task_doneDate: string; Task_id: number }[]
  ) => {
    if (!doneDates.length) {
      setStreak(0);
      return;
    }

    // Extract unique days from the dates and sort them in ascending order
    const uniqueDays = Array.from(
      new Set(
        doneDates.map(
          (task) =>
            new Date(`20${task.Task_doneDate.split("-").reverse().join("-")}`)
              .toISOString()
              .split("T")[0] // Extract the date part only
        )
      )
    ).sort();

    let currentStreak = 1;
    let maxStreak = 1;

    for (let i = 1; i < uniqueDays.length; i++) {
      const prevDay = new Date(uniqueDays[i - 1]);
      const currentDay = new Date(uniqueDays[i]);

      // Check if the difference between consecutive dates is exactly 1 day
      const differenceInTime = currentDay.getTime() - prevDay.getTime();
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
    <div className="shadow-sm p-4 pt-10">
      <div className="card w-[95%] sm:w-[28rem] shadow-sm p-4 bg-sec text-white">
        <div className="p-8 flex gap-4">
          <div
            className="flex flex-col justify-center items-center text-[20px] max-w-[250px]"
            onClick={handleImageClick}
          >
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
            <p className="text-center mt-2">
              Hi, <span className="font-bold">Kamil👋</span>
            </p>
            <div className="flex items-center justify-center">
              <span>{userDiamonds}</span>
              <IoDiamondSharp className="text-blue-500 " />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center justify-center flex-col border-[2px] border-pri p-3 rounded-full">
                  Tasks
                  <span>{currentTasksvalue.length}</span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center justify-center flex-col border-[2px] border-pri p-3 rounded-full">
                  Streak
                  <span>{streak}</span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4"></div>
            </div>
            <p className="text-center mt-4">Keep going!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
