import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SponsorSection = () => {
  const mediaPartners = [
    { name: '2M', logo: '/media-logos/2m.png', isPrimary: true },
    { name: 'Medi1', logo: '/media-logos/medi1.png', isPrimary: true },
    { name: 'MAP', logo: '/media-logos/map.png', isPrimary: true },
    { name: 'Hit Radio', logo: '/media-logos/hitradio.png', isPrimary: true },
    { name: 'Chada FM', logo: '/media-logos/chadafm.png', isPrimary: true },
    { name: 'ALM', logo: '/media-logos/alm.png', isPrimary: false },
    { name: 'SiteInfo', logo: '/media-logos/siteinfo.png', isPrimary: false },
    { name: 'WeLoveBuzz', logo: '/media-logos/welovebuzz.png', isPrimary: false },
    { name: 'Nouveliste', logo: '/media-logos/nouveliste.png', isPrimary: false },
    { name: 'Feed', logo: '/media-logos/feed.png', isPrimary: false },
    { name: 'Infomediaire', logo: '/media-logos/infomediaire.png', isPrimary: false },
    { name: "L'Informat'Heure", logo: '/media-logos/informatheure.png', isPrimary: false }
  ];

  // Create a doubled array for seamless infinite scroll
  const duplicatedPartners = [...mediaPartners, ...mediaPartners];

  return (
    <section 
      className="relative overflow-hidden flex items-center justify-center py-16 md:py-20"
      style={{ 
        backgroundColor: '#1a0f0a',
        minHeight: '50vh'
      }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFE5C0" fill-opacity="0.1"%3E%3Cpath d="M0 0h40v40H0V0zm40 40h40v40H40V40z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      ></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full opacity-10 blur-3xl" 
        style={{ backgroundColor: '#B06203' }}>
      </div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full opacity-10 blur-3xl" 
        style={{ backgroundColor: '#812216' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Official Partner Title */}
          <h2 
            className="font-boowie text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 tracking-wide"
            style={{ color: '#FFE5C0' }}
          >
            PARTENAIRE OFFICIEL
          </h2>

          {/* Official Partner Logo Container */}
          <div className="flex justify-center items-center mb-16 md:mb-20">
            <a 
              href="https://somathes.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer"
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-full"
                style={{ backgroundColor: '#B06203' }}
              ></div>

              {/* Logo */}
              <div className="relative">
                <Image 
                  src="/dahmis.png"
                  alt="Sponsor Logo"
                  width={500}
                  height={300}
                  className="w-auto h-auto max-w-[250px] md:max-w-[350px] lg:max-w-[350px] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </a>
          </div>

          {/* Media Partners Title */}
          <h2 
            className="font-boowie text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 tracking-wide"
            style={{ color: '#FFE5C0' }}
          >
            PARTENAIRES MÉDIAS
          </h2>

          {/* Infinite Scroll Carousel */}
          <div className="relative w-full mx-auto overflow-hidden">
            <div className="scroll-container">
              <div className="scroll-content">
                {duplicatedPartners.map((partner, idx) => (
                  <div
                    key={`${partner.name}-${idx}`}
                    className="group relative flex-shrink-0 flex items-center justify-center mx-6 md:mx-8 lg:mx-12"
                  >
                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ backgroundColor: '#B06203' }}
                    ></div>
                    
                    {/* Logo */}
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.isPrimary ? 160 : 140}
                      height={partner.isPrimary ? 80 : 70}
                      className={`w-auto object-contain opacity-80 group-hover:opacity-100 drop-shadow-lg transition-opacity duration-300 ${
                        partner.isPrimary ? 'h-16 md:h-20 lg:h-24' : 'h-14 md:h-16 lg:h-20'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scroll-container {
          display: flex;
          overflow: hidden;
          width: 100%;
        }

        .scroll-content {
          display: flex;
          animation: scroll 30s linear infinite;
        }

        .scroll-content:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default SponsorSection;