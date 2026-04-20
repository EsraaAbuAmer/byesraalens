"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { beforeAfterItems } from "@/data/beforeAfter";

export default function BeforeAfterSection() {
  const [activeId, setActiveId] = useState(beforeAfterItems[0]?.id ?? 1);
  const [sliderPosition, setSliderPosition] = useState(50);

  const activeItem = useMemo(
    () =>
      beforeAfterItems.find((item) => item.id === activeId) ??
      beforeAfterItems[0],
    [activeId]
  );

  const handleSliderChange = (value: number) => {
    setSliderPosition(value);
  };

  return (
    <section className="bg-[#ebe7df] px-6 py-20 md:px-12 md:py-24">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-stone-500">
            Before / After
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500">
            {activeItem.category}
          </p>
          <h3 className="font-headline mt-2 text-2xl italic text-stone-800 md:text-3xl">
            {activeItem.title}
          </h3>
        </div>

        <div className="relative overflow-hidden">
          <div className="relative mx-auto aspect-[3/4] max-w-md w-full select-none">
            <Image
              src={activeItem.afterImage}
              alt={`${activeItem.title} after edit`}
              fill
              className="object-cover"
              priority
            />

            <div
              className="absolute inset-0 z-10"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={activeItem.beforeImage}
                  alt={`${activeItem.title} before edit`}
                  fill
                  className="object-cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>

            <div
              className="absolute inset-y-0 z-20 w-[2px] bg-white"
              style={{
                left: `${sliderPosition}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/20 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-1 text-white">
                  <span className="text-xs">←</span>
                  <span className="text-xs">→</span>
                </div>
              </div>
            </div>

            <div className="absolute left-4 top-4 z-20 bg-black/40 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md md:left-6 md:top-6">
              {activeItem.beforeLabel ?? "Before"}
            </div>

            <div className="absolute right-4 top-4 z-20 bg-white/80 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-stone-800 backdrop-blur-md md:right-6 md:top-6">
              {activeItem.afterLabel ?? "After"}
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => handleSliderChange(Number(e.target.value))}
              className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
              aria-label="Before and after image comparison slider"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {beforeAfterItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveId(item.id);
                setSliderPosition(50);
              }}
              className={`group text-left transition ${
                activeId === item.id
                  ? "opacity-100"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <Image
                  src={item.afterImage}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-3">
                <span className="block text-[10px] uppercase tracking-[0.22em] text-stone-500">
                  {item.category}
                </span>
                <span className="font-headline text-base italic text-stone-800">
                  {item.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
