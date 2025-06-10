"use client"

import React from "react";
import Image from "next/image";
import FlightLogo from "../../../../public/assets/image.png";
import { Inter } from "next/font/google";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";








const inter = Inter({ subsets: ["latin"] });

function Page() {

const [sideSlide, setSideSlide] = useState(false);

  return (
    <div
      className={`${inter.className}  fixed top-0 left-0 w-full  bg-black text-white text-[15px] md:px-14 z-50`}
    >
      <div className="hidden md:flex justify-between items-center">
        <div>
          <Image
            src={FlightLogo}
            alt="flight-logo"
            className=" w-[134px] h-[87px] "
          />
        </div>

        <ul className="hidden md:flex items-center gap-14">
          <Link href="/">
            <li>Home</li>
          </Link>

          <Link href="/AboutUs">
            <li>About Us</li>
          </Link>

          <Link href="/Service">
            <li>Service</li>
          </Link>

          <Link href="/Blog">
            <li>Blog</li>
          </Link>

          <Link href="/ContactUs">
            <li>Contact Us</li>
          </Link>
        </ul>
        <div className="hidden md:block bg-gradient-to-r from-red-400 to-white p-[1px] rounded">
          <div className="bg-black px-4 py-2 rounded font-bold">
            Book Flight Now
          </div>
        </div>
      </div>

      <div className="  fixed top-0 left-0 w-full  bg-black text-white text-[15px] px-4 justify-between md:hidden">
        <div className="md:hidden flex justify-between items-center">
          <Image
            src={FlightLogo}
            alt="flight-logo"
            className=" w-[89px] h-[67px] "
          />

          <div
            className="text-white pr-2"
            onClick={() => setSideSlide(!sideSlide)}
          >
            <FaBarsStaggered />
          </div>
        </div>

        {/* <div className="absolute top-5 right-10 text-white font-bold text-[54px]" onClick={() => setScreenDisplay(!screenDisplay)}><IoCloseOutline /></div> */}

        <div >
          <ul className="hidden md:flex items-center gap-14">
            <li></li>
            <Link href="/">
              <li>Home</li>
            </Link>

            <Link href="/AboutUs">
              <li>About Us</li>
            </Link>

            <Link href="/Service">
              <li>Service</li>
            </Link>

            <Link href="/Blog">
              <li>Blog</li>
            </Link>

            <Link href="/ContactUs">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
