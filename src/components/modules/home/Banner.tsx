/* eslint-disable @typescript-eslint/no-explicit-any */
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
    <div className="container mx-auto">
      <div className=" grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-12 sm:col-span-8 relative  h-[40vh] sm:h-[60vh] overflow-hidden shadow-md">
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

        <div className="hidden sm:block col-span-4 h-[60vh]">
          <div className="flex flex-col gap-4 h-full">
            {[side1, side2, side3, side4, side5, side6]
              .reduce((acc, img, i) => {
                const pairIndex = Math.floor(i / 2);
                if (!acc[pairIndex]) acc[pairIndex] = [];
                acc[pairIndex].push(img);
                return acc;
              }, [] as any[][])
              .map((pair, idx) => (
                <div key={idx} className="grid grid-cols-2 gap-4 flex-1">
                  {pair.map((img, i) => (
                    <div key={i} className="relative w-full h-full">
                      <Image
                        src={img}
                        alt={`side${idx * 2 + i + 1}`}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
