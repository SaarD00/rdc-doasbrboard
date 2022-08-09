import React from "react";

const LargeCard = () => {
  return (
    <div className="flex justify-between items-center p-20 border-b">
      {/* left */}
      <div className="flex gap-5">
        <img
          className="h-20 w-20 object-cover rounded-full"
          src="https://media.graphcms.com/3h5WB3AXTCaxXS6g6q6i"
        />
        <div className="flex flex-col items-start justify-center gap-y-2">
          <p className="text-5xl font-bold">Welcome Back, SaarDOO</p>
          <p className="text-gray-600">
            You have 10 pending jobs and 15 upcoming tasks
          </p>
        </div>
      </div>
      {/* right */}
      <div>
        <div className="bg-indigo-500 text-white px-10 py-5 rounded-full">
          <p className="text-xl font-semibold">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
