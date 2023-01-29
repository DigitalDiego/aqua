import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-screen relative">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1484387436194-cf7cb70800ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="ocean"
      />
      <div className="w-full h-full absolute top-0 right-0 bg-black/50 flex px-[5vw] flex-col lg:flex-row pt-[10vh] lg:pt-0">
        <div className="w-full lg:w-1/2 h-[45vh] lg:h-full flex justify-center items-center lg:items-start gap-[1em] flex-col text-white">
          <p className="text-4xl 2xl:text-5xl text-center lg:text-left">
            Plan and travel the world
          </p>
          <p className="w-full lg:w-4/5 text-xs 2xl:w-3/5 text-center lg:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
            ut rem. Voluptates ea adipisci cupiditate corporis illum rerum
            temporibus itaque!
          </p>
          <button className="px-4 py-2 bg-white text-black rounded-full w-full lg:w-[150px]">
            Start
          </button>
        </div>
        <div className="w-full lg:w-1/2 h-[45vh] lg:h-full grid place-items-center">
          <img
            className="w-1/2 lg:w-4/5 2xl:w-1/2"
            src="/images/world.svg"
            alt="world"
          />
        </div>
      </div>
    </div>
  );
}
