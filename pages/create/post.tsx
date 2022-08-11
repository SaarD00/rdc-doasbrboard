import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
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
      <Modal posts={posts} />
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
