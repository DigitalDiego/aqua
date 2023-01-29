import React from "react";

export default function Customers() {
  return (
    <div className="w-full p-[5vw] flex justify-center items-center gap-4 flex-col">
      <p className="text-3xl">What our customers have to say</p>
      <div className="w-full flex h-[70vh]">
        <div className="w-1/2 flex justify-center items-start flex-col gap-4">
          <div className="flex flex-col w-4/5 gap-2">
            <p className="font-serif italic">
              Aqua has great deals for all of your needs. From finding a resort
              to booking, everything is very smooth.
            </p>
            <div className="w-full flex justify-end items-center">
              <p>- Michelle</p>
            </div>
          </div>
          <div className="flex flex-col w-4/5 gap-2">
            <p className="font-serif italic">
              Aqua helped me find my dream get away and at a great price. I
              recommend that everyone books using Aqua when planning a get away.
            </p>
            <div className="w-full flex justify-end items-center">
              <p>- Micheal</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-between">
          <div className="w-[45%] h-full flex justify-end flex-col">
            <img
              className="w-full h-4/5 object-cover shadow-md"
              src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="woman"
            />
          </div>
          <div className="w-[45%] h-full flex justify-start flex-col">
            <img
              className="w-full h-4/5 object-cover shadow-md"
              src="https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="man"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
