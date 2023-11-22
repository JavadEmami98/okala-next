"use client";
import React from "react";
import { useMediaQuery } from "@mui/material";
import { usePathname } from "next/navigation";
import HeaderOkala from "./HeaderOkala";
import HeaderMobile from "./HeaderMobile";
import FactorMobile from "./FactorMobile";

function Header() {
  const isLg = useMediaQuery("(min-width:975px)");
  const pathname = usePathname();
  return (
    <div>
      {isLg ? (
        <>
          {pathname === "/" ? (
            <>
              <HeaderOkala />
            </>
          ) : pathname === "/factor" ? (
            <>
              <HeaderOkala />
            </>
          ) : pathname === "/hotel" ? (
            <>
              {/*   <HeroHeader />
              <TopHeader /> */}
            </>
          ) : pathname === "/didani" ? (
            <>
              {/*  <HeroHeader />
              <TopHeader /> */}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          {pathname === "/factor" ? (
            <FactorMobile />
          ) : pathname === "/travel" ? (
            <></>
          ) : /*   <TravelHeaderMobile /> */

          pathname === "/" ? (
            <></>
          ) : (
            <HeaderMobile />
          )}
        </>
      )}
    </div>
  );
}

export default Header;
