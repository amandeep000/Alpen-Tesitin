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
            />
            <LangSelecter options={options} isHeaderSticky={isSticky} />
          </div>
          <div className="flex justify-center items-center flex-1">
            <img
              src={isSticky ? HotelLogo : logo}
              alt="logo"
              width={isSticky ? 220 : 400}
              style={{
                filter: isSticky ? "" : "invert(100%) brightness(500%)",
              }}
            />
          </div>
          <div className="hidden lg:flex justify-end items-center gap-8 flex-1">
            <img
              src={phoneLogo}
              alt="call logo svg"
              title="+39 0474 950020"
              width={40}
              height={40}
              className={`cursor-pointer ${
                isSticky ? "filter invert" : "white"
              }`}
            />
            <button
              className={`px-7 py-3 ${
                isSticky ? "bg-[#FFE5B4] text-white" : "bg-white"
              } text-[#424242] text-xl rounded-[2px]`}
              title="Enquire"
            >
              Enquire
            </button>
            <h3
              className={`text-xl ${
                isSticky
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
