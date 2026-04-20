import { highlights } from "@/data/highlights";
import MobileHighlightCard from "./MobileHighlightCard";

export default function HighlightsMobile() {
  return (
    <div className="md:hidden">
      <div className="overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
        <div className="flex gap-4 pl-6 pr-8">
          {highlights.map((block, index) => (
            <div key={index} className="min-w-[82vw] snap-start">
              <MobileHighlightCard block={block} index={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#ebe7df] to-transparent" />
    </div>
  );
}