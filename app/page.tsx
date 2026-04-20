import Hero from "@/components/Hero/Hero";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import HighlightsCarousel from "@/components/highlights/HighlightsCarousel";
import Separator from "@/components/ui/separator";
import About from "@/components/home/About";
export default function Home() {
  return (
    <main>
      <Hero />
      <HighlightsCarousel />
      <Separator />
      <BeforeAfterSection />
    </main>
  );
}
