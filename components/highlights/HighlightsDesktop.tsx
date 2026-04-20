import { highlights } from "@/data/highlights";
import SplitSlide from "./SplitSlide";

export default function HighlightsDesktop() {
  return (
    <div className="relative hidden md:block">
      <div className="overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
        <div className="flex gap-6 pl-6 pr-12 md:gap-8 md:pl-12 md:pr-24">
          {highlights.map((block, index) => (
            <div
              key={index}
              className="min-w-[85vw] snap-start md:min-w-[760px] lg:min-w-[820px]"
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
