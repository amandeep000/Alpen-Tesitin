function HamburgerMenu({ isOpen, setIsOpen, isHeaderSticky }) {
  const handleHamClick = () => {
    setIsOpen((prev) => !prev);
  };
  const spacing = 6;
  return (
    <button
      type="button"
      className={`relative w-10 h-10 flex flex-col justify-center items-center `}
      onClick={handleHamClick}
      aria-label={isOpen ? "Close Menu" : "Open Menu"}
    >
      <span
        className={`absolute w-12 h-1 ${
          isOpen ? "bg-white" : isHeaderSticky ? "bg-[#666666]" : "bg-white"
        } rounded-full transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-0" : "-translate-y-3"
        } `}
      ></span>
      <span
        className={`absolute w-12 h-1  ${
          isOpen ? "bg-white" : isHeaderSticky ? "bg-[#666666]" : "bg-white"
        } rounded-full transition-opacity duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`absolute w-12 h-1 ${
          isOpen ? "bg-white" : isHeaderSticky ? "bg-[#666666]" : "bg-white"
        } rounded-full transition-transform duration-300 ${
          isOpen ? "-rotate-45 translate-y-0" : "translate-y-3"
        } `}
      ></span>
    </button>
  );
}

export default HamburgerMenu;
