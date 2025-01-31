import React from "react";

//? import icons
import { BiLike } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";

//? import mui
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";

function Comment() {
  return (
    <div className="bg-white shadow-[0px_3px_30px_rgba(100,100,100,0.17)] p-4 lg:p-5 rounded-2xl max-w-[365px]">
      <div className="flex items-center gap-x-1 mb-5">
        <BiLike className="w-5 h-5 text-green-500" />
        <h5 className="text-base text-green-500">پیشنهاد میکنم</h5>
      </div>
      <div>
        <h1 className="text-base font-extrabold text-[#2A2D53] mb-2">
          دوره بسیار عالی و کابردی بود
        </h1>
        <p class="text-sm leading-7 text-gray-600 lg:leading-7 mb-4">
          سلام ممنونم بابت دوره خوبت مفید و مختصر توضیح دادی کاربردی هستش
        </p>
        <div className="flex flex-col gap-y-1 mb-2">
          <div className="flex items-center">
            <IoIosAdd className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-500 font-medium">مفید</span>
          </div>
          <div className="flex items-center">
            <IoIosAdd className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-500 font-medium">مختصر</span>
          </div>
          <div className="flex items-center">
            <IoIosAdd className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-500 font-medium">کاربردی</span>
          </div>
          <div className="flex items-center">
            <IoIosAdd className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-500 font-medium">ساده</span>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <IoIosRemove className="w-5 h-5 text-red-500" />
            <span className="text-sm text-gray-500 font-medium">ندارد</span>
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <div className="flex-1 flex gap-x-4">
            <Avatar
              alt="Cindy Baker"
              src="/assets/img/avatar2.jpg"
              sx={{ width: 36, height: 36 }}
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-x-2">
                <h5 className="text-xs text-[#2A2D53] font-extrabold">
                  مصطفی حاتمی
                </h5>
                <span className="text-xs text-gray-500">(۱۴۰۳/۰۵/۱۲)</span>
              </div>
              <p className="text-gray-500 text-xs">
                دانشجو دوره پروژه محور فلکس گرید
              </p>
            </div>
          </div>
          <div>
            <Rating name="read-only" value={3} readOnly size="small" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
