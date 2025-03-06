// import React from "react";
import OfferSwiper from "./OfferSwiper";

const Offer = () => {
  return (
    <>
      <div className="relative w-full h-full bg-[#6a7c8a] mt-20 overflow-hidden mb-10">
        <div className="relative z-10 p-25 flex flex-col items-center h-[450px] pt-[80px] md:px-[100px] mb-5 xl:px-[67px] xl:mx-[247px] xl:pt-[135px]">
          <h3 className="text-[#ffffff] font-openSans mb-6 font-light tracking-wide text-[32px] px-[25px]">
            Hotel in Taisten: Offers
          </h3>
          <p className="font-openSans text-[16px] font-normal text-[#ffffff] text-center px-[25px] mb-4 leading-[1.7]">
            Are you longing for a romantic couple’s weekend, an adventure-filled
            family holiday, or simply a getaway amidst nature? Our wide variety
            of offers will put a smile on everyone’s face.
          </p>
          <button className="text-[15px] text-[#ffffff] flex justify-center items-center gap-2 font-semibold group">
            Show All Offers{" "}
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="h-[1300px] bg-cover bg-center custom-top-gradient relative">
          <div className="absolute -top-32 left-0 w-full">
            <OfferSwiper />
          </div>
          <div
            className="h-full"
            style={{
              backgroundImage: "url('/offer&services.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Offer;
