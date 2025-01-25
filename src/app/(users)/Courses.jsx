import React from "react";

//? import components
import Slider from "@/components/Slider";

function Courses() {
  return (
    <div className="bg-gray-200 rounded-md w-full p-4 grid grid-cols-12 ">
      <div className="col-span-4 flex flex-col items-start justify-end">
        <h2 className="text-4xl font-extrabold text-blue-900 leading-relaxed">
          جدید ترین دوره ها
        </h2>
        <p class="text-sm font-extralight text-gray-400 mb-6 md:mb-2 my-1">
          دوره ببین، تمرین کن، برنامه نویس شو
        </p>
        <button
          type="button"
          className="px-5 py-2 rounded-2xl text-white font-bold bg-blue-500 hover:bg-blue-400 transition-all shadow-md shadow-blue-200"
        >
          همه دوره ها
        </button>
      </div>
      <div className="col-span-8">
        <Slider />
      </div>
    </div>
  );
}

export default Courses;
