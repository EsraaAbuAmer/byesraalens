"use client";

import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const wheelImages = [
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
];

export default function AboutCreativeSection() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });

  const wheelRotateDesktop = useTransform(smoothProgress, [0, 1], [100, -50]);
  const wheelRotateMobile = useTransform(smoothProgress, [0, 1], [10, -10]);

  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[150vh] w-full bg-black text-white"
    >
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        {/* DESKTOP WHEEL (unchanged) */}
        <div className="absolute -left-[10%] top-1/2 hidden h-[1px] w-[1px] -translate-y-1/2 md:block">
          <motion.div
            style={{ rotate: prefersReducedMotion ? 0 : wheelRotateDesktop }}
            className="relative"
          >
            {wheelImages.map((src, index) => {
              const radius = 650;
              const startAngle = -150;
              const angle = startAngle + index * 22;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;

              return (
                <motion.div
                  key={index}
                  className="absolute left-0 top-0 overflow-hidden rounded-xl border border-white/10 bg-neutral-900"
                  style={{
                    width: "250px",
                    height: "340px",
                    x,
                    y,
                    rotate: angle + 90,
                  }}
                >
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover opacity-80"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* IMPROVED MOBILE SEMI-CIRCLE */}
        <div className="absolute bottom-10 left-1 -translate-x-1/2 md:hidden">
          <motion.div
            style={{ rotate: prefersReducedMotion ? 0 : wheelRotateMobile }}
            className="relative"
          >
            {wheelImages.map((src, index) => {
              const radius = 170; // ↓ smaller radius = tighter curve
              const startAngle = -190;
              const angleStep = 22; // ↓ smaller step = closer items

              const angle = startAngle + index * angleStep;

              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;

              return (
                <motion.div
                  key={index}
                  className="absolute left-0 top-0 overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-lg"
                  style={{
                    width: "90px",
                    height: "120px",
                    x,
                    y,
                    rotate: angle + 90,
                    scale: 0.95, // subtle overlap feel
                  }}
                >
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover opacity-90"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CONTENT */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="container relative z-10 mx-auto flex w-full justify-center px-6 md:justify-end md:px-12"
        >
          <div className="max-w-xl pb-52 text-center md:pb-0 md:text-left">
            <h2 className="text-4xl font-bold tracking-tight md:text-7xl">
              Your PSDs are <br /> welcome here
            </h2>

            <p className="mt-6 text-base leading-relaxed text-neutral-400 md:mt-8 md:text-xl">
              Import PSDs, AIs, IDMLs, DWGs, and other file types into Affinity,
              with structure, layers, and creative intent preserved.
              Collaborators can open and edit files without barriers.
            </p>

            <button className="mt-8 rounded-full bg-[#a5f06b] px-7 py-3 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95 md:mt-10 md:px-8 md:py-4">
              Get Affinity
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
