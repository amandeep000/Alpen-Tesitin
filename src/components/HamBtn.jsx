function HamburgerMenu({ isOpen, setIsOpen, isHeaderSticky }) {
  const handleHamClick = () => {
    console.log("clicked");

    setIsOpen((prev) => !prev);
  };

  return (
    <button
      type="button"
      className={`relative w-10 h-10 flex flex-col justify-center items-center `}
      onClick={handleHamClick}
      aria-label={isOpen ? "Close Menu" : "Open Menu"}
    >
      <span
        className={`absolute w-8 h-0.5 ${
          isHeaderSticky ? "bg-gray-800" : "bg-white"
        } rounded-full transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
        } `}
      ></span>
      <span
        className={`absolute w-8 h-0.5 ${
          isHeaderSticky ? "bg-gray-800" : "bg-white"
        } rounded-full transition-opacity duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`absolute w-8 h-0.5 ${
          isHeaderSticky ? "bg-gray-800" : "bg-white"
        } rounded-full transition-transform duration-300 ${
          isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
        } `}
      ></span>
    </button>
  );
}

export default HamburgerMenu;
