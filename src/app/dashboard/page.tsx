"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Tasks from "../components/Tasks";
import Rewards from "../components/Rewards";
import axios from "axios";

const Dashboard = () => {
  const [streak, setStreak] = useState(0);
  const [firstDoneDate, setFirstDoneDate] = useState<string | null>(null); // New state to store the first done date

  const currentDonedates = localStorage.getItem("doneDates");
  const currentDonedatesvalue = currentDonedates
    ? JSON.parse(currentDonedates)
    : [];

  const currentUser = localStorage.getItem("user");
  const currentUserValue = currentUser ? JSON.parse(currentUser) : [];
  const currentUserId = currentUserValue.id;

  useEffect(() => {
    axios
      .post("http://localhost:3000/api/getUsersTasks", {
        User_id: currentUserId,
      })
      .then((res) => {
        localStorage.setItem("tasks", JSON.stringify(res.data));
        window.history.replaceState({}, document.title); // Update state without reload
      });
  }, [currentUserId]);

  useEffect(() => {
    calculateStreak(currentDonedatesvalue);
  }, []);

  // Helper function to clear the time from a date object
  const clearTime = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

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
              .split("T")[0]
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

    // Get the most recent date in the streak and check if it was yesterday
    const lastDate = clearTime(new Date(uniqueDays[uniqueDays.length - 1]));
    const today = clearTime(new Date());

    const differenceInTime = today.getTime() - lastDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    // If the most recent date is not yesterday, reset the streak to 0
    if (differenceInDays > 1) {
      setStreak(0);
    } else {
      setStreak(maxStreak);
    }

    // Set the first done date (earliest date)
    if (uniqueDays.length) {
      setFirstDoneDate(uniqueDays[0]);
    }
  };

  localStorage.setItem("streak", JSON.stringify(streak));
  localStorage.setItem("firstDoneDate", firstDoneDate || ""); // Save the first done date to localStorage

  return (
    <div className="flex justify-between w-full">
      <div className="flex">
        <Navbar />
        <Tasks />
      </div>
      <Rewards />
    </div>
  );
};

export default Dashboard;
