"use client";

import { useRef } from "react";
import { highlights } from "@/data/highlights";
import SplitSlide from "./SplitSlide";

export default function HighlightsDesktop() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const velocity = useRef(0);
  const lastX = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const el = scrollRef.current;
    if (!el) return;

    isDown.current = true;
    startX.current = e.pageX;
    lastX.current = e.pageX;
    scrollLeft.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || !isDown.current) return;

    e.preventDefault();

    const x = e.pageX;
    const delta = x - startX.current;

    // smoother velocity (difference between frames)
    velocity.current = x - lastX.current;
    lastX.current = x;

    el.scrollLeft = scrollLeft.current - delta;
  };

  const handleMouseUp = () => {
    isDown.current = false;

    const el = scrollRef.current;
    if (!el) return;

    let v = velocity.current * 2;

    const momentum = () => {
      if (Math.abs(v) < 0.3) return;

      el.scrollLeft -= v;
      v *= 0.92;

      requestAnimationFrame(momentum);
    };

    momentum();
  };

  const handleMouseLeave = () => {
    if (isDown.current) {
      handleMouseUp();
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY * 0.8;
    }
  };

  return (
    <div className="relative hidden md:block">
      <div
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
      >
        <div className="flex gap-6 pl-6 pr-12 md:gap-8 md:pl-12 md:pr-24">
          {highlights.map((block, index) => (
            <div
              key={index}
              className="min-w-[85vw] md:min-w-[760px] lg:min-w-[820px]"
            >
              <SplitSlide block={block} index={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#ebe7df] to-transparent md:w-24" />
    </div>
  );
}
