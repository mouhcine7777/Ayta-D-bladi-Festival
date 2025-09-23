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
                  src="/bg.png" 
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
                  src="/bg2.png" 
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6" style={{ color: '#812216' }}>
                FESTIVAL AYTA D&apos;BLADI
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Un concept inédit au Maroc : l’Aïta, patrimoine vivant, rencontre la pop et la scène
actuelle à travers des fusions exclusives. Une fusion intergénérationnelle qui met en avant
la richesse culturelle marocaine dans une forme contemporaine.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Pendant trois soirées à Casablanca, les maîtres de l’Aïta partageront la scène avec des artistes d’aujourd’hui pour offrir un show unique, entre transmission et modernité.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FestivalSection;