import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";

const Wellness = ({ isSummer }) => {
  const summerImages = {
    Wellness: "/WellnessSunner/wellness.webp",
    architecture: "/WellnessSunner/architecture.webp",
    cuisine: "/WellnessSunner/cuisine.webp",
    panoramic: "/WellnessSunner/panaromic.webp",
  };
  const winterImages = {
    Wellness: "/WellnessWinter/wellness.webp",
    architecture: "/WellnessWinter/architecture.webp",
    cuisine: "/WellnessWinter/cuisine.webp",
    panoramic: "/WellnessWinter/panoramic.webp",
  };
  const ImagesToShow = isSummer ? summerImages : winterImages;
  const contentData = [
    {
      title: "Wellness",
      paragraph: `A world of and soothing saunas, with beauty area, hair salon, and gym, awaits you at our hotel in Welsberg, Taisten.`,
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
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".reveal-headings", {
      duration: 2000,
      origin: "bottom",
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

  return (
    <div className="flex flex-col justify-center items-center px-[25px] md:px-[100px] xl:flex-row lg:[100px] xl:px-[67px] xl:mx-[84px] xl:h-screen text-[#424242]">
      <ul className="w-full  xl:w-1/2 xl:px-0 xl:pr-[120px] ">
        {contentData.map((item) => (
          <li key={item.title} className="text-[#424242] reveal-headings">
            <h3
              className={`font-openSans font-semibold cursor-pointer p-2 rounded text-[30px] ${
                selectedTitle === item.title
                  ? "opacity-100 cursor-default"
                  : "opacity-50"
              } mb-1 xl:text-[40px]`}
              onClick={() => handleTitleClicked(item.title)}
            >
              {item.title}
            </h3>
            <p
              className={`${
                selectedContent.title === item.title ? "block" : "hidden"
              } xl:leading-7 p-2 font-openSans`}
            >
              {selectedContent.paragraph}
            </p>
            {selectedTitle === item.title && (
              <img
                src={item.image}
                alt={item.title}
                className="mt-2 w-full h-auto object-cover xl:hidden rounded-sm"
              />
            )}
          </li>
        ))}
      </ul>
      {/* for lg screens */}
      <div className="hidden w-full xl:block xl:w-1/2 xl:h-full reveal-image py-9 rounded-md">
        {selectedContent && (
          <img
            src={selectedContent.image}
            alt={selectedContent.title}
            className="h-full w-full object-cover rounded-md"
          />
        )}
      </div>
    </div>
  );
};

export default Wellness;
