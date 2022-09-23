import React, { useState } from "react";
import { TbChecklist } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AiOutlineTeam, AiOutlineCloudUpload } from "react-icons/ai";
const Sidebar = () => {
  const { data: session } = useSession();
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  const router = useRouter();

  const selecttre = () => {
    setSelect3(true);
    router.push("/create/post");
  };

  const selecttwo = async () => {
    router.push("/teams");
    setSelect2(true);
  };
  const select = async () => {
    router.push("/");
    setSelect2(false);
  };

  const active =
    "flex items-center gap-2 pl-4 pt-3 pb-2.5 rounded-lg text-white bg-cyan-500 m-text-md  hover:bg-cyan-400 transition-all duration-150 m-2 cursor-pointer";
  const normal =
    "flex items-center gap-2 pl-4 pt-3 pb-2.5 rounded-lg text-md text-black hover:bg-[#F7F7F7] hover:text-gray-800 m-2 cursor-pointer";
  return (
    <div className=" min-h-screen sticky z-50 top-0 col-span-1 bg-white  ">
      <main>
        {/* Header */}
        <div className="p-5 px-6 flex justify-between text-sky-600 font-extrabold gap-5 items-center ">
          <div className="flex items-center gap-5">
            <img
              onClick={() => signOut()}
              src="https://cdn.sanity.io/images/mrfd4see/production/a8d87dfb8246687bb8129c03cc6b16c99e007b73-1803x405.png"
            />
          </div>
        </div>

        {/* DashBoard */}
        <div className="px-5 flex flex-col gap-5">
          <div>
            <p className="text-gray-600  m-3 mt-4 uppercase ">dashboard</p>
            <div
              onClick={select}
              className={
                router.pathname == "/teams" ||
                router.pathname == "/create/post" ||
                router.pathname == "/create/detail" ||
                router.pathname == "/profile"
                  ? normal
                  : active
              }
            >
              <TbChecklist className="h-5 w-5 hidden flex-shrink-0 lg:inline-flex" />
              <p className=" lg:text-base md:text-sm ">Dashboard</p>
            </div>
            <p className="text-gray-600  m-3 mt-4 uppercase ">Pages</p>
            <div
              onClick={selecttwo}
              className={router.pathname == "/teams" ? active : normal}
            >
              <AiOutlineTeam className="h-5 w-5 hidden lg:inline-flex flex-shrink-0" />
              <p className="lg:text-base md:text-sm">Team</p>
            </div>
            <div
              onClick={selecttre}
              className={
                router.pathname == "/create/post" ||
                router.pathname == "/create/detail"
                  ? active
                  : normal
              }
            >
              <AiOutlineCloudUpload className="h-5 w-5 hidden lg:inline-flex flex-shrink-0" />
              <p className="lg:text-base md:text-sm">Upload</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
