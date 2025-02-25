"use client";

import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Link from "next/link";

//? import icons
import { CiTrash } from "react-icons/ci";

//? import hooks
import { useGetUser } from "@/hooks/useGetUser";

//? import service
import { submitOrder, deleteOrder } from "@/services/usersServices";

//? import components
import Loading from "@/common/Loading";

function page() {
  const queryClient = useQueryClient();

  const { data: user, isPending } = useGetUser();

  const {
    data: orderpdateData,
    isPending: orderpdatePending,
    mutateAsync: mutateSubmitOrder,
  } = useMutation({ mutationFn: submitOrder });

  const {
    data: deleteOneOrder,
    isPending: deleteOneOrderPending,
    mutateAsync: mutateDeleteOrder,
  } = useMutation({ mutationFn: deleteOrder });

  function calculateTotalPrice(items) {
    return items.reduce((total, item) => {
      const price = Number(item?.price); // تبدیل به عدد
      if (!isNaN(price)) {
        // بررسی معتبر بودن عدد
        return total + price;
      }
      return total;
    }, 0);
  }

  function calculateTotalPriceWithDiscount(items) {
    return items.reduce((total, item) => {
      const price = Number(
        Number(item?.price) - Number(item?.price) * Number(`.${item?.discount}`)
      ); // تبدیل به عدد
      if (!isNaN(price)) {
        // بررسی معتبر بودن عدد
        return total + price;
      }
      return total;
    }, 0);
  }

  const cartHandler = async () => {
    if (user) {
      try {
        const { message } = await mutateSubmitOrder({
          newOrder: user?.purchased,
          oldOrder: user?.cart,
        });
        queryClient.invalidateQueries({ queryKey: ["get-user"] });
        toast.success(message);
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const removeHandler = async (item) => {
    if (user) {
      try {
        const { message } = await mutateDeleteOrder(item);
        queryClient.invalidateQueries({ queryKey: ["get-user"] });
        toast.success(message);
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  if (isPending) {
    return (
      <div className="h-[calc(100vh-630px)] w-full flex items-center justify-center">
        <Loading white={false} size={50} />
      </div>
    );
  }
  if (user.purchased.length === 0) {
    return (
      <div className="h-[calc(100vh-630px)] w-full flex flex-col items-center justify-center">
        <img src="/assets/img/emptyCart.svg" />
        <h1 className="text-xl mt-2 font-medium text-gray-700">
          سبد خرید شما خالی است !{" "}
        </h1>
        <Link href="/">
          <button className="rounded-3xl bg-blue-500 text-white font-bold py-2 px-4 mt-4 hover:bg-blue-700 transition-all hover:scale-105 duration-500">
            بازگشت به صفحه اصلی
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container md:max-w-screen-xl lg:max-w-screen-2xl mx-auto mt-12 md:mt-16 grid grid-cols-12 gap-x-4">
      <div className="lg:col-span-9 col-span-12 flex flex-col gap-y-2">
        {user?.purchased.map((item) => (
          <div
            key={item?.id}
            className="bg-white p-4 shadow shadow-gray-200 rounded-xl col-span-12 sm:col-span-8 flex items-center justify-between"
          >
            <div className="relative w-16 h-16 lg:w-28 lg:h-28 ml-2 sm:ml-3 flex-shrink-0">
              <img
                alt={item?.name}
                src={item?.img}
                decoding="async"
                data-nimg="fill"
                className="object-cover object-center rounded-xl"
                loading="lazy"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <div className="flex-1">
              <a
                className="font-black text-gray-700 text-sm md:text-2xl hover:text-blue-600 transition-all duration-200 mb-3 block"
                href="/courses/advanced-javascript"
              >
                {item?.name}
              </a>
              <div className="flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-gray-600"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6 10.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L18 14l1.47 2.977 3.285.478-2.377 2.318.56 3.272L18 21.5z"></path>
                  </g>
                </svg>
                <span className="text-[10px] font-bold text-gray-600">
                  مدرس دوره : صاحب محمدی
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="max-w-[200px]">
                <div className="flex items-center gap-x-4">
                  <span className="text-gray-400 rounded-full text-base line-through">
                    {Number(item?.price).toLocaleString("fa")}
                  </span>
                  <span className="py-1 px-2 bg-red-500 text-white rounded-full text-xs">
                    {Number(item?.discount).toLocaleString("fa")}%
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-blue-500 text-xl font-extrabold">
                    {Number(
                      Number(item?.price) -
                        Number(item?.price) * Number(`.${item?.discount}`)
                    ).toLocaleString("fa")}{" "}
                    تومان
                  </span>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => removeHandler(item)}
                className="border border-gray-200/70 p-1 rounded-xl"
              >
                <CiTrash className="w-6 h-6 text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-12 lg:col-span-3">
        <div className="bg-white rounded-xl p-3 lg:p-6">
          <div className="flex items-center gap-x-2 font-black text-gray-800 border-b border-b-gray-200/70 pb-3 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              className="h-5 w-5"
            >
              <path
                fill="currentColor"
                d="M18.333 5v2.017c0 1.316-.833 2.15-2.15 2.15h-2.85V3.342c0-.925.759-1.675 1.684-1.675a3.35 3.35 0 0 1 2.341.975c.6.608.975 1.441.975 2.358Z"
              ></path>
              <path
                fill="currentColor"
                d="M1.667 5.833V17.5A.83.83 0 0 0 3 18.167L4.425 17.1a.84.84 0 0 1 1.1.083l1.383 1.392a.84.84 0 0 0 1.184 0l1.4-1.4a.826.826 0 0 1 1.083-.075L12 18.167a.835.835 0 0 0 1.333-.667V3.333c0-.916.75-1.666 1.667-1.666H5C2.5 1.667 1.667 3.158 1.667 5v.833Z"
                opacity="0.4"
              ></path>
              <path
                fill="currentColor"
                d="M10 8.125H5a.63.63 0 0 1-.625-.625A.63.63 0 0 1 5 6.875h5a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625Zm-.625 3.333h-3.75A.63.63 0 0 1 5 10.833a.63.63 0 0 1 .625-.625h3.75a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625Z"
              ></path>
            </svg>
            <span>اطلاعات پرداخت</span>
          </div>
          <div className="textField mb-5 pb-4 border-b border-b-gray-200/70">
            <label for="coupon" className="text-gray-700 text-sm">
              کد تخفیف
            </label>
            <div className="relative">
              <input
                placeholder="کد تخفیف را وارد کنید"
                type="text"
                name="coupon"
                id="coupon"
                className="bg-gray-100 rounded-lg p-2 focus:outline-none mt-1 placeholder:text-xs w-full h-full"
                value=""
              />
              <div className="absolute left-2 top-1/2 -translate-y-1/2">
                <button
                  className="rounded-lg py-2 px-4 bg-blue-500 text-white font-bold w-full shadow-lg shadow-blue-300 text-xs"
                  tabindex="0"
                  type="button"
                >
                  اعمال کد
                  <span className="MuiTouchRipple-root muirtl-w0pj6f"></span>
                </button>
              </div>
            </div>
          </div>
          <div className="border-b border-b-gray-200/70 pb-1 mb-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-bold">جمع کل</span>
              <span className="text-gray-600 font-bold">
                {!isPending &&
                  calculateTotalPrice(user?.purchased).toLocaleString("fa")}
              </span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-bold">تخفیف</span>
              <span className="text-rose-500 font-bold">
                {!isPending &&
                  Number(
                    calculateTotalPrice(user?.purchased) -
                      calculateTotalPriceWithDiscount(user?.purchased)
                  ).toLocaleString("fa")}
                -
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-700 font-bold">ملبغ قابل پرداخت</span>
            <span className="text-blue-500 font-bold text-xl flex items-center">
              {!isPending &&
                calculateTotalPriceWithDiscount(user?.purchased).toLocaleString(
                  "fa"
                )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 2"
                viewBox="0 0 51.29 27.19"
                width="51"
                height="27"
                className="w-4 h-4 text-gray-300 mr-1"
              >
                <path
                  d="M36.48 22.85c1.78-.83 2.93-1.81 3.45-2.94h-1.65c-2.53 0-4.69-.66-6.47-1.97-.59.68-1.23 1.2-1.93 1.55s-1.54.53-2.5.53c-1.03 0-1.87-.18-2.51-.53-.65-.35-1.14-.96-1.5-1.83-.35-.87-.56-2.08-.63-3.62-.02-.28-.04-.6-.04-.97s-.01-.72-.04-1.07c-.14-3.42-.28-6.26-.42-8.51l-5.8 1.37c.73 1.64 1.34 3.34 1.83 5.08.49 1.75.74 3.58.74 5.5 0 1.6-.37 3.12-1.11 4.57-.74 1.46-1.85 2.64-3.32 3.57-1.48.93-3.27 1.39-5.38 1.39s-3.82-.45-5.21-1.34C2.61 22.74 1.6 21.6.96 20.22c-.63-1.38-.95-2.84-.95-4.36 0-1.2.13-2.28.4-3.25.27-.97.63-1.93 1.07-2.87l2.39 1.34c-.38.92-.65 1.71-.83 2.39-.18.68-.26 1.48-.26 2.39 0 1.76.49 3.19 1.48 4.29s2.63 1.65 4.92 1.65c1.55 0 2.87-.32 3.96-.95 1.09-.63 1.9-1.44 2.43-2.43.53-.98.79-1.98.79-2.99 0-2.65-.82-5.82-2.46-9.5l1.69-3.52L22.38.79c.16-.05.39-.07.67-.07.54 0 .98.19 1.32.56s.53.88.58 1.51c.14 2.04.27 5.02.39 8.94.02.38.04.75.04 1.13s.01.71.04 1.02c.05 1.03.22 1.78.53 2.25s.81.7 1.51.7c.84 0 1.52-.18 2.04-.53.52-.35.97-1 1.37-1.93.75-1.71 1.33-2.96 1.74-3.75.41-.79.94-1.46 1.58-2.04.64-.57 1.44-.86 2.37-.86 1.83 0 3.27.94 4.31 2.83s1.69 4.06 1.95 6.53c1.57-.02 2.77-.13 3.61-.33.83-.2 1.41-.49 1.72-.88.32-.39.47-.89.47-1.5 0-.75-.16-1.67-.49-2.76-.33-1.09-.69-2.1-1.09-3.04l2.43-1.23c1.22 3.1 1.83 5.44 1.83 7.04 0 1.83-.67 3.18-2 4.04-1.34.87-3.53 1.34-6.58 1.41-.49 2.21-1.8 3.93-3.92 5.19-2.12 1.25-4.68 1.98-7.69 2.16l-1.2-2.88c2.6-.14 4.8-.63 6.58-1.46ZM10.38 5.66l.11 3.31-3.2.28-.46-3.31 3.55-.28Zm25.1 10.83c.88.28 1.81.42 2.8.42h1.93c-.16-1.67-.55-3.08-1.16-4.26-.61-1.17-1.38-1.76-2.32-1.76-.75 0-1.42.45-2.02 1.34-.6.89-1.11 1.92-1.53 3.1.66.49 1.42.88 2.3 1.16ZM43.64.21C45.06.07 46.43 0 47.74 0c.96 0 1.67.02 2.11.07l-.21 2.81c-.42-.05-1.08-.07-1.97-.07-1.2 0-2.44.07-3.73.21s-2.44.32-3.45.53L39.86.81c1.1-.26 2.36-.46 3.78-.6Z"
                  data-name="Layer 1"
                  style={{ fill: "currentcolor" }}
                ></path>
              </svg>
            </span>
          </div>
          <button
            className="rounded-lg px-2 py-4 bg-blue-500 text-white font-bold w-full shadow-lg shadow-blue-300"
            tabindex="0"
            type="button"
            onClick={cartHandler}
          >
            پرداخت سفارش
            <span className="MuiTouchRipple-root muirtl-w0pj6f"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
