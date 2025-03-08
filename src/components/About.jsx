import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const About = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal-text", {
      duration: 2000,
      origin: "bottom",
      distance: "40px",
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <div className="lg:max-w-[78rem] mx-auto px-[25px] md:px-[100px] pt-[100px] lg:mb-32 reveal-text">
      <div className="flex justify-center items-center mt-8 mb-8 flex-col gap-6 text-center">
        <h2 className="reveal-text text-center text-[32px] font-openSans leading-1.25 sm:text[35px] text-[#424242] mx-4 leading-tight lg:text-[37px] lg:px-[67px]">
          Alpen Tesitin – your dream 5-star hotel in Val Pusteria/Pustertal
        </h2>
        <p className="reveal-text text-center text-[15px] leading-[1.7] font-openSans font-normal text-gray-700 lg:text-[17px] lg:px-[67px] lg:mx-0">
          Our{" "}
          <strong className="text-gray-950">
            hotel in Val Pusteria/Pustertal
          </strong>
          , the Alpen Tesitin, is an insider tip if {`you're`} looking for
          something that bit special. For rest and comfort. For wellness and
          experiences in South Tyrol. Right before your eyes tower the
          awe-inspiring peaks of the Dolomites that dominate the view and whisk
          you away into a world of unrivalled beauty. Trees, open space,
          mountains, and sunshine outside. A harmonious feel-good ambience and
          luxurious comfort inside. Plus a close-knit team that intuitively
          grants your every wish. And a holiday that will stay in your heart
          forever.
        </p>
      </div>
    </div>
  );
};

export default About;
