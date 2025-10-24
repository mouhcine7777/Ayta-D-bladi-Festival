import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Artist {
  name: string;
  genre: string;
  image: string;
  day: number;
}

const LineupPage = () => {
  const [activeDay, setActiveDay] = useState<'all' | number>('all');
  const [searchQuery] = useState('');

  // Complete artist data
  const artists: Artist[] = [
    // Day 1
    { name: "Hajib", genre: "Chaabi", image: '/artists/hajib.jpg', day: 1 },
    { name: "Douzi", genre: "Pop", image: '/artists/douzi.jpg', day: 1 },
    { name: "Khadija Margoum", genre: "Ayta", image: '/artists/mergoum.jpg', day: 1 },
    { name: "Ihab Amir", genre: "Pop", image: '/artists/ihab.jpg', day: 1 },
    
    // Day 2
    { name: "Daoudia", genre: "Chaabi", image: '/artists/daoudia.jpg', day: 2 },
    { name: "Hamid El Kasri", genre: "Gnawa", image: '/artists/kasri.jpg', day: 2 },
    { name: "Rajaa Belmir", genre: "Pop", image: '/artists/belmir.jpeg', day: 2 },
    { name: "Abidine", genre: "Chaabi", image: '/artists/abidine.jpg', day: 2 },
    
    // Day 3
    { name: "Abdellah Daoudi", genre: "Chaabi", image: '/artists/daoudi.jpg', day: 3 },
    { name: "Stati Abdelaziz", genre: "Chaabi", image: '/artists/stati.jpg', day: 3 },
    { name: "Manal Benchlikha", genre: "RnB & Pop", image: '/artists/manal.jpg', day: 3 },
    { name: "Ibtissam Tisskat", genre: "Pop", image: '/artists/tiskat.jpg', day: 3 },
  ];

  const days = [
    { label: "TOUS", value: 'all' as const },
    { label: "JOUR 1", value: 1, date: "13 Nov" },
    { label: "JOUR 2", value: 2, date: "14 Nov" },
    { label: "JOUR 3", value: 3, date: "15 Nov" }
  ];

  // Filter artists based on active day and search
  const filteredArtists = artists.filter((artist: Artist) => {
    const dayMatch = activeDay === 'all' || artist.day === activeDay;
    const searchMatch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       artist.genre.toLowerCase().includes(searchQuery.toLowerCase());
    return dayMatch && searchMatch;
  });

  // Group artists by day for timeline view
  const artistsByDay: Record<number, Artist[]> = {
    1: artists.filter((a: Artist) => a.day === 1),
    2: artists.filter((a: Artist) => a.day === 2),
    3: artists.filter((a: Artist) => a.day === 3),
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#1a0f0a' }}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
             style={{ background: 'radial-gradient(circle, #B06203, transparent)' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
             style={{ background: 'radial-gradient(circle, #812216, transparent)', animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-12 lg:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Header */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="font-boowie text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 md:mb-12 lg:mb-6 tracking-wide animate-fadeIn"
                style={{ color: '#FFE5C0', textShadow: '0 0 40px rgba(176, 98, 3, 0.3)' }}>
              PROGRAMMATION
            </h1>
            <div className="w-24 md:w-32 h-1 rounded-full mx-auto mb-4 md:mb-6" 
                 style={{ background: 'linear-gradient(90deg, transparent, #B06203, transparent)' }}></div>
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto px-4">
              Trois jours exceptionnels avec les plus grands maîtres de l&apos;Ayta
            </p>
          </div>

          {/* Day Filter Tabs */}
          <div className="flex justify-center mb-8 md:mb-12 px-4">
            <div className="inline-flex flex-wrap gap-1 sm:gap-2 p-2 rounded-full w-full sm:w-auto justify-center" 
                 style={{ background: 'rgba(176, 98, 3, 0.1)', backdropFilter: 'blur(10px)' }}>
              {days.map((day) => (
                <button
                  key={day.value}
                  onClick={() => setActiveDay(day.value)}
                  className="relative px-3 sm:px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-full transition-all duration-500 text-sm sm:text-base"
                  style={{ 
                    background: activeDay === day.value 
                      ? 'linear-gradient(135deg, #B06203, #812216)' 
                      : 'transparent',
                    color: activeDay === day.value ? 'white' : '#FFE5C0',
                    transform: activeDay === day.value ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: activeDay === day.value ? '0 8px 24px rgba(176, 98, 3, 0.3)' : 'none'
                  }}
                >
                  <span className="font-bold">{day.label}</span>
                  {day.date && <span className="block text-xs mt-1 opacity-90">{day.date}</span>}
                  {activeDay === day.value && (
                    <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Artists Grid */}
          {activeDay === 'all' ? (
            // Timeline View for All Days
            <div className="space-y-12 md:space-y-16">
              {[1, 2, 3].map((dayNum: number) => (
                <div key={dayNum} className="relative">
                  {/* Day Header */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 md:mb-8 px-4">
                    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center"
                         style={{ 
                           background: 'linear-gradient(135deg, #B06203, #812216)',
                           boxShadow: '0 10px 30px rgba(176, 98, 3, 0.3)'
                         }}>
                      <span className="text-white font-black text-xl md:text-2xl">J{dayNum}</span>
                    </div>
                    <div className="flex-grow text-center sm:text-left">
                      <h2 className="font-boowie text-2xl md:text-3xl font-bold" style={{ color: '#FFE5C0' }}>
                        Jour {dayNum} - {dayNum === 1 ? '13 Nov' : dayNum === 2 ? '14 Nov' : '15 Nov'}
                      </h2>
                      <div className="h-1 w-full rounded-full mt-2" 
                           style={{ background: 'linear-gradient(90deg, #B06203, transparent)' }}></div>
                    </div>
                  </div>

                  {/* Artists for this day */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 px-4 sm:pl-0 md:pl-24">
                    {artistsByDay[dayNum]?.map((artist: Artist, index: number) => (
                      <div
                        key={`${artist.name}-${dayNum}`}
                        className="relative overflow-hidden rounded-2xl"
                        style={{
                          height: '420px',
                          animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                        }}
                      >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                          <div className="w-full h-full bg-center bg-cover"
                               style={{ backgroundImage: `url(${artist.image})` }}></div>
                        </div>

                        {/* Logo */}
                        <div className="absolute top-4 right-4 z-20">
                          <Image 
                            src="/logowhite.png" 
                            alt="Logo" 
                            width={40}
                            height={40}
                            className="w-8 h-8 md:w-10 md:h-10 object-contain opacity-80"
                          />
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20 pb-6 md:pb-8">
                          <p className="font-austin text-xs md:text-3xl font-semibold mb-3" style={{ color: '#B06203' }}>
                            {artist.genre}
                          </p>
                          <h3 className="font-boowie text-xl md:text-2xl font-black text-white mb-2">
                            {artist.name}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Grid View for Single Day
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-4">
              {filteredArtists.map((artist: Artist, index: number) => (
                <div
                  key={artist.name}
                  className="relative overflow-hidden rounded-3xl"
                  style={{
                    height: '480px',
                    animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Card Background */}
                  <div className="absolute inset-0" 
                       style={{ 
                         background: 'linear-gradient(145deg, #2a1612, #1a0f0a)',
                         boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
                       }}></div>

                  {/* Artist Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                    <div className="w-full h-full bg-center bg-cover"
                         style={{ backgroundImage: `url(${artist.image})` }}></div>
                  </div>

                  {/* Logo */}
                  <div className="absolute top-6 right-6 z-20">
                    <Image 
                      src="/logowhite.png" 
                      alt="Logo" 
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain opacity-80"
                    />
                  </div>

                  {/* Artist Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 pb-8 md:pb-10">
                    <p className="text-sm font-bold mb-3" style={{ color: '#B06203' }}>
                      {artist.genre}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#FFE5C0' }}>
                      {artist.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#B06203' }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results Message */}
          {filteredArtists.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl md:text-2xl text-white/60">Aucun artiste trouvé</p>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="text-center mt-16 md:mt-20 px-4">
            <Link 
              href="/billets"
              className="inline-block relative px-8 md:px-12 py-4 md:py-5 rounded-full text-white font-bold text-lg md:text-xl transition-all duration-500 overflow-hidden hover:scale-105 cursor-pointer"
              style={{ 
                background: 'linear-gradient(135deg, #B06203, #812216)',
                boxShadow: '0 15px 50px rgba(176, 98, 3, 0.4)'
              }}
            >
              <span className="relative z-10">RÉSERVER VOS BILLETS</span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInScale {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default LineupPage;