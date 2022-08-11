import React, { Dispatch, SetStateAction, useState } from "react";
import { TbChecklist } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { Post, PostBody } from "../typings";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { MdOutlineCancel } from "react-icons/md";

interface Props {
  setPosts: Dispatch<SetStateAction<Post[]>>;
}

const Postt = ({ setPosts }: Props) => {
  const [input, setInput] = useState<string>("");
  const [excerpt, setExcerpt] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const { data: session } = useSession();

  const [showModal, setShowModal] = useState(false);
  const Post = async () => {
    const postInfo: PostBody = {
      text: input,
      username: session?.user?.name || "Unknown",
      profileImg: session?.user?.image || "https://links.papareact.com/gll",
      image: image,
      excerpt: excerpt,
    };

    const result = await fetch(`/api/addPost`, {
      body: JSON.stringify(postInfo),
      method: "POST",
    });

    const json = await result.json();

    toast.success("Tweet Posted", {
      icon: "💯",
    });
    return json;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    Post();
    setInput("");
    setImage("");
    setExcerpt("");
  };
  return (
    <div className="bg-[#111828]  min-h-screen col-span-1  ">
      <main>
        {/* Header */}
        <div className="p-5 px-6 flex justify-between text-cyan-200 gap-5 items-center ">
          <div className="flex items-center gap-5">
            <img src="https://react-material.fusetheme.com/assets/images/logo/logo.svg" />
            <p>StudyLit</p>
          </div>
          <div>
            <FiMenu className="text-white" />
          </div>
        </div>
        {/* Profile */}
        <div className=" justify-center text-white my-10 flex-col flex items-center">
          <img
            className="h-32 w-32 object-cover rounded-full"
            src={session?.user?.image || "https://links.papareact.com/gll"}
          />
          <div className="my-7">
            <p className="font-semibold">{session?.user?.name}</p>
            <p className="text-white/70 font-light">{session?.user?.email}</p>
          </div>
        </div>
        {/* DashBoard */}
        <div className="px-5 flex items-center justify-center flex-col gap-5">
          <div className="hover:bg-[#1b263f] p-5 rounded-full transition-all duration-200 cursor-pointer active:scale-125">
            <p
              onClick={() => setShowModal(true)}
              className="text-indigo-400 text-3xl font-semibold "
            >
              UPLOAD
            </p>
          </div>
          {showModal ? (
            <div className=" bg-[#2b3342] absolute flex flex-col mt-2   gap-5  p-2 w-96 py-5 rounded-lg text-white">
              <div className="bg-indigo-900 justify-between items-center flex px-2 py-2 rounded-lg w-full">
                <p>Upload Modal</p>
                <MdOutlineCancel
                  onClick={() => setShowModal(false)}
                  className="cursor-pointer"
                />
              </div>
              <div className="gap-y-2 flex flex-col">
                <p className="font-semibold">Subject</p>
                <input
                  type="text"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  value={input}
                  placeholder="Enter The Subject Name"
                  className="bg-[#111828] rounded-lg outline-none py-1 px-10 text-white"
                />
              </div>
              <div className="gap-y-2 flex flex-col">
                <p className="font-semibold">Image</p>
                <input
                  type="text"
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                  value={image}
                  placeholder="Enter The image url"
                  className="bg-[#111828] rounded-lg outline-none py-1 px-10 text-white"
                />
              </div>
              <div className="gap-y-2 flex flex-col">
                <p className="font-semibold">Excerpt</p>
                <textarea
                  onChange={(e) => {
                    setExcerpt(e.target.value);
                  }}
                  value={excerpt}
                  placeholder="a small overview of the post"
                  className="bg-[#111828]  rounded-lg outline-none py-1 px-10 text-white"
                />
              </div>
              <div className="flex justify-center bg-indigo-600 py-2 rounded-full">
                <button
                  type="submit"
                  className="text-xl font-bold"
                  onClick={handleSubmit}
                >
                  POST
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default Postt;
