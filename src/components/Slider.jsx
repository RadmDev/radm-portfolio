"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  //   console.log(slides);

  const [current, setCurrent] = useState(0);
  const length = slides?.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center p-4 max-h-[600px] overflow-hidden mb-12">
        {slides?.map((slide, index) => (
          <div
            key={index}
            className={
              index === current
                ? "opacity-[1] ease-in duration-1000"
                : "opacity-0"
            }
          >
            <FaArrowCircleLeft
              onClick={prevSlide}
              size={50}
              className="absolute top-1/2 left-7 text-white/70 cursor-pointer select-none z-[2]"
            />
            {index === current && (
              <Image
                width="1440"
                height="600"
                objectFit="contain"
                src={slide.image}
                alt="/"
              />
            )}
            <FaArrowCircleRight
              onClick={nextSlide}
              size={50}
              className="absolute top-1/2 right-7 text-white/70 cursor-pointer select-none z-[2]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
