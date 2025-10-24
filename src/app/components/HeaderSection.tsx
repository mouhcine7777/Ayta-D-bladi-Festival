  import React, { useState, useEffect } from 'react';
  import Link from 'next/link';

  const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Check if we're on mobile on initial load and window resize
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 1024);
      };

      // Set initial mobile state
      checkMobile();

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50);
      };

      const handleResize = () => {
        checkMobile();
      };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const menuItems = [
      { name: 'ACCUEIL', href: '/' },
      { name: 'LINEUP', href: '/line-up' },
      { name: 'EXPÉRIENCE', href: '/experience' },
      { name: 'CONTACT', href: '/contact' }
    ];

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Get background style based on mobile state and scroll
    const getBackgroundStyle = () => {
      if (isMobile) {
        return isScrolled 
          ? 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #D2691E 50%, #CD853F 75%, #DEB887 100%)' 
          : 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)';
      }
      return 'transparent';
    };

    return (
      <>
        <nav 
          className={`fixed top-0 left-0 right-0 z-50 lg:bg-transparent transition-all duration-700 ease-out`}
          style={{ background: getBackgroundStyle() }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-16 lg:h-20">
              
              {/* Desktop Navigation Container with Logo, Menu, and CTA Button */}
              <div className={`hidden lg:flex items-center justify-between transition-all duration-700 ease-out ${
                isScrolled 
                  ? 'bg-gradient-to-br from-amber-900/95 via-yellow-800/90 to-orange-900/95 backdrop-blur-xl shadow-2xl rounded-full px-12 py-5 border border-amber-400/20 w-auto min-w-[800px]' 
                  : 'bg-black/20 backdrop-blur-sm rounded-full px-10 py-4 w-auto min-w-[700px]'
              }`}>
                
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className={`transition-all duration-500 ${
                    isScrolled ? 'transform scale-90' : 'transform scale-100'
                  }`}>
                    <Link href="/">
                      <img 
                        src="/logowhite.png"
                        alt="AyTA D'Bladi"
                        className="h-8 lg:h-10 filter drop-shadow-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="flex items-center space-x-1">
                  {menuItems.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:transform hover:scale-105 group ${
                        isScrolled 
                          ? 'text-white hover:bg-amber-400/20 hover:text-amber-200' 
                          : 'text-white/90 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      
                      {/* Animated background */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Dot indicator */}
                      <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                        isScrolled ? 'bg-amber-200' : 'bg-white'
                      } opacity-0 group-hover:opacity-100 group-hover:scale-150`} />
                    </Link>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex-shrink-0">
                  <Link href="/billets">
                    <button 
                      className={`relative px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-500 hover:transform hover:scale-105 overflow-hidden group ${
                        isScrolled
                          ? 'bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-white shadow-2xl hover:shadow-amber-500/25'
                          : 'bg-gradient-to-r from-amber-400 via-red-500 to-red-600 text-white shadow-2xl hover:shadow-red-500/25'
                      }`}
                    >
                      <span className="relative z-10 flex items-center space-x-2">
                        <span>RÉSERVER</span>
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                      
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden w-full flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0 z-10">
                  <div className={`transition-all duration-500 ${
                    isScrolled ? 'transform scale-90' : 'transform scale-100'
                  }`}>
                    <Link href="/">
                      <img 
                        src="/logowhite.png"
                        alt="AyTA D'Bladi"
                        className="h-10 filter drop-shadow-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>

                {/* Mobile menu button */}
                <button
                  onClick={toggleMobileMenu}
                  className={`relative p-2 rounded-lg transition-all duration-300 ${
                    isScrolled 
                      ? 'text-white hover:bg-white/10 bg-gradient-to-br from-amber-900/80 via-yellow-800/70 to-orange-900/80 backdrop-blur-md border border-amber-400/20' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''
                    }`} />
                    <div className={`w-6 h-0.5 bg-current my-1 transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0' : ''
                    }`} />
                    <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''
                    }`} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className={`absolute top-0 right-0 h-full w-80 max-w-sm bg-gradient-to-br from-gray-900 via-black to-gray-900 shadow-2xl transform transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            
            {/* Menu Items */}
            <div className="px-6 pt-20 space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-6 py-4 text-lg font-medium text-white/90 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5 border-l-4 border-transparent hover:border-amber-500 transform hover:translate-x-2 ${
                    isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    <svg className="w-5 h-5 opacity-50 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-8">
                <Link href="/billets">
                  <button 
                    className={`w-full px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:transform hover:scale-105 bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-white shadow-2xl hover:shadow-amber-500/25 ${
                      isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${menuItems.length * 100}ms` : '0ms'
                    }}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>RÉSERVER</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="text-center mt-4 text-white/40 text-sm">
                AYTA D'BLADI
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Header;