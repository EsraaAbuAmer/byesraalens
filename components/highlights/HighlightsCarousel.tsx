"use client";

import HighlightsHeader from "./HighlightsHeader";
import HighlightsMobile from "./HighlightsMobile";
import HighlightsDesktop from "./HighlightsDesktop";

export default function HighlightsCarousel() {
  return (
    <section className="relative bg-[#ebe7df] py-20 md:py-24" id="highlights">
      <HighlightsHeader />
      <HighlightsMobile />
      <HighlightsDesktop />
    </section>
  );
}
