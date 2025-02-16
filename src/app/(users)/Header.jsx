"use client";

import React from "react";
import Link from "next/link";

//? import icons
import { CiSearch } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";

//? import library
import Badge from "@mui/material/Badge";

//? import hooks
import { useGetUser } from "@/hooks/useGetUser";

function Header() {
  const { data: user } = useGetUser();
  return (
    <div
      className={`${
        !user && "blur-md"
      } backdrop-blur-sm relative z-20 bg-gray-700 bg-opacity-5 transition duration-700`}
    >
      <div className="container mx-auto p-4 rounded-full">
        <div className="flex flex-row-reverse items-center justify-between">
          <div className="basis-1/4 flex justify-end">
            <Link href="/">
              <img src="/assets/img/logo.svg" alt="logo" />
            </Link>
          </div>
          <form className="basis-1/2 relative">
            <div className="absolute top-1/2 -translate-y-1/2 pr-1 right-0">
              <CiSearch className="w-8 h-8 text-gray-500" />
            </div>
            <input
              type="text"
              className="bg-gray-200 rounded-md p-2 focus:outline-none w-full pr-10 text-gray-500"
              placeholder="جست‌وجو میان هزاران برند و صدها هزار کالا"
            />
          </form>
          <div className="basis-1/4 flex items-center justify-evenly">
            {user ? (
              <button className="px-4 py-2 text-sm rounded-full bg-blue-500 font-bold text-gray-100">
                کاربر: {user?.phoneNumber}
              </button>
            ) : (
              <button className="px-4 py-2 rounded-full text-sm bg-blue-500 font-bold text-gray-100">
                ثبت نام / ورود
              </button>
            )}
            <button type="button">
              <Badge badgeContent={1} color="error">
                <CiShoppingBasket className="w-12 h-12 text-gray-500" />
              </Badge>
            </button>
          </div>
        </div>
        {/* <div>secound navbar</div> */}
      </div>
    </div>
  );
}

export default Header;
