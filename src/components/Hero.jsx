import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Header from "./Header";

function Hero({ isSummer, toggleSeason, isOpen, setIsOpen }) {
  const summerImages = [
    "/summer/img1.webp",
    "/summer/img2.webp",
    "/summer/img3.webp",
    "/summer/img4.webp",
    "/summer/img5.webp",
    "/summer/img6.webp",
    "/summer/img7.webp",
    "/summer/img8.webp",
    "/summer/img9.webp",
  ];

  const winterImages = [
    "/winter/img1.webp",
    "/winter/img2.webp",
    "/winter/img3.webp",
    "/winter/img4.webp",
    "/winter/img5.webp",
    "/winter/img6.webp",
    "/winter/img7.webp",
    "/winter/img8.webp",
  ];

  const imagesToShow = isSummer ? summerImages : winterImages;

  return (
    <>
      <div
        className={`${
          isOpen ? "opacity-0" : "opacity-100"
        } relative w-screen h-screen overflow-x-hidden transition-all duration-500 ease-in-out`}
      >
        <div className="absolute w-full top-0 left-0 z-20">
          <Header
            isSummer={isSummer}
            toggleSeason={toggleSeason}
            color={"white"}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            headerPadding={`pt-[44px] pb-[16px]`}
          />
        </div>
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          effect="fade"
          speed={1200}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {imagesToShow.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                className="w-full h-screen object-cover"
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Hero;
