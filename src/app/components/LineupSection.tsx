import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Artist {
  name: string;
  genre: string;
  image: string;
}

interface LineupData {
  [key: number]: Artist[];
}

const LineupSection = () => {
  const [activeDay, setActiveDay] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [cardsPerSlide, setCardsPerSlide] = useState<number>(4);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(0);
  const startY = useRef<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Mock artist data for each day with proper typing
  const lineupData: LineupData = {
    0: [ // Day 1
      { name: "Hajib", genre: "Chaabi", image: '/artists/hajib.jpg' },
      { name: "Douzi", genre: "Pop", image: '/artists/douzi.jpg' },
      { name: "Khadija Margoum", genre: "Ayta", image: '/artists/mergoum.jpg' },
      { name: "Ihab Amir", genre: "Pop", image: '/artists/ihab.jpg' }
    ],
    1: [ // Day 2
      { name: "Daoudia", genre: "Chaabi",  image: '/artists/daoudia.jpg' },
      { name: "Hamid El Kasri", genre: "Gnawa", image: '/artists/kasri.jpg' },
      { name: "Rajaa Belmir", genre: "Pop", image: '/artists/belmir.jpeg' },
      { name: "Abidine", genre: "Chaabi", image: '/artists/abidine.jpg' }
    ],
    2: [ // Day 3
      { name: "Abdellah Daoudi", genre: "Chaabi", image: '/artists/daoudi.jpg' },
      { name: "Stati Abdelaziz", genre: "Chaabi", image: '/artists/stati.jpg' },
      { name: "Manal Benchlikha", genre: "Pop & RnB", image: '/artists/manal.jpg' },
      { name: "Ibtissam Tisskat", genre: "Pop",  image: '/artists/tiskat.jpg' }
    ]
  };

  const days = [
    { label: "JOUR 1", date: "13 Nov" },
    { label: "JOUR 2", date: "14 Nov" },
    { label: "JOUR 3", date: "15 Nov" }
  ];

  // Update cards per slide based on screen size
  useEffect(() => {
    const updateCardsPerSlide = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      if (window.innerWidth >= 1280) {
        setCardsPerSlide(4); // xl screens - 4 cards
      } else if (window.innerWidth >= 1024) {
        setCardsPerSlide(3); // lg screens - 3 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerSlide(2); // md screens - 2 cards
      } else {
        setCardsPerSlide(1); // sm screens - 1 card
      }
    };

    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  const totalCards = lineupData[activeDay].length;

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % totalCards);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + totalCards) % totalCards);
  };

  // Touch/Mouse event handlers for swipe functionality
  const handleStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    startX.current = clientX;
    startY.current = clientY;
    setDragOffset(0);
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    
    const deltaX = clientX - startX.current;
    const deltaY = clientY - startY.current;
    
    // Only allow horizontal swipe if it's more horizontal than vertical
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      setDragOffset(deltaX);
    }
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 100; // Minimum distance to trigger slide
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    setDragOffset(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isMobile) return;
    handleStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile) return;
    handleMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    if (!isMobile) return;
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    handleEnd();
  };

  const handleDayChange = (dayIndex: number) => {
    setActiveDay(dayIndex);
    setCurrentIndex(0);
  };

  // Get visible artists based on current index and cards per slide
  const getVisibleArtists = (): Artist[] => {
    if (!isMobile) {
      return lineupData[activeDay];
    }
    
    const artists: Artist[] = [];
    for (let i = 0; i < cardsPerSlide; i++) {
      const index = (currentIndex + i) % totalCards;
      artists.push(lineupData[activeDay][index]);
    }
    return artists;
  };

  return (
    <section className="py-12 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#1a0f0a' }}>
      <div className="w-full px-2 md:px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className="relative inline-block">
            <h2 className="font-boowie text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 tracking-wide" style={{ color: '#FFE5C0' }}>
              PROGRAMMATION
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full" style={{ backgroundColor: '#B06203' }}></div>
          </div>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-4 mt-6">
          3 soirées de fusion explosives aves plus grands maitres de l’Aïta
          </p>
        </div>

        {/* Day Tabs with Enhanced Design */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="relative p-1 rounded-full" style={{ background: 'linear-gradient(135deg, #B06203, #812216)' }}>
            <div className="flex gap-2 p-2 rounded-full" style={{ backgroundColor: '#1a0f0a' }}>
              {days.map((day, index) => (
                <button
                  key={index}
                  onClick={() => handleDayChange(index)}
                  className={`relative px-6 md:px-10 py-4 rounded-full transition-all duration-500 transform ${
                    activeDay === index 
                      ? 'scale-105 shadow-2xl' 
                      : 'hover:scale-102'
                  }`}
                  style={{ 
                    background: activeDay === index 
                      ? 'linear-gradient(135deg, #B06203, #812216)' 
                      : 'transparent',
                    color: activeDay === index ? 'white' : '#FFE5C0',
                    boxShadow: activeDay === index ? '0 10px 40px rgba(176, 98, 3, 0.4)' : 'none'
                  }}
                >
                  <div className="text-center relative z-10">
                    <div className="font-bold text-sm md:text-lg">{day.label}</div>
                    <div className="text-xs md:text-sm opacity-90">{day.date}</div>
                  </div>
                  {activeDay === index && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Smooth Slider - Only for mobile */}
        <div className="relative w-full overflow-hidden">
          {/* Stylized Navigation Buttons - Only for mobile */}
          {isMobile && (
            <>
              <button
                onClick={prevSlide}
                className="hidden md:flex absolute left-2 lg:left-6 top-1/2 transform -translate-y-1/2 z-30 w-14 h-14 lg:w-16 lg:h-16 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 group"
                style={{ 
                  background: 'linear-gradient(135deg, #B06203, #812216)',
                  boxShadow: '0 8px 32px rgba(176, 98, 3, 0.3)'
                }}
              >
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button
                onClick={nextSlide}
                className="hidden md:flex absolute right-2 lg:right-6 top-1/2 transform -translate-y-1/2 z-30 w-14 h-14 lg:w-16 lg:h-16 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 group"
                style={{ 
                  background: 'linear-gradient(135deg, #B06203, #812216)',
                  boxShadow: '0 8px 32px rgba(176, 98, 3, 0.3)'
                }}
              >
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
                <div className="absolute inset-0 rounded-full bg-gradient-to-l from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </>
          )}

          {/* Artist Cards Container */}
          <div 
            ref={containerRef}
            className="w-full cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'pan-y' }} // Allow vertical scrolling but handle horizontal
          >
            <div className="px-4 md:px-12 lg:px-16">
              <div 
                className={`transition-transform duration-300 ease-out ${
                  isMobile ? 'flex gap-6 md:gap-8' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'
                }`}
                style={{ 
                  transform: isMobile ? `translateX(${dragOffset}px)` : 'none'
                }}
              >
                {getVisibleArtists().map((artist, index) => (
                  <div
                    key={`${activeDay}-${isMobile ? currentIndex : ''}-${index}`}
                    className="relative overflow-hidden"
                    style={{ 
                      width: isMobile ? `calc((100% - ${(cardsPerSlide - 1) * (typeof window !== 'undefined' && window.innerWidth >= 768 ? 32 : 24)}px) / ${cardsPerSlide})` : '100%',
                      height: '460px',
                      borderRadius: '24px',
                      background: 'linear-gradient(145deg, #2a1612, #1a0f0a)',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 229, 192, 0.1)'
                    }}
                  >
                    {/* Logo in the corner */}
                    <div className="absolute top-4 right-4 z-20 w-10 h-10">
                      <img src="/logowhite.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    
                    {/* Artist Image with Overlay Effects */}
                    <div className="relative h-full overflow-hidden" style={{ borderRadius: '24px' }}>
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${artist.image})` }}
                      ></div>
                      
                      {/* Shadow gradient overlay for better text visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      
                      {/* Artist Name Overlay */}
                      <div className="absolute bottom-8 left-6 right-6">
                        <h3 className="font-boowie text-xl md:text-2xl lg:text-3xl font-black leading-tight uppercase"
                            style={{ 
                              color: '#FFE5C0',
                            }}>
                          {artist.name}
                        </h3>
                        
                        {/* Animated Underline */}
                        <div className="flex items-center gap-3 mt-3">
                          <div className="h-1 rounded-full w-12"
                               style={{ backgroundColor: '#B06203' }}></div>
                          <div className="flex gap-1">
                            <div className="w-1 h-1 rounded-full opacity-60" style={{ backgroundColor: '#FFE5C0' }}></div>
                            <div className="w-1 h-1 rounded-full opacity-40" style={{ backgroundColor: '#B06203' }}></div>
                            <div className="w-1 h-1 rounded-full opacity-60" style={{ backgroundColor: '#FFE5C0' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobile && (
            <div className="flex justify-center gap-6 mt-8 md:hidden">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ 
                  background: 'linear-gradient(135deg, #B06203, #812216)',
                  boxShadow: '0 4px 16px rgba(176, 98, 3, 0.3)'
                }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ 
                  background: 'linear-gradient(135deg, #B06203, #812216)',
                  boxShadow: '0 4px 16px rgba(176, 98, 3, 0.3)'
                }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

          {/* Enhanced Pagination Dots - Only for mobile */}
          {isMobile && (
            <div className="flex justify-center mt-10 gap-2 flex-wrap">
              {Array.from({ length: totalCards }).map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative transition-all duration-500 ${
                    currentIndex === index ? 'scale-125' : 'opacity-50 hover:opacity-75 hover:scale-110'
                  }`}
                >
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: currentIndex === index ? '#B06203' : '#FFE5C0' }}
                  ></div>
                  {currentIndex === index && (
                    <div className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: '#B06203' }}></div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-16 md:mt-20">
          <Link href="/line-up" passHref>
            <button 
              className="group relative text-white font-bold text-lg md:text-xl px-10 md:px-14 py-4 md:py-5 rounded-full transition-all duration-500 hover:scale-105 overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #B06203, #812216)',
                boxShadow: '0 12px 40px rgba(176, 98, 3, 0.4)'
              }}
            >
              <span className="relative z-10">VOIR TOUT LE PROGRAMME</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LineupSection;