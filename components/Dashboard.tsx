import React from "react";
import Activity from "./Activity";
import Header from "./Header";
import Stats from "./Stats";
import TeamOverview from "./TeamOverview";

const Dashboard = () => {
  return (
    <div className="col-span-5 ">
      <Header />
      <div className="gap-y-5   p-10  ">
        <Stats />
        <div className="flex justify-start gap-14 items-center">
          <Activity />
          <TeamOverview />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
