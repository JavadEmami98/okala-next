"use client";
import React from "react";
import HamMenu from "./HamMenu";
import { Box } from "@mui/material";
import { IoArrowForwardSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

function HeaderMobileProduct() {
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          height: "3.9375rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ position: "absolute", top: 7, left: 3 }}>
          <HamMenu />
        </Box>
        <Box
          component={"img"}
          src="image/logo-okala-h.svg"
          alt=""
          loading="lazy"
          sx={{ width: "3.5rem", height: "3.875rem" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <Box
          component={IoArrowForwardSharp}
          sx={{ height: "1.5rem", width: "1.5rem" }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            component={FiSearch}
            sx={{ height: "1.5rem", width: "1.5rem" }}
          />
          <Box sx={{ position: "relative" }}>
            <Box
              component={FiShoppingCart}
              sx={{ width: "1.25rem", height: "1.25rem" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f01436",
                color: "#fff",
                borderRadius: "50%",
                width: "1rem",
                height: "1rem",
                position: "absolute",
                top: -10,
                right: -8,
                fontSize: "0.8125rem",
              }}
            >
              2
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          overflowX: "scroll",
          paddingX: "1rem",
          paddingBottom: "1rem",
          whiteSpace: "nowrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "9999px",
            border: "1px solid #e6e6e6",
            color: "#545454",
            fontSize: ".75rem",
            fontWeight: 500,
            padding: "0.5rem",
            marginRight: ".5rem",
          }}
        >
          نمایش براساس
          <Box component={IoIosArrowDown} sx={{ marginLeft: ".5rem" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "9999px",
            border: "1px solid #e6e6e6",
            color: "#545454",
            fontSize: ".75rem",
            fontWeight: 500,
            padding: "0.5rem",
            marginRight: ".5rem",
          }}
        >
          برندها
          <Box component={IoIosArrowDown} sx={{ marginLeft: ".5rem" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "9999px",
            border: "1px solid #e6e6e6",
            color: "#545454",
            fontSize: ".75rem",
            fontWeight: 500,
            padding: "0.5rem",
            marginRight: ".5rem",
          }}
        >
          فقط کالاهای موجود
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "9999px",
            border: "1px solid #e6e6e6",
            color: "#545454",
            fontSize: ".75rem",
            fontWeight: 500,
            padding: "0.5rem",
            marginRight: ".5rem",
          }}
        >
          محدوده قیمت
          <Box component={IoIosArrowDown} sx={{ marginLeft: ".5rem" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "9999px",
            border: "1px solid #e6e6e6",
            color: "#545454",
            fontSize: ".75rem",
            fontWeight: 500,
            padding: "0.5rem",
            marginRight: ".5rem",
          }}
        >
          دسته بندی
        </Box>
      </Box>
    </div>
  );
}

export default HeaderMobileProduct;
