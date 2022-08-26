import React, { Dispatch, SetStateAction, useState } from "react";
import { TbChecklist } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { Detail, DetailBody, Post, PostBody } from "../typings";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { MdOutlineCancel } from "react-icons/md";
import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";

interface Props {
  setPosts: Dispatch<SetStateAction<Detail[]>>;
}

const Postt2 = ({ setPosts }: Props) => {
  const [input, setInput] = useState<string>("");
  const [excerpt, setExcerpt] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const router = useRouter();

  const { data: session } = useSession();

  const Post = async () => {
    const postInfo: DetailBody = {
      firstext: input,
      username: session?.user?.name || "Unknown",
      profileImg: session?.user?.image || "https://links.papareact.com/gll",
      image: image,
      secondtext: excerpt,
      categories: link,
      title: title,
    };

    const result = await fetch(`/api/addDetail`, {
      body: JSON.stringify(postInfo),
      method: "POST",
    });

    const json = await result.json();

    toast.success(" Posted", {
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
    setLink("");
    router.push("/create/detail");
  };
  return (
    <Grid className="bg-white rounded-lg p-5" container spacing={0}>
      <Grid item xs={12} lg={12}>
        <div className="p-2 space-y-10">
          <p className="text-2xl">Upload Form</p>
          <Stack spacing={3}>
            <TextField
              id="title"
              label="Title"
              variant="outlined"
              placeholder="Something like: Introduction to basic vectors!"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
            <TextField
              id="title"
              label="Opening Para"
              variant="outlined"
              placeholder="Something like: Introduction to basic vectors!"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />

            <TextField
              id="outlined-multiline-static"
              label="Second Para"
              multiline
              onChange={(e) => {
                setExcerpt(e.target.value);
              }}
              value={excerpt}
              rows={4}
              placeholder="snƃoɯɐdıʞ"
            />
            <TextField
              placeholder="Something Like: https://react-material.fusetheme.com/assets/images/logo/logo.svg "
              id="image"
              label="Image"
              variant="outlined"
              onChange={(e) => {
                setImage(e.target.value);
              }}
              value={image}
            />
            <TextField
              id="Subject"
              label="Subject Name"
              variant="outlined"
              placeholder="Like 'ai' also use short forms"
              onChange={(e) => {
                setLink(e.target.value);
              }}
              value={link}
            />
          </Stack>
          <br />
          <div className="flex justify-between">
            <Button onClick={handleSubmit} variant="contained">
              Submit
            </Button>
            <Button
              onClick={() => router.push("/create/detail")}
              variant="contained"
            >
              Detail Page
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Postt2;
