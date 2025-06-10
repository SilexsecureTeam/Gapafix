"use client";
import Image from "next/image";
import homepage from "../../public/assets/homepage.png";
import { Inter, DM_Sans } from "next/font/google";
import Hotel from "../../public/assets/hotel.jpg";
import Frame21 from "../../public/assets/Frame 21.png";
import Frame22 from "../../public/assets/Frame 22.png";
import Frame23 from "../../public/assets/Frame 23.png";
import Vcorple from "../../public/assets/VacationC.jpg";
import SummerOne from "../../public/assets/Frame 8.png";
import SummerTwo from "../../public/assets/Frame 31.png";
import SummerThree from "../../public/assets/Frame 29.png";
import SummerFour from "../../public/assets/Frame 30.png";
import Rectangle from "../../public/assets/Rectangle 1.png";
import Ellipse from "../../public/assets/Ellipse 1.png";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
import { FcCustomerSupport } from "react-icons/fc";
import { TiCreditCard } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";
import { PiGlobeLight } from "react-icons/pi";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const dmsan = DM_Sans({ subsets: ["latin"], weight: "600" });
// const poppins = Poppins({subsets: ["latin"]})
export default function Home() {
  const [screenDisplay, setScreenDisplay] = useState(false);

  return (
    <div className={`${inter.className} pt-20 `}>
      
      <div
        className={`w-full   flex items-center justify-center top-60 z-1000 ${
          screenDisplay ? "hidden" : "block fixed"
        }`}
      >
        <div
          className="flex relative flex-col justify-center items-center  w-[977px]  h-[426px] rounded-3xl"
          style={{ backgroundColor: "#780000" }}
        >
          <div className="absolute top-5 right-10 text-white font-bold text-[54px]" onClick={() => setScreenDisplay(!screenDisplay)}><IoCloseOutline /></div>
          <p
            className={`${inter.className} text-center pt-16 text-white text-[28px] py-5 tracking-[3] leading-[33px] w-[528px] h-[124px]`}
          >
            Looking to Book a Flight? You're now on Mymore Travels for a
            seamless booking experience, continue to our main site.
          </p>
          <div
            className="bg-gradient-to-r w-[250px] h-[64px] mt-25 from-black to-white p-[1px] text-white rounded"
            onClick={() => setScreenDisplay(!screenDisplay)}
          >
            <div className="flex items-center justify-center  w-full bg-black px-4 h-full rounded font-bold">
              Book Flight Now
            </div>
          </div>
        </div>
      </div>

      <div className="relative text-white">
        <Image
          src={homepage}
          alt="flight-home-image"
          className="w-full h-[723px] "
        />
        <div className="absolute top-0 bg-black/60 w-full h-[840px] z-20 ">
          <div className=" py-45 h-full w-[590px] mx-20">
            <h1
              className={`${dmsan.className} text-[48px] tracking-[2] font-bold leading-[58px]`}
            >
              Book Flight, Explore <br />
              More, Travel Smarter.{" "}
            </h1>
            <p className="my-4 leading-[28px] text-[18px] text-gray-200 tracking-[-0.1]">
              Discover the best flight deals, hotel bookings, and curated tour
              packages all in one place. With Mymore Travels, planning your next
              adventure is simpler, faster, and more affordable.
            </p>
            <div className="flex items-center shadow-md justify-center bg-black  py-4 leading-[21px] w-[250px] rounded">
              Book Flight Now
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black px-20 py-20 text-[13px] text-white">
        <h1
          className={`${dmsan.className} text-white text-[32px] leading-[32px]`}
        >
          Why Travelers Trust Mymore
        </h1>
        <p className="text-gray-300 leading-[21px] tracking-wider">
          Delivering smarter travel solutions, every step of the way.
        </p>
        <div className="flex justify-between items-center py-8">
          <div
            className="flex flex-col items-center justify-center w-[255px] h-[161px] flex justify-center items-center"
            style={{ backgroundColor: "#97060B" }}
          >
            <p className=" text-[50px]">
              <BsLightningChargeFill />
            </p>
            <p className="text-gray-300 leading-[21px] tracking-wider">
              Fast & Secure Flight Booking
            </p>
          </div>
          <div
            className="flex flex-col items-center justify-center text-black w-[255px] h-[161px]  flex justify-center items-center"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            <p className=" text-[50px]">
              <FcCustomerSupport />
            </p>
            <p className="text-black  leading-[21px] tracking-wider">
              Expert Travel Support
            </p>
          </div>
          <div
            className="flex flex-col items-center  justify-center w-[255px] h-[161px] flex justify-center items-center"
            style={{ backgroundColor: "#97060B" }}
          >
            <p className=" text-[50px]">
              <TiCreditCard />
            </p>
            <p className="text-gray-300 leading-[21px] tracking-wider">
              Secure Payment
            </p>
          </div>
          <div
            className="flex flex-col items-center justify-center text-black  w-[255px] h-[161px] flex justify-center items-center"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            <p className=" text-[50px]">
              <PiGlobeLight />
            </p>
            <p className="text-black leading-[21px] tracking-wider">
              Comprehensive Travel Solutions
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-[446px]">
        <Image src={Hotel} alt="Hotel" className=" h-full" />
        <div className="absolute top-0 bg-black/40 w-full h-full z-20 ">
          <div className=" py-40 h-full w-[500px] mx-20">
            <h1
              className={`${dmsan.className} font-bold text-white text-[32px] tracking-[3] font-bold leading-[38px]`}
            >
              Book Quality Hotels at the Best Rates
            </h1>
            <p className="my-4 leading-[21px] text-gray-300 tracking-[2] text-[15px] text-gray-200 tracking-[-0.1]">
              Discover hotel deals that match your style and budget. Whether
              you're traveling for business or leisure, we make it easy to find
              quality stays with flexible options and the best available prices.
            </p>
          </div>
        </div>
      </div>

      <div
        className="bg-black/94 grid items-center  px-20 pb-5 text-[13px] text-white"
        style={{ backgroundColor: "" }}
      >
        <h1
          className={`${dmsan.className} py-10 font-bold text-[32px] leading-[32px]`}
        >
          Handpicked hotel deals in top cities around the world.
        </h1>
        <div className="flex gap-20 pt-5">
          <div>
            <Image src={Frame21} alt="Hotel" className="w-[275px] h-[329px]" />
          </div>
          <div>
            <Image src={Frame22} alt="Hotel" className="w-[275px] h-[329px]" />
          </div>
          <div>
            <Image src={Frame23} alt="Hotel" className="w-[275px] h-[329px]" />
          </div>
        </div>

        <div className="flex gap-20 py-20">
          <div>
            <Image src={Frame21} alt="Hotel" className="w-[275px] h-[329px]" />
          </div>
          <div>
            <Image src={Frame22} alt="Hotel" className="w-[275px] h-[329px]" />
          </div>
          <div>
            <Image src={Frame23} alt="Hotel" className="w-[275px] h-[329px]" />
          </div>
        </div>
      </div>

      <div className="relative">
        <Image src={Vcorple} alt="Hotel" className="h-[599px] w-full" />
        <div className="absolute top-0 bg-black/60 w-full h-[599px] z-20 ">
          <div className=" py-60 h-full w-[500px] mx-20">
            <h1
              className={`${dmsan.className} text-[30px] text-white tracking-[2] font-bold leading-[42px]`}
            >
              Discover Tailored Tour <br />
              Packages for Every Traveler.{" "}
            </h1>
            <p className="py-4 leading-[21px] w-[432px] text-[15px] text-gray-300 tracking-[-0.2]">
              From romantic escapes to family adventures, our curated tour
              packages are designed to make your travels effortless and
              unforgettable. Enjoy all-inclusive experiences with flights,
              stays, and activities all in one place.
            </p>
          </div>
        </div>
      </div>

      <div
        className="bg-black/94 grid items-center pt-20 pb-30 px-20 text-[13px] text-white"
        style={{ backgroundColor: "" }}
      >
        <div className="flex   justify-between h-[517px]">
          <div className="grid h-full gap-10 ">
            <Image
              src={SummerOne}
              alt="flight-home-image"
              className=" w-[584px] h-[234px]"
            />
            <Image
              src={SummerTwo}
              alt="flight-home-image"
              className=" w-[584px] h-[234px]"
            />
          </div>

          <div>
            <Image
              src={SummerThree}
              alt="flight-home-image"
              className="  w-[217px] h-full"
            />
          </div>
          <div>
            <Image
              src={SummerFour}
              alt="flight-home-image"
              className="  w-[217px] h-full"
            />
          </div>
        </div>

        <div className="py-30">
          <div className="flex gap-10">
            <div className="relative">
              <Image
                src={Rectangle}
                alt="Hotel"
                className="h-[602px] w-[525px]"
              />
              <div className="absolute right-[-510px] flex gap-6 -bottom-40 bg-neutral-700  p-6">
                <div
                  className={`${dmsan.className} p-6 w-[330px] h-[455px]`}
                  style={{ backgroundColor: "#100E0E" }}
                >
                  <h1 className="text-[120px]  leading-[82px] pt-6">
                    {" "}
                    <i>"</i>
                  </h1>
                  <p className="text-[16px] leading-[28px] text-gray-300">
                    Mymore Travels made my honeymoon stress-free and
                    unforgettable! From flights to hotel bookings, everything
                    was perfectly arranged. We’ll definitely be booking our next
                    trip with them.
                  </p>
                  <div>
                    <div className="flex items-center gap-6 py-3">
                      <Image
                        src={Ellipse}
                        alt="ellipse"
                        className="w-[50px] h-[51px]"
                      />
                      <div>
                        <h1 className="tex-[16px] leading-[16px] tracking-[3] py-1 font-bold">
                          Nathan Adebayo
                        </h1>
                        <p className="tex-[16px] leading-[16px] tracking-[3]">
                          Abuja Nigeria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${dmsan.className} p-6 w-[330px] h-[455px]`}
                  style={{ backgroundColor: "#100E0E" }}
                >
                  <h1 className="text-[120px]  leading-[82px] pt-6">
                    {" "}
                    <i>"</i>
                  </h1>
                  <p className="text-[16px] leading-[28px] text-gray-300">
                    Booking with Mymore Travels was the best decision. Their
                    customer support was responsive and the hotel deal we got in
                    Dubai was unbeatable. Highly recommend for anyone planning a
                    getaway!
                  </p>
                  <div>
                    <div className="flex items-center gap-6 py-3">
                      <Image
                        src={Ellipse}
                        alt="ellipse"
                        className="w-[50px] h-[51px]"
                      />
                      <div>
                        <h1 className="tex-[16px] leading-[16px] tracking-[3] py-1 font-bold">
                          Nathan Adebayo
                        </h1>
                        <p className="tex-[16px] leading-[16px] tracking-[3]">
                          Abuja Nigeria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className=" text-[34px] py-10 tracking-[7] leading-[44px]">
                What Customers Says <br /> About Us
              </h1>
            </div>
          </div>
          <div className="flex gap-10 py-10">
            <div className="flex justify-center items-center bg-neutral-700 px-4 py-2 h-[55px] w-[100px] text-[20px] text-black rounded-md">
              <MdArrowBackIos />
            </div>
            <div className="flex justify-center items-center bg-neutral-700  px-4 h-[55px] w-[100px] text-[20px]  text-black rounded-md">
              <MdArrowForwardIos />
            </div>
          </div>
        </div>

        <div>
          <h1 className={`text-[48px] leading-[38px] ${dmsan.className}`}>
            Stay in the Loop
          </h1>
          <p className="text-[24px] leading-[38px] py-2">Never miss a deal.</p>
          <p className="text-[16px] leading-[26px] text-gray-300 w-[595px]">
            Subscribe to our newsletter and be the first to get exclusive travel
            offers, destination tips, and updates from Mymore Travels — straight
            to your inbox.
          </p>
        </div>
      </div>
    </div>
  );
}
