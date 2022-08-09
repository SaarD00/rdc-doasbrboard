import React from "react";
import Header from "./Header";
import LargeCard from "./LargeCard";
import Menu from "./Menu";

const Dashboard = () => {
  return (
    <div className="col-span-5">
      <Header />
      <LargeCard />
      <Menu />
    </div>
  );
};

export default Dashboard;
