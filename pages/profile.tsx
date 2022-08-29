import type { NextPage } from "next";
import Main from "../components/Main";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Login from "../components/Login";
import { Toaster } from "react-hot-toast";
import TeamOverview from "../components/TeamOverview";
import Header from "../components/Header";
import Profile from "../components/Profile";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) return <Login />;
  if (session) {
    router.push("https://youtu.be/dQw4w9WgXcQ");
  }
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <div className="grid grid-cols-6 bg-gray-100">
        <Sidebar />
        <div className="col-span-5">
          <Header />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Home;
