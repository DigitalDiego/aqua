import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { popularData } from "../data";

export default function Popular() {
  return (
    <div className="p-[5vw] flex justify-center items-center flex-col gap-4">
      <p className="text-3xl">Popular Deals</p>
      <Swiper className="w-full" slidesPerView={4} spaceBetween={10}>
        {popularData?.map(({ id, image, city, price }) => (
          <SwiperSlide className="w-full h-[250px] relative" key={id}>
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="resort"
            />
            <div className="absolute bottom-0 w-full bg-black/80 h-1/4 flex justify-center items-start flex-col px-4 text-white">
              <p>{city}</p>
              <p>${price} per night</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
