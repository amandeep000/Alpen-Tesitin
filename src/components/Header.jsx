import { useEffect, useState } from "react";
import HamburgerMenu from "./HamBtn";
import SwitchBtn from "./SwitchBtn";
import logo from "/alpentesitin_logo.svg";
import LangSelecter from "./LangSelecter";
import phoneLogo from "../assets/call_24dp_F3F3F3_FILL0_wght400_GRAD0_opsz24.svg";
import HotelLogo from "../assets/AlpineLogo.svg";

const Header = ({
  isSummer,
  toggleSeason,
  isOpen,
  setIsOpen,
  color,
  headerPadding,
  borderBottom,
  bgColor = "transparent",
}) => {
  const [isSticky, setIsSticky] = useState(false);

  const options = [
    { value: "en", label: "English" },
    { value: "nl", label: "Dutch" },
    { value: "it", label: "Italiano" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky ? `border-b border-gray-200 pt-2 pb-2` : `${headerPadding}`
      } w-full mx-auto 3xl:px-[67px] 3xl:pb-[30px] ${borderBottom}`}
      style={{
        backgroundColor: isOpen
          ? `${bgColor}`
          : isSticky
          ? color || "white"
          : `${bgColor}`,
      }}
    >
      {/* sm and ms screens */}
      <div className="flex justify-between items-center px-[25px] md:px-[100px] ">
        <div className="lg:hidden">
          <HamburgerMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isHeaderSticky={isSticky}
          />
        </div>
        <div className="flex items-center lg:hidden">
          <img
            src={logo}
            alt="logo"
            width={190}
            height={190}
            style={{
              filter: `invert(100%) brightness(500%)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
      {/* for lg and xl screens */}
      <div className="hidden lg:block w-full max-w-[1920px] mx-auto">
        <div className="flex justify-between items-center px-[60px] ">
          <div className="flex justify-start items-center gap-8 flex-1">
            <HamburgerMenu
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              isHeaderSticky={isSticky}
            />
            <SwitchBtn
              toggleSeason={toggleSeason}
              isSummer={isSummer}
              isHeaderSticky={isSticky}
              isOpen={isOpen}
            />
            <LangSelecter
              options={options}
              isHeaderSticky={isSticky}
              isOpen={isOpen}
            />
          </div>
          <div className="flex justify-center items-center flex-1">
            <img
              src={isSticky ? HotelLogo : logo}
              alt="logo"
              width={isSticky ? 220 : 400}
              style={{
                filter: isOpen
                  ? "invert(100%) brightness(500%)"
                  : isSticky
                  ? ""
                  : "invert(100%) brightness(500%)",
              }}
            />
          </div>
          <div className="hidden lg:flex justify-end items-center gap-8 flex-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isOpen ? "#ffff" : isSticky ? "#424242" : "#ffff"}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={isOpen ? "#ffff" : isSticky ? "#424242" : "#ffff"}
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </span>
            <button
              className={`px-7 py-3 ${
                isOpen
                  ? "bg-white"
                  : isSticky
                  ? "bg-[#D24D57] text-white"
                  : "bg-white"
              } text-[#424242] text-xl rounded-[2px]`}
              title="Enquire"
            >
              Enquire
            </button>
            <h3
              className={`text-xl ${
                isOpen
                  ? "text-white hover:text-slate-100"
                  : isSticky
                  ? "text-[#424242] hover:text-gray-600"
                  : "text-white hover:text-slate-100"
              }  cursor-pointer `}
              title="Book"
            >
              Book
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
