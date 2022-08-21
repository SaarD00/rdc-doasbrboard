import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import Hdropdown from "./Hdropdown";
const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="px-7 pt-3 flex justify-between z-50  bg-gray-100 sticky top-0">
      <div className="flex gap-5">
        <AiOutlineCalendar
          onClick={() => router.push("/create/post")}
          className="h-7 w-7 text-gray-500"
        />
        <IoIosPeople className="h-7 w-7 text-gray-500" />
      </div>
      {/* seperation */}

      <Hdropdown />
    </div>
  );
};

export default Header;
