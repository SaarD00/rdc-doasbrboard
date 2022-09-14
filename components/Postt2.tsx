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
  const [breaker, setBreaker] = useState<string>("");
  const [breaker3, setBreaker3] = useState<string>("");
  const [breaker2, setBreaker2] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [input3, setInput3] = useState<string>("");
  const [input4, setInput4] = useState<string>("");
  const [input5, setInput5] = useState<string>("");
  const [show, setShow] = useState(false);
  const router = useRouter();

  const { data: session } = useSession();

  const handlepara = () => {
    setShow(true);
  };

  const Post = async () => {
    const postInfo: DetailBody = {
      firstext: input,
      username: session?.user?.name || "Unknown",
      profileImg: session?.user?.image || "https://links.papareact.com/gll",
      image: image,
      secondtext: excerpt,
      categories: link,
      title: title,
      thirdtext: input2,
      fourthtext: input3,
      fifthtext: input4,
      sixthtext: input5,
      breaker: breaker,
      breaker2: breaker3,
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
    setInput2("");
    setInput3("");
    setBreaker("");
    setTitle("");
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
            {show && (
              <>
                <TextField
                  id="title"
                  label="Para Breaker"
                  variant="outlined"
                  placeholder="Use it to seperate weird stuff ( optional )"
                  onChange={(e) => {
                    setBreaker(e.target.value);
                  }}
                  value={breaker}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Third para"
                  multiline
                  onChange={(e) => {
                    setInput2(e.target.value);
                  }}
                  value={input2}
                  rows={4}
                  placeholder="snƃoɯɐdıʞ"
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Fourth Para ( optional )"
                  multiline
                  onChange={(e) => {
                    setInput3(e.target.value);
                  }}
                  value={input3}
                  rows={4}
                  placeholder="snƃoɯɐdıʞ"
                />
                <TextField
                  id="outlined-multiline-static"
                  label="fitfh Para ( optional )"
                  multiline
                  onChange={(e) => {
                    setInput4(e.target.value);
                  }}
                  value={input4}
                  rows={4}
                  placeholder="snƃoɯɐdıʞ"
                />
              </>
            )}

            {show ? null : (
              <Button onClick={handlepara} variant="contained">
                Add Paragraph
              </Button>
            )}
            {breaker2 ? null : (
              <Button onClick={() => setBreaker2(true)} variant="contained">
                Add Breaker
              </Button>
            )}

            {breaker2 ? (
              <>
                <TextField
                  id="title"
                  label="Para Breaker"
                  variant="outlined"
                  placeholder="Use it to seperate weird stuff ( optional )"
                  onChange={(e) => {
                    setBreaker3(e.target.value);
                  }}
                  value={breaker3}
                />

                <TextField
                  id="outlined-multiline-static"
                  label="sixth Para ( optional )"
                  multiline
                  onChange={(e) => {
                    setInput5(e.target.value);
                  }}
                  value={input5}
                  rows={4}
                  placeholder="snƃoɯɐdıʞ"
                />
              </>
            ) : null}

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
            <Button onClick={handlepara} variant="contained">
              Add Paragraph
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Postt2;
