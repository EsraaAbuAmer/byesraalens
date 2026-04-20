"use client";

import { useMemo, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { floatingCards } from "@/data/floatingCards";
import { useIsMobile } from "./hooks/useIsMobile";
import { FloatingCard } from "./FloatingCards";
import { useHeroMotion } from "./hooks/useHeroMotion";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroBottomStrip } from "./HeroBottomStrip";

const BRANDS = ["DESIGN", "PHOTO", "BRAND", "MOTION", "UI", "WEB", "STUDIO"];

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const {
    mouseX,
    mouseY,
    smoothMouseX,
    smoothMouseY,
    cardsProgress,
    heroOpacity,
    heroScale,
    titleY,
    subtitleY,
    haloY,
    cyanHaloY,
    violetHaloY,
    stripOpacity,
    stripY,
  } = useHeroMotion({ rootRef });

  const visibleCards = isMobile
    ? floatingCards.filter((card) => !card.hideOnMobile)
    : floatingCards;

  return (
    <section
      ref={rootRef}
      className="relative min-h-[180vh] md:min-h-[220vh] bg-[#07090d] text-white"
      onMouseMove={(e) => {
        const rect = rootRef.current?.getBoundingClientRect();
        if (!rect || prefersReducedMotion || isMobile) return;
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="relative h-full w-full"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <HeroBackground
            haloY={haloY}
            cyanHaloY={cyanHaloY}
            violetHaloY={violetHaloY}
          />

          <HeroContent
            prefersReducedMotion={prefersReducedMotion}
            titleY={titleY}
            subtitleY={subtitleY}
          />

          <div className="pointer-events-none absolute inset-0 z-10">
            {visibleCards.map((card) => (
              <FloatingCard
                key={card.id}
                card={card}
                progress={cardsProgress}
                mouseX={smoothMouseX}
                mouseY={smoothMouseY}
                reducedMotion={prefersReducedMotion}
                isMobile={isMobile}
              />
            ))}
          </div>

          <HeroBottomStrip stripOpacity={stripOpacity} stripY={stripY} />
        </motion.div>
      </div>
    </section>
  );
}
