import { useRouter } from "next/router";
import React from "react";

const Menu = () => {
  const router = useRouter();
  return (
    <div>
      <div className="bg-slate-200 h-screen">
        {/* Header */}
        <div className="flex justify-start items-center gap-7 p-5">
          <div className="bg-slate-300 p-2 rounded-full">
            <p className="font-semibold">Home</p>
          </div>
          <p className="text-gray-600 font-medium">Team</p>
        </div>
        {/* Menu */}
        <div className="p-1  gap-10  flex justify-center  items-center">
          <div className="bg-white flex  justify-center items-center p-20 rounded-lg px-24">
            <p
              onClick={() => router.push("/create/post")}
              className="font-bold text-8xl text-sky-500"
            >
              A.I
            </p>
          </div>
          <div className="bg-white flex  justify-center items-center p-20 rounded-lg px-24">
            <p className="font-bold text-8xl text-red-500">MATH</p>
          </div>
          <div className="bg-white flex  justify-center items-center p-20 rounded-lg px-24">
            <p className="font-bold text-8xl text-green-500">Bio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
