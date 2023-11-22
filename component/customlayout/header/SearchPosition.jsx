"use client";
import { Box } from "@mui/material";
import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchPosition() {
  return (
    <div>
      <Box sx={{ minWidth: "33.875rem", marginX: "auto" }}>
        <Box
          sx={{ position: "relative", display: "flex", alignItems: "center" }}
        >
          <input
            type="text"
            placeholder="جستجوی کالا یا برند"
            className="h-[56px] text-[14px] border border-[#e6e6e6] rounded-[10px] w-full outline-none  py-[16px] px-[56px]"
          />
          <Box
            component={FiSearch}
            sx={{
              height: "1.5rem",
              width: "1.5rem",
              mr: "0.5rem",
              color: "#545454",
              position: "absolute",
              left: 15,
              top: 15,
            }}
          />
        </Box>
      </Box>
    </div>
  );
}

export default SearchPosition;
