import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper modules
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="rounded-lg shadow-lg"
      >
        <SwiperSlide>
          <img
            src="/public/offer1.webp"
            alt="Slide 1"
            className="w-full h-auto object-cover"
          />
          <h3>AT Active...</h3>
          <p>7 nights with ¾ gourmet board</p>
          <p>09/02–16/03/2025</p>
          <button className="text-[15px] text-[#424242] flex justify-center items-center gap-2 font-semibold group">
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
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/public/offer2.webp"
            alt="Slide 2"
            className="w-full h-auto object-cover"
          />
          <h3>AT Yoga-and-Balance-Week</h3>
          <p>7 nights with ¾ gourmet board</p>
          <p>16/03–23/03/2025 | 23/03–30/03/2025</p>
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
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/public/offer3.webp"
            alt="Slide 3"
            className="w-full h-auto object-cover"
          />
          <h3>AT Sun...</h3>
          <p>7 nights with ¾ gourmet board</p>
          <p>16/03–30/03/2025</p>
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
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/public/offer4.webp"
            alt="Slide 3"
            className="w-full h-auto object-cover"
          />
          <h3>AT Blossom...</h3>
          <p>7 nights with ¾ gourmet board</p>
          <p>01/05–22/06/2025</p>
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
