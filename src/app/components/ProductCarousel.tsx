"use client";

import { useKeenSlider } from "keen-slider/react";
import type { KeenSliderInstance } from "keen-slider";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "ASIC miner Bitmain Antminer S21+ 235TH/s",
    image: "/S21+.png",
    price: "от ₽325 000",
  },
  {
    id: 2,
    name: "ASIC Bitmain Antminer S19K PRO 120TH/s",
    image: "/S19KPRO.png",
    price: "от ₽99 000",
  },
  {
    id: 3,
    name: "ASIC miner Bitmain Antminer S21+ 225TH/s",
    image: "/KS5PRO.png",
    price: "от ₽147 500",
  },
  {
    id: 4,
    name: "ASIC Bitmain Antminer T21 190TH/s",
    image: "/T21.png",
    price: "от ₽244 000",
  },
  {
    id: 5,
    name: "ASIC Bitmain Antminer L9 16000MH/s",
    image: "/L9.png",
    price: "от ₽820 000",
  },
];

export default function ProductCarousel() {
  const [sliderInstance, setSliderInstance] =
    useState<KeenSliderInstance | null>(null);

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 100,
    },
    breakpoints: {
      "(max-width: 640px)": {
        slides: {
          perView: 1,
          spacing: 16,
        },
      },
      "(max-width: 1024px)": {
        slides: {
          perView: 1,
          spacing: 32,
        },
      },
    },
    created: (instance) => setSliderInstance(instance),
  });

  return (
    <div className="relative w-full max-w-screen-xl mx-auto mt-7 rounded-2xl p-8">
      {/* Стрелки слева/справа */}
      <button
        onClick={() => sliderInstance?.prev()}
        disabled={!sliderInstance}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-6xl font-bold "
      >
        ‹
      </button>

      <button
        onClick={() => sliderInstance?.next()}
        disabled={!sliderInstance}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-6xl font-bold "
      >
        ›
      </button>

      {/* Вот тут сузим область отображения карточек */}
      <div className="px-12">
        <div ref={sliderRef} className="keen-slider">
          {products.map((product) => (
            <div
              key={product.id}
              className="keen-slider__slide flex flex-col items-center text-center bg-white rounded-xl p-6 w-full sm:w-[300px] mx-auto"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
              />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-blue1 font-bold text-xl">{product.price}</p>
              <a
                href="https://t.me/an_sokolov_nn"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-blue1 text-white px-5 py-2 rounded hover:bg-blue-950 transition text-center"
              >
                Купить
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
