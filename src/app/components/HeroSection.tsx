import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-13T00:00:00').getTime();

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
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg.png)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto w-full">
          
          {/* Festival Title */}
          <h1 
            className="text-5xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-6xl font-black mb-6 sm:mb-8 text-white leading-tight"
            style={{ color: '#FFE5C0' }}
          >
            AYTA D'BLADI
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
          Pour la premiere fois à Casablanca 3 nuits de show fusion Aïta & Pop
          </p>

          {/* Countdown */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-sm sm:text-base lg:text-lg text-white/80 mb-4 sm:mb-6 uppercase tracking-wider">
              Le show commence dans
            </h3>
            
            {/* Mobile Layout - Single Row */}
            <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 overflow-x-auto">
              <div className="text-center flex-shrink-0">
                <div 
                  className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 p-2 sm:p-4 lg:p-6 rounded-lg border-2 min-w-[60px] sm:min-w-[80px] lg:min-w-[100px]"
                  style={{ 
                    backgroundColor: '#812216',
                    borderColor: '#B06203'
                  }}
                >
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-white/70 uppercase">Jours</div>
              </div>
              
              <div className="text-center flex-shrink-0">
                <div 
                  className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 p-2 sm:p-4 lg:p-6 rounded-lg border-2 min-w-[60px] sm:min-w-[80px] lg:min-w-[100px]"
                  style={{ 
                    backgroundColor: '#813504',
                    borderColor: '#B06203'
                  }}
                >
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-white/70 uppercase">Heures</div>
              </div>
              
              <div className="text-center flex-shrink-0">
                <div 
                  className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 p-2 sm:p-4 lg:p-6 rounded-lg border-2 min-w-[60px] sm:min-w-[80px] lg:min-w-[100px]"
                  style={{ 
                    backgroundColor: '#812216',
                    borderColor: '#B06203'
                  }}
                >
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-white/70 uppercase">Minutes</div>
              </div>
              
              <div className="text-center flex-shrink-0">
                <div 
                  className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 p-2 sm:p-4 lg:p-6 rounded-lg border-2 min-w-[60px] sm:min-w-[80px] lg:min-w-[100px]"
                  style={{ 
                    backgroundColor: '#813504',
                    borderColor: '#B06203'
                  }}
                >
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-white/70 uppercase">Secondes</div>
              </div>
            </div>
          </div>

          {/* Reserve Button */}
          <Link href="/billets">
            <button 
              className="text-white font-bold text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl w-auto"
              style={{ 
                backgroundColor: '#B06203',
                boxShadow: '0 8px 32px rgba(176, 98, 3, 0.3)'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#812216';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#B06203';
              }}
            >
              RÉSERVEZ MAINTENANT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;