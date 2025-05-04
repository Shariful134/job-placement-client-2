"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import side1 from "../../../app/image/side1.jpg";
import side2 from "../../../app/image/side2.jpg";
import side3 from "../../../app/image/side3.jpg";
import side4 from "../../../app/image/side4.jpg";
import side5 from "../../../app/image/side5.jpg";
import side6 from "../../../app/image/side6.jpg";
const images = [
  "/images/banner1.jpeg",
  "/images/banner2.jpeg",
  "/images/banner3.jpeg",
  "/images/banner4.jpeg",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" container mx-auto grid grid-cols-12 gap-5 mt-5">
      <div className="col-span-8 relative w-full h-[60vh] overflow-hidden  shadow-md">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index ? "bg-blue-500 scale-125" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
      <div className="col-span-4  w-full ">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3 ">
            <Image src={side1} alt={`side1`} width={200} height={200} />
            <Image src={side2} alt={`side2`} width={200} height={200} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Image src={side3} alt={`side1`} width={200} height={200} />
            <Image src={side4} alt={`side2`} width={200} height={200} />
          </div>
          <div className="grid grid-cols-2 gap-3 ">
            <Image src={side5} alt={`side1`} width={200} height={200} />
            <Image src={side6} alt={`side2`} width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
