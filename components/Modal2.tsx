import React, { useState } from "react";
import { Detail, Post } from "../typings";
import Header from "./Header";
import Postt2 from "./Postt2";
import Sidebar2 from "./Sidebar2";

interface Props {
  details: Detail[];
}

const Modal = ({ details: detailsProps }: Props) => {
  const [details, setDetails] = useState<Detail[]>(detailsProps);
  return (
    <div className="p-0 md:p-10 lg:p-16 flex flex-col gap-y-5 justify-center items-center w-screen overflow-hidden col-span-5   ">
      <Sidebar2 />
      <Postt2 setPosts={setDetails} />
    </div>
  );
};

export default Modal;
