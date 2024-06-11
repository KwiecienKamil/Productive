"use client";
import React, { useEffect, useState } from "react";
import Quests from "../components/Quests";
import DailyStreak from "../components/DailyStreak";
import Navbar from "../components/Navbar";
import axios from "axios";

const page = () => {
  const [finishedMissions, setFinishedMissions] = useState([]);
  const currentUser = localStorage.getItem("user");
  const currentUserId = JSON.parse(currentUser!);
  useEffect(() => {
    axios
      .post("http://localhost:3000/api/getMissions", {
        User_id: currentUserId.id,
      })
      .then((res) => {
        setFinishedMissions(res.data);
      });
  }, [finishedMissions]);
  return (
    <>
      <Navbar />
      <div className="max-h-screen w-[90%] px-6 pt-2 text-xl">
        <h1 className="text-sec font-bold text-[14px]">Missions</h1>
        <div className="pt-6 flex gap-8">
          <Quests finishedMissions={finishedMissions} />
          <DailyStreak />
        </div>
      </div>
    </>
  );
};

export default page;
