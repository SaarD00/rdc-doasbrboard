import React from "react";
import Activity from "./Activity";
import Header from "./Header";
import Idk from "./Idk";
import Sidebar2 from "./Sidebar2";
import Stats from "./Stats";
import TeamOverview from "./TeamOverview";

const Dashboard = () => {
  return (
    <div className="col-span-5 w-screen md:w-full">
      <Header />
      <Sidebar2 />

      <div className="gap-y-5   p-10  ">
        <Stats />
        <div className=" lg:flex  justify-center    gap-14 items-center">
          <Idk />
          <Activity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
