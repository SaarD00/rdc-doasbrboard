import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Profile = () => {
  const { data: session } = useSession();
  return (
    // cONTAINR
    <div className="flex flex-col justify-center   p-1  scale-90  shadow-sm rounded-2xl ">
      <p className="text-3xl font-bold mb-5">User Profile</p>
      <div className="flex flex-col bg-white rounded-fu justify-center items-center">
        {/* Top */}
        <div>
          <img
            className="rounded-2xl"
            src="https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/dark/static/media/profilebg.f087528c.jpg"
          />
        </div>
        <div className="absolute mt-64 flex justify-center items-center   border-4  rounded-full">
          <img
            src={session?.user?.image || ""}
            className="rounded-full h-32 w-32 object-cover"
          />
        </div>
        <div className="bg-gray-200 - justify-center w-full rounded-lg mt-10 p-5 items-center flex flex-col ">
          <p className="text-xl font-semibold ">{session?.user?.name}</p>
          <p className="text-gray-700">{}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
