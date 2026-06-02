"use client";

const clients = Array.from({ length: 6 }, (_, i) => ({
  image: `/assets/img/clients/client-${i + 1}.png`,
  alt: `Client ${i + 1}`,
}));

export default function ClientMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-light-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-light-bg to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {doubled.map((client, i) => (
          <div
            key={`${client.image}-${i}`}
            className="flex items-center justify-center mx-8 w-36 h-20 glass-card rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:grayscale-0 grayscale opacity-70 hover:opacity-100"
          >
 
            <img src={client.image} alt={client.alt} className="max-h-12 max-w-[80%] object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
