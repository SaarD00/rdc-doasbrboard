import React from "react";
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

const products = [
  {
    id: "1",
    name: "Saarthak",
    post: "Elven Prince",
    pname: "Cheif Executive",
    priority: "Extreme",
    pbg: "error.main",
    budget: "699.69",
  },
  {
    id: "2",
    name: "Samayara",
    post: "Elven Princess",
    pname: "Cheif Executive",
    priority: "Extreme",
    pbg: "error.main",
    budget: "699.69",
  },
  {
    id: "3",
    name: "Atharva",
    post: "Janitor",
    pname: "House Keeping",
    priority: "None",
    pbg: "success.main",
    budget: "0",
  },
];

const TeamOverview = () => {
  return (
    <div className="bg-white rounded-3xl  lg:px-20 lg:py-10  md:px-10 md:py-5 p-5 w-full shadow-lg scale-90   mt-2 lg:mt-10 ">
      <p>Team</p>
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
                Assigned
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Name
              </Typography>
            </TableCell>

            <TableCell
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },
              }}
              align="right"
            >
              <Typography color="textSecondary" variant="h6">
                Budget
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.name}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {product.id}
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
                      {product.name}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      {product.post}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {product.pname}
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
                <TableCell>
                  <Chip
                    sx={{
                      pl: "4px",
                      pr: "4px",
                      backgroundColor: product.pbg,
                      color: "#fff",
                    }}
                    size="small"
                    label={product.priority}
                  ></Chip>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">${product.budget}k</Typography>
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
