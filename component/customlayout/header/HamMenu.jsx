"use client";
import React, { Fragment } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Drawer } from "@mui/material";
import ListHamMenu from "./ListHamMenu";

function HamMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Fragment>
        <MenuIcon
          onClick={() => setOpen(true)}
          sx={{
            width: "3rem",
            color: "#545454 !important",
            height: "3rem",
            cursor: "pointer",
            padding: ".75rem",
            borderRadius: "50%",
            "&:hover": { backgroundColor: "#f8f8f8" },
          }}
        />
        <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
          <div className="w-[307px] h-full relative">
            <div className="flex items-center justify-center py-2 shadow-sm">
              <img
                src="/image/logo-okala-h.svg"
                alt=""
                loading="lazy"
                className="h-[49px] object-cover"
              />
              <CloseIcon
                onClick={() => setOpen(false)}
                sx={{
                  opacity: "50%",
                  color: "#000000",
                  cursor: "pointer",
                  position: "absolute",
                  top: 5,
                  right: 7,
                  borderRadius: "50%",
                  ":hover": { background: "#f8f8f8" },
                }}
              />
            </div>
            <Box sx={{ padding: "1rem" }}>
              <ListHamMenu />
            </Box>
          </div>
        </Drawer>
      </Fragment>
    </div>
  );
}

export default HamMenu;
