import React from "react";
import Image from "next/image";
import FlightLogo from "../../../../public/assets/image.png";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
function Page() {
  return (
    <div
      className={`${inter.className} fixed top-0 left-0 w-full  bg-black text-white text-[15px] px-14 z-50`}
    >
      <div className="flex justify-between items-center">
        <div>
          <Image
            src={FlightLogo}
            alt="flight-logo"
            className="w-[134px] h-[87px] "
          />
        </div>

        <ul className="flex items-center gap-14">
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
        <div className="bg-gradient-to-r from-red-400 to-white p-[1px] rounded">
          <div className="bg-black px-4 py-2 rounded font-bold">
            Book Flight Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
