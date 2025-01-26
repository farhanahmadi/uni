"use client";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

//? import components
import Comment from "@/components/Comment";

function CoursesSlider() {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={"auto"}
        loop={true}
        navigation={true}
        freeMode={true}
        modules={[Pagination, Navigation, FreeMode]}
      >
        <SwiperSlide className="max-w-sm">
          <Comment />
        </SwiperSlide>
        <SwiperSlide className="max-w-sm">
          <Comment />
        </SwiperSlide>
        <SwiperSlide className="max-w-sm">
          <Comment />
        </SwiperSlide>
        <SwiperSlide className="max-w-sm">
          <Comment />
        </SwiperSlide>
        <SwiperSlide className="max-w-sm">
          <Comment />
        </SwiperSlide>
        <SwiperSlide className="max-w-sm">
          <Comment />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CoursesSlider;
