import React from "react";
import { Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import { useRouter } from "next/router";

const Sidebar2 = () => {
  const router = useRouter();
  return (
    <div className="md:hidden flex w-screen overflow-hidden mx-auto  justify-center  ">
      <Stack
        direction="row"
        sx={{
          overflowY: "auto",
          height: { sx: "none", md: "95%" },
          flexDirection: { md: "column" },
        }}
      >
        <div className="bg-white overflow-hidden flex gap-10 px-10 py-3 rounded-lg">
          <div
            onClick={() => {
              router.push("/");
            }}
            className="bg-cyan-500 text-white cursor-pointer gap-2 px-5 hover:bg-cyan-400 transition-all duration-300 items-center flex py-1 rounded-full"
          >
            <HomeIcon className="h-5 w-5" />
            <p>Dashboard</p>
          </div>
          <div
            onClick={() => {
              router.push("/teams");
            }}
            className="cursor-pointer  text-black hover:bg-gray-200 transition-all duration-200 gap-2 px-5 items-center flex py-1 rounded-full"
          >
            <p>Team</p>
          </div>
          <div
            onClick={() => {
              router.push("/create/post");
            }}
            className=" cursor-pointer  text-black hover:bg-gray-200 transition-all duration-200 gap-2 px-5 items-center flex py-1 rounded-full"
          >
            <DeveloperModeIcon className="h-5 w-5" />
            <p>Upload</p>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default Sidebar2;
