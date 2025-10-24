import React, { useState } from 'react';
import Link from 'next/link';

const VillageFestivalSection = () => {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    {
      id: 1,
      title: "Le Musée Éphémère",
      description: "Un espace immersif retraçant l'histoire de l'Aïta à travers archives, instruments, costumes et récits.",
      image: "/musee.jpg",
      color: "#1a0f0a"
    },
    {
      id: 2,
      title: "Le Food Court",
      description: "Une sélection de chefs et de stands revisitant la cuisine marocaine et méditerranéenne, dans une ambiance conviviale ",
      image: "/food.jpg",
      color: "#FFD700"
    },
    {
      id: 3,
      title: "L’Espace Scénique",
      description: "Une scène centrale entourée de lumière et de public, où les plus grandes voix populaires se rencontrent",
      image: "/espace.jpg",
      color: "#DC143C"
    }
  ];

  const activeItem = sections.find(s => s.id === activeSection) || sections[0];

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: '#1a0f0a' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">

          <h2 className="font-boowie text-4xl md:text-5xl lg:text-6xl font-black tracking-wide" style={{ color: '#FFE5C0' }}>
            LE VILLAGE DU FESTIVAL
          </h2>
          <br></br>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed" >
            Entre les palmiers et les murs immaculés de la Cathédrale Sacré-Cœur, le festival s'installe dans un cadre patrimonial exceptionnel
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Desktop: Large Active Section */}
          <div 
            className="hidden lg:block lg:col-span-8 relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer group"
            style={{ 
              minHeight: '500px',
              backgroundColor: activeItem.color
            }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${activeItem.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-10">
              <h3 
                className="font-boowie text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                style={{ color: '#FFE5C0' }}
              >
                {activeItem.title}
              </h3>
              <p 
                className="text-lg md:text-xl max-w-2xl"
                style={{ color: 'white' }}
              >
                {activeItem.description}
              </p>
            </div>
          </div>

          {/* Desktop: Side Sections */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-4 md:gap-6">
            {sections.filter(s => s.id !== activeSection).map((section) => (
              <div
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02] group"
                style={{ 
                  minHeight: '240px',
                  backgroundColor: section.color
                }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${section.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 
                    className="font-boowie text-xl md:text-2xl font-bold"
                    style={{ color: '#FFE5C0' }}
                  >
                    {section.title}
                  </h3>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#B06203]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Mobile: All Sections Expanded */}
          <div className="lg:hidden col-span-1 flex flex-col gap-6">
            {sections.map((section) => (
              <div
                key={section.id}
                className="relative overflow-hidden rounded-2xl"
                style={{ 
                  minHeight: '400px',
                  backgroundColor: section.color
                }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${section.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 
                    className="font-boowie text-2xl md:text-3xl font-bold mb-3"
                    style={{ color: '#FFE5C0' }}
                  >
                    {section.title}
                  </h3>
                  <p 
                    className="text-base md:text-lg"
                    style={{ color: 'white' }}
                  >
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 md:mt-20">
          <h3 
            className="font-boowie text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#FFE5C0' }}
          >
            Rejoignez l'aventure Ayta D'Bladi
          </h3>
          <p 
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Trois nuits de fusion, de fête et d'émotion au cœur de Casablanca.
            <br />
            Là où la mémoire chante et la modernité danse.
          </p>
          <Link href="/billets">
            <button 
              className="group relative text-white font-bold text-lg md:text-xl px-10 md:px-14 py-4 md:py-5 rounded-full transition-all duration-500 hover:scale-105 overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #B06203, #812216)',
                boxShadow: '0 12px 40px rgba(176, 98, 3, 0.4)'
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Réserver mes billets
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VillageFestivalSection;