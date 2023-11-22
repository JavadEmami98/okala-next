"use client";
import React, { useEffect, useState } from "react";
import HamMenu from "./HamMenu";
import LocationDialog from "./LocationDialog";
import Account from "./Account";
import { Box } from "@mui/material";
import SearchPosition from "./SearchPosition";
import { LuShoppingCart } from "react-icons/lu";
import { PiStorefront } from "react-icons/pi";

function TopHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  return (
    <Box
      sx={{
        /*   borderBottom: " 2px solid rgba(0, 0, 0, 0.12)", */
        /*  top: scrollPosition > 150 ? {color:"red"} : "-1px", */
        transition: "all 300ms ease",
      }}
      className="fixed bg-white z-40  right-0 left-0 "
      component={"nav"}
    >
      <div className="sticky flex items-center justify-between border-b border-[#e6e6e6] shadow-[0_4px_16px_rgb(22,22,22,.08)]">
        <div className="container flex py-6 items-center justify-between">
          <div className="flex items-center">
            <HamMenu />
            <img
              src="https://okala.com/static/images/icons/logo-okala2.svg"
              alt=""
              loading="lazy"
              className="ml-10 cursor-pointer"
            />
            <div className="flex items-center rounded-[8px] bg-[#f8f8f8] px-[8px] py-[12px] cursor-pointer">
              <Box
                component={PiStorefront}
                sx={{ width: "1.25rem", height: "1.25rem" }}
              />
              <p className="text-sm text-[#363636] pr-1"> مشاهده فروشگاه‌ها</p>
            </div>
          </div>
          {scrollPosition > 200 ? (
            <SearchPosition />
          ) : (
            <>
              <LocationDialog />
            </>
          )}
          <div>
            <div className="flex items-center">
              <Account />
              <div className="border-l border-[#0000001f] mt-1 mr-2">
                &nbsp;{" "}
              </div>
              <div className="flex items-center px-[8px] py-[6px] rounded-[10px] hover:bg-[#f8f8f8] mr-4">
                <Box
                  component={LuShoppingCart}
                  sx={{ width: "1.5rem", height: "1.5rem" }}
                />

                <div className="flex flex-col items-start pr-3">
                  <p className="text-sm	font-medium text-grey-800 whitespace-nowrap">
                    سبد خرید
                  </p>
                  <p className="font-medium text-xs whitespace-nowrap">
                    از چند فروشگاه
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default TopHeader;
