import type { GetServerSideProps, NextPage } from "next";
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
import { Appointment } from "../typings";
import { fetchPosts } from "../utils/fetchPosts";
interface Props {
  appointments: Appointment[];
}
const Home = ({ appointments }: Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) return <Login />;
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
          <TeamOverview appointments={appointments} />
        </div>
      </div>
    </div>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const appointments = await fetchPosts();

  return {
    props: {
      appointments,
    },
  };
};
