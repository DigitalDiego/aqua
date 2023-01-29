import React from "react";

export default function SignUp() {
  return (
    <div className="p-[5vw] flex justify-center items-center gap-4 flex-col 2xl:max-w-7xl 2xl:mx-auto">
      <p className="text-3xl text-center">Sign up and stay updated</p>
      <p className="2-full lg:w-1/2 text-xs text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi quae
        earum. Eos, voluptatum velit.
      </p>
      <div className="w-full flex justify-center items-center gap-2">
        <input
          className="px-4 py-2 rounded-full border-solid border-gray-400 border-[1px] w-3/4 lg:w-1/2"
          type="email"
          placeholder="Email"
        />
        <button className="px-2 lg:px-4 py-2 rounded-full bg-black text-white w-1/4 lg:w-[15%] border-solid border-black border-[1px]">
          Sign Up
        </button>
      </div>
    </div>
  );
}
