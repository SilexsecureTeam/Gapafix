import React from "react";
import FlightLogo from "../../../../public/assets/image.png";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "400"});
function Footer() {
  return (
    <div
      className={` ${poppins.className} relative bg-neutral-700 text-white   py-4`}
    >
      <div className="absolute mx-20 top-[-45px] flex items-center px-10 w-[751px] h-[91px] rounded-md" style={{backgroundColor: "#D9D9D9"}}>
        <input placeholder="Enter your email address" className="w-full text-[16px] text-gray-700 h-full"/>
        <div className="w-[300px] flex justify-center items-center font-bold tracking-[3] rounded-md text-[16px] h-[64px] bg-neutral-900">Subscribe</div>
      </div>

      <div className="flex items-center py-10 justify-between  ">
        <div>
          <div className="px-10">
            <Image
              src={FlightLogo}
              alt="flight-logo"
              className="w-[134px] h-[87px]  "
            />
          </div>
          <p className="text-[16px] py-6 leading-[26px] text-gray-300 px-20 w-[570px]">
            Mymore Travels — Your trusted partner for smart, affordable, and
            hassle-free travel. We bring you the best flight deals, hotel stays,
            and tour packages all in one place. Wherever you go, we’re with you
            every step of the way.
          </p>
        </div>
        <div className="flex gap-20 px-20">
          <ul className="font-bold text-[16px] leading-[26px]">
            <li>Company</li>
            <li className="py-3">Careers</li>
            <li>FAQs</li>
            <li className="py-3">Private Policy</li>
          </ul>
          <ul className="font-bold text-[16px] leading-[26px]">
            <li>Legal</li>
            <li className="py-3">Terms and Conditions</li>
            <li>Insurance Policy</li>
          </ul>
        </div>
      </div>
      <hr className="w-full py-2" />
      <p className="w-full text-center text-white font-bold text-16px leading-[26px] py-4">
        2025 Mymore Inc.
      </p>
    </div>
  );
}

export default Footer;
