import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import Swiper modules
import { FreeMode } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <div className="w-full mt-12 cursor-pointer bg-transparent z-40">
      <Swiper
        modules={[FreeMode]}
        spaceBetween={40}
        freeMode={true}
        className="overflow-visible"
        breakpoints={{
          1280: {
            slidesPerView: 2.5,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 1.2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 1.2,
            spaceBetween: 40,
          },
          640: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide className="w-full sm:ml-5 md:ml-16 lg:ml-28 xl:ml-32">
          <div className="flex flex-col items-center text-start ">
            <img
              src="/offer1.webp"
              alt="Slide 1"
              className="w-full h-auto object-cover rounded-lg"
            />
            <h3 className="w-full mt-8 text-[#ffffff] text-[22px] mb-[10px]  md:text-[25px]">
              AT Active...
            </h3>
            <p className="w-full text-[#ffffff]">
              7 nights with ¾ gourmet board
            </p>
            <p className="w-full text-[#ffffff]">09/02–16/03/2025</p>
            <button className="text-[16px] w-full text-white flex justify-start items-center gap-2 font-semibold group pt-[20px]">
              Show All Offers
              <span className=" transition-transform duration-300 group-hover:translate-x-2">
                ➝
              </span>
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="w-full ">
          <div className="flex flex-col items-center text-start ">
            <img
              src="/offer3.webp"
              alt="Slide 2"
              className="w-full h-auto object-cover rounded-lg"
            />
            <h3 className="mt-8 text-white w-full text-[22px] mb-[10px] md:text-[25px]">
              AT Yoga-and-Balance-Week
            </h3>
            <p className="text-[#ffffff] w-full">
              7 nights with ¾ gourmet board
            </p>
            <p className="text-[#ffffff] w-full">
              16/03–23/03/2025 | 23/03–30/03/2025
            </p>
            <button className="text-[16px] text-[#ffffff] w-full flex justify-start items-center gap-2 font-semibold group pt-[20px]">
              Show All Offers
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                ➝
              </span>
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="w-full ">
          <div className="flex flex-col items-center text-start ">
            <img
              src="/offer2.webp"
              alt="Slide 3"
              className="w-full h-auto object-cover rounded-lg"
            />
            <h3 className="mt-8 text-[#ffffff] w-full text-[22px] mb-[10px] md:text-[25px]">
              AT Sun...
            </h3>
            <p className="text-[#ffffff] w-full">
              7 nights with ¾ gourmet board
            </p>
            <p className="text-[#ffffff] w-full">16/03–30/03/2025</p>
            <button className="text-[16px] w-full text-[#ffffff] flex justify-start items-center gap-2 font-semibold group pt-[20px]">
              Show All Offers
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                ➝
              </span>
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide className="w-full sm:mr-4 ">
          <div className="flex flex-col items-center text-start w-full ">
            <img
              src="/offer4.webp"
              alt="Slide 4"
              className="w-full h-auto object-cover rounded-lg relative "
            />
            <h3 className="mt-8 text-[#ffffff] w-full text-[22px] md:text-[25px]">
              AT Blossom...
            </h3>
            <p className="text-[#ffffff] w-full">
              7 nights with ¾ gourmet board
            </p>
            <p className="text-[#ffffff] w-full">01/05–22/06/2025</p>
            <button className="text-[16px] w-full text-[#ffffff] flex justify-start items-center gap-2 font-semibold group pt-[20px]">
              Show All Offers
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                ➝
              </span>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
