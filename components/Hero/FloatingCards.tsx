"use client";

import { motion, useTransform } from "framer-motion";
import { floatingCards } from "@/data/floatingCards";

type FloatingCardProps = {
  card: (typeof floatingCards)[number];
  progress: any;
  mouseX: any;
  mouseY: any;
  reducedMotion: boolean | null;
  isMobile: boolean;
};

export function FloatingCard({
  card,
  progress,
  mouseX,
  mouseY,
  reducedMotion,
  isMobile,
}: FloatingCardProps) {
  const config = isMobile ? card.mobile : card.desktop;

  const spreadY = useTransform(
    progress,
    [0, 0.55, 1],
    [0, 0, isMobile ? 110 : 345]
  );

  const bottomX = useTransform(
    progress,
    [0, 1],
    [0, isMobile ? (card.id - 3) * 38 : (card.id - 3) * 150]
  );

  const scaled = useTransform(progress, [0, 1], [1, isMobile ? 0.98 : 0.94]);
  const finalRotate = useTransform(progress, [0, 1], [config.rotate, 0]);
  const finalRadius = useTransform(progress, [0, 1], [24, isMobile ? 16 : 18]);

  const finalShadow = useTransform(
    progress,
    [0, 1],
    isMobile
      ? ["0 16px 36px rgba(0,0,0,0.22)", "0 10px 22px rgba(0,0,0,0.16)"]
      : ["0 30px 80px rgba(0,0,0,0.35)", "0 20px 40px rgba(0,0,0,0.22)"]
  );

  const parallaxX = useTransform(
    mouseX,
    [-0.5, 0.5],
    [-18 * config.depth, 18 * config.depth]
  );

  const parallaxY = useTransform(
    mouseY,
    [-0.5, 0.5],
    [-12 * config.depth, 12 * config.depth]
  );

  const x = useTransform(
    [bottomX, parallaxX],
    ([a, b]) => a + (reducedMotion || isMobile ? 0 : b)
  );

  const y = useTransform(
    [spreadY, parallaxY],
    ([a, b]) => a + (reducedMotion || isMobile ? 0 : b)
  );

  return (
    <motion.div
      className="absolute will-change-transform"
      style={{
        left: config.baseX,
        top: config.baseY,
        x,
        y,
        rotate: finalRotate,
        scale: scaled,
        zIndex: 20 - card.id,
        opacity: isMobile ? 0.72 : 1,
      }}
    >
      <motion.div
        className="overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        style={{
          width: config.width,
          borderRadius: finalRadius,
          boxShadow: finalShadow,
        }}
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={card.src}
            alt={card.alt}
            className="h-full w-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10" />
        </div>
      </motion.div>
    </motion.div>
  );
}