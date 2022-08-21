import React, { useState } from "react";
import { Post } from "../typings";
import Header from "./Header";
import Postt from "./Post";

interface Props {
  posts: Post[];
}

const Modal = ({ posts: postsProps }: Props) => {
  const [posts, setPosts] = useState<Post[]>(postsProps);
  return (
    <div className="p-20 col-span-5   ">
      <Postt setPosts={setPosts} />
    </div>
  );
};

export default Modal;
