import React from "react";
import OfferSwiper from "../components/OfferSwiper";
const Offer = () => {
  return (
    <>
      <div className="w-full h-screen  bg-gradient-to-b  from-[#6a7c8a] to-white mt-20">
        <div className="p-25 flex justify-center flex-col items-center pt-[80px] md:px-[100px] mb-7 xl:px-[67px] xl:mx-[247px] xl:pt-[135px]">
          <h3 className="text-[#ffffff] font-sofia-pro-light mb-6 font-semibold text-[32px] px-[20px] ">
            Hotel in Taisten: Offer
          </h3>
          <p className="text-[16px] font-semibold text-[#ffffff] text-center px-[20px] mb-4">
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
      </div>
      <OfferSwiper />
    </>
  );
};

export default Offer;
