"use client";
import React, { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Carousel = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  const MAX_VISIBILITY = 3;
  console.log(active);

  const nextSlide = () => {
    setActive((prevActive) => prevActive + 1); 
  };

  const prevSlide = () => {
    setActive((prevActive) => prevActive - 1); 
  };
  return (
    <div className="relative w-full md:w-[40rem] lg:w-[60rem] h-[15rem] md:h-[23rem] flex justify-center items-center [perspective:150px] md:[perspective:400px]  lg:[perspective:800px] [transform-style:preserve-3d]">
      {active > 0 && (
        <button
          className="text-[#ffffff] text-[3rem] left-10 absolute md:left-0 z-[2] cursor-pointer select-none [background:unset]  top-2/4    [transform:translateX(-100%)_translatey(-50%)]"
          onClick={prevSlide}
        >
          <MdArrowBackIosNew />
        </button>
      )}
      {React.Children.map(children, (child, i) => {
        const customStyles = {
          "--active": i === active ? 1 : 0,
          "--offset": (active - i) / 3,
          "--direction": Math.sign(active - i),
          "--abs-offset": Math.abs(active - i) / 3,
          "pointer-events": active === i ? "auto" : "none",
          opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
          display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
        };

        return (
          <div
            className={`${
              active !== i && " brightness-50"
            } absolute w-[20rem] md:w-[40rem] h-full [transform:rotateY(calc(var(--offset)_*_35deg))_scaleY(calc(1_+_var(--abs-offset)_*_-0.2))_translateZ(calc(var(--abs-offset)_*_-20rem))_translateX(calc(var(--direction)_*_-5rem))] blur-[calc(var(--abs-offset] transition-all duration-[0.3s] ease-[ease-out]`}
            style={{ ...customStyles }}
          >
            {child}
          </div>
        );
      })}

      {active < count - 1 && (
        <button
          className="text-[#ffffff] text-[3rem] absolute flex  z-[2] cursor-pointer select-none [background:unset] border-[unset] top-2/4 [transform:translateX(100%)_translatey(-50%)] right-10 md:right-0"
          onClick={nextSlide}
        >
          <MdArrowForwardIos />
        </button>
      )}
      <div className="w-full absolute -bottom-16 flex items-center justify-center">
        <div className="flex space-x-3">
          {React.Children.map(children, (_, i) => (
            <span
              key={`dot-${i}`}
              className={`h-[8px] w-[8px] rounded-full ${
                active === i ? "bg-white" : "bg-white/40"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
