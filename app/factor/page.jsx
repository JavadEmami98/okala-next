"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
/* import FactorSwiper from "../component/FactorSwiper/FactorSwiper"; */
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
/* import ModalDeliveryTime from "../component/ModalDeliveryTime/ModalDeliveryTime"; */

function Factor() {
  return (
    <div>
      <main className="container">
        <div className=" w-full flex lg:mt-9 md:mt-9 h-fit mb-32">
          {/* Right */}
          <div className="w-full lg:w-8/12">
            <div className="bg-white rounded-xl shadow flex-grow">
              <div className="flex items-center px-6 py-6">
                <div className="flex items-center w-full">
                  <img
                    src="/image/ok.png"
                    alt=""
                    loading="lazy"
                    className="h-[68px] w-[68px]"
                  />
                  <h6 className="text-base text-start font-medium text-gray-900 mr-4 w-full">
                    افق کوروش امامت 56
                  </h6>
                  <div className="flex md:hidden lg:hidden justify-end items-start mb-9 w-[30%]">
                    <DeleteOutlineIcon />
                  </div>
                </div>
              </div>
              <div className="px-6">
                <div className="w-full flex py-3 md:py-4  border-b border-gray-100">
                  <div className="flex-shrink-0 ml-2 md:ml-4 cursor-pointer">
                    <img
                      src="/image/kalbas.png"
                      alt=""
                      loading="lazy"
                      className="h-[92px] w-[92px]"
                    />
                  </div>
                  <div className="flex-grow h-[90px]">
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex justify-between">
                        <p className="text-xs md:text-sm font-medium text-gray-800 leading-5 line-clamp-2 select-none">
                          شیر پر چرب 1 لیتری دومینو
                        </p>
                        <div className="flex justify-center items-center bg-[#f01436] rounded-md select-none flex-shrink-0 mr-2 h-[24px] w-[42px]">
                          <span className="text-xs font-medium text-white leading-4">
                            16%
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="p-0 h-9 flex items-center justify-between rounded-[80px] bg-white border border-red-700 min-w-[36px]">
                          <AddOutlinedIcon
                            sx={{
                              width: "42px",
                              height: "42px",
                              color: "#f01436",
                              padding: "6px 8px",
                            }}
                          />
                          <div className="flex items-center justify-center flex-1 quantity">
                            <p className="text-lg font-medium select-none text-gray-900">
                              1
                            </p>
                          </div>
                          <DeleteOutlineOutlinedIcon
                            sx={{
                              width: "42px",
                              height: "42px",
                              color: "#f01436",
                              padding: "6px 8px",
                            }}
                          />
                        </div>
                        <div className="flex flex-col items-end select-none mr-2">
                          <p className="text-xs md:text-sm font-normal text-gray-500 leading-6 line-through ">
                            ۳۹۰٬۰۰۰
                          </p>
                          <div className="flex items-center">
                            <p className="text-base md:text-lg font-bold text-gray-900 leading-7 ">
                              ۳۲۷٬۶۰۰
                            </p>
                            <span className="text-xs font-normal text-gray-800 mr-1">
                              ریال
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex py-3 md:py-4  ">
                  <div className="flex-shrink-0 ml-2 md:ml-4 cursor-pointer">
                    <img
                      src="/image/kalbas.png"
                      alt=""
                      className="h-[92px] w-[92px]"
                    />
                  </div>
                  <div className="flex-grow h-[90px]">
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex justify-between">
                        <p className="text-xs md:text-sm font-medium text-gray-800 leading-5 line-clamp-2 select-none">
                          شیر پر چرب 1 لیتری دومینو
                        </p>
                        <div className="flex justify-center items-center bg-[#f01436] rounded-md select-none flex-shrink-0 mr-2 h-[24px] w-[42px]">
                          <span className="text-xs font-medium text-white leading-4">
                            16%
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="p-0 h-9 flex items-center justify-between rounded-[80px] bg-white border border-red-700 min-w-[36px]">
                          <AddOutlinedIcon
                            sx={{
                              width: "42px",
                              height: "42px",
                              color: "#f01436",
                              padding: "6px 8px",
                            }}
                          />
                          <div className="flex items-center justify-center flex-1 quantity">
                            <p className="text-lg font-medium select-none text-gray-900">
                              1
                            </p>
                          </div>
                          <DeleteOutlineOutlinedIcon
                            sx={{
                              width: "42px",
                              height: "42px",
                              color: "#f01436",
                              padding: "6px 8px",
                            }}
                          />
                        </div>
                        <div className="flex flex-col items-end select-none mr-2">
                          <p className="text-xs md:text-sm font-normal text-gray-500 leading-6 line-through ">
                            ۳۹۰٬۰۰۰
                          </p>
                          <div className="flex items-center">
                            <p className="text-base md:text-lg font-bold text-gray-900 leading-7 ">
                              ۳۲۷٬۶۰۰
                            </p>
                            <span className="text-xs font-normal text-gray-800 mr-1">
                              ریال
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t-8 h-full border-gray-100 w-full">
                <Box
                  sx={{
                    backgroundImage: "url('/image/bgswiper.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "-60px",
                    backgroundSize: "cover",
                    px: "8px",
                    mt: "24px",
                    pt: "24px",
                    pb: "48px",
                  }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <span className="flex justify-center items-center flex-shrink-0 h-3 w-3 relative mx-3 pt-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FC4E53] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f01436]"></span>
                      </span>
                      <p className="text-lg font-medium text-gray-800 line-clamp-1">
                        یادت نره
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full">
            {/*         <FactorSwiper /> */}
                  </div>
                </Box>
              </div>
            </div>
          </div>
          {/* Left */}
          <div className="hidden md:hidden lg:block w-5/12 lg:w-4/12">
            <div className="p-4 mr-4 bg-white shadow rounded-xl">
              <div className="flex items-center mb-4">
                <Box
                  sx={{
                    borderLeft: "4px solid #7cc8cc",
                    borderRadius: "6.25rem",
                    height: "1rem",
                    marginRight: "0.5rem",
                  }}
                />
                <h6 className="text-sm font-medium text-gray-900">
                  جزئیات فاکتور
                </h6>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between py-3 border-b border-dashed border-gray-100">
                  <div className="flex items-center">
                    <span className="text-sm font-normal text-gray-900">
                      مجموع خرید شما
                    </span>
                    <span className="mr-1 text-sm font-normal text-gray-500">
                      (3 کالا)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-base font-medium text-gray-900">
                      ۹۵۶٬۴۶۰
                    </span>
                    <span className="text-sm font-normal text-gray-500">
                      {" "}
                      ريال
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-dashed border-gray-100">
                  <div className="flex items-center">
                    <Typography variant="subtitle2">
                      سود شما از این خرید
                    </Typography>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-base font-medium text-gray-900">
                      ۱۵۵٬۳۸۴
                    </span>
                    <span className="text-sm font-normal text-gray-500">
                      {" "}
                      ريال
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-dashed border-gray-100">
                  <div className="flex items-center">
                    <span className="text-sm font-normal text-gray-900">
                      هزینه ارسال
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-base font-medium text-gray-900">
                      رایگان
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center">
                    <span className="text-base font-medium text-gray-900">
                      مبلغ قابل پرداخت
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-base font-medium text-gray-900">
                      ۸۰۱٬۰۷۶
                    </span>
                    <span className="text-sm font-normal text-gray-500">
                      ريال
                    </span>
                  </div>
                </div>
                <div className="w-full h-6"></div>
            {/*     <ModalDeliveryTime /> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Factor;
