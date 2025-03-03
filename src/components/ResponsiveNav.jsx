import { useEffect, useState } from "react";
import HamBtn from "./HamBtn";
import LangSelecter from "./LangSelecter";
import SwitchBtn from "./SwitchBtn";
import phonelogo from "../assets/call_24dp_F3F3F3_FILL0_wght400_GRAD0_opsz24.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";

const ResponsiveNav = ({ isOpen }) => {
  const options = [
    { value: "en", label: "English" },
    { value: "nl", label: "Dutch" },
    { value: "it", label: "Italiano" },
  ];

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
    { id: 1, text: "Google", url: "https://www.google.com" },
    { id: 2, text: "Facebook", url: "https://www.facebook.com" },
    { id: 3, text: "Twitter", url: "https://www.twitter.com" },
    { id: 4, text: "LinkedIn", url: "https://www.linkedin.com" },
  ];
  return (
    <div
      style={{
        backgroundImage: `url('/navbg.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen w-screen bg-slate-400 relative"
    >
      {/* Navbar */}
      <div className="w-full bg-transparent py-[10px] border-b border-white/50 z-50 mb-4">
        <div className="flex justify-between items-center px-[25px]">
          <HamBtn isOpen={isOpen} />
          <LangSelecter options={options} />
          <SwitchBtn />
        </div>
      </div>

      {/* Content */}
      <div className="px-[25px]">
        {ContentData.map((item) => (
          <div key={item.title} className="mb-4">
            {/* Title */}
            <h3
              className="text-2xl font-semibold text-white cursor-pointer hover:text-gray-300 transition"
              onClick={() => handleToggle(item.title)}
            >
              {item.title}
            </h3>

            {/* Details (conditionally shown) */}
            {selectedTitle === item.title && (
              <div className="mt-2 space-y-1">
                {item.details.map((detail, index) => (
                  <p
                    key={index}
                    className="text-white hover:text-gray-300 transition text-[17px] font-semibold"
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
      <div className="lg:hidden px-[25px]">
        <div className="flex justify-start items-center gap-8 mb-7">
          <img
            src={phonelogo}
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
          <p className="order-2">Book</p>
        </div>
      </div>
      {/* slider for sm and md screens */}
      <div className="pb-10">
        <Swiper
          modules={[FreeMode]}
          slidesPerView={1.3}
          spaceBetween={20}
          freeMode={true}
          freeModeMomentum={true}
          freeModeMomentumRatio={10}
          className="w-screen "
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <a
                href={slide.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" w-full h-[15rem]  flex items-center justify-center text-xl font-bold rounded-lg mx-[25px] bg-slate-500"
              >
                {slide.text}
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ResponsiveNav;
