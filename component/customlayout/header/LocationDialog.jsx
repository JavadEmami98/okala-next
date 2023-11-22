"use client";
import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Modal, Radio } from "@mui/material";

import { AiOutlineClose } from "react-icons/ai";
import EditMap from "@/component/EditMap/EditMap";
import DeleteDialog from "@/component/DeleteDialog/DeleteDialog";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function LocationDialog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div
        onClick={handleOpen}
        className="flex items-center px-[6px] py-[8px] mr-[40px] rounded-[10px] cursor-pointer hover:bg-[#f8f8f8]"
      >
        <FmdGoodOutlinedIcon
          sx={{ mr: "8px", width: "20px", height: "20px" }}
        />
        <span className="text-sm text-[#545454]">مشهد، </span>
        <span className="text-sm text-[#545454]">سید رضی 46 پلاک ۳۱۳ </span>
        <KeyboardArrowDownOutlinedIcon
          sx={{ width: "20px", height: "20px", mr: "4px" }}
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between flex-col p-6 bg-white rounded-[12px] h-[500px] w-[500px] min-w-[850px]">
            <div className="flex flex-col ">
              <Box
                sx={{
                  display: "flex",
                  paddingTop: "0.25rem",
                  paddingBottom: "1rem",
                  paddingRight: "0.5rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      borderLeft: "4px solid #7cc8cc",
                      borderRadius: "6.25rem",
                      height: "1.25rem",
                      marginRight: "0.625rem",
                    }}
                  ></Box>
                  <h6 className="text-base font-medium text-gray-900">
                    محل تحویل سفارش خود را مشخص کنید
                  </h6>
                </Box>
                <Box
                  sx={{
                    width: "2.625rem",
                    height: "2.625rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #e6e6e6",
                    borderRadius: ".625rem",
                    padding: ".375rem 0.5rem",
                    cursor: "pointer",
                    "&:hover": { background: "#f8f8f8" },
                  }}
                >
                  <AiOutlineClose onClick={handleClose} />
                </Box>
              </Box>
              <div className="flex flex-col justify-between cursor-pointer p-4 rounded-md border bg-[#e0f2f4] border-[#b0dee0] hover:bg-[#b0dee0]">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {/*  <Box
                      component={CgCheckR}
                      sx={{
                        color: "#02a0a4",
                        marginRight: "0.5rem",
                        width: "1.5rem",
                        height: "1.5rem",
                      }}
                    /> */}
                    <Radio
                      checked
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                      sx={{ color: "#02a0a4 !important" }}
                    />
                    <p>سید رضی 46 پلاک ۳۱۳ - پلاک ۳۱۳ - واحد ۲</p>
                  </Box>

                  <div className="flex">
                    <Box
                      variant="outlined"
                      sx={{
                        display: "flex",
                        ":hover": { backgroundColor: "#f8f8f8" },
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FFF",
                        height: "2.625rem",
                        width: "2.625rem",
                        padding: "0.375rem 0.5rem",
                        borderRight: "2px solid #e6e6e6",
                        borderTopLeftRadius: "0.625rem",
                        borderBottomLeftRadius: "0.625rem",
                      }}
                    >
                      <EditMap />
                    </Box>
                    <Box
                      variant="outlined"
                      sx={{
                        display: "flex",
                        ":hover": { backgroundColor: "#f8f8f8" },
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FFF",
                        height: "2.625rem",
                        width: "2.625rem",
                        padding: "0.375rem 0.5rem",
                        borderTopRightRadius: "0.625rem",
                        borderBottomRightRadius: "0.625rem",
                      }}
                    >
                      <DeleteDialog />
                    </Box>
                  </div>
                </Box>
              </div>
            </div>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                pt: "1.5rem",
                borderTop: "1px solid #e6e6e6",
              }}
            >
              <Button
                variant="outlined"
                onClick={handleClose}
                sx={{
                  border: "1px solid rgba(175, 175, 175, 1)",
                  borderRadius: "10px",
                  width: "133px",
                  height: "48px",
                  color: "#f01436",
                  fontSize: "18px",
                  ":hover": { border: "1px solid rgba(175, 175, 175, 1)" },
                }}
              >
                بستن
              </Button>
              <Button
                variant="outlined"
                onClick={handleClose}
                sx={{
                  fontWeight: 400,
                  mr: "8px",
                  border: "1px solid rgba(175, 175, 175, 1)",
                  borderRadius: "10px",
                  width: "248px",
                  height: "48px",
                  ml: "0.5rem",
                  color: "#f01436",
                  fontSize: "18px",
                  ":hover": { border: "1px solid rgba(175, 175, 175, 1)" },
                }}
              >
                <AddIcon sx={{ mr: "4px" }} />
                افزودن آدرس جدید
              </Button>
            </Box>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default LocationDialog;
