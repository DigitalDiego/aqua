import React, { useState } from "react";
import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";

export default function Navbar() {
  const [navBtn, setNavBtn] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleNavBtn = () => {
    setNavBtn(!navBtn);
  };
  const cn = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  };
  const handleScroll = () => {
    if (window.scrollY !== 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <div
      className={cn(
        "fixed top-0 right-0 z-[4000] w-full h-[10vh] flex justify-between items-center px-[5vw] text-white duration-[.8s]",
        scroll ? "bg-white shadow-md" : "bg-transparent shadow-none"
      )}
    >
      <a
        className={cn(
          "text-2xl font-[500] duration-[.8s]",
          scroll ? "text-black" : "text-white"
        )}
        href="#"
      >
        Aqua
      </a>
      <nav className="lg:flex items-center gap-[2em] hidden">
        {["Home", "Tours", "Services", "Contact"].map((item, index) => (
          <a
            className={cn(
              "relative after:block after:h-[1px] after:w-0 after:duration-[.5s] hover:after:w-full duration-[.8s]",
              scroll ? "text-black after:bg-black" : "text-white after:bg-white"
            )}
            href="#"
            key={index}
          >
            {item}
          </a>
        ))}
        <button
          className={cn(
            "px-4 py-2 rounded-full duration-[.8s]",
            scroll ? "bg-black text-white" : "bg-white text-black"
          )}
        >
          Book a trip
        </button>
      </nav>
      <button className="text-lg lg:hidden" onClick={handleNavBtn}>
        {navBtn ? <AiOutlinePlus className="rotate-45" /> : <AiOutlineMenu />}
      </button>
      <div
        className={cn(
          "fixed bottom-0 w-full h-[90vh] flex justify-evenly items-center flex-col bg-white duration-[.8s] right-0 rounded-tr-xl rounded-tl-xl lg:hidden",
          navBtn ? "translate-y-0" : "translate-y-[100%]"
        )}
      >
        {["Home", "Tours", "Services", "Contact"].map((item, index) => (
          <a
            className="text-black text-2xl hover:underline underline-offset-2"
            href="#"
            key={index}
            onClick={handleNavBtn}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
