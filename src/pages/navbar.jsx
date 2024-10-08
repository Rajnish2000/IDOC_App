import * as React from "react";
import Box from "@mui/material/Box";

import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import {
  Avatar,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  InputBase,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { HelpCenter, Logout, Pool } from "@mui/icons-material";
import { redirect } from "react-router-dom";

// import ColorSchemeToggle from "./ColorSchemeToggle";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let open = Boolean(anchorEl);
  const handleClick = (event) => {
    // console.log("open: ", event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    console.log("open: ", typeof event.target.innerText);
    setAnchorEl(null);
    switch (event.target.innerText) {
      case "Trips":
        break;
      case "Logout":
        console.log("working");
        redirect("/");
        break;
      case "Wishlists":
        break;
      case "search your home":
        break;
      case "My account":
        break;
      case "Help Center":
        break;
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          top: 0,
          width: "100%",
          py: 0.7,
          zIndex: 100,
          backgroundColor: "mintcream",
          position: "sticky",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            top: 0,
            py: 0.6,
            zIndex: 10000,
            backgroundColor: "background.body",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <IconButton size="sm" variant="soft">
              <DeveloperBoardIcon />
            </IconButton>
            IDOC_APP
          </Box>
          <Box
            sx={{
              flexDirection: "row",
              gap: 3,
              alignItems: "center",
              display: "flex",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: "60vw",
                  borderRadius: 10,
                }}
              >
                <IconButton sx={{ p: "10px" }} aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Google Maps"
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>

              <Tooltip title="Account settings">
                <IconButton
                  onClick={open ? handleClose : handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar
                    variant="outlined"
                    size="sm"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                  />
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 2.8,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    backgroundColor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 1000000000,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar sx={{ width: 24, height: 24, mr: 1.5 }} /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <HelpCenter
                  sx={{ width: 24, height: 24, mr: 1.5, opacity: 0.4 }}
                />
                Help Center
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            py: 0.7,
            backgroundColor: "background.body",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <ButtonGroup
            size="small"
            aria-label="Small button group"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Button
              sx={{ display: "flex", flexDirection: "column", border: "none" }}
            >
              <Pool /> All
            </Button>
            <Button
              sx={{ display: "flex", flexDirection: "column", border: "none" }}
            >
              <Pool /> Notes
            </Button>
            <Button
              sx={{ display: "flex", flexDirection: "column", border: "none" }}
            >
              <Pool /> Pdf
            </Button>
            <Button
              sx={{ display: "flex", flexDirection: "column", border: "none" }}
            >
              <Pool /> Images
            </Button>
            {/* <Button
              sx={{ display: "flex", flexDirection: "column", border: "none" }}
            >
              <Pool /> Amazing Pool
            </Button>
            <Button
              sx={{ display: "flex", flexDirection: "column", border: "none" }}
            >
              <Pool /> Amazing Pool
            </Button>
            <Button
              sx={{ display: "flex", flexDirection: "column", border: "none" }}
            >
              <Pool /> Amazing Pool
            </Button> */}
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
