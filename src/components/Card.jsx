import React from "react";
import Link from "next/link";

//? import icons
import { IoMdHeartEmpty } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { CiClock1 } from "react-icons/ci";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";

function Card() {
  return (
    <div className="mt-12 max-w-xs">
      <div className="bg-white shadow-sm shadow-secondary-100/40 rounded-xl relative p-3 flex flex-col h-full hover:shadow-lg hover:shadow-secondary-100/40 transition-all duration-300 ease-in-out">
        <div className="-mt-14 mb-6">
          <div className="relative shadow-xl rounded-xl shadow-secondary-100/50">
            <Link href="/">
              <div className="aspect-w-13 aspect-h-9">
                <img
                  alt="دوره شروع و کسب درآمد از برنامه نویسی"
                  src="/assets/img/typescript.svg"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover object-center h-full w-full rounded-xl"
                  loading="lazy"
                  style={{
                    position: "absolute",
                    height: " 100%",
                    width: "100%",
                    inset: "0px",
                    color: "transparent",
                  }}
                />
              </div>
            </Link>
            <button className="group absolute top-3 right-2 flex items-center justify-between bg-white/80 py-1 px-2 rounded-md drop-shadow-md gap-x-1 hover:bg-red-500 transition">
              <IoMdHeartEmpty className="w-4 h-4 text-red-600 group-hover:text-white" />
              <p className="text-xs text-red-600 font-medium group-hover:text-white">
                ۳۲۵
              </p>
            </button>
            <button
              disabled
              className="absolute top-3 left-2 flex items-center justify-between bg-white/80 py-1 px-2 rounded-md drop-shadow-md gap-x-1"
            >
              <LuUsers className="w-4 h-4 text-gray-600" />
              <p className="text-xs text-gray-600 font-medium">۳۲۵</p>
            </button>
          </div>
        </div>
        <div>
          <Link href="/">
            <h1 className="text-xl text-blue-900 hover:text-blue-600 transition font-extrabold mb-3">
              دوره پیشرفته و پروژه محور تایپ اسکریپت
            </h1>
          </Link>
          <div className="flex gap-x-6 items-center mb-3">
            <div className="flex items-center gap-x-1 text-gray-500 text-xs">
              <CiClock1 className="w-5 h-5" />
              <p>۰۸:۲۵:۰۰</p>
            </div>
            <div className="flex items-center gap-x-1 text-green-500 text-xs">
              <MdOutlineKeyboardVoice className="w-5 h-5" />
              <p>تکمیل شده</p>
            </div>
          </div>
          <div className="text-blue-500 cursor-pointer hover:text-blue-700 transition-all duration-300">
            <Link
              href="/"
              className="flex items-center gap-x-2 text-sm font-bold"
            >
              <span>مشاهده اطلاعات دوره</span>
              <IoIosArrowRoundBack className="w-5 h-5 text" />
            </Link>
          </div>
          <hr className="my-3" />
          <div className="flex items-center justify-between">
            <div>
              <button className="px-4 py-2 rounded-2xl text-white font-bold bg-blue-600 hover:bg-blue-500 transition-all shadow-md shadow-blue-300 text-base">
                ثبت نام در دوره
              </button>
            </div>
            <div>
              <div className="flex items-center gap-x-2 mb-1">
                <span className="text-gray-400 text-sm line-through">
                  ۱,۷۹۸,۰۰۰
                </span>
                <span className="bg-rose-500 rounded-full py-0.5 px-2 text-white text-xs flex justify-center items-center">
                  ۴۰%
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700 font-extrabold ml-2 md:text-xl">
                  ۱,۰۷۹,۰۰۰
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="27"
                  className="text-gray-500 w-5 h-5"
                  data-name="Layer 2"
                  viewBox="0 0 51.29 27.19"
                >
                  <path
                    fill="currentcolor"
                    d="M36.48 22.85q2.67-1.245 3.45-2.94h-1.65c-2.53 0-4.69-.66-6.47-1.97-.59.68-1.23 1.2-1.93 1.55s-1.54.53-2.5.53c-1.03 0-1.87-.18-2.51-.53-.65-.35-1.14-.96-1.5-1.83-.35-.87-.56-2.08-.63-3.62-.02-.28-.04-.6-.04-.97s-.01-.72-.04-1.07c-.14-3.42-.28-6.26-.42-8.51l-5.8 1.37c.73 1.64 1.34 3.34 1.83 5.08.49 1.75.74 3.58.74 5.5 0 1.6-.37 3.12-1.11 4.57-.74 1.46-1.85 2.64-3.32 3.57-1.48.93-3.27 1.39-5.38 1.39s-3.82-.45-5.21-1.34C2.61 22.74 1.6 21.6.96 20.22c-.63-1.38-.95-2.84-.95-4.36 0-1.2.13-2.28.4-3.25s.63-1.93 1.07-2.87l2.39 1.34c-.38.92-.65 1.71-.83 2.39s-.26 1.48-.26 2.39c0 1.76.49 3.19 1.48 4.29s2.63 1.65 4.92 1.65c1.55 0 2.87-.32 3.96-.95q1.635-.945 2.43-2.43c.53-.98.79-1.98.79-2.99 0-2.65-.82-5.82-2.46-9.5l1.69-3.52L22.38.79c.16-.05.39-.07.67-.07.54 0 .98.19 1.32.56s.53.88.58 1.51q.21 3.06.39 8.94c.02.38.04.75.04 1.13s.01.71.04 1.02c.05 1.03.22 1.78.53 2.25s.81.7 1.51.7c.84 0 1.52-.18 2.04-.53s.97-1 1.37-1.93q1.125-2.565 1.74-3.75c.41-.79.94-1.46 1.58-2.04.64-.57 1.44-.86 2.37-.86 1.83 0 3.27.94 4.31 2.83s1.69 4.06 1.95 6.53c1.57-.02 2.77-.13 3.61-.33.83-.2 1.41-.49 1.72-.88.32-.39.47-.89.47-1.5 0-.75-.16-1.67-.49-2.76s-.69-2.1-1.09-3.04l2.43-1.23c1.22 3.1 1.83 5.44 1.83 7.04 0 1.83-.67 3.18-2 4.04-1.34.87-3.53 1.34-6.58 1.41-.49 2.21-1.8 3.93-3.92 5.19-2.12 1.25-4.68 1.98-7.69 2.16l-1.2-2.88c2.6-.14 4.8-.63 6.58-1.46ZM10.38 5.66l.11 3.31-3.2.28-.46-3.31zm25.1 10.83c.88.28 1.81.42 2.8.42h1.93c-.16-1.67-.55-3.08-1.16-4.26-.61-1.17-1.38-1.76-2.32-1.76-.75 0-1.42.45-2.02 1.34s-1.11 1.92-1.53 3.1c.66.49 1.42.88 2.3 1.16M43.64.21C45.06.07 46.43 0 47.74 0c.96 0 1.67.02 2.11.07l-.21 2.81c-.42-.05-1.08-.07-1.97-.07-1.2 0-2.44.07-3.73.21s-2.44.32-3.45.53L39.86.81q1.65-.39 3.78-.6"
                    data-name="Layer 1"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
