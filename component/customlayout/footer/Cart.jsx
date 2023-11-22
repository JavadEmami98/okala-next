"use client";
import { Box, Button, Drawer, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import React from "react";

function Cart() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <div>
      <div onClick={() => setOpen(true)}>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              top: 0,
              left: 0,
              borderRadius: "50%",
              background: "#f01436",
              width: ".9375rem",
              height: ".9375rem",
              color: "#fff",
              fontSize: ".625rem",
            }}
          >
            1
          </Box>
          <ShoppingCartOutlinedIcon />
        </Box>
        <Typography sx={{ fontSize: ".875rem !important", mt: ".25rem" }}>
          سبد خرید
        </Typography>
      </div>
      <Drawer
        sx={{ height: "100% !important" }}
        anchor={"bottom"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="h-14 relative shadow-md flex items-center px-4 bg-white  ">
          <EastOutlinedIcon onClick={() => setOpen(false)} sx={{ m: "12px" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <p className="text-[14.4px] text-[#000000DE] font-semibold pr-4">
              سبدهای خرید شما
            </p>
            <div className="flex items-center justify-center h-[20px] w-[20px] rounded-[50%] bg-[#02a0a4]">
              <p className="text-xs mx-0.5 text-[#fff]">1</p>
            </div>
          </Box>
        </div>
        <div className="w-full flex flex-col gap-6 p-4">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <div className="w-14 h-14 flex justify-center items-center flex-shrink-0 border border-gray-100 rounded-lg">
                <img
                  src="https://cdn.okala.com/media/logo/1"
                  alt=""
                  className="h-[36px] w-[36px]"
                  loading="lazy"
                />
              </div>
              <h6 className="text-sm font-medium text-gray-800">
                افق کوروش معلم 33
              </h6>
            </Box>
            <DeleteOutlinedIcon onClick={() => setOpen2(true)} />
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
              open={open2}
              onClose={() => setOpen2(false)}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "100%",
                }}
              >
                <h6 className="text-xl font-medium text-gray-900">حذف سبد</h6>
                <p className="mt-5 text-sm font-normal leading-6 text-gray-800">
                  می‌خواهید سبد خرید خود در فروشگاه “افق کوروش معلم 33” را حذف
                  کنید؟
                </p>
                <div className="grid w-full grid-cols-2 gap-3 mt-7">
                  <Button
                    onClick={() => setOpen2(false)}
                    variant="text"
                    sx={{
                      width: "100%",
                      fontSize: "14px",
                      height: "40px",
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
                      height: "40px",
                      backgroundColor: "#f01436",
                      borderRadius: "10px",
                      "&:hover": { backgroundColor: "#f01436" },
                      boxShadow: "none !important",
                    }}
                  >
                    حذف سبد
                  </Button>
                </div>
              </Box>
            </Drawer>
          </Box>
          <div className="flex items-center select-none gap-2 overflow-x-auto">
            <div className="w-12 h-12 flex justify-center items-center flex-shrink-0">
              <img src="image/pasta.jpg" alt="" loading="lazy" />
            </div>
            <div className="w-12 h-12 flex justify-center items-center flex-shrink-0">
              <img src="image/cream.jpg" alt="" loading="lazy" />
            </div>
          </div>
          <div className="w-full flex xs:flex-col sm:flex-row-reverse items-center gap-2">
            <Button
              variant="contained"
              sx={{
                width: "100%",
                fontSize: "14px",
                height: "40px",
                backgroundColor: "#f01436",
                borderRadius: "10px",
                "&:hover": { backgroundColor: "#f01436" },
                boxShadow: "none !important",
              }}
            >
              تکمیل سفارش
            </Button>
            <Button
              variant="text"
              sx={{
                width: "100%",
                fontSize: "14px",
                height: "40px",
                border: "1px solid #afafaf",
                borderRadius: "10px",
                color: "#f01436",
              }}
            >
              ادامه خرید
              <NavigateBeforeOutlinedIcon
                sx={{ color: "#f01436", mr: "10px" }}
              />
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Cart;
