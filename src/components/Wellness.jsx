import { useState } from "react";

const Wellness = ({ isSummer }) => {
  const summerImages = {
    Wellness: "/public/WellnessSunner/wellness.webp",
    architecture: "/public/WellnessSunner/architecture.webp",
    cuisine: "/public/WellnessSunner/cuisine.webp",
    panoramic: "/public/WellnessSunner/panaromic.webp",
  };
  const winterImages = {
    Wellness: "/public/WellnessWinter/wellness.webp",
    architecture: "/public/WellnessWinter/architecture.webp",
    cuisine: "/public/WellnessWinter/cuisine.webp",
    panoramic: "/public/WellnessWinter/panoramic.webp",
  };
  const ImagesToShow = isSummer ? summerImages : winterImages;
  const contentData = [
    {
      title: "Wellness",
      paragraph: `A world of spacious pools and soothing saunas, with beauty area, hair salon, and gym, awaits you at our hotel in Welsberg, Taisten.`,
      image: ImagesToShow.Wellness,
    },
    {
      title: "Architecture",
      paragraph: `Experience Alpine flair with a new twist: Styled with floor-to-ceiling glazing and a contemporary design, the Alpen Tesitin offers luxurious comfort in an ultramodern ambience.`,
      image: ImagesToShow.architecture,
    },
    {
      title: "Cuisine",
      paragraph: `At our hotel in Val Pusteria/Pustertal, cuisine is transformed into an authentic experience. Because we’re passionate about showing you the unique variety of South Tyrolean cuisine.`,
      image: ImagesToShow.cuisine,
    },
    {
      title: "Panoramic Location",
      paragraph: `Above Taisten, one of South Tyrol’s “sun villages”, amidst unspoilt meadows and dense forests, the Alpen Tesitin enjoys unrestricted views of the Dolomites UNESCO World Heritage.`,
      image: ImagesToShow.panoramic,
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
    <div className="flex flex-col justify-center items-center px-4 lg:flex-row lg:px-[67px] lg:mx-[84px] lg:h-screen">
      <ul className="w-full md:px-[100px] lg:w-1/2 lg:px-0 lg:pr-[120px] ">
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
                className="mt-2 w-full h-auto object-cover lg:hidden"
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
  );
};

export default Wellness;
