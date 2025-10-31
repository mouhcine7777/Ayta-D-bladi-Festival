import React from "react";
import Image from "next/image";
import Link from "next/link";

const vipTickets = [
  {
    title: "Soirée 13 Novembre — VIP Devant la Scène",
    image: "/afichesoiree1.jpg",
    link: "https://guichet.com/ma-fr/event/concerts/ayta-dbladi-soiree-13-novembre-vip-5150",
  },
  {
    title: "Soirée 13 Novembre — Table Privative (6 pers.)",
    image: "/afichesoiree1table.jpg",
    link: "https://guichet.com/ma-fr/event/concerts/ayta-dbladi-soiree-13-novembre-tables-vip-5175",
  },
  {
    title: "Soirée 14 Novembre — VIP Devant la Scène",
    image: "/afichesoiree2.jpg",
    link: "https://guichet.com/ma-fr/event/concerts/ayta-dbladi-soiree-14-novembre-vip-5151",
  },
  {
    title: "Soirée 14 Novembre — Table Privative (6 pers.)",
    image: "/afichesoiree2table.jpg",
    link: "https://guichet.com/ma-fr/event/concerts/ayta-dbladi-soiree-14-novembre-tables-vip-5174",
  },
  {
    title: "Soirée 15 Novembre — VIP Devant la Scène",
    image: "/afichesoiree3.jpg",
    link: "https://guichet.com/ma-fr/event/concerts/ayta-dbladi-soiree-15-novembre-vip-5152",
  },
  {
    title: "Soirée 15 Novembre — Table Privative (6 pers.)",
    image: "/afichesoiree3table.jpg",
    link: "https://guichet.com/ma-fr/event/concerts/ayta-dbladi-soiree-15-novembre-tables-vip-5173",
  },
];

const VipTicketsSection = () => {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: "#1a0f0a" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="font-boowie text-4xl md:text-6xl font-black mb-4"
            style={{ color: "#FFE5C0" }}
          >
            ESPACES VIP
          </h2>
          <div
            className="w-32 h-1 rounded-full mx-auto mb-8"
            style={{ backgroundColor: "#B06203" }}
          ></div>
          <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Offrez-vous une expérience privilégiée au cœur du festival — confort,
            vue exceptionnelle et ambiance exclusive.
          </p>
        </div>

        {/* VIP Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {vipTickets.map((ticket, index) => (
            <Link
              key={index}
              href={ticket.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden bg-[#2b1911] border border-[#B06203]/40 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative aspect-square w-full bg-black">
                <Image
                  src={ticket.image}
                  alt={ticket.title}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Below (Left aligned) */}
              <div className="p-6 text-left">
                <h3
                  className="font-boowie text-xl md:text-2xl font-bold mb-4"
                  style={{ color: "#FFE5C0" }}
                >
                  {ticket.title}
                </h3>
                <button
                  className="px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #B06203, #812216)",
                    color: "#FFE5C0",
                    boxShadow: "0 8px 30px rgba(176, 98, 3, 0.4)",
                  }}
                >
                  RÉSERVER
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VipTicketsSection;
