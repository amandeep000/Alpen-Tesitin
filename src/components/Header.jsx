import { useEffect, useState } from "react";
import HamburgerMenu from "./HamBtn";
import SwitchBtn from "./SwitchBtn";
import logo from "../assets/alpentesitin_logo.svg";
import LangSelecter from "./LangSelecter";
import phoneLogo from "../assets/call_24dp_F3F3F3_FILL0_wght400_GRAD0_opsz24.svg";

const Header = ({ isSummer, toggleSeason, isOpen, setIsOpen }) => {
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
  }, []);

  return (
    <div
      className={`relative top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "!bg-white shadow-md pt-2 pb-2" : " pt-[40px] pb-[20px]"
      } max-w-[1440px] mx-auto 2xl:pt-[67px] 2xl:pb-[30px]`}
    >
      {/* sm and ms screens */}
      <div className="flex justify-between items-center px-[25px] md:px-[100px] ">
        <div className="lg:hidden">
          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className="flex items-center lg:hidden">
          <img
            src={logo}
            alt="logo"
            width={140}
            height={140}
            style={{ filter: "invert(100%) brightness(500%)" }}
          />
        </div>
      </div>
      {/* for lg and xl screens */}
      <div className="hidden lg:block w-full">
        <div className="flex justify-between items-center px-[60px] ">
          <div className="flex justify-start items-center gap-8 flex-1">
            <HamburgerMenu />
            <SwitchBtn toggleSeason={toggleSeason} isSummer={isSummer} />
            <LangSelecter options={options} />
          </div>
          <div className="flex justify-center items-center flex-1">
            <img
              src={logo}
              alt="logo"
              width={270}
              height={270}
              style={{ filter: "invert(100%) brightness(500%)" }}
            />
          </div>
          <div className="hidden lg:flex justify-end items-center gap-8 flex-1">
            <img
              src={phoneLogo}
              alt="call logo svg"
              title="+39 0474 950020"
              className="cursor-pointer"
            />
            <button
              className="px-6 py-2 bg-slate-100 hover:bg-slate-300 text-gray-800 rounded-[2px]"
              title="Enquire"
            >
              Enquire
            </button>
            <h3
              className="text-slate-100 hover:text-slate-300 cursor-pointer"
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
