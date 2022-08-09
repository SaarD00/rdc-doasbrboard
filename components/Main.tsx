import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <div className="grid grid-cols-6">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Main;
