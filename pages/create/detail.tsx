import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Sidebar from "../../components/Sidebar";
import { Post } from "../../typings";
import { fetchPosts } from "../../utils/fetchPosts";

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
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
          <Modal posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await fetchPosts();

  return {
    props: {
      posts,
    },
  };
};
