"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Tasks from "../components/Tasks";
import Rewards from "../components/Rewards";

const Dashboard = () => {
  const [streak, setStreak] = useState(0);

  // Getting Tasks from local storage
  const currentTasks = localStorage.getItem("tasks");
  const currentTasksvalue = currentTasks ? JSON.parse(currentTasks) : [];

  const currentDonedates = localStorage.getItem("doneDates");
  const currentDonedatesvalue = currentDonedates
    ? JSON.parse(currentDonedates)
    : [];

  useEffect(() => {
    const savedProfileImage = localStorage.getItem("profileImage");
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

  localStorage.setItem("streak", JSON.stringify(streak));
  return (
    <>
      <Navbar />
      <Tasks />
      <Rewards />
    </>
  );
};

export default Dashboard;
