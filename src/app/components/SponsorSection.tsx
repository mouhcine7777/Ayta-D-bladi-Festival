import React from 'react';
import Image from 'next/image';

const SponsorSection = () => {
  return (
    <section 
      className="relative overflow-hidden flex items-center justify-center"
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
        <div className="text-center">
          {/* Title */}
          <h2 
            className="font-boowie text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 tracking-wide"
            style={{ color: '#FFE5C0' }}
          >
            PARTENAIRE OFFICIEL
          </h2>
          
          {/* Subtitle */}
          <p 
            className="text-sm md:text-base lg:text-lg text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto"
          >
            Merci à notre partenaire qui rend possible cette célébration unique de l'Aïta
          </p>

          {/* Logo Container */}
          <div className="flex justify-center items-center">
            <div className="relative group">
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-full"
                style={{ backgroundColor: '#B06203' }}
              ></div>

              {/* Logo */}
              <div className="relative">
                <Image 
                  src="/logo.png"
                  alt="Sponsor Logo"
                  width={600}
                  height={400}
                  className="w-auto h-auto max-w-[250px] md:max-w-[350px] lg:max-w-[450px] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;