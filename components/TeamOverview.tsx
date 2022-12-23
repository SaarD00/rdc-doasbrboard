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

const products = [
  {
    id: "1",
    name: "Samayara",
    post: "Hardware Lead",
    pname: "CEO",
    priority: "Extreme",
    pbg: "error.main",
    budget: "13.2",
  },
  {
    id: "2",
    name: "Saarthak",
    post: "Software Lead",
    pname: "CEO",
    priority: "Extreme",
    pbg: "error.main",
    budget: "10.2",
  },
  {
    id: "3",
    name: "Atharva",
    post: "Coustumer Care",
    pname: "DayCare",
    priority: "minimal",
    pbg: "success.main",
    budget: "0.2",
  },
];

interface Props {
  appointments: Appointment[];
}

const TeamOverview = ({ appointments: appointmentsProp }: Props) => {
  const [appointments, setAppointments] =
    useState<Appointment[]>(appointmentsProp);
  return (
    <div className="bg-white rounded-3xl relative flex justify-center lg:py-10  md:px-10 md:py-5 p-5 w-full shadow-lg scale-90   mt-2 lg:mt-10 ">
      <p className="text-2xl absolute -mt-5">Appointments</p>
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Id
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Phone
              </Typography>
            </TableCell>
            <div className="flex">
              <TableCell
                sx={{
                  display: {
                    xs: "none",
                    lg: "flex",
                  },
                }}
              >
                <Typography color="textSecondary" variant="h6">
                  Test Type
                </Typography>
              </TableCell>

              <TableCell
                sx={{
                  display: {
                    xs: "none",
                    lg: "flex",
                  },
                }}
              >
                <Typography color="textSecondary" variant="h6">
                  Date
                </Typography>
              </TableCell>
            </div>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment._id}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {appointment._id.slice(0, 5)}
                </Typography>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {appointment.paitent_name}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    ></Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {appointment.phone}
                </Typography>
              </TableCell>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    lg: "inline-flex",
                  },
                  mt: 3,
                }}
              >
                <TableCell align="right">
                  <Typography variant="h6">{appointment.speciality}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">
                    <TimeAgo date={appointment._createdAt} />
                  </Typography>
                </TableCell>
              </Box>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TeamOverview;
