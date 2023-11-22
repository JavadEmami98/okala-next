"use client";
import React from "react";
import { useMediaQuery } from "@mui/material";
import { usePathname } from "next/navigation";
import FooterOkala from "./FooterOkala";
import BottomNav from "./BottomNav";

function Footer() {
  const isLg = useMediaQuery("(min-width:975px)");
  const pathname = usePathname();
  return (
    <div>
      <div>
        {isLg ? (
          <>
            {pathname === "/" ? (
              <>
                <FooterOkala />
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
              {
                /*           <FactorMobile/>  */
              }
            ) : pathname === "/travel" ? (
              {
                /*   <TravelHeaderMobile /> */
              }
            ) : pathname === "/cdcsd" ? (
              <></>
            ) : (
              <BottomNav />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Footer;
