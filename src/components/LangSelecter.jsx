import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const LangSelecter = ({ options, isHeaderSticky }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className="relative w-24 cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`flex justify-center items-center ${
          isHeaderSticky ? "text-gray-800" : "text-white"
        } gap-2`}
      >
        <span>{selectedOption.label}</span>
        <ChevronDownIcon
          className={`w-5 h-5 transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div
          className={`absolute left-0 mt-2 w-full ${
            isHeaderSticky ? "text-gray-800" : "text-white"
          }`}
        >
          {options.map((Option) => (
            <div
              key={Option.value}
              onClick={() => selectOption(Option)}
              className="py-2 px-4 cursor-pointer hover:bg-gray-600 rounded-md"
            >
              {Option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSelecter;
