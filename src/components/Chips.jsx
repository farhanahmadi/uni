import React from "react";

//? import mui
import Tooltip from "@mui/material/Tooltip";

function Chips({ icon, text, tooltip }) {
  return (
    <div
      className="hover:bg-white hover:shadow-lg hover:shadow-gray-300/50 cursor-pointer rounded-2xl flex flex-col 
      items-center justify-center col-span-5 sm:col-span-3 md:col-span-2 
      false scale-100 hover:scale-110 transition-all duration-300"
    >
      <Tooltip title={tooltip} className="font-sans">
        <div className="p-3 rounded-3xl duration-300 transition-all flex flex-col justify-between flex-1 gap-y-4">
          <div className="bg-gradient-to-br from-cyan-400 to-[#6A82FE] p-5 rounded-[40px] duration-300 transition-all flex flex-col justify-between flex-1 gap-y-4 mx-auto">
            {icon}
          </div>
          <p className="font-medium mt-2 text-sm">{text}</p>
        </div>
      </Tooltip>
    </div>
  );
}

export default Chips;
