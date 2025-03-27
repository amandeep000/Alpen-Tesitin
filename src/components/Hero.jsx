import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Header from "./Header";

function Hero({ isSummer, toggleSeason, isOpen, setIsOpen }) {
  const summerVideo = "/public/summer/winter bg.mp4";
  const winterVideo = "/public/winter/summer bg.mp4";

  const videoToShow = isSummer ? summerVideo : winterVideo;

  return (
    <>
      <div
        className={`${
          isOpen ? "opacity-0" : "opacity-100"
        } relative w- h-screen overflow-hidden transition-all duration-500 ease-in-out`}
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
          <SwiperSlide>
            <video className="w-full h-screen object-cover" autoPlay loop muted>
              <source src={videoToShow} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Hero;
