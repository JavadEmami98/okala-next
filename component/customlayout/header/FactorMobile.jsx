"use client";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Box } from "@mui/material";

function FactorMobile() {
  return (
    <div>
      <Box
        sx={{
          boxShadow:
            "rgba(22, 22, 22, 0.04) 0px 2px 4px -1px, rgba(22, 22, 22, 0.04) 0px 4px 8px -1px",
        }}
        className="px-[10px] h-[3.5rem] flex items-center justify-start"
      >
        <EastIcon sx={{ width: "20px", height: "20px" }} />
        <div className="pr-4">
          <div className="flex items-center gap-2 font-semibold">
            سبد خرید
            <div className="flex items-center justify-center rounded-[50%] bg-[#02a0a4] text-[#fff] text-[12px] min-w-[20px] py-[2px] px-[6px]">
              2
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default FactorMobile;
