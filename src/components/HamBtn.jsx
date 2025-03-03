import React, { useState } from "react";

function HamburgerMenu({ isOpen, setIsOpen }) {
  return (
    <button
      className={`relative w-10 h-10 flex flex-col justify-center items-center `}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={`absolute w-8 h-0.5 bg-white rounded-full transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
        } `}
      ></span>
      <span
        className={`absolute w-8 h-0.5 bg-white rounded-full transition-opacity duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`absolute w-8 h-0.5 bg-white rounded-full transition-transform duration-300 ${
          isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
        } s`}
      ></span>
    </button>
  );
}

export default HamburgerMenu;
