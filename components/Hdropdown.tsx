import React from "react";
import Image from "next/image";
import {
  Box,
  Menu,
  Typography,
  Link,
  ListItemButton,
  List,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";
import { FiChevronDown } from "react-icons/fi";
import { useSession } from "next-auth/react";
const ProfileDD = () => {
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const { data: session } = useSession();
  return (
    <>
      <Button
        aria-label="menu"
        color="inherit"
        aria-controls="profile-menu"
        aria-haspopup="true"
      >
        <Box display="flex" alignItems="center">
          <Image
            src={session?.user?.image || ""}
            width="30"
            height="30"
            className="rounded-full"
          />
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
            }}
          >
            <Typography
              color="textSecondary"
              variant="h6"
              fontWeight="200"
              sx={{ ml: 1 }}
            >
              Hi,
            </Typography>
            <Typography
              variant="h6"
              fontWeight="700"
              sx={{
                ml: 1,
              }}
            >
              Julia
            </Typography>
            <FiChevronDown />
          </Box>
        </Box>
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl4}
        keepMounted
        open={Boolean(anchorEl4)}
        sx={{
          "& .MuiMenu-paper": {
            width: "385px",
          },
        }}
      >
        <Box>
          <Box p={2} pt={0}>
            <List component="nav" aria-label="secondary mailbox folder">
              <ListItemButton>
                <ListItemText primary="Edit Profile" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Account" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Change Password" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="My Settings" />
              </ListItemButton>
            </List>
          </Box>
          <Divider />
          <Box p={2}>
            <Button fullWidth variant="contained" color="primary">
              Logout
            </Button>
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default ProfileDD;
