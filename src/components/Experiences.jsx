import { useState } from "react";
import Admiration from "./Admiration";

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

  return (
    <div className="bg-[#edece8] ">
      <div className="py-[120px] flex justify-center items-center flex-col">
        <h3 className="text-4xl mb-6">
          A holiday at the Alpen Tesitin – the heights of joy
        </h3>
        <p className="font-semibold">
          Here where majestic peaks touch the sky and nature flourishes in its
          purest form, holiday bliss awaits.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center pb-20 lg:flex-row lg:px-[67px] lg:mx-[84px] lg:h-screen">
        <ul className="w-full md:px-[100px] lg:w-1/2 lg:px-0 lg:pr-[120px]">
          {contentData.map((item) => (
            <li key={item.title} className="text-[#424242]">
              <h3
                className={`font-sofia-pro-re font-semibold cursor-pointer p-2 rounded text-[45px] ${
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
                } lg:leading-7 p-2`}
              >
                {selectedContent.paragraph}
              </p>
              {selectedTitle === item.title && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="mt-2 w-full h-auto object-cover lg:hidden object-right-top"
                />
              )}
            </li>
          ))}
        </ul>
        {/* for lg screens */}
        <div className="hidden w-full lg:block lg:w-1/2 lg:h-full">
          {selectedContent && (
            <img
              src={selectedContent.image}
              alt={selectedContent.title}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
      <div className=" lg:h-screen w-full custom-bottom-gradient custom-bottom-gradient relative">
        <Admiration isSummer={isSummer} />
      </div>
    </div>
  );
};

export default Experiences;
