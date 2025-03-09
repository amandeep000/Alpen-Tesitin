import { useEffect, useState } from "react";
import phonelogo from "../assets/call_24dp_F3F3F3_FILL0_wght400_GRAD0_opsz24.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";
import Header from "./Header";

const ResponsiveNav = ({ isOpen, setIsOpen, isSummer, toggleSeason }) => {
  const ContentData = [
    {
      title: "Live",
      details: [
        "Rooms & suites",
        "Rates",
        "Offers",
        "For spontaneous travellers",
        "Inclusive services",
      ],
    },
    {
      title: "Relax",
      details: ["Pool world", "Sauna world", "Treatments", "Hair salon", "Gym"],
    },
    {
      title: "Experience",
      details: [
        "Cuisine",
        "Summer adventures",
        "Winter adventures",
        "Luxury cabriolet rental",
        "Magic moments",
      ],
    },
    {
      title: "Info",
      details: [
        "Photos & videos",
        "Useful information",
        "Car rental",
        "Gift vouchers",
        "Getting here",
      ],
    },
  ];

  const [selectedTitle, setSelectedTitle] = useState(null);

  const handleToggle = (title) => {
    if (selectedTitle === title) {
      setSelectedTitle(null);
    } else {
      setSelectedTitle(title);
    }
  };

  useEffect(() => {
    setSelectedTitle("Live");
  }, []);

  const slides = [
    { id: 1, text: "Google", image: "/nav-1.webp" },
    { id: 2, text: "Facebook", image: "/nav-2.webp" },
    { id: 3, text: "Twitter", image: "/nav-3.webp" },
    { id: 4, text: "LinkedIn", image: "/nav-4.webp" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <div
      style={{
        backgroundImage: `url('/navbgimage.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`h-screen inset-0 w-screen fixed top-0 left-0 transition-all duration-500 z-50 ease-in-out ${
        isOpen ? "opacity-100 translate-y-0" : `opacity-0 -translate-y-full`
      } overflow-hidden`}
    >
      <div className="overflow-y-scroll h-full lg:overflow-hidden">
        {/* Navbar */}
        <div className="fixed w-full bg-transparent top-0 left-0 z-50  ">
          <Header
            isSummer={isSummer}
            toggleSeason={toggleSeason}
            color={"white"}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            headerPadding={"py-[14px]"}
            borderBottom={"border-b border-white/50"}
            bgColor="#748b9c"
          />
        </div>

        {/* Content */}
        <div className=" relative px-6 md:px-[100px] top-24 mb-[8rem] lg:flex justify-evenly lg:top-[12rem] lg:px-0 lg:flex-1 ">
          {ContentData.map((item) => (
            <div key={item.title} className="mb-4">
              {/* Title */}
              <h3
                className=" font-semibold text-white cursor-pointer text-4xl lg:mb-7 hover:text-gray-300 transition"
                onClick={() => handleToggle(item.title)}
              >
                {item.title}
              </h3>

              {/* Details (conditionally shown) */}
              {(selectedTitle === item.title || window.innerWidth >= 1024) && (
                <div className="mt-2 space-y-1 font-latoLight ">
                  {item.details.map((detail, index) => (
                    <p
                      key={index}
                      className="text-white hover:text-gray-300 transition text-[20px] mb-[6px] font-semibold"
                    >
                      <a href="#">{detail}</a>
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* contact section */}
        <div className="lg:hidden mb-14 px-6 md:px-[100px]">
          <div className="flex justify-start items-center gap-8">
            <img
              src={phonelogo}
              height={30}
              width={30}
              alt="call logo svg"
              title="+39 0474 950020"
              className="cursor-pointer order-3"
            />
            <button
              className="px-6 py-2 bg-slate-100 hover:bg-slate-300 text-gray-800 rounded-[2px] order-1"
              title="Enquire"
            >
              Enquire
            </button>
            <p className="order-2 text-white text-2xl font-semibold cursor-pointer">
              Book
            </p>
          </div>
        </div>
        {/* slider for sm and md screens */}
        <div className="pb-10 lg:hidden flex justify-center">
          <Swiper
            modules={[FreeMode]}
            slidesPerView={1.3}
            spaceBetween={20}
            freeMode={true}
            className="w-full mr-8"
            breakpoints={{
              768: { slidesPerView: 3.1 },
              1024: { slidesPerView: 2.9 },
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="flex justify-center">
                <a
                  href={slide.url}
                  target="_blank"
                  rel="#"
                  className=" w-full sm:h-[15rem] md:h-[132px] lg:h-full flex items-center justify-center text-xl font-bold rounded-lg mx-6 md:mx-[100px] bg-slate-500"
                >
                  <img
                    src={slide.image}
                    alt={slides.text}
                    className="object-cover object-center"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNav;
