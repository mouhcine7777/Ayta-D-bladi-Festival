import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

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
      
      // Google Ads Conversion Tracking
      window.gtag('event', 'conversion', {
        'send_to': 'AW-432514164/GcUtCNfCnqkbEPTIns4B',
        'transaction_id': ''
      });
    }
    
    // TikTok Pixel event tracking
    if (typeof window !== 'undefined' && window.ttq) {
      window.ttq.track('ClickButton', {
        content_name: platformName,
        content_category: 'ticket_platform',
        value: platformUrl
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
      name: "Ticket.ma",
      logo: "/logos/ticketma.png",
      url: "https://www.ticket.ma/ticket/ayta-dbladi"
    },
    {
      id: 2,
      name: "Guichet.com",
      logo: "/logos/guichet.png",
      url: "https://guichet.com/ma-fr/event/producer/ayta-dbladi"
    },
    {
      id: 3,
      name: "Events.ma",
      logo: "/logos/events.png",
      url: "https://events.ma/ayta-dbladi"
    },
    {
      id: 4,
      name: "wanaut.com", 
      logo: "/logos/wanaut.png",
      url: "https://www.wanaut.com/a/ayta-dbladi-pass-3-jours/"
    }
  ];

  return (
    <>
      {/* TikTok Pixel Code */}
      <Script id="tiktok-pixel" strategy="afterInteractive">
        {`
          !function (w, d, t) {
            w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
          var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
          ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
            ttq.load('D3J81GRC77U2RE92UOU0');
            ttq.page();
          }(window, document, 'ttq');
        `}
      </Script>

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
            <div className="mb-24">
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

            {/* Concept Section */}
            <div className="mb-16 mt-32 lg:mt-32">
              <div className="max-w-6xl mx-auto">
                <div 
                  className="relative rounded-3xl overflow-visible p-8 lg:p-12 backdrop-blur-xl border border-amber-400/30 shadow-2xl"
                  style={{ 
                    background: 'linear-gradient(135deg, #CD853F, #DEB887, #D2691E)'
                  }}
                >
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-4">
                      <div className="space-y-3 text-gray-900 text-sm md:text-base leading-relaxed">
                        <p className="font-boowie font-bold text-lg md:text-xl text-gray-800">
                          Un concept inédit au Maroc
                        </p>
                        <p className="font-medium">
                          l'Aïta, patrimoine vivant, rencontre la pop et la scène actuelle à travers des fusions exclusives. Une fusion intergénérationnelle qui met en avant la richesse culturelle marocaine dans une forme contemporaine.
                        </p>
                        <p className="font-medium">
                          Pendant trois soirées à Casablanca, les maîtres de l'Aïta partageront la scène avec des artistes d'aujourd'hui pour offrir un show unique, entre transmission et modernité.
                        </p>
                      </div>
                      
                      <Link 
                        href="/line-up"
                        className="font-boowie inline-block mt-6 px-8 py-3 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        style={{
                          backgroundColor: '#812216',
                          color: '#FFE5C0',
                          boxShadow: '0 4px 15px rgba(129, 34, 22, 0.3)'
                        }}
                      >
                        DÉCOUVRIR LE LINE-UP
                      </Link>
                    </div>

                    {/* Right Image - Bigger on mobile, Overflowing on Desktop */}
                    <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-3/5 lg:pr-8">
                      <div className="relative lg:translate-x-16 -mx-8 sm:mx-0">
                        <Image 
                          src="/artistes.png"
                          alt="Les Artistes"
                          width={800}
                          height={800}
                          className="w-full h-auto object-contain drop-shadow-2xl scale-125 sm:scale-100 lg:scale-120"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Add TypeScript declaration for gtag and ttq
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    ttq: {
      track: (event: string, params?: any) => void;
      page: () => void;
      load: (id: string) => void;
    };
  }
}

export default TicketsPage; 