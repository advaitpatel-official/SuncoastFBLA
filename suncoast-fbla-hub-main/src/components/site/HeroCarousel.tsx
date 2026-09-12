import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import slideOne from "@/assets/Club Rush/DSC_0056.JPG";
import slideTwo from "@/assets/Club Rush/DSC_0057.JPG";
import slideThree from "@/assets/Club Rush/DSC_0058.JPG";

const slides = [
  { src: slideOne, alt: "Students collaborating on a business project", caption: "Build" },
  { src: slideTwo, alt: "A student presenting to classmates", caption: "Compete" },
  { src: slideThree, alt: "Students in business attire at a conference", caption: "Lead" },
];

const AUTO_MS = 5000;
const PAUSE_MS = 30000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [pausedUntil, setPausedUntil] = useState(0);
  const pausedRef = useRef(pausedUntil);
  pausedRef.current = pausedUntil;

  useEffect(() => {
    const id = window.setInterval(() => {
      if (Date.now() < pausedRef.current) return;
      setIndex((current) => (current + 1) % slides.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, []);

  const move = (step: number) => {
    setPausedUntil(Date.now() + PAUSE_MS);
    setIndex((current) => (current + step + slides.length) % slides.length);
  };

  return (
    <div className="relative min-h-[46vh] overflow-hidden bg-muted lg:min-h-full">
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          width={1400}
          height={900}
          className={cn(
            "absolute inset-0 h-full w-full object-cover grayscale transition-opacity duration-1200 ease-[cubic-bezier(.16,1,.3,1)]",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-background/90 px-3 py-2 backdrop-blur-sm md:gap-4 md:px-5 md:py-3">
        <div className="flex items-center gap-2 md:gap-3">
          <span className="label-text">{slides[index]?.caption}</span>
          <div className="flex gap-1 md:gap-1.5">
            {slides.map((slide, i) => (
              <span
                key={slide.src}
                className={cn(
                  "h-px w-4 transition-colors md:w-6",
                  i === index ? "bg-primary" : "bg-border",
                )}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-1.5 md:gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous image"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background md:h-9 md:w-9"
          >
            <ArrowLeft size={14} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next image"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background md:h-9 md:w-9"
          >
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
