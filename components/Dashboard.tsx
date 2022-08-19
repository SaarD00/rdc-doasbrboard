import React from "react";
import Header from "./Header";
import Stats from "./Stats";

const Dashboard = () => {
  return (
    <div className="col-span-5 ">
      <Header />
      <div className="col-span-5 p-10  ">
        <Stats />
      </div>
    </div>
  );
};

export default Dashboard;
