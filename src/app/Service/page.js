import React from "react";
import Image from "next/image";
import serviceImage from "../../../public/assets/man (1).png";
import { Inter, DM_Sans } from "next/font/google";
import Link from "next/link";
import Vector from "../../../public/assets/Vector.png";
import Toyota from "../../../public/assets/pngwing.com (10) 1.png";
import Ring from "../../../public/assets/pngwing.com (3) 1.png";
import Ford from "../../../public/assets/pngwing.com (9) 1 (1).png";
import Lexus from "../../../public/assets/pngwing.com (5) 1.png";
import Piggot from "../../../public/assets/pngwing.com (7) 1.png";
import Rectangle from "../../../public/assets/Rectangle 1.png";
import Ellipse from "../../../public/assets/Ellipse 1.png";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const dmsan = DM_Sans({ subsets: ["latin"], weight: "600" });
const partners = [
  Toyota,
  Ring,
  Ford,
  Lexus,
  Piggot,
  Toyota,
  Ring,
  Ford,
  Lexus,
  Piggot,
];
function Page() {
  return (
    <div className={`${inter.className} pt-20 `}>
      <div className="relative h-[510px] text-white">
        <Image
          src={serviceImage}
          alt="aboutus-home-image"
          className="w-full h-full "
        />
        <div className="absolute top-0 bg-black/60 w-full h-full z-20 ">
          <div className=" py-35 h-full w-[701px] mx-20">
            <h1
              className={`${dmsan.className} text-[48px] tracking-[2] font-bold leading-[58px]`}
            >
              Explore Premium Travel Services{" "}
              <span style={{ color: "#780000" }}>Designed </span>for You
            </h1>
            <p className="my-4 leading-[28px] text-[18px] text-gray-200 tracking-[-0.1]">
              From booking your next flight to arranging private jet charters,
              Mymore Travels provides everything you need for a seamless
              journey.
            </p>
            <Link href="/Service">
              <div className="flex items-center shadow-md justify-center bg-black  py-4 leading-[21px] w-[250px] rounded">
                Get Started
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className=" flex gap-4 my-20 items-center px-20">
        <div
          className={`${dmsan.className} rounded-3xl text-white w-[592px] py-25 px-10`}
          style={{ backgroundColor: "#780000" }}
        >
          <div className="flex gap-6">
            <div className="bg-white flex items-center rounded-[50px] justify-center border-8 border-pink-100 w-[50px] h-[50px]">
              <Image src={Vector} alt="vector" className="w-[25px] h-[25px]" />
            </div>
            <div className="w-[406px]">
              <h1 className="text-[24px]  leading-[24px]">Flight Bookings</h1>
              <p className="text-[18px] py-2 text-gray-300 tracking-[1.2] leading-[18px]">
                Find and book affordable flights to your dream destinations with
                flexible options and trusted airlines.
              </p>
            </div>
          </div>

          <div className="flex gap-6 pt-10">
            <div className="bg-white flex items-center rounded-[50px] justify-center border-8 border-pink-100 w-[50px] h-[50px]">
              <Image src={Vector}  alt="vector" className="w-[25px] h-[25px]" />
            </div>
            <div className="w-[406px]">
              <h1 className="text-[24px]  leading-[24px]">Hotel Deals</h1>
              <p className="text-[18px] py-2 text-gray-300 tracking-[1.2] leading-[18px]">
                Choose from a wide range of handpicked hotels at unbeatable
                rates, from luxury stays to budget-friendly options.
              </p>
            </div>
          </div>

          <div className="flex gap-6 pt-10">
            <div className="bg-white flex items-center rounded-[50px] justify-center border-8 border-pink-100 w-[50px] h-[50px]">
              <Image src={Vector} alt="vector" className="w-[25px] h-[25px]" />
            </div>
            <div className="w-[406px]">
              <h1 className="text-[24px]  leading-[24px]">Tour Packages</h1>
              <p className="text-[18px] py-2 text-gray-300 tracking-[1.2] leading-[18px]">
                Explore custom-designed tours that offer unforgettable local
                experiences, adventure, and relaxation.
              </p>
            </div>
          </div>

          <div className="flex gap-6 pt-10">
            <div className="bg-white flex items-center rounded-[50px] justify-center border-8 border-pink-100 w-[50px] h-[50px]">
              <Image src={Vector} alt="vector" className="w-[25px] h-[25px]" />
            </div>
            <div className="w-[406px]">
              <h1 className="text-[24px]  leading-[24px]">Visa Processing</h1>
              <p className="text-[18px] py-2 text-gray-300 tracking-[1.2] leading-[18px]">
                Leave the paperwork to us. We assist with accurate, timely, and
                hassle-free visa applications for various countries.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${dmsan.className} rounded-3xl text-white w-[592px] py-25 px-10`}
          style={{ backgroundColor: "black" }}
        >
          <div className="flex gap-6">
            <div className="bg-white flex items-center rounded-[50px] justify-center border-8 border-pink-100 w-[50px] h-[50px]">
              <Image src={Vector} alt="vector" className="w-[25px] h-[25px]" />
            </div>
            <div className="w-[406px]">
              <h1 className="text-[24px]  leading-[24px]">Flight Bookings</h1>
              <p className="text-[18px] py-2 text-gray-300 tracking-[1.2] leading-[18px]">
                Find and book affordable flights to your dream destinations with
                flexible options and trusted airlines.
              </p>
            </div>
          </div>

          <div className="flex gap-6 pt-10">
            <div className="bg-white flex items-center rounded-[50px] justify-center border-8 border-pink-100 w-[50px] h-[50px]">
              <Image src={Vector} alt="vector" className="w-[25px] h-[25px]" />
            </div>
            <div className="w-[406px]">
              <h1 className="text-[24px]  leading-[24px]">Hotel Deals</h1>
              <p className="text-[18px] py-2 text-gray-300 tracking-[1.2] leading-[18px]">
                Choose from a wide range of handpicked hotels at unbeatable
                rates, from luxury stays to budget-friendly options.
              </p>
            </div>
          </div>

          <div className="flex gap-6 pt-10">
            <div className="bg-white flex items-center rounded-[50px] justify-center border-8 border-pink-100 w-[50px] h-[50px]">
              <Image src={Vector} alt="vector" className="w-[25px] h-[25px]" />
            </div>
            <div className="w-[406px]">
              <h1 className="text-[24px]  leading-[24px]">Tour Packages</h1>
              <p className="text-[18px] py-2 text-gray-300 tracking-[1.2] leading-[18px]">
                Explore custom-designed tours that offer unforgettable local
                experiences, adventure, and relaxation.
              </p>
            </div>
          </div>

          <div className="flex gap-6 pt-10">
            <div className="bg-white flex items-center rounded-[50px] justify-center border-8 border-pink-100 w-[50px] h-[50px]">
              <Image src={Vector} alt="vector" className="w-[25px] h-[25px]" />
            </div>
            <div className="w-[406px]">
              <h1 className="text-[24px]  leading-[24px]">Visa Processing</h1>
              <p className="text-[18px] py-2 text-gray-300 tracking-[1.2] leading-[18px]">
                Leave the paperwork to us. We assist with accurate, timely, and
                hassle-free visa applications for various countries.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden py-10 w-full bg-black">
        <div className="flex whitespace-nowrap gap-10 animate-scroll w-max">
          {partners.map((img, index) => (
            <div key={index}>
              <Image
                src={img}
                alt={`logo-${index}`}
                className="w-[160px] h-[79px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="px-20 py-10" style={{ backgroundColor: "#780000" }}>
        <h1
          className={`${dmsan.className} text-white py-6 text-[24px] leading-[24px] tracking-[2]`}
        >
          How it works
        </h1>
        <p
          className={`${dmsan.className}  text-gray-300  text-[18px] leading-[18px] tracking-[1.2]`}
        >
          Seamless Travel in 3 Simple Steps
        </p>

        <div className=" flex justify-between items-center py-20">
          <div>
            <div className=" flex justify-center rounded-[50px] text-[24px] leading-[24px] tracking-[2] items-center  text-white bg-black w-[75px] h-[75px]">
              1
            </div>
            <div className="w-[266px]">
              <h1
                className={`${dmsan.className}  text-white py-6 text-[24px] leading-[24px] tracking-[2]`}
              >
                Choose Service
              </h1>
              <p
                className={`${dmsan.className}  text-gray-300  text-[18px] leading-[18px] tracking-[1.2]`}
              >
                Select what you need from flights, hotels, or other services.
              </p>
            </div>
          </div>
          <div>
            <div className=" flex justify-center rounded-[50px] text-[24px] leading-[24px] tracking-[2] items-center  text-white bg-black w-[75px] h-[75px]">
              2
            </div>
            <div className="w-[250px]">
              <h1
                className={`${dmsan.className}  text-white py-6 text-[24px] leading-[24px] tracking-[2]`}
              >
                Choose Service
              </h1>
              <p
                className={`${dmsan.className}  text-gray-300  text-[18px] leading-[18px] tracking-[1.2]`}
              >
                Select what you need from flights, hotels, or other services.
              </p>
            </div>
          </div>
          <div>
            <div className=" flex justify-center rounded-[50px] text-[24px] leading-[24px] tracking-[2] items-center  text-white bg-black w-[75px] h-[75px]">
              3
            </div>
            <div className="w-[247px]">
              <h1
                className={`${dmsan.className}  text-white py-6 text-[24px] leading-[24px] tracking-[2]`}
              >
                Choose Service
              </h1>
              <p
                className={`${dmsan.className}  text-gray-300  text-[18px] leading-[18px] tracking-[1.2]`}
              >
                Select what you need from flights, hotels, or other services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black px-20">
        <div className="py-30">
          <div className="flex gap-10">
            <div className="relative">
              <Image
                src={Rectangle}
                alt="rectangle"
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
                    was perfectly arranged. We&apos;ll definitely be booking our next
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
                    <i>{'\"'}</i>
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
      </div>
    </div>
  );
}

export default Page;
