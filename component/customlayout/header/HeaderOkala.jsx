"use client";
import React from "react";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HamMenu from "./HamMenu";
import LocationDialog from "./LocationDialog";
import Account from "./Account";
import TopHeader from "./TopHeader";
import { Box } from "@mui/material";

function HeaderOkala() {
  return (
    <>
      <TopHeader />
      <div className="sticky flex items-center justify-between border-b border-[#e6e6e6] shadow-[0_4px_16px_rgb(22,22,22,.08)]">
        <Box
          sx={{
            display: "flex",
            paddingY: "1.5rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="container"
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <HamMenu />
            <img
              src="/image/logo-okala-h.svg"
              alt=""
              loading="lazy"
              className="ml-10 cursor-pointer"
            />
            <div className="flex items-center rounded-[8px] bg-[#f8f8f8] px-[8px] py-[12px] cursor-pointer">
              <StorefrontOutlinedIcon sx={{ width: "20px", height: "20px" }} />
              <p className="text-sm text-[#363636] pr-1"> مشاهده فروشگاه‌ها</p>
            </div>
          </Box>
          <LocationDialog />
          <div>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Account />
              <Box
                sx={{
                  borderLeft: "1px solid #0000001f",
                  marginTop: "0.25rem",
                  marginRight: "0.5rem",
                }}
              >
                &nbsp;{" "}
              </Box>
              <div className="flex items-center px-[8px] py-[6px] rounded-[10px] hover:bg-[#f8f8f8] mr-4">
                <ShoppingCartOutlinedIcon />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingLeft: "0.75rem",
                  }}
                >
                  <p className="text-sm	font-medium text-grey-800 whitespace-nowrap">
                    سبد خرید
                  </p>
                  <p className="font-medium text-xs whitespace-nowrap">
                    از چند فروشگاه
                  </p>
                </Box>
              </div>
            </Box>
          </div>
        </Box>
      </div>
    </>
  );
}

export default HeaderOkala;
