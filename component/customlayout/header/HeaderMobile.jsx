"use client";
import React from "react";
import HamMenu from "./HamMenu";
import SearchIcon from "@mui/icons-material/Search";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { Drawer, Box, Button } from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

function HeaderMobile() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          pt: "1rem",
          height: "3rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ position: "absolute", top: 7, left: 4 }}>
          <HamMenu />
        </Box>
        <Box
          component={"img"}
          src="image/logo-okala-h.svg"
          alt=""
          loading="lazy"
          sx={{ width: "3.5rem", height: "1.875rem" }}
        />
      </Box>
      <Box sx={{ paddingY: "0.4375rem" }}>
        <Box
          sx={{
            position: "relative",
            marginX: "1rem",
            paddingY: ".3125rem",
            height: "3.625rem",
          }}
        >
          <div
            onClick={() => setOpen(true)}
            className="w-full flex items-center bg-gray-100 border border-gray-200 rounded-lg select-none px-4 !h-12"
          >
            <SearchIcon
              sx={{
                height: "1.5rem",
                width: "1.5rem",
                mr: "0.5rem",
                color: "#545454",
              }}
            />
            <p className="text-xs font-medium text-gray-600 truncate">
              جستجوی کالا یا برند
            </p>
          </div>
          <Drawer
            sx={{ height: "100% !important" }}
            anchor={"bottom"}
            open={open}
            onClose={() => setOpen(false)}
          >
            <div className="h-14 relative shadow-md flex items-center px-4 bg-white  ">
              <EastOutlinedIcon
                onClick={() => setOpen(false)}
                sx={{ m: ".75rem" }}
              />

              <input
                type="text"
                className="h-full w-full  outline-none"
                placeholder="جستجوی کالا یا برند"
              />
              <Box
                sx={{
                  position: "absolute",
                  padding: "0.75rem",
                  top: 3,
                  right: 3,
                  borderRadius: ".625rem",
                  background: "#F8F8F8",
                }}
              >
                <CloseOutlinedIcon />
              </Box>
            </div>
            <Box
              sx={{
                display: "flex",
                marginY: "0.75rem",
                paddingTop: ".3125rem",
              }}
            >
              <div className="flex py-[6px] px-[8px] items-center gap-2">
                <SearchIcon
                  sx={{
                    height: "1.5rem",
                    width: "1.5rem",
                    mr: "0.5rem",
                    color: "#545454",
                  }}
                />
                <p className=" text-sm text-gray-800 cursor-pointer hover:text-gray-900">
                  نمایش همه نتایج برای fff
                </p>
              </div>
            </Box>
          </Drawer>
        </Box>
      </Box>
      <div className="px-4 py-1.5 border-t border-b border-gray-100 h-12 ">
        <div
          onClick={() => setOpen2(true)}
          className="w-full flex justify-between items-center px-2 h-[30px]"
        >
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <FmdGoodOutlinedIcon
              sx={{ width: "1.25rem", height: "1.25rem", color: "#545454" }}
            />
            <span class="text-[14px] text-[#545454] font-medium">مشهد، </span>
            <span class="text-[14px] text-[#545454] font-normal">
              سید رضی 46 پلاک ۳۱۳
            </span>
          </Box>
          <NavigateBeforeIcon sx={{ color: "#545454" }} />
        </div>
        <Drawer
          sx={{ height: "100% !important" }}
          anchor={"bottom"}
          open={open2}
          onClose={() => setOpen2(false)}
        >
          <Box
            sx={{
              height: "3.5rem",
              position: "relative",
              boxShadow:
                "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              display: "flex",
              alignItems: "center",
              paddingX: "1rem",
              background: "#fff",
            }}
          >
            <EastOutlinedIcon
              onClick={() => setOpen2(false)}
              sx={{ m: "0.75rem" }}
            />

            <p className="text-[14.4px] text-[#000000DE] font-semibold pr-4">
              انتخاب آدرس
            </p>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
              padding: "1rem",
            }}
          >
            <div>
              <div className="flex flex-col justify-between cursor-pointer p-4 bg-[#e0f2f4] rounded-md border border-[#b0dee0]">
                <div className="flex h-[68px]">
                  <CheckBoxOutlinedIcon sx={{ color: "#02a0a4", ml: "8px" }} />
                  <p className="text-[14px] text-[#000000DE]">
                    سید رضی 46 پلاک ۳۱۳ - پلاک ۳۱۳ - واحد ۲
                  </p>
                </div>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p className="text-[#8f8f8f] text-[14px]">09015427057</p>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      variant="outlined"
                      sx={{
                        display: "flex",
                        ":hover": { backgroundColor: "#f8f8f8" },
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FFF",
                        height: "32px",
                        width: "32px",
                        padding: "6px 8px",
                        ml: "10px",
                        borderRadius: "10px",
                      }}
                    >
                      <DriveFileRenameOutlineOutlinedIcon
                        sx={{ height: "24px", width: "24px" }}
                      />
                    </Box>
                    <Box
                      variant="outlined"
                      sx={{
                        display: "flex",
                        ":hover": { backgroundColor: "#f8f8f8" },
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FFF",
                        height: "32px",
                        width: "32px",
                        padding: "6px 8px",
                        ml: "10px",
                        borderRadius: "10px",
                      }}
                    >
                      <DeleteOutlinedIcon
                        onClick={() => setOpen3(true)}
                        sx={{ height: "24px", width: "24px" }}
                      />
                      <Drawer
                        sx={{
                          "& .css-9emuhu-MuiPaper-root-MuiDrawer-paper": {
                            height: "190px !important",
                            padding: "24px 16px",
                            borderTopLeftRadius: "12px !important",
                            borderTopRightRadius: "12px !important",
                            overflowX: "hidden",
                          },
                        }}
                        anchor={"bottom"}
                        open={open3}
                        onClose={() => setOpen3(false)}
                      >
                        <h6 className="text-[16px] text-center font-medium text-gray-900">
                          آیا از حذف آدرس مورد نظر مطمئن هستید؟{" "}
                        </h6>
                        <div className="grid w-full grid-cols-2 gap-3 mt-auto">
                          <Button
                            onClick={() => setOpen3(false)}
                            variant="text"
                            sx={{
                              width: "100%",
                              fontSize: "14px",
                              height: "42px",
                              border: "1px solid #afafaf",
                              borderRadius: "10px",
                              color: "#f01436",
                            }}
                          >
                            انصراف
                          </Button>
                          <Button
                            variant="contained"
                            sx={{
                              width: "100%",
                              fontSize: "14px",
                              height: "42px",
                              backgroundColor: "#f01436",
                              borderRadius: "10px",
                              "&:hover": { backgroundColor: "#f01436" },
                              boxShadow: "none !important",
                            }}
                          >
                            بله، حذف کن
                          </Button>
                        </div>
                      </Drawer>
                    </Box>
                  </Box>
                </Box>
              </div>
            </div>
            <div className=" w-full flex items-center bg-white py-5 pr-4 gap-2">
              <AddOutlinedIcon
                sx={{ width: "23px", height: "23px", color: "#f01436" }}
              />
              <span className="text-base font-medium text-red-600">
                افزودن آدرس جدید
              </span>
            </div>
          </Box>
        </Drawer>
      </div>
    </div>
  );
}

export default HeaderMobile;
