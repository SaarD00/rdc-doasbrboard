import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen text-5xl">
      <p onClick={() => signIn()}>Sign In </p>
    </div>
  );
};

export default Login;
