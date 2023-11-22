"use client";
import React from "react";
import { Box, Button, Dialog } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import { AiOutlineDelete } from "react-icons/ai";

function DeleteDialog() {
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
        component={AiOutlineDelete}
        sx={{ height: "24px", width: "24px" }}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ height: "300px" }}
      >
        <DialogActions>
          <Box
            sx={{ borderRadius: "12px", background: "#fff", padding: "1.5rem" }}
          >
            <h4 className="text-[#161616] text-[1.5rem] font-medium mb-[1rem]">
              حذف آدرس
            </h4>
            <h6 className="text-[#363636] text-[1rem] font-medium">
              آیا از حذف آدرس مورد نظر مطمئن هستید؟
            </h6>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "32px",
                gap: 2,
              }}
            >
              <Button
                onClick={() => setOpen(false)}
                variant="text"
                sx={{
                  width: "100%",
                  fontSize: "17px",
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
                  fontSize: "17px",
                  height: "42px",
                  backgroundColor: "#f01436",
                  borderRadius: "10px",
                  "&:hover": { backgroundColor: "#f01436" },
                  boxShadow: "none !important",
                }}
              >
                بله، حذف کن
              </Button>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteDialog;
