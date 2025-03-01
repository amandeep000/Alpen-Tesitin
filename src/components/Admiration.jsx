import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const summerImages = [
  "/AdmirationSummer/img1.webp",
  "/AdmirationSummer/img2.webp",
  "/AdmirationSummer/img3.webp",
  "/AdmirationSummer/img4.webp",
  "/AdmirationSummer/img5.webp",
  "/AdmirationSummer/img6.webp",
  "/AdmirationSummer/img7.webp",
  "/AdmirationSummer/img8.webp",
  "/AdmirationSummer/img9.webp",
  "/AdmirationSummer/img10.webp",
];

const winterImages = [
  "/AdmirationWinter/img1.webp",
  "/AdmirationWinter/img2.webp",
  "/AdmirationWinter/img3.webp",
  "/AdmirationWinter/img4.webp",
  "/AdmirationWinter/img5.webp",
  "/AdmirationWinter/img6.webp",
  "/AdmirationWinter/img7.webp",
  "/AdmirationWinter/img8.webp",
  "/AdmirationWinter/img9.webp",
  "/AdmirationWinter/img10.webp",
];

const Admiration = ({ isSummer }) => {
  const ImagesToShow = isSummer ? summerImages : winterImages;

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1} // Adjust as needed
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w-full h-[500px]" // Set Swiper container height
    >
      {ImagesToShow.map((image, index) => (
        <SwiperSlide key={index} className="h-[650px] w-full">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Admiration;
