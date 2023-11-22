"use client";
import { Typography } from '@mui/material'
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import React from 'react'

function Orders() {
  return (
    <div>
          <AssignmentOutlinedIcon />
            <Typography sx={{ fontSize: ".875rem !important", mt: ".25rem" }}>
              سفارش ها
            </Typography>
    </div>
  )
}

export default Orders