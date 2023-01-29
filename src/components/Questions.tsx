import React from "react";

export default function Questions() {
  return (
    <div className="p-[5vw] flex justify-center items-center gap-4 flex-col">
      <p className="text-3xl">Questions</p>
      <div className="w-1/2 flex flex-col gap-2">
        <div className="w-full flex gap-2">
          <input
            className="border-solid border-[1px] border-gray-400 rounded-full px-4 py-2 w-1/2"
            type="text"
            placeholder="Name"
          />
          <input
            className="border-solid border-[1px] border-gray-400 rounded-full px-4 py-2 w-1/2"
            type="email"
            placeholder="Email"
          />
        </div>
        <textarea className="border-solid border-[1px] border-gray-400 rounded-xl px-4 py-2 w-full h-[300px] resize-none"></textarea>
        <button className="w-full px-4 py-2 bg-black text-white rounded-full">
          Send
        </button>
      </div>
    </div>
  );
}
