import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TicketsPage = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState<number | null>(null);

  // Function to track button clicks - UPDATED VERSION
  const trackPlatformClick = async (platformName: string, platformUrl: string) => {
    // Google Analytics 4 event tracking (existing)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_ticket_platform', {
        'platform_name': platformName,
        'platform_url': platformUrl,
        'event_category': 'ticket_purchase',
        'event_label': platformName,
        'value': 1
      });
    }
    
    // NEW: Send click data to your PHP tracking script
    try {
      await fetch('/track_clicks.php', {  // Update this path to match where you place the PHP file
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          platform: platformName
        })
      });
    } catch (error) {
      console.error('Error tracking click:', error);
    }
    
    // Console log for debugging
    console.log(`Clicked on ${platformName} platform`);
  };

  // Ticketing platforms
  const platforms = [
    {
      id: 1,
      name: "Tickets.ma",
      logo: "/logos/ticketma.png",
      url: "https://www.ticket.ma/ticket/festivals/3805/ayta-dbladi-pass-3-jours-2025"
    },
    {
      id: 2,
      name: "Guichet.com",
      logo: "/logos/guichet.png",
      url: "https://guichet.com/ma-fr/event/concerts/ayta-dbladi-pass-3-jours-5014"
    },
    {
      id: 3,
      name: "Events.ma",
      logo: "/logos/events.png",
      url: "https://events.ma/concerts-festivals/ayta-dbladi-pass-3-jours"
    },
    {
      id: 4,
      name: "wanaut.com",
      logo: "/logos/wanaut.png",
      url: "https://www.wanaut.com/a/ayta-dbladi-pass-3-jours/ "
    }
  ];

  return (
    <>
      {/* Add the styles in the head */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.1; }
        }
        .float-animation-1 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0s;
        }
        .float-animation-2 {
          animation: float 3.5s ease-in-out infinite;
          animation-delay: 0.2s;
        }
        .float-animation-3 {
          animation: float 4s ease-in-out infinite;
          animation-delay: 0.4s;
        }
        .float-animation-4 {
          animation: float 4.5s ease-in-out infinite;
          animation-delay: 0.6s;
        }
        .spin-animation {
          animation: spin 4s linear infinite;
        }
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#1a0f0a' }}>
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFE5C0" fill-opacity="0.1"%3E%3Cpath d="M0 0h40v40H0V0zm40 40h40v40H40V40z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}
        ></div>

        {/* Hero Section */}
        <div className="relative z-10 pt-20 pb-16">
          <div className="container mx-auto px-4 md:px-6">
            {/* Header */}
            <div className="text-center mb-16">
            </div>

            {/* Ticketing Platforms - Big Focus */}
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-center mb-6" style={{ color: '#FFE5C0' }}>
                ACHETEZ VOS BILLETS
              </h2>
              <div className="w-32 h-1 rounded-full mx-auto mb-8" style={{ backgroundColor: '#B06203' }}></div>
              <p className="text-xl md:text-2xl text-white/80 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
                Cliquez sur votre plateforme préférée pour acheter vos billets en toute sécurité
              </p>
              
              {/* Creative floating circular layout */}
              <div className="relative max-w-6xl mx-auto">

                {/* Platforms in creative arrangement */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                  {platforms.map((platform, index) => (
                    <a
                      key={platform.id}
                      href={platform.url}
                      className={`group relative flex flex-col items-center float-animation-${index + 1}`}
                      onMouseEnter={() => setHoveredPlatform(platform.id)}
                      onMouseLeave={() => setHoveredPlatform(null)}
                      onClick={() => trackPlatformClick(platform.name, platform.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* Connecting line to center */}
                      <div 
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full h-16 w-px opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                        style={{ backgroundColor: '#B06203' }}
                      ></div>

                      {/* Platform circle */}
                      <div className="relative mb-6">
                        <div
                          className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full p-6 md:p-8 flex items-center justify-center transition-all duration-700 group-hover:scale-110"
                          style={{
                            background: hoveredPlatform === platform.id
                              ? 'linear-gradient(135deg, #B06203, #812216)'
                              : 'linear-gradient(135deg, rgba(176, 98, 3, 0.1), rgba(129, 34, 22, 0.1))',
                            boxShadow: hoveredPlatform === platform.id
                              ? '0 25px 80px rgba(176, 98, 3, 0.4), 0 0 0 1px rgba(255, 229, 192, 0.2)'
                              : '0 15px 40px rgba(0, 0, 0, 0.3)',
                            backdropFilter: 'blur(20px)',
                            border: hoveredPlatform === platform.id 
                              ? '2px solid rgba(255, 229, 192, 0.3)' 
                              : '2px solid rgba(176, 98, 3, 0.2)'
                          }}
                        >
                          {/* Rotating background effect */}
                          <div 
                            className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoveredPlatform === platform.id ? 'spin-animation' : ''}`}
                            style={{
                              background: 'conic-gradient(from 0deg, transparent, rgba(255, 229, 192, 0.1), transparent)'
                            }}
                          ></div>

                          <Image 
                            src={platform.logo} 
                            alt={platform.name}
                            width={176}
                            height={176}
                            className="w-full h-full object-contain filter drop-shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>

                        {/* Pulsing ring effect */}
                        <div 
                          className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoveredPlatform === platform.id ? 'pulse-animation' : ''}`}
                          style={{
                            background: 'linear-gradient(135deg, transparent, rgba(176, 98, 3, 0.2), transparent)'
                          }}
                        ></div>
                      </div>

                      {/* Platform name */}
                      <h3 
                        className="text-xl md:text-2xl font-bold text-center transition-all duration-300 group-hover:scale-105"
                        style={{ color: hoveredPlatform === platform.id ? '#FFE5C0' : 'rgba(255, 229, 192, 0.8)' }}
                      >
                        {platform.name}
                      </h3>

                      {/* Hover indicator */}
                      <div 
                        className="mt-4 px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                        style={{
                          backgroundColor: 'rgba(176, 98, 3, 0.2)',
                          color: '#FFE5C0',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        Cliquez ici
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="max-w-4xl mx-auto p-8 rounded-3xl mb-8" style={{ background: 'linear-gradient(145deg, #2a1612, #1a0f0a)' }}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#FFE5C0' }}>
                  Prêt pour l&apos;aventure ?
                </h3>
                <p className="text-white/80 text-lg mb-6">
                  Ne manquez pas cette célébration exceptionnelle de la musique traditionnelle marocaine
                </p>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <button 
                      className="group relative px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-500 hover:scale-105 overflow-hidden"
                      style={{ 
                        background: 'linear-gradient(135deg, #B06203, #812216)',
                        boxShadow: '0 12px 40px rgba(176, 98, 3, 0.4)'
                      }}
                      onClick={() => {
                        if (typeof window !== 'undefined' && window.gtag) {
                          window.gtag('event', 'click_contact_button', {
                            'event_category': 'navigation',
                            'event_label': 'tickets_page_contact',
                            'value': 1
                          });
                        }
                      }}
                    >
                      <span className="relative z-10">CONTACT</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Footer Info */}
              <div className="text-white/60 text-sm">
                <p>Questions ? Contactez-nous au contact@aytadbladi.com</p>
                <p className="mt-2">Paiement sécurisé • Billets électroniques • Service client 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Add TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default TicketsPage;