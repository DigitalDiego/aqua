import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="px-[5vw] py-[2vw] flex justify-between items-center bg-black">
      <p className="font-[500] text-white text-base">Aqua</p>
      <div className="flex items-center gap-4 text-white text-base">
        <AiFillFacebook />
        <AiFillTwitterCircle />
        <AiFillInstagram />
      </div>
    </div>
  );
}
