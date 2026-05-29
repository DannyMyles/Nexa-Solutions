"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Client {
  name: string;
  description: string;
  logo: string;
}

interface ClientCarouselProps {
  clients: Client[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  variant?: "default" | "full-width";
}

export default function ClientCarousel({
  clients,
  autoPlay = true,
  autoPlayInterval = 3000,
  variant = "default",
}: ClientCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const frame = requestAnimationFrame(onSelect);
    emblaApi.on("select", onSelect);

    let interval: ReturnType<typeof setInterval> | undefined;
    if (autoPlay) {
      interval = setInterval(() => emblaApi.scrollNext(), autoPlayInterval);
    }

    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off("select", onSelect);
      if (interval) clearInterval(interval);
    };
  }, [emblaApi, onSelect, autoPlay, autoPlayInterval]);

  const isFullWidth = variant === "full-width";

  return (
    <div className={`relative ${isFullWidth ? "w-full" : ""}`}>
      {/* Prev button */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#14B8A6] hover:text-white hover:border-[#14B8A6] transition-all duration-200"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-3.5 h-3.5" />
      </button>

      {/* Next button */}
      <button
        onClick={scrollNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#14B8A6] hover:text-white hover:border-[#14B8A6] transition-all duration-200"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-3.5 h-3.5" />
      </button>

      {/* Track */}
      <div
        ref={emblaRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none px-10 sm:px-14"
      >
        <div className="flex gap-3 sm:gap-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_25%] min-w-0"
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#14B8A6]/20 transition-all duration-300 p-5 h-full flex items-center gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-[#14B8A6]/20 to-[#0D9488]/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-[#0D9488]">{client.logo}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{client.name}</p>
                  <p className="text-xs text-[#14B8A6] mt-0.5 truncate">{client.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-5">
        {clients.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "w-5 h-2 bg-[#14B8A6]"
                : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
