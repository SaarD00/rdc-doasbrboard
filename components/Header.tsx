import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import Hdropdown from "./Hdropdown";
const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="px-7 pt-3 flex justify-between z-20 bg-gray-100/50 sticky top-0">
      <div className="flex gap-5">
        <div className="group cursor-pointer ">
          <BsUpload
            onClick={() => router.push("/create/post")}
            className="h-6 w-6 text-gray-500"
          />
          <p className="absolute text-gray-400 -mx-5 scale-0 group-hover:scale-100 transition-all duration-300">
            Upload Form
          </p>
        </div>
        <IoIosPeople className="h-7 w-7 text-gray-500" />
      </div>
      {/* seperation */}

      <Hdropdown />
    </div>
  );
};

export default Header;
