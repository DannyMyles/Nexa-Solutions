"use client";

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

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="shrink-0 w-64 group cursor-default">
      <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-300">
        <img
          src={client.logo}
          alt={client.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <p className="mt-3 text-sm font-semibold text-gray-900 truncate">{client.name}</p>
      <p className="text-xs text-gray-400 truncate">{client.description}</p>
    </div>
  );
}

export default function ClientCarousel({ clients }: ClientCarouselProps) {
  // Duplicate once for seamless loop. Each card is ~276px wide × 7 unique items = ~1932px,
  // wider than any desktop viewport, so no duplicate is visible at the same time.
  const items = [...clients, ...clients];

  return (
    <div
      className="marquee-track relative overflow-hidden py-2"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div className="flex gap-5 animate-marquee-left w-max">
        {items.map((client, i) => (
          <ClientCard key={i} client={client} />
        ))}
      </div>
    </div>
  );
}
