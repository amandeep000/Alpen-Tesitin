import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
const Family = () => {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".reveal-image", {
      duration: 2000,
      origin: "left",
      distance: "50px",
      easing: "ease-in-out",
    });
    sr.reveal(".reveal-text", {
      duration: 2000,
      origin: "right",
      distance: "50px",
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="px-[25px] md:px-[100px] mb-20 flex justify-center items-center flex-col xl:flex-row xl:px-[67px] xl:mx-[44px]">
      <div className="flex flex-col reveal-text items-start justify-center text-[#424242] xl:w-1/2 order-first xl:order-last xl:pl-[45px]">
        <h2 className="font-openSans text-[32px] mb-5 md:text-[36px]">
          Welcome to our place!
        </h2>
        <p className="font-normal bg-yellow-100 rounded-md font-mono mb-4">
          “We love making people happy.”
        </p>
        <p className="mb-4 font-openSans text-[#424242] font-light">
          Together with our AT team, we warmly welcome you. Every guest is
          unique to us, and we are committed to making your stay special. As a
          family, and with the support of our dedicated AT team, we want you to
          feel at home with us – surrounded by warmth, care, and genuine
          hospitality. Together, we look forward to creating unforgettable
          moments for you.
        </p>
        <p className="font-medium font-openSans bg-yellow-100 rounded-md">
          &quot;Your Feichter family and the AT team&quot;
        </p>
      </div>

      {/* Image Container with Fixed Height */}
      <div className="mt-4 h-full flex reveal-image justify-center items-center overflow-hidden order-last xl:w-1/2 rounded-md  xl:order-first xl:h-full xl:pr-[45px]">
        <img
          src="/public/fetcher.webp"
          alt="fetcher family"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Family;
