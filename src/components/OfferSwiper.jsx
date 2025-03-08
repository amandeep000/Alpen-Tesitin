import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <div className="w-full mt-10 cursor-pointer bg-transparent z-40 overflow-hidden">
      <Swiper
        modules={[FreeMode]}
        spaceBetween={30}
        freeMode={true}
        className="w-full"
        breakpoints={{
          1280: { slidesPerView: 2.5 },
          1024: { slidesPerView: 1.5 },
          768: { slidesPerView: 1.2 },
          640: { slidesPerView: 1.1 },
        }}
      >
        {[...Array(4)].map((_, index) => (
          <SwiperSlide key={index} className="w-auto">
            <div className="flex flex-col text-start overflow-x-hidden pl-10">
              <img
                src={`/offer${index + 1}.webp`}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <h3 className="mt-5 text-white text-[22px] md:text-[25px]">
                AT{" "}
                {index === 0
                  ? "Active"
                  : index === 1
                  ? "Yoga-and-Balance-Week"
                  : index === 2
                  ? "Sun"
                  : "Blossom"}
                ...
              </h3>
              <p className="text-white text-sm">
                7 nights with ¾ gourmet board
              </p>
              <p className="text-white text-sm">
                {index === 0
                  ? "09/02–16/03/2025"
                  : index === 1
                  ? "16/03–30/03/2025"
                  : index === 2
                  ? "16/03–30/03/2025"
                  : "01/05–22/06/2025"}
              </p>
              <button className="text-[16px] text-white flex items-center gap-2 font-semibold group mt-4">
                Show All Offers
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  ➝
                </span>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
