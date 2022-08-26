import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Sidebar from "../../components/Sidebar";
import { Detail, Post } from "../../typings";
import { fetchDetails } from "../../utils/fetchDetails";
import { fetchPosts } from "../../utils/fetchPosts";
import Modal2 from "../../components/Modal2";

interface Props {
  posts: Post[];
  details: Detail[];
}

const Home = ({ posts, details }: Props) => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <Toaster />
      </Head>
      <Toaster />
      <div className="grid grid-cols-6 bg-gray-100">
        <Sidebar />
        <div className="col-span-5">
          <Header />
          <Modal2 details={details} />
        </div>
      </div>
    </div>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await fetchPosts();
  const details = await fetchDetails();

  return {
    props: {
      posts,
      details,
    },
  };
};
