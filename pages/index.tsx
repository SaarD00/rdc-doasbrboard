import type { GetServerSideProps, NextPage } from "next";
import Main from "../components/Main";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Login from "../components/Login";
import { Toaster } from "react-hot-toast";
import { fetchPosts } from "../utils/fetchPosts";
import { Appointment } from "../typings";
interface Props {
  appointment: Appointment[];
}
const Home = ({ appointment }: Props) => {
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
      <Main />
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
