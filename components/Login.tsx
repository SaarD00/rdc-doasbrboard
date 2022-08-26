import { Button } from "@mui/material";
import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  return (
    <div className="flex-col flex h-screen lg:grid lg:grid-cols-10 ">
      {/* left */}
      <div className="bg-gradient-to-br lg:col-span-5 bg-white border-r border-gray-600/5">
        <div className="flex flex-col   p-20 lg:min-h-screen">
          <p className="text-2xl font-semibold">Welcome Back</p>
          <hr className="my-2 border-gray-300  "></hr>
          <div className="flex justify-center ">
            <Button onClick={() => signIn()} variant="contained">
              Sign In
            </Button>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex-1 bg-gradient-to-bl bg-cyan-600 flex flex-col p-12 lg:col-span-5">
        {/* Header */}
        <hr className="my-2 border-gray-600 border"></hr>
        <div className="mt-10 flex-1 flex lg:justify-center flex-col items-center space-y-6 text-center lg:space-y-0"></div>
      </div>
    </div>
  );
};

export default Login;
