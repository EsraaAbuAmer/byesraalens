"use client";

import { motion } from "framer-motion";

const BRANDS = ["DESIGN", "PHOTO", "BRAND", "MOTION", "UI", "WEB", "STUDIO"];

type HeroBottomStripProps = {
  stripOpacity: any;
  stripY: any;
};

export function HeroBottomStrip({
  stripOpacity,
  stripY,
}: HeroBottomStripProps) {
  return (
    <motion.div
      style={{ opacity: stripOpacity, y: stripY }}
      className="absolute bottom-5 left-1/2 z-30 w-[calc(100%-20px)] -translate-x-1/2 md:bottom-8 md:w-[min(1100px,calc(100%-32px))]"
    >
      <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.06] p-2.5 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl md:rounded-[28px] md:p-3">
        <div className="flex flex-col gap-3 rounded-[18px] border border-white/6 bg-black/25 px-4 py-3 md:flex-row md:flex-wrap md:items-center md:justify-between md:rounded-[22px] md:px-6">
          <div>
            <p className="text-sm font-medium text-white/90">
              Creative workflow, reimagined
            </p>
            <p className="mt-1 text-sm text-white/50">
              One place for visuals, layouts, motion, and delivery.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {BRANDS.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] tracking-[0.18em] text-white/60 md:px-3 md:text-[11px] md:tracking-[0.22em]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}