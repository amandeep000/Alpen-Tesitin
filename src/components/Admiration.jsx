import { Pagination, A11y, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

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

const sliderContent = [
  {
    title: "Admiration",
    content: `Enjoy the endless expanse of the infinity pool and let the water
              carry you as you admire the breathtaking scenery in the morning
              light.`,
  },
  {
    title: "Indulgent Breakfast (7.15 a.m. – 11 a.m.)",
    content: `A symphony of fragrant espresso and creamy cappuccino plus crispy bread from the organic bakery, honey from the beekeeper in Taisten, fluffy waffles, the finest ham, and much more besides. Served on our hotel terrace in summer.`,
  },
  {
    title: "Spa & Wellness",
    content: "Relax and unwind in our world-class spa with breathtaking views.",
  },
  {
    title: "Adventure Trails",
    content: "Discover the stunning landscapes with guided adventure hikes.",
  },
  {
    title: "Fine Dining",
    content: "Savor the best gourmet dishes prepared by top chefs.",
  },
  {
    title: "Luxury Suites",
    content: "Experience the elegance and comfort of our premium suites.",
  },
  {
    title: "Sunset Views",
    content: "Watch mesmerizing sunsets from the best scenic spots.",
  },
  {
    title: "Mountain Biking",
    content: "Thrilling biking trails for every adventure enthusiast.",
  },
  {
    title: "Evening Entertainment",
    content: "Enjoy live music and performances every night.",
  },
  {
    title: "Exclusive Wine Tasting",
    content: "Taste the finest wines from the region.",
  },
];

const Admiration = ({ isSummer }) => {
  const ImagesToShow = isSummer ? summerImages : winterImages;

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, A11y, EffectFade]}
        spaceBetween={20}
        slidesPerView={1}
        effect="fade"
        speed={1200}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // Custom pagination container
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        className="w-full h-screen"
      >
        {ImagesToShow.map((image, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Slider Content */}
              <div className="text-white z-10 bottom-[20%] absolute px-[25px] sm:w-full sm:px-[100px] lg:px-[100px]">
                <h2 className="text-2xl font-bold">
                  {sliderContent[index]?.title || "Title Missing"}
                </h2>
                <p className="text-lg">
                  {sliderContent[index]?.content || "Content missing."}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="absolute bottom-[10%] left-0 w-full flex justify-center items-center px-[25px] sm:px-[100px] lg:px-[100px]">
        <div className="relative flex items-center justify-between w-full mx-auto">
          <div className="absolute top-[50%] translate-y-[-50%] w-full h-[2px] bg-white opacity-70 z-10"></div>

          {/* Bullet Points */}
          <div className="relative custom-pagination flex justify-between items-center w-full z-10"></div>
        </div>
      </div>

      <style>{`
       .custom-bullet {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  background-color: rgba(255, 255, 255); /* Solid white background */
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, background-color 0.3s;
}

.custom-bullet:hover,
.swiper-pagination-bullet-active {
  background-color: white; 
  transform: scale(1.3);
}
.swiper-pagination-bullets {
  bottom: 0 !important; 
}
  

      `}</style>
    </div>
  );
};

export default Admiration;
