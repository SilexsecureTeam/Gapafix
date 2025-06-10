import React from "react";
import Image from "next/image";
import serviceImage from "../../../public/assets/man (1).png";
import { Inter, DM_Sans } from "next/font/google";



const inter = Inter({ subsets: ["latin"], weight: "400" });
const dmsan = DM_Sans({ subsets: ["latin"], weight: "600" });
function Page() {
  return (
    <div className={`${inter.className} pt-20 `} >
      <div className="relative h-[510px] text-white">
        <Image
          src={serviceImage}
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
    </div>
  );
}

export default Page;
