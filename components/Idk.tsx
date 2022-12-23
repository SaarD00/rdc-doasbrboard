import React, { useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import { Appointment } from "../typings";
import TimeAgo from "react-timeago";
import { useSession } from "next-auth/react";

interface Props {
  appointments: Appointment[];
}

const Idk = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-white rounded-3xl relative flex justify-center lg:py-5  md:px-10 md:py-5 p-5 w-full shadow-lg scale-90   mt-2 lg:mt-2 ">
      <p className="text-4xl font-semibold">
        Welcome <span>{session?.user?.name}</span>
      </p>
    </div>
  );
};

export default Idk;
