import React from 'react';

const ExperienceHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/complex.jpg')"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Container - Center Right */}
      <div className="relative h-full flex items-center justify-center md:justify-end px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center md:text-right">
          {/* Main Title */}
          <h1 
            className="font-boowie text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6"
            style={{ 
              color: '#FFE5C0', 
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
            }}
          >
            Une expérience majestueuse à casablanca au coeur de la grande salle couverte du complexe mohammed v.
          </h1>

          {/* Subtitle */}
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed"
            style={{ 
              color: 'white',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
            }}
          >
            Musique, mémoire et émotions — Là où toutes les générations se réunissent sous un même toit pour célébrer la puissance du patrimoine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceHero;