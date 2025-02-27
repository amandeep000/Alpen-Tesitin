import React, { useState } from "react";
import HamburgerMenu from "./HamBtn";
import SwitchBtn from "./SwitchBtn";
import logo from "../assets/alpentesitin_logo.svg";
import LangSelecter from "./LangSelecter";
import phoneLogo from "../assets/call_24dp_F3F3F3_FILL0_wght400_GRAD0_opsz24.svg";

const Header = ({ isSummer, toggleSeason }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const options = [
    { value: "en", label: "English" },
    { value: "nl", label: "Dutch" },
    { value: "it", label: "Italiano" },
  ];
  return (
    <div className=" bg-none  pt-[40px] pb-[20px] max-w-[1817px] mx-auto">
      {/* sm and ms screens */}
      <div className="flex justify-between items-center px-[25px] md:px-[100px] ">
        <div className="lg:hidden">
          <HamburgerMenu />
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
