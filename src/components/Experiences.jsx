import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Admiration from "./Admiration";
import ScrollReveal from "scrollreveal";

const Experiences = ({ isSummer }) => {
  const summerImages = {
    experience: "/ExperienceSummer/experience.webp",
    carrental: "/ExperienceSummer/carrental.webp",
    vouchers: "/ExperienceSummer/vouchers.webp",
    impressions: "/ExperienceSummer/impressions.webp",
  };

  const winterImages = {
    experience: "/ExperienceWinter/experience.webp",
    carrental: "/ExperienceWinter/carrental.webp",
    vouchers: "/ExperienceWinter/vouchers.webp",
    impressions: "/ExperienceWinter/impressions.webp",
  };

  const ImagesToShow = isSummer ? summerImages : winterImages;

  const contentData = [
    {
      title: "Experience",
      paragraph: `Here with us, the world’s largest ski carousel and the legendary hiking trails of the Dolomites await you alongside solitary paths through snowy nature and thrilling bike routes to flower-filled Alpine meadows.`,
      image: ImagesToShow.experience,
    },
    {
      title: "Car Rental",
      paragraph: `Whether in a Porsche or Lamborghini – with its scenic mountain roads and legendary Dolomites passes, Val Pusteria/Pustertal offers a unique setting for unforgettable driving experiences.`,
      image: ImagesToShow.carrental,
    },
    {
      title: "Vouchers",
      paragraph: `Treat your loved ones to moments that touch the heart in one of the most beautiful places in South Tyrol. The Alpen Tesitin, your hotel in Val Pusteria/Pustertal, awaits!`,
      image: ImagesToShow.vouchers,
    },
    {
      title: "Impressions",
      paragraph: `Click your way through our world of majestic Dolomites peaks and luxurious 5-star amenities – a sense of wonder is guaranteed!`,
      image: ImagesToShow.impressions,
    },
  ];

  const [selectedTitle, setSelectedTitle] = useState(contentData[0].title);

  const handleTitleClicked = (title) => {
    setSelectedTitle(title);
  };

  const selectedContent = contentData.find(
    (item) => item.title === selectedTitle
  );

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".reveal-text", {
      duration: 2000,
      origin: "bottom",
      distance: "50px",
      easing: "ease-in-out",
    });
    sr.reveal(".reveal-headings", {
      duration: 2000,
      origin: "top",
      distance: "50px",
      easing: "ease-in-out",
    });
    sr.reveal(".reveal-image", {
      duration: 2000,
      origin: "right",
      distance: "50px",
      easing: "ease-in-out",
    });
  }, []);

  // Framer Motion scroll-based animation
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="bg-[#edece8]">
      <div className="py-[80px] flex reveal-text justify-center items-center flex-col px-[25px] text-center md:px-[100px] reveal-text">
        <h3 className="text-[2rem] text-[#424242] leading-relaxed lg:text-[36px] mb-6">
          A holiday at the Alpen Tesitin – the heights of joy
        </h3>
        <p className="font-medium text-[15px] font-openSans text-[#424242]">
          Here where majestic peaks touch the sky and nature flourishes in its
          purest form, holiday bliss awaits.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center xl:py-0 mb-[100px] xl:flex-row xl:px-[57px] xl:mx-[84px] xl:h-[695px]">
        <ul className="w-full px-[25px] reveal-headings md:px-[100px] xl:w-1/2 xl:px-0 xl:pr-[120px] text-[#424242]">
          {contentData.map((item) => (
            <li key={item.title} className="text-[#424242]">
              <h3
                className={`font-openSans font-medium cursor-pointer p-2 rounded text-[30px] xl:text-[40px] ${
                  selectedTitle === item.title
                    ? "opacity-100 cursor-default"
                    : "opacity-50"
                } mb-1`}
                onClick={() => handleTitleClicked(item.title)}
              >
                {item.title}
              </h3>
              <p
                className={`${
                  selectedContent.title === item.title ? "block" : "hidden"
                } font-openSans lg:leading-7 p-2 xl:text-[17px]`}
              >
                {selectedContent.paragraph}
                <button className="text-[15px] xl:text-[20px] pt-2 text-[#424242] flex justify-center items-center gap-2 font-semibold font-latoLight group">
                  Read More{" "}
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
              </p>

              {selectedTitle === item.title && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="mt-2 w-full h-auto object-cover xl:hidden object-right-top rounded-md"
                />
              )}
            </li>
          ))}
        </ul>
        {/* for lg screens */}
        <div className="hidden w-full xl:block xl:w-1/2 xl:h-full xl:py-2 reveal-image">
          {selectedContent && (
            <img
              src={selectedContent.image}
              alt={selectedContent.title}
              className="h-full w-full object-center object-cover rounded-md"
            />
          )}
        </div>
      </div>
      <div
        style={{ y: parallaxY }}
        className="absolute inset-0 w-full h-screen bg-cover bg-center"
      >
        <img
          src={
            isSummer ? "/ExperienceSummer/bg.webp" : "/ExperienceWinter/bg.webp"
          }
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative lg:h-screen w-full custom-bottom-gradient">
        <Admiration isSummer={isSummer} />
      </div>
    </div>
  );
};

export default Experiences;
