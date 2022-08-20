import React from "react";
import { TbChecklist } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AiOutlineTeam } from "react-icons/ai";
const Sidebar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className=" min-h-screen sticky z-50 top-0 col-span-1 bg-white  ">
      <main>
        {/* Header */}
        <div className="p-5 px-6 flex justify-between text-cyan-500 font-extrabold gap-5 items-center ">
          <div className="flex items-center gap-5">
            <img src="https://react-material.fusetheme.com/assets/images/logo/logo.svg" />
            <p onClick={() => signIn()}>StudyLit</p>
          </div>
          <div>
            <FiMenu className="text-white" />
          </div>
        </div>

        {/* DashBoard */}
        <div className="px-5 flex flex-col gap-5">
          <div>
            <p className="text-gray-600  m-3 mt-4 uppercase ">dashboard</p>
            <div className=" flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white bg-cyan-500 m-text-md  hover:bg-cyan-400 transition-all duration-150 m-2 cursor-pointer">
              <TbChecklist className="h-5 w-5" />
              <p className="  ">Dashboard</p>
            </div>
            <p className="text-gray-600  m-3 mt-4 uppercase ">Pages</p>
            <div className=" flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-black hover:bg-[#F7F7F7] hover:text-gray-800 m-2 cursor-pointer">
              <AiOutlineTeam className="h-5 w-5" />
              <p className="">Team</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
