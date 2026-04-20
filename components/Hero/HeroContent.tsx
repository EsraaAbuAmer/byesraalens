"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

type HeroContentProps = {
  prefersReducedMotion: boolean | null;
  titleY: any;
  subtitleY: any;
};

export function HeroContent({
  prefersReducedMotion,
  titleY,
  subtitleY,
}: HeroContentProps) {
  const scrollToHighlights = () => {
    const el = document.getElementById("highlights");
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 50;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative z-20 flex h-full flex-col items-center justify-center px-5 text-center md:px-6">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] tracking-[0.22em] text-white/70 backdrop-blur-md md:mb-5 md:px-4 md:text-xs md:tracking-[0.25em]"
      >
        ESRAA BY LENS
      </motion.div>

      <motion.h1
        initial={prefersReducedMotion ? false : { opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ y: titleY }}
        className="max-w-5xl text-balance text-4xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-5xl md:text-7xl xl:text-[92px]"
      >
        Light. Shadow. Story.
      </motion.h1>

      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.85,
          delay: 0.18,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ y: subtitleY }}
        className="mt-5 max-w-xl text-pretty px-2 text-sm leading-6 text-white/65 sm:text-base md:mt-6 md:max-w-2xl md:px-0 md:text-lg md:leading-7"
      >
        Capturing the subtle beauty in everyday moments, where emotion lives
        quietly in the details.
      </motion.p>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
      >
        <Button
          onClick={scrollToHighlights}
          className="h-11 w-full max-w-[220px] rounded-full bg-white px-6 text-sm font-medium text-black hover:bg-white/90 sm:w-auto"
        >
          Explore Gallery
        </Button>

        <a href="mailto:info@byesraalens.com?subject=Photography%20Inquiry">
          <Button
            variant="outline"
            className="h-11 w-full max-w-[220px] rounded-full border-white/15 bg-white/5 px-6 text-sm text-white backdrop-blur-md hover:bg-white/10 sm:w-auto"
          >
            Book an Inquiry
          </Button>
        </a>
      </motion.div>
    </div>
  );
}
