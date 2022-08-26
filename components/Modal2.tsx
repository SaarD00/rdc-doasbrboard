import React, { useState } from "react";
import { Detail, Post } from "../typings";
import Header from "./Header";
import Postt2 from "./Postt2";

interface Props {
  details: Detail[];
}

const Modal = ({ details: detailsProps }: Props) => {
  const [details, setDetails] = useState<Detail[]>(detailsProps);
  return (
    <div className="p-20 col-span-5   ">
      <Postt2 setPosts={setDetails} />
    </div>
  );
};

export default Modal;
