import React, { useState } from "react";
import { Post } from "../typings";
import Header from "./Header";
import Postt from "./Post";
import Sidebar2 from "./Sidebar2";

interface Props {
  posts: Post[];
}

const Modal = ({ posts: postsProps }: Props) => {
  const [posts, setPosts] = useState<Post[]>(postsProps);
  return (
    <div className="p-0 lg:p-14 overflow-hidden md:p-10 flex flex-col gap-y-10 justify-center w-full items-center col-span-5   ">
      <Sidebar2 />
      <Postt setPosts={setPosts} />
    </div>
  );
};

export default Modal;
