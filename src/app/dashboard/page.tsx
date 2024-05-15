"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Tasks from "../components/Tasks";
import Rewards from "../components/Rewards";
import { useAppSelector } from "../services/state/store";

const Dashboard = () => {
  const state = useAppSelector((state) => state.task.tasks);
  console.log(state);
  return (
    <>
      <Navbar />
      <Tasks />
      <Rewards />
    </>
  );
};

export default Dashboard;
