"use client";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

//? import components
import Card from "@/components/Card";

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
          <Card />
        </SwiperSlide>
        <SwiperSlide className="max-w-sm">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="max-w-sm">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="max-w-sm">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="max-w-sm">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="max-w-sm">
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CoursesSlider;
