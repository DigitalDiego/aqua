import React from "react";

export default function SignUp() {
  return (
    <div className="p-[5vw] flex justify-center items-center gap-4 flex-col">
      <p className="text-3xl">Sign up and stay updated</p>
      <p className="w-1/2 text-xs text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi quae
        earum. Eos, voluptatum velit.
      </p>
      <div className="w-full flex justify-center items-center gap-2">
        <input
          className="px-4 py-2 rounded-full border-solid border-gray-400 border-[1px] w-1/2"
          type="email"
          placeholder="Email"
        />
        <button className="px-4 py-2 rounded-full bg-black text-white w-[15%] border-solid border-black border-[1px]">
          Sign Up
        </button>
      </div>
    </div>
  );
}
