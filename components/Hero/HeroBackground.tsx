"use client";

import { motion } from "framer-motion";

type HeroBackgroundProps = {
  haloY: any;
  cyanHaloY: any;
  violetHaloY: any;
};

export function HeroBackground({
  haloY,
  cyanHaloY,
  violetHaloY,
}: HeroBackgroundProps) {
  return (
    <>
      <div className="absolute inset-0 bg-[#07090d]" />

      <motion.div
        className="absolute left-1/2 top-[8%] h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[100px] md:h-[32rem] md:w-[32rem] md:blur-[140px]"
        style={{ y: haloY }}
      />

      <motion.div
        className="absolute right-[10%] top-[20%] h-[16rem] w-[16rem] rounded-full bg-cyan-400/10 blur-[100px] md:h-[24rem] md:w-[24rem] md:blur-[140px]"
        style={{ y: cyanHaloY }}
      />

      <motion.div
        className="absolute left-[8%] bottom-[10%] h-[12rem] w-[12rem] rounded-full bg-violet-600/10 blur-[90px] md:h-[18rem] md:w-[18rem] md:blur-[120px]"
        style={{ y: violetHaloY }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_45%)]" />
      <div className="absolute inset-0 opacity-[0.06] md:opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px] md:[background-size:90px_90px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,9,13,0.2),rgba(7,9,13,0.82))]" />
    </>
  );
}