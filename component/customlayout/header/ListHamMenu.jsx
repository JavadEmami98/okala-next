"use client";
import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse } from "@mui/material";

function ListHamMenu() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div
        onClick={handleClick}
        className="flex items-center w-fit p-2 rounded-[10px] hover:bg-[#f0f0f0] cursor-pointer"
      >
        {open ? <ExpandLess /> : <ExpandMore />}
        <span className="text-sm text-gray-700 font-medium hover:text-gray-900 mr-2">
          میوه و سبزیجات
        </span>
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className="flex items-center py-2 mr-2 ">
          <p className="text-xs font-normal text-gray-700 hover:text-gray-900 mr-2">
            میوه
          </p>
        </div>
        <div className="flex items-center py-2 mr-2 ">
          <p className="text-xs font-normal text-gray-700 hover:text-gray-900 mr-2">
            صیفی
          </p>
        </div>
        <div className="flex items-center py-2 mr-2 ">
          <p className="text-xs font-normal text-gray-700 hover:text-gray-900 mr-2">
            سبزی
          </p>
        </div>
        <div className="flex items-center py-2 mr-2 ">
          <p className="text-xs font-normal text-gray-700 hover:text-gray-900 mr-2">
            سبزی و صیفی منجمد
          </p>
        </div>
        <div className="w-fit">
          <p className="text-xs font-normal border-b text-gray-700 hover:text-gray-900 mr-10 mb-5">
            مشاهده همه موارد
          </p>
        </div>
      </Collapse>
    </div>
  );
}

export default ListHamMenu;
