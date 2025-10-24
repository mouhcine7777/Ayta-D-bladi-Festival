import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FestivalSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center py-12 md:py-16 overflow-hidden" id="festival">
      {/* Background with beige to white gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F4E9] via-[#F5F1E6] to-white z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Images on the left */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-1">
                <Image 
                  src="/cathedrale.jpg" 
                  alt="Traditional Moroccan musicians performing"
                  className="w-full h-full object-cover"
                  width={400}
                  height={288}
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-1 mt-8">
                <Image 
                  src="/musee.jpg" 
                  alt="Colorful festival atmosphere"
                  className="w-full h-full object-cover"
                  width={400}
                  height={288}
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-1 col-span-2">
                <Image 
                  src="/feed.jpg" 
                  alt="Audience enjoying the festival"
                  className="w-full h-full object-cover"
                  width={800}
                  height={288}
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          
          {/* Title and paragraph on the right */}
          <div className="w-full lg:w-1/2">
            <div className=" mx-auto lg:mx-0">
              <h2 className="font-boowie text-4xl md:text-5xl lg:text-6xl font-black mb-6" style={{ color: '#812216' }}>
                FESTIVAL AYTA D&apos;BLADI
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Un concept inédit au Maroc : l'Aïta, patrimoine vivant, rencontre la pop et la scène
actuelle à travers des fusions exclusives. Une fusion intergénérationnelle qui met en avant
la richesse culturelle marocaine dans une forme contemporaine.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Pendant trois soirées à Casablanca, les maîtres de l'Aïta partageront la scène avec des artistes d'aujourd'hui pour offrir un show unique, entre transmission et modernité.
              </p>
              
              {/* Venue Badge */}
              <div className="flex justify-start mb-8">
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border transform hover:scale-105 transition-all duration-300"
                  style={{ 
                    background: 'rgba(129, 34, 22, 0.08)',
                    borderColor: 'rgba(176, 98, 3, 0.3)',
                    boxShadow: '0 4px 16px rgba(176, 98, 3, 0.1)'
                  }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#B06203' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm md:text-base font-semibold" style={{ color: '#812216' }}>
                    Les Jardins de la Cathédrale Sacré-Coeur
                  </p>
                </div>
              </div>

              {/* Experience Button */}
              <div className="flex justify-start">
                <Link href="/experience">
                  <button 
                    className="group relative text-white font-bold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-full transition-all duration-500 hover:scale-105 overflow-hidden"
                    style={{ 
                      background: 'linear-gradient(135deg, #B06203, #812216)',
                      boxShadow: '0 8px 24px rgba(176, 98, 3, 0.3)'
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Découvrir l'expérience
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FestivalSection;