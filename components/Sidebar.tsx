import React from "react";
import { TbChecklist } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
const Sidebar = () => {
  return (
    <div className="bg-[#111828] h-screen col-span-1  ">
      <main>
        {/* Header */}
        <div className="p-5 px-6 flex justify-between text-cyan-200 gap-5 items-center ">
          <div className="flex items-center gap-5">
            <img src="https://react-material.fusetheme.com/assets/images/logo/logo.svg" />
            <p>StudyLit</p>
          </div>
          <div>
            <FiMenu className="text-white" />
          </div>
        </div>
        {/* Profile */}
        <div className=" justify-center text-white my-10 flex-col flex items-center">
          <img
            className="h-32 w-32 object-cover rounded-full"
            src="https://media.graphcms.com/3h5WB3AXTCaxXS6g6q6i"
          />
          <div className="my-7">
            <p className="font-semibold">Lord SaarD00</p>
            <p className="text-white/70 font-light">saardoo@gmail.com</p>
          </div>
        </div>
        {/* DashBoard */}
        <div className="px-5 flex flex-col gap-5">
          <div>
            <p className="text-indigo-400 font-semibold ">DASHBOARDS</p>
            <p className="text-xs font-normal text-white/70">
              Manage your dashboard
            </p>
          </div>
          <div className=" bg-[#28303d] flex items-center gap-5 p-2 rounded-lg text-white">
            <TbChecklist className="h-5 w-5" />
            <p className="font-semibold">Project</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
