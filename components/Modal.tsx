import React, { useState } from "react";
import { Post } from "../typings";
import Postt from "./Post";

interface Props {
  posts: Post[];
}

const Modal = ({ posts: postsProps }: Props) => {
  const [posts, setPosts] = useState<Post[]>(postsProps);
  return (
    <div className=" ">
      <Postt setPosts={setPosts} />
    </div>
  );
};

export default Modal;
