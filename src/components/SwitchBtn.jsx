import React, { useState } from "react";
import snowflake from "../assets/snowflake-cold-chilly-frosty-svgrepo-com.svg";
import sunicon from "../assets/sun-2-svgrepo-com.svg";

function SwitchBtn({ isSummer, toggleSeason }) {
  return (
    <button
      className={`relative backdrop-blur-sm box-border bg-[rgba(255,255,255,0.6)] flex justify-center items-center w-14 h-7 rounded-full duration-300`} // Adjusted width and height
      onClick={toggleSeason}
    >
      <span
        className={`absolute left-0 top-0 w-7 h-7 bg-white rounded-full transform transition-transform duration-300 ${
          isSummer ? "translate-x-7" : "translate-x-0"
        }`} // Adjusted width and height and translate
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
