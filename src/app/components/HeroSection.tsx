import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-13T19:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        {/* Desktop Image */}
        <Image 
          src="/bg3.jpg"
          alt="Festival Background"
          fill
          className="hidden md:block object-cover"
          priority
        />
        {/* Mobile Image */}
        <Image 
          src="/bg.png"
          alt="Festival Background Mobile"
          fill
          className="block md:hidden object-cover"
          priority
        />
        {/* Gradient Overlay - Darker on Left, Lighter on Right for Desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl w-full">
          
          {/* Left Content */}
          <div className="text-left max-w-2xl">
            <div 
              className="inline-block px-4 py-2 rounded-full border-2 backdrop-blur-md mb-6"
              style={{ 
                backgroundColor: 'rgba(255, 229, 192, 0.15)',
                borderColor: '#FFE5C0'
              }}
            >
              <span className="font-semibold" style={{ color: '#FFE5C0' }}>
                13-14-15 Novembre 2025
              </span>
            </div>
            
            <h1 className="font-boowie text-6xl md:text-7xl lg:text-8xl font-black mb-6" style={{ color: '#FFE5C0' }}>
              AYTA D'BLADI
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-8 max-w-xl leading-relaxed">
              Quand la tradition rencontre la modernité. Trois nuits exceptionnelles à Casablanca.
            </p>

            <div className="flex items-center gap-3 mb-10">
              <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#FFE5C0' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium" style={{ color: '#FFE5C0' }}>
              Salle Couverte Complexe Sportif Mohammed V Casablanca
              </span>
            </div>

            {/* Countdown - Desktop Only */}
            <div className="hidden lg:block mb-10">
              <h3 
                className="text-left text-sm uppercase tracking-widest mb-6 font-semibold"
                style={{ color: '#FFE5C0' }}
              >
                Le festival commence dans
              </h3>
              
              <div className="grid grid-cols-4 gap-3 max-w-lg">
                <div className="text-center">
                  <div 
                    className="text-4xl xl:text-5xl font-black mb-2 p-4 rounded-xl backdrop-blur-md border-2"
                    style={{ 
                      backgroundColor: 'rgba(255, 229, 192, 0.15)',
                      borderColor: '#FFE5C0',
                      color: '#FFE5C0'
                    }}
                  >
                    {timeLeft.days.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs uppercase font-medium" style={{ color: '#FFE5C0' }}>
                    Jours
                  </div>
                </div>
                
                <div className="text-center">
                  <div 
                    className="text-4xl xl:text-5xl font-black mb-2 p-4 rounded-xl backdrop-blur-md border-2"
                    style={{ 
                      backgroundColor: 'rgba(255, 229, 192, 0.15)',
                      borderColor: '#FFE5C0',
                      color: '#FFE5C0'
                    }}
                  >
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs uppercase font-medium" style={{ color: '#FFE5C0' }}>
                    Heures
                  </div>
                </div>
                
                <div className="text-center">
                  <div 
                    className="text-4xl xl:text-5xl font-black mb-2 p-4 rounded-xl backdrop-blur-md border-2"
                    style={{ 
                      backgroundColor: 'rgba(255, 229, 192, 0.15)',
                      borderColor: '#FFE5C0',
                      color: '#FFE5C0'
                    }}
                  >
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs uppercase font-medium" style={{ color: '#FFE5C0' }}>
                    Min
                  </div>
                </div>
                
                <div className="text-center">
                  <div 
                    className="text-4xl xl:text-5xl font-black mb-2 p-4 rounded-xl backdrop-blur-md border-2"
                    style={{ 
                      backgroundColor: 'rgba(255, 229, 192, 0.15)',
                      borderColor: '#FFE5C0',
                      color: '#FFE5C0'
                    }}
                  >
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs uppercase font-medium" style={{ color: '#FFE5C0' }}>
                    Sec
                  </div>
                </div>
              </div>
            </div>

            <Link href="/billets">
              <button 
                className="group relative text-white font-bold text-lg px-10 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #B06203, #812216)',
                  boxShadow: '0 10px 30px rgba(129, 34, 22, 0.3)'
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Réserver mes billets
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>

          {/* Countdown - Mobile/Tablet Only */}
          <div className="lg:hidden mt-12">
            <h3 
              className="text-center text-sm uppercase tracking-widest mb-8 font-semibold"
              style={{ color: '#FFE5C0' }}
            >
              Le festival commence dans
            </h3>
            
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              <div className="text-center">
                <div 
                  className="text-3xl md:text-5xl font-black mb-2 p-3 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-md border-2"
                  style={{ 
                    backgroundColor: 'rgba(255, 229, 192, 0.15)',
                    borderColor: '#FFE5C0',
                    color: '#FFE5C0'
                  }}
                >
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm uppercase font-medium" style={{ color: '#FFE5C0' }}>
                  Jours
                </div>
              </div>
              
              <div className="text-center">
                <div 
                  className="text-3xl md:text-5xl font-black mb-2 p-3 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-md border-2"
                  style={{ 
                    backgroundColor: 'rgba(255, 229, 192, 0.15)',
                    borderColor: '#FFE5C0',
                    color: '#FFE5C0'
                  }}
                >
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm uppercase font-medium" style={{ color: '#FFE5C0' }}>
                  Heures
                </div>
              </div>
              
              <div className="text-center">
                <div 
                  className="text-3xl md:text-5xl font-black mb-2 p-3 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-md border-2"
                  style={{ 
                    backgroundColor: 'rgba(255, 229, 192, 0.15)',
                    borderColor: '#FFE5C0',
                    color: '#FFE5C0'
                  }}
                >
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm uppercase font-medium" style={{ color: '#FFE5C0' }}>
                  Min
                </div>
              </div>
              
              <div className="text-center">
                <div 
                  className="text-3xl md:text-5xl font-black mb-2 p-3 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-md border-2"
                  style={{ 
                    backgroundColor: 'rgba(255, 229, 192, 0.15)',
                    borderColor: '#FFE5C0',
                    color: '#FFE5C0'
                  }}
                >
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm uppercase font-medium" style={{ color: '#FFE5C0' }}>
                  Sec
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;