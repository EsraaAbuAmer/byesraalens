"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  bgImage: string;
  overlay?: string;
  speed?: number;
  className?: string;
};

export default function ParallaxSection({
  children,
  bgImage,
  overlay = "bg-black/30",
  speed = 0.12,
  className = "",
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const screenCenter = window.innerHeight / 2;
      const distance = sectionCenter - screenCenter;

      setOffset(distance * speed);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="absolute left-0 right-0 top-[-15%] bottom-[-15%] will-change-transform"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      >
        <Image
          src={bgImage}
          alt="background"
          fill
          className="object-cover"
        />
        <div className={`absolute inset-0 ${overlay}`} />
      </div>

      <div className="relative z-10">{children}</div>
    </section>
  );
}