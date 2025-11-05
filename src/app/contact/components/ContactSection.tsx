import React from 'react';

const ContactPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#3D1A00] via-[#2A1100] to-[#1A0800] pt-17">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFE5C0" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="text-center mb-12 mt-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6" style={{ color: '#FFE5C0' }}>
            CONTACTEZ-NOUS
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Pour toute question concernant le festival Ayta D&apos;Bladi, n&apos;hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6" style={{ color: '#FFE5C0' }}>
                Informations de contact
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Notre équipe est à votre disposition pour répondre à toutes vos questions concernant le festival, 
                la programmation, les billets et plus encore.
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#B06203' }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Email</h3>
                <p className="text-white/70">contact@aytadbladi.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#B06203' }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Adresse</h3>
                <p className="text-white/70"> Salle Couverte Complexe Sportif Mohammed V</p>
                <p className="text-white/60 text-sm">Casablanca, Maroc</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#FFE5C0' }}>
                Suivez-nous sur les réseaux sociaux
              </h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/aytadbladi/" 
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ 
                    background: 'linear-gradient(135deg, #B06203, #812216)'
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.40-1.439-1.44z"/>
                  </svg>
                </a>

                <a 
                  href="https://www.facebook.com/AytadBladi" 
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ 
                    background: 'linear-gradient(135deg, #B06203, #812216)'
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a 
                  href="https://www.tiktok.com/@aytadbladi" 
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ 
                    background: 'linear-gradient(135deg, #B06203, #812216)'
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.10-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@AytadBladi" 
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ 
                    background: 'linear-gradient(135deg, #B06203, #812216)'
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div className="h-96 w-full bg-gray-200 relative">
              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6318.9988046746885!2d-7.651693104163074!3d33.5802191886233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d39f83c32281%3A0x20d552e80e1130ed!2sMohammed%20V%20olimpique%20area!5e1!3m2!1sfr!2sma!4v1762274052370!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AyTA D&apos;Bladi Festival Location"
              ></iframe>
              
              {/* Map Overlay Info */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                <h3 className="font-bold text-lg" style={{ color: '#812216' }}> Salle Couverte Complexe Sportif Mohammed V</h3>
                <p className="text-sm text-gray-700 mt-1">Casablanca, Maroc</p>
              </div>
            </div>
            
            {/* Directions Button */}
            <div className="p-6" style={{ backgroundColor: 'rgba(255, 229, 192, 0.05)' }}>
              <a 
                href="https://maps.app.goo.gl/APJBSKcVKReyvK8Q7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full text-white font-bold transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#B06203',
                  boxShadow: '0 4px 14px rgba(176, 98, 3, 0.35)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#812216';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#B06203';
                }}
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Obtenir l&apos;itinéraire
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;