const Family = () => {
  return (
    <div className="px-[100px] mb-20 flex justify-center items-center flex-col lg:flex-row lg:px-[67px] lg:mx-[44px]">
      <div className="flex flex-col items-start justify-center lg:w-1/2 order-first lg:order-last lg:pl-[45px]">
        <h2 className=" text-[35px] mb-5">Welcome to our place!</h2>
        <p className="font-normal mb-4">“We love making people happy.”</p>
        <p className="mb-4">
          Together with our AT team, we warmly welcome you. Every guest is
          unique to us, and we are committed to making your stay special. As a
          family, and with the support of our dedicated AT team, we want you to
          feel at home with us – surrounded by warmth, care, and genuine
          hospitality. Together, we look forward to creating unforgettable
          moments for you.
        </p>
        <p className="pb-4">Your Feichter family and the AT team</p>
      </div>

      {/* Image Container with Fixed Height */}
      <div className=" h-full flex justify-center items-center overflow-hidden order-last lg:w-1/2  lg:order-first lg:h-full lg:pr-[45px]">
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
