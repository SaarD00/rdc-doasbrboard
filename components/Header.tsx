import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
const Header = () => {
  return (
    <div className="p-7 flex justify-between border-b shadow-md">
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
              <p className="font-semibold text-lg">Lord SaarDOO</p>
              <p className="">Admin</p>
            </div>

            <img
              className="h-14 w-14 rounded-full"
              src="https://media.graphcms.com/3h5WB3AXTCaxXS6g6q6i"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
