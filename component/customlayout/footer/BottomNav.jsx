"use client";
import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Orders from "./Orders";
import Cart from "./Cart";

function BottomNav() {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (item) => {
    setActiveItem(item);
  };
  return (
    <footer>
      <div className="bottom-nav px-4 pt-1 w-screen block fixed inset-x-0 bottom-0 z-[999] bg-white overflow-hidden">
        <div className="h-full w-full grid grid-cols-4 place-items-center">
          <div
            onClick={() => handleClick("home")}
            style={{ color: activeItem === "home" ? "red" : "black" }}
            className="flex flex-col items-center justify-center max-w-[92px] w-full max-h-12  p-[6px_8px]"
          >
            <HomeOutlinedIcon />
            <Typography sx={{ fontSize: "14px !important", mt: "4px" }}>
              خانه
            </Typography>
          </div>
          <div
            onClick={() => handleClick("sabad")}
            style={{ color: activeItem === "sabad" ? "red" : "black" }}
            className="flex flex-col items-center justify-center max-w-[92px] w-full max-h-12  p-[6px_8px]"
          >
            <Cart />
          </div>
          <div
            onClick={() => handleClick("order")}
            style={{ color: activeItem === "order" ? "red" : "black" }}
            className="flex flex-col items-center justify-center max-w-[92px] w-full max-h-12  p-[6px_8px]"
          >
            <Orders />
          </div>
          <Link to={"/profile-mobile"}>
            <div
              onClick={() => handleClick("profile")}
              style={{ color: activeItem === "profile" ? "red" : "black" }}
              className="flex flex-col items-center justify-center max-w-[92px] w-full max-h-12  p-[6px_8px]"
            >
              <AccountCircleOutlinedIcon />
              <Typography sx={{ fontSize: "14px !important", mt: "4px" }}>
                پروفایل
              </Typography>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default BottomNav;
