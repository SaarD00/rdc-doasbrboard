import { useSession } from "next-auth/react";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="px-7 pt-3 flex justify-between z-50  bg-gray-100 sticky top-0">
      <div className="flex gap-5">
        <AiOutlineCalendar className="h-7 w-7 text-gray-500" />
        <IoIosPeople className="h-7 w-7 text-gray-500" />
      </div>
      {/* seperation */}
      <div className="flex gap-10">
        <div>
          <IoNotificationsOutline className="h-7 w-7 text-gray-500" />
        </div>
        <div>
          <div className="flex  gap-2">
            <div className="flex flex-col items-end  ">
              <p className="font-semibold text-lg">{session?.user?.name}</p>
              <p className=""></p>
            </div>

            <img
              className="h-9 w-9 rounded-full"
              src={session?.user?.image || "https://links.papareact.com/gll"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
