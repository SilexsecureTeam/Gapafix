import React from "react";
import { Inter, DM_Sans } from "next/font/google";
import Image from "next/image";
import AboutusHomePage from "../../../public/assets/mancall.png";
import Link from "next/link";
import ImgDir from "../../../public/assets/image 4.png";
import tour from "../../../public/assets/tour.jpg";
import flight from "../../../public/assets/material-symbols_flight-rounded.png";
import Vector from "../../../public/assets/Vector.png";
import VectorTwo from "../../../public/assets/Vector (2).png";
import VectorOne from "../../../public/assets/Vector (1).png";
import Passport from "../../../public/assets/mdi_passport-plus.png";
import VisaCard from "../../../public/assets/streamline-freehand_credit-card-visa.png";
import VectorThree from "../../../public/assets/Vector (3).png";
import FrameLad from "../../../public/assets/Frame 86.png";
import FrameLady from "../../../public/assets/Frame 90.png";
import FrameMan from "../../../public/assets/Frame 91.png";
import Toyota from "../../../public/assets/pngwing.com (10) 1.png";
import Ring from "../../../public/assets/pngwing.com (3) 1.png";
import FrameMan from "../../../public/assets/Frame 91.png";
import FrameMan from "../../../public/assets/Frame 91.png";
import FrameMan from "../../../public/assets/Frame 91.png";


const inter = Inter({ subsets: ["latin"], weight: "400" });
const dmsan = DM_Sans({ subsets: ["latin"], weight: "600" });
function Page() {
  return (
    <div className={`${inter.className} pt-20 `} c>
      <div className="relative h-[510px] text-white">
        <Image
          src={AboutusHomePage}
          alt="aboutus-home-image"
          className="w-full h-full "
        />
        <div className="absolute top-0 bg-black/60 w-full h-full z-20 ">
          <div className=" py-35 h-full w-[500px] mx-20">
            <h1
              className={`${dmsan.className} text-[48px] tracking-[2] font-bold leading-[58px]`}
            >
              Who We Are
            </h1>
            <p className="my-4 leading-[28px] text-[18px] text-gray-200 tracking-[-0.1]">
              At Mymore Travels, we make your journey seamless, affordable, and
              unforgettable. From flights to private jets, visa help to travel
              insurance we’ve got every aspect of your trip covered.
            </p>
            <Link href="/Service">
              <div className="flex items-center shadow-md justify-center bg-black  py-4 leading-[21px] w-[250px] rounded">
                View our service
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className=" my-20  flex justify-between items-center mx-20">
        <div className="relative">
          <div
            className="absolute -z-10  -top-10 -left-10 w-[165px] h-[129px]"
            style={{ backgroundColor: "#780000" }}
          ></div>
          <div>
            <Image
              src={ImgDir}
              alt="Director"
              className=" z-60 top-20 w-[413px] h-[651px]"
            />
          </div>
          <div
            className="absolute -z-10 -right-10 -bottom-10 w-[165px] h-[129px]"
            style={{ backgroundColor: "#780000" }}
          ></div>
        </div>

        <div className="w-[550px]  text-[18px] leading-[24px]">
          <h1
            className={`${dmsan.className} font-bold text-[24px] leading-[24px] tracking-[2]`}
            style={{ color: "#780000" }}
          >
            Our Story
          </h1>
          <p className="py-4">
            Mymore Travels Services ltd is a registered company which was
            founded to bridge the gap and eliminate the barriers and
            inefficiencies facing the global travel industry.
          </p>

          <p>
            Mymore Travels Services Ltd is a leading, full-service travel
            company focusing on adoption of digital platform solutions on air
            travels amongst other related logistics for easier and stress-free
            travels solutions.
          </p>

          <p className="py-4">
            Every solution we provide is instrumental in our core values,
            centered on cost reductions with each travel product, excellent
            deliveries, customer’s satisfaction with rewarding relationships as
            improved overtime from baseline studies and development of
            appropriate programs to address the needs of each client.
          </p>

          <p>
            Needful to say, our strength is also in the quality of our team of
            employees, consultants, and facilitators who are experienced
            professionals with track records of successes concentrating on both
            corporate travel management and individual travel arrangement.
          </p>

          <p className="py-4">
            By using the AMADEUS cutting edge IT online booking system, we
            ensure that our business traveler receives travel related
            information from an innovative network of resources, keeping him
            informed whilst on the move.
          </p>

          <p>
            Furthermore, we embrace consolidations, affiliations and
            partnerships of high standing within the country and globally,
            wholly focused on satisfying every traveler’s need with a one-stop
            booking portal for affordable flights, hotels, visa assistance,
            Holiday packages and tours, airport transfers, an international
            travel SIM, a prepaid travel card, a loyalty program, and much more.
          </p>
        </div>
      </div>

      <div className="py-20 mt-10 bg-black">
        <h1
          className={`${dmsan.className} px-20 text-white py-6 text-[24px] leading-[24px] tracking-[2]`}
        >
          We trusted by Global Partners
        </h1>
        <div className="flex justify-between py-10 items-center">
          <div>
            <Image src="" alt="toyota" />
          </div>
          <div>
            <Image src="" alt="toyota" />
          </div>
          <div>
            <Image src="" alt="toyota" />
          </div>
          <div>
            <Image src="" alt="toyota" />
          </div>
          <div>
            <Image src="" alt="toyota" />
          </div>
        </div>
      </div>

      <div className="relative h-[374px]  overflow-hidden">
        <Image src={tour} alt="toyota" className="-z-20  w-full" />
        <div className="absolute top-0 w-full bg-black/50 z-50 h-full"></div>
      </div>

      <div className="py-20 bg-black">
        <h1
          className={`${dmsan.className} px-20 text-white py-6 text-[24px] leading-[24px] tracking-[2]`}
        >
          What We Offer
        </h1>
        <div className="flex">
          <div>
            <div className="grid grid-cols-6 gap-8 text-white grid-rows-2 justify-between py-2 items-center">
              <div
                className="grid w-[163px] h-[118px]"
                style={{ backgroundColor: "#780000" }}
              >
                <Image
                  src={flight}
                  alt="flight"
                  className="w-[41px] h-[40px]"
                />
                <p>Fight Bookings</p>
              </div>

              <div
                className="grid w-[163px] bg-white h-[118px]"
                style={{ color: "#780000" }}
              >
                <Image
                  src={Vector}
                  alt="Vector"
                  className="px-10 w-[50px] h-[50px]"
                />
                <p>Hotel Deal</p>
              </div>

              <div
                className="grid w-[163px] h-[118px]"
                style={{ backgroundColor: "#780000" }}
              >
                <Image
                  src={VectorTwo}
                  alt="vectorTwo"
                  className="px-10 w-[75px] h-[50px] "
                />
                <p>Tour Packages</p>
              </div>

              <div
                className="w-[163px] h-[118px]"
                style={{ backgroundColor: "#780000" }}
              >
                <Image src={VectorOne} alt="vectorone" className="px-10  " />
                <p>Fight Booking</p>
              </div>
            </div>

            <div className="flex">
              <div>
                <Image
                  src={VisaCard}
                  alt="visa"
                  className="px-10  bg-red-400"
                />
                <p>Fight Booking</p>
              </div>
              <div>
                <Image
                  src={VectorThree}
                  alt="vector three"
                  className="px-10  bg-red-400"
                />
                <p>Fight Booking</p>
              </div>
            </div>
          </div>

          <div>
            <Image
              src={Passport}
              alt="passport"
              className="px-10  bg-red-400"
            />
            <p>Fight Booking</p>
          </div>
          <div></div>
        </div>
      </div>

      <div className="mx-20 py-30">
        <h1
          className={`${dmsan.className} text-[24px] leading-[24px] tracking-[2]`}
           style={{ color: "#780000" }}
        >
          Meet Our Team
        </h1>
        <p className="text-[18px] w-[780px] py-4 leading-[20px] tracking-[-0.32]">
          A passionate team of travel enthusiasts, tech experts, and customer
          care professionals dedicated to making your travel dreams come true.
        </p>
        <div className="flex items-center justify-between">
          <div className="w-[347px]">
            <Image src={FrameLad} alt="" />
            <h1 className={`${dmsan.className} pt-4 font-bold text-[20px] leading-[20px] tracking-[2]`}>Adam Malik</h1>
            <p className={`  text-[16px] leading-[18px] tracking-[-0.21]`}>Visa Specialist</p>
          </div>
          <div className="w-[347px]">
            <Image src={FrameLady} alt="" />
             <h1 className={`${dmsan.className} pt-4 font-bold  text-[20px] leading-[20px] tracking-[2]`}>Adam Malik</h1>
            <p className={` text-[16px] leading-[18px] tracking-[-0.21]`}>Visa Specialist</p>
          </div>
          <div className="w-[347px]">
            <Image src={FrameMan} alt="" />
             <h1 className={`${dmsan.className} pt-4 font-bold text-[20px] leading-[20px] tracking-[2]`}>Adam Malik</h1>
            <p className={`  text-[16px] leading-[18px] tracking-[-0.21]`}>Visa Specialist</p>
          </div>

        </div>

        
      </div>

      <div className="bg-black/94  pt-20 pb-30 px-20 text-[13px] text-white"
        style={{ backgroundColor: "" }}>
            <div>
          <h1 className={`text-[48px] leading-[38px] ${dmsan.className}`}>
            Stay in the Loop
          </h1>
          <p className="text-[24px] leading-[38px] py-2">Never miss a deal.</p>
          <p className="text-[16px] leading-[26px] py-6 text-gray-300 w-[595px]">
            Subscribe to our newsletter and be the first to get exclusive travel
            offers, destination tips, and updates from Mymore Travels — straight
            to your inbox.
          </p>
        </div>
        </div>
    </div>
  );
}

export default Page;
