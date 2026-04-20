"use client";

import { RefObject } from "react";
import {
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type UseHeroMotionProps = {
  rootRef: RefObject<HTMLElement | null>;
};

export function useHeroMotion({ rootRef }: UseHeroMotionProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
    mass: 0.3,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
    mass: 0.3,
  });

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end start"],
  });

  const cardsProgress = useSpring(
    useTransform(scrollYProgress, [0, 0.68], [0, 1]),
    {
      stiffness: 90,
      damping: 22,
      mass: 0.4,
    }
  );

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.985]);
  const titleY = useTransform(scrollYProgress, [0, 0.35], [0, -24]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.35], [0, -14]);
  const haloY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const cyanHaloY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const violetHaloY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const stripOpacity = useTransform(scrollYProgress, [0.5, 0.82], [0, 1]);
  const stripY = useTransform(scrollYProgress, [0.45, 0.82], [80, 0]);

  return {
    mouseX,
    mouseY,
    smoothMouseX,
    smoothMouseY,
    scrollYProgress,
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
  };
}