import snowflake from "../assets/snowflake-cold-chilly-frosty-svgrepo-com.svg";
import sunicon from "../assets/sun-2-svgrepo-com.svg";

function SwitchBtn({ isSummer, toggleSeason, isHeaderSticky, isOpen }) {
  const buttonBackgroundClass = isOpen
    ? "bg-[rgba(255,255,255,0.4)]"
    : isHeaderSticky
    ? "bg-[#D24D57]"
    : "bg-[rgba(255,255,255,0.4)]";

  return (
    <button
      type="button"
      className={`relative backdrop-blur-sm box-border ${buttonBackgroundClass} flex justify-center items-center w-16 h-8 rounded-full duration-300`}
      onClick={toggleSeason}
    >
      <span
        className={`absolute left-0 top-0 w-8 h-8 bg-white rounded-full transform transition-transform duration-300 ${
          isSummer ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {isSummer ? (
          <div className="flex items-center justify-center h-full">
            <img src={snowflake} alt="icon" className="w-5 h-5" />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <img src={sunicon} alt="icon" className="w-5 h-5" />
          </div>
        )}
      </span>
    </button>
  );
}

export default SwitchBtn;
