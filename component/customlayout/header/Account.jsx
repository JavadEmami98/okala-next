"use client";
import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";

function Account() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: ".5rem",
          paddingY: "0.78125rem",
          marginRight: ".5rem",
          cursor: "pointer",
          borderRadius: ".625rem",
          "&:hover": { background: "#f8f8f8" },
        }}
        onClick={handleClick}
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <AccountCircleOutlinedIcon />
        <p className="text-sm font-medium text-grey-800 pr-2 whitespace-nowrap">
          پروفایل
        </p>
        <KeyboardArrowDownOutlinedIcon
          sx={{ width: "1.25rem", height: "1.25rem", ml: "0.25rem" }}
        />
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .muirtl-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
              borderBottom: "1px solid #f0f0f0",
              padding: "0.75rem",
            },
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
              p: 0,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "#f8f8f8",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
            border: "1px solid rgba(230, 230, 230, 1)",
            borderRadius: "10px",
            height: "14rem",
            width: "13.125rem",
            background: "#f8f8f8",
          },
        }}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <Box
          sx={{
            backgroundImage: "url('/image/back-green.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            margin: "0.5rem",
            height: "3.875rem",
            borderRadius: "0.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <Typography
            sx={{ marginBottom: "1px", fontWeight: 500, fontSize: "0.75rem" }}
          >
            امین بابایی
          </Typography>
          <Typography sx={{ fontWeight: 500, fontSize: "1rem" }}>
            09129125566
          </Typography>
        </Box>
        <MenuItem onClick={handleClose}>
          <RxPerson />
          <Typography
            sx={{
              marginLeft: "0.375rem",
              color: "#363636",
              fontSize: ".875rem",
            }}
          >
            پروفایل
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <HiOutlineShoppingBag />
          <Typography
            sx={{
              marginLeft: "0.375rem",
              color: "#363636",
              fontSize: ".875rem",
            }}
          >
            سفارش های من
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ borderBottom: "none", paddingY: "6px" }}
        >
          <Box component={IoLogOutOutline} sx={{ color: "#f01436" }} />
          <Typography
            sx={{
              marginLeft: "0.375rem",
              color: "#f01436",
              fontSize: ".875rem",
            }}
          >
            خروج
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Account;

/* <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem> */
