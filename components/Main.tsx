import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Sidebar2 from "./Sidebar2";

const Main = () => {
  return (
    <div className="grid grid-cols-6 bg-gray-100">
      <div className="hidden md:inline">
        <Sidebar />
      </div>
      <Dashboard />
    </div>
  );
};

export default Main;
