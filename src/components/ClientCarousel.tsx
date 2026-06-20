"use client";

const clients = [
  { name: "Crystal Fresh", logo: "/images/companies/Crystal Fresh.jpeg" },
  { name: "International Safety Training Centre", logo: "/images/companies/International Safety Training Centre.webp" },
  { name: "Kecode Limited", logo: "/images/companies/kecode limited.jpeg" },
  { name: "Shaphil Baby Shop", logo: "/images/companies/Shaphil Baby Shop.jpeg" },
  { name: "Ujuzi Ware", logo: "/images/companies/Ujuzi ware.jpeg" },
];

function ClientCard({ client }: { client: { name: string; logo: string } }) {
  return (
    <div className="shrink-0 w-64 group cursor-default">
      <div className="relative w-full h-44 overflow-hidden">
        <img
          src={client.logo}
          alt={client.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}

export default function ClientCarousel() {
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
