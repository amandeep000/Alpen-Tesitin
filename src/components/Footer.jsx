const Footer = () => {
  return (
    <div className="px-[25px] text-[#424242] font-openSans mt-8 md:px-[100px] w-full flex flex-1 flex-wrap justify-between items-start gap-10 2xl:px-[85px] max-w-[1440px] 2xl:max-w-[1440px] mx-auto">
      <div className="flex justify-center items-start gap-4 flex-col">
        <div className="flex flex-col justify-center items-start gap-2">
          <h3 className="font-semibold ">
            Panorama Wellness Resort Alpen Tesitin
          </h3>
          <p>The Feichter Family</p>
          <p>Unterrainerstraße 22</p>
          <p>39035 Tesido/Monguelfo</p>
          <p>Plan de Corones / Val Pusteria</p>
          <p>Dolomites | South Tyrol | Italy</p>
        </div>
        <div className="flex justify-start items-center gap-3">
          <span className="p-2 border rounded-full bg-gray-300 hover:bg-gray-200 cursor-pointer transition duration-300 ">
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
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </span>
          <span className="p-2 border rounded-full bg-gray-300 hover:bg-gray-200 cursor-pointer transition duration-300 ">
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
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </span>
          <span className="p-2 border rounded-full bg-gray-300 hover:bg-gray-200 cursor-pointer transition duration-300 ">
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
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </span>
          <span className="p-2 border rounded-full bg-gray-300 hover:bg-gray-200 cursor-pointer transition duration-300 ">
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
                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* contact */}
      <div className="flex justify-center items-start flex-col">
        <h3 className="font-semibold mb-3">Contact</h3>
        <p>+39 0474 950020</p>
        <p>info@alpentesitin.it</p>
        <div className="mt-3"></div>
      </div>
      {/* further links */}
      <div>
        <h3 className="font-semibold mb-3 ">Further Links</h3>
        <p className="cursor-pointer text-slate-700 hover:text-slate-600 transition duration-300 font-openSans">
          GuestNet
        </p>
        <p className="cursor-pointer text-slate-700 hover:text-slate-600 transition duration-300 font-openSans">
          Live
        </p>
        <p className="cursor-pointer text-slate-700 hover:text-slate-600 transition duration-300 font-openSans">
          Relax
        </p>
        <p className="cursor-pointer text-slate-700 hover:text-slate-600 transition duration-300 font-openSans">
          Experience
        </p>
        <p className="cursor-pointer text-slate-700 hover:text-slate-600 transition duration-300 font-openSans">
          Info
        </p>
        <p className="cursor-pointer text-slate-700 hover:text-slate-600 transition duration-300 font-openSans">
          Belvita
        </p>
        <p className="cursor-pointer text-slate-700 hover:text-slate-600 transition duration-300 font-openSans">
          Catalogue Request
        </p>
      </div>
      {/* newsletter */}
      <div className="min-w-[272px]">
        <form
          action="#"
          className="flex justify-center items-start flex-col gap-2"
        >
          <label
            htmlFor="newsletter"
            className="text-start w-full font-semibold pb-2"
          >
            Newsletter
          </label>
          <input
            type="email"
            placeholder="Enter email"
            id="newsletter"
            className=" outline-none border-b w-full pb-1 mb-1 bg-transparent"
          />
          <button className=" font-semibold py-1 px-6 cursor-pointer rounded-sm text-[#424242] bg-[#FFE5B4] hover:bg-slate-200 transition duration-300">
            Login
          </button>
        </form>
      </div>
      <div className="my-7 leading-relaxed text-[1rem] font-latoLight mx-auto font-semibold">
        <p>
          Home | Imprint | Privacy | Privacy settings | Site map | © 2025
          Panorama Wellness Resort Alpen Tesitin | VAT no.: IT01622840211
        </p>
      </div>
    </div>
  );
};

export default Footer;
