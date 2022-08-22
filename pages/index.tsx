import type { NextPage } from "next";
import Main from "../components/Main";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Login from "../components/Login";
import { Toaster } from "react-hot-toast";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  // if (!session) return <Login />;s
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <Main />
    </div>
  );
};

export default Home;
