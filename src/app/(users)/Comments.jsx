import React from "react";

//? import components
import CommentsSlider from "@/components/CommentsSlider";

//? import icons
import { LuMessageCircleDashed } from "react-icons/lu";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

function Comments() {
  return (
    <div className="w-full p-4 grid grid-cols-12 ">
      <div className="col-span-4 flex flex-col items-start justify-start">
        <div className="rounded-3xl duration-300 transition-all flex items-center gap-x-2 mb-2">
          <div className="bg-gradient-to-br from-cyan-400 to-[#6A82FE] p-5 rounded-[40px] duration-300 transition-all flex flex-col justify-between flex-1 gap-y-4 mx-auto">
            <LuMessageCircleDashed className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-4xl font-extrabold text-[#2A2D53] leading-relaxed">
            نظرات دانشجویان
          </h2>
        </div>
        <p className="text-sm font-extralight text-gray-400 mb-6 md:mb-2 my-1 mr-5">
          این ها فقط بخش کوچکی از نظرات دانشجویان هست.
        </p>
        <div className="flex items-center gap-x-4 mt-10 mx-auto">
          <button className="rounded-full p-2 text-black bg-white shadow hover:shadow-xl transition">
            <BiChevronRight className="w-7 h-7" />
          </button>
          <button className="rounded-full p-2 text-black bg-white shadow hover:shadow-xl transition">
            <BiChevronLeft className="w-7 h-7" />
          </button>
        </div>
      </div>
      <div className="col-span-8">
        <CommentsSlider />
      </div>
    </div>
  );
}

export default Comments;
