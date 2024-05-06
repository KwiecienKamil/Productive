import React from "react";
import Navbar from "../components/Navbar";
import Tasks from "../components/Tasks";
import Rewards from "../components/Rewards";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Tasks />
      <Rewards />
    </>
  );
};

export default Dashboard;
