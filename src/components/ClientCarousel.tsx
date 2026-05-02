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
}

export default function ClientCarousel({
  clients,
  autoPlay = true,
  autoPlayInterval = 3000,
}: ClientCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    if (autoPlay) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [emblaApi, onSelect, autoPlay, autoPlayInterval]);

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
        <div className="flex">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%] min-w-0 px-3"
            >
              <div className="p-6 bg-gray-50 rounded-2xl text-center card-hover h-full flex flex-col justify-center">
                <div className="w-16 h-16 mx-auto bg-[#14B8A6]/10 rounded-4xl flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-[#14B8A6]">{client.logo}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{client.name}</h3>
                <p className="text-[#14B8A6] text-sm">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          prevBtnEnabled
            ? "bg-white shadow-lg hover:bg-[#14B8A6] hover:text-white text-gray-700"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          nextBtnEnabled
            ? "bg-white shadow-lg hover:bg-[#14B8A6] hover:text-white text-gray-700"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
        aria-label="Next slide"
      >
        <FaChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {clients.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className="w-2 h-2 rounded-full bg-gray-300 hover:bg-[#14B8A6] transition-colors"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
