"use client";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

//? import components
import Card from "@/components/Card";

function CoursesSlider({ data }) {
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
        {data.map((card) => (
          <SwiperSlide key={card.id} className="max-w-sm">
            <Card data={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CoursesSlider;
