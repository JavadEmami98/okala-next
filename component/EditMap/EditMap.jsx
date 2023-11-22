"use client";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  TextField,
} from "@mui/material";
import React from "react";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import { LuPenSquare } from "react-icons/lu";

function EditMap() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Box
        onClick={handleClickOpen}
        component={PiPencilSimpleLineLight}
        sx={{ height: "24px", width: "24px" }}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions>
          <Box
            sx={{
              borderRadius: ".75rem",
              bgcolor: "#fff",
              padding: "1.5rem",
              width: "53rem",
              minHeight: "36.75rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                paddingTop: "0.25rem",
                paddingBottom: "1rem",
                paddingLeft: "0.5rem",
              }}
            >
              <Box
                sx={{
                  borderLeft: "4px solid #7cc8cc",
                  borderRadius: "6.25rem",
                  height: "1.25rem",
                  marginRight: "0.625rem",
                }}
              ></Box>
              <h6 className="text-base font-medium text-gray-900">
                جزئیات آدرس
              </h6>
            </Box>
            <Box
              sx={{
                border: "1px solid #e6e6e6",
                borderRadius: ".5rem",
                height: "8.25rem",
                position: "relative",
                /* delete this item */
                backgroundColor: "gray",
              }}
            >
              <Button
                variant="text"
                sx={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  padding: "0.375rem 1rem",
                  borderRadius: ".625rem",
                  height: "2.5rem",
                  /*  width: "182px", */
                  backgroundColor: "#fff",
                  fontSize: ".75rem",
                  color: "#02a0a4",
                  boxShadow:
                    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                  ":hover": { backgroundColor: "#fff" },
                }}
              >
                <Box
                  component={LuPenSquare}
                  sx={{
                    width: "1rem",
                    height: "1rem",
                    marginRight: "5px",
                    color: "#02a0a4",
                  }}
                />
                ویرایش موقعیت روی نقشه
              </Button>
            </Box>
            <div className="mt-9  relative">
              <div className="mb-6">
                <TextField
                  id="outlined-multiline-static"
                  label="آدرس تحویل گیرنده *"
                  multiline
                  rows={5}
                  defaultValue="Default Value"
                  sx={{
                    width: "100%",
                    borderRadius: "8px !important",
                  }}
                />
                <div className="absolute bg-gray-50 border-t border-gray-300 bottom-0 inset-x-0 rounded-b-lg w-full flex select-none p-3 z-[1]">
                  <span className="flex justify-center items-center flex-shrink-0 h-3 w-3 relative mx-3 pt-1.5">
                    <span className="animate-ping absolute inline-flex  h-full w-full rounded-full bg-[#FC4E53] opacity-75"></span>
                    <span className="relative inline-flex rounded-full  h-2 w-2 bg-[#f01436]"></span>
                  </span>
                  <p class="text-xs font-normal text-gray-800 md:text-sm">
                    برای ویرایش آدرس ابتدا موقعیت مکانی را روی نقشه تغییر دهید.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-6 w-full mb-6">
              <TextField
                required
                id="outlined-required"
                label="پلاک"
                defaultValue="70"
                sx={{ width: "100%" }}
              />
              <TextField
                required
                id="outlined-required"
                defaultValue="2"
                label="واحد"
                sx={{ width: "100%" }}
              />
            </div>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <Checkbox />
              <span className="text-[14px] mt-1">تحویل گیرنده خودم نیستم</span>
            </Box>
            <div className="flex justify-end w-full gap-2">
              <Button
                onClick={handleClose}
                variant="text"
                sx={{
                  width: "133px",
                  fontSize: "18px",
                  height: "48px",
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
                  width: "203px",
                  fontSize: "18px",
                  height: "48px",
                  backgroundColor: "#f01436",
                  borderRadius: "10px",
                  "&:hover": { backgroundColor: "#f01436" },
                  boxShadow: "none !important",
                }}
              >
                تایید و ثبت آدرس
              </Button>
            </div>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditMap;
