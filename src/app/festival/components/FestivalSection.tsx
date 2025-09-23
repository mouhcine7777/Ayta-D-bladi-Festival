import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const FestivalPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);
  const pageRef = useRef(null);
  const conceptSectionRef = useRef<HTMLElement>(null);

  // Festival experiences data
  const experiences = [
    {
      title: "Espace Concert",
      subtitle: "Scène Principale",
      description: "Duos artistiques inédits entre icônes traditionnelles et voix émergentes, revisitant les hits emblématiques de l'Aïta avec des arrangements modernes et touches électro.",
      color: "#B06203",
      image: "/bg.png"
    },
    {
      title: "Musée Vivant",
      subtitle: "Patrimoine Interactif",
      description: "Découvrez l'histoire fascinante de l'Aïta à travers des installations immersives, des archives sonores et des témoignages d'artistes légendaires.",
      color: "#812216",
      image: "/bg2.png"
    },
    {
      title: "Rue des Chioukh",
      subtitle: "& Chikhat",
      description: "Déambulez dans un univers authentique où les maîtres de l'Aïta partagent leur art dans une atmosphère intimiste et conviviale.",
      color: "#B06203",
      image: "/feed.jpg"
    },
    {
      title: "Espace Culinaire",
      subtitle: "Saveurs du Terroir",
      description: "Explorez les richesses gastronomiques marocaines avec des chefs passionnés qui subliment les recettes traditionnelles.",
      color: "#812216",
      image: "/bg.png"
    },
    {
      title: "Métiers en Action",
      subtitle: "Halka & Artisanat",
      description: "Assistez aux démonstrations de maîtres artisans, découvrez la Halka traditionnelle et participez à des ateliers de Henné authentique.",
      color: "#B06203",
      image: "/bg2.png"
    }
  ];

  // Auto-rotate experiences
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExperience(prev => (prev + 1) % experiences.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [experiences.length]);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (pageRef.current) {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to concept section
  const scrollToConceptSection = () => {
    conceptSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-[#1a0f0a] via-[#2a1612] to-[#1a0f0a]">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-black/20">
        <div 
          className="h-full transition-all duration-300 ease-out"
          style={{ 
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #B06203, #812216, #FFE5C0)'
          }}
        />
      </div>

      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{
              backgroundImage: `url(${experiences[currentExperience].image})`,
              filter: 'blur(2px)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: i % 2 === 0 ? '#B06203' : '#FFE5C0' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className=" text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight" style={{ color: '#FFE5C0' }}>
              AYTA D&apos;BLADI
            </h1>
            <div className="h-1 w-32 mx-auto mb-8 rounded-full" style={{ backgroundColor: '#B06203' }} />
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto font-light">
            Bien plus qu&apos;un festival musical : une célébration <span style={{ color: '#FFE5C0' }}>vivante</span>, 
            <span style={{ color: '#B06203' }}> moderne</span> et <span style={{ color: '#FFE5C0' }}>immersive</span> du patrimoine populaire marocain
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={scrollToConceptSection}
              className="group relative px-10 py-4 rounded-full text-white font-bold text-lg transition-all duration-500 hover:scale-105 overflow-hidden cursor-pointer"
              style={{ 
                background: 'linear-gradient(135deg, #B06203, #812216)',
                boxShadow: '0 12px 40px rgba(176, 98, 3, 0.4)'
              }}
            >
              <span className="relative z-10">DÉCOUVRIR L&apos;EXPÉRIENCE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
            
            <div className="flex items-center gap-3 text-white/80">
              <span className="text-sm uppercase tracking-wider">Casablanca</span>
              <div className="w-1 h-1 rounded-full bg-current" />
              <span className="text-sm uppercase tracking-wider">13-15 Nov 2025</span>
            </div>
          </div>

          {/* Experience Indicator */}
          <div className="flex justify-center gap-2">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentExperience(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentExperience === index ? 'scale-125' : 'opacity-50 hover:opacity-75'
                }`}
                style={{ backgroundColor: currentExperience === index ? '#B06203' : '#FFE5C0' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section ref={conceptSectionRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className=" text-4xl md:text-6xl font-black mb-6" style={{ color: '#FFE5C0' }}>
                UN CONCEPT RÉVOLUTIONNAIRE
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#B06203] to-[#812216] mx-auto mb-8" />
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Trois soirées exceptionnelles où tradition et modernité se rencontrent dans des duos artistiques inédits
              </p>
            </div>

            {/* Main Concept */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative">
                <div className="relative h-96 rounded-3xl overflow-hidden">
                  <Image 
                    src="/bg.png" 
                    alt="Artistes en duo" 
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-1 rounded-full" style={{ backgroundColor: '#B06203' }} />
                      <span className="text-sm uppercase tracking-wider text-white/80">Tradition × Innovation</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Duos Artistiques Inédits</h3>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative p-8 rounded-2xl" style={{ backgroundColor: 'rgba(176, 98, 3, 0.1)' }}>
                  <div className="flex items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFE5C0' }}>Pont Entre Générations</h3>
                      <p className="text-white/80 leading-relaxed">
                        Des icônes du genre traditionnel s&apos;associent aux voix émergentes pour créer des performances uniques
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative p-8 rounded-2xl" style={{ backgroundColor: 'rgba(129, 34, 22, 0.1)' }}>
                  <div className="flex items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFE5C0' }}>Réinvention Créative</h3>
                      <p className="text-white/80 leading-relaxed">
                        Arrangements modernes, touches électro, fusion avec d&apos;autres styles... l&apos;Aïta se réinvente
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative p-8 rounded-2xl" style={{ backgroundColor: 'rgba(255, 229, 192, 0.1)' }}>
                  <div className="flex items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFE5C0' }}>Souffle Nouveau</h3>
                      <p className="text-white/80 leading-relaxed">
                        Chaque hit emblématique du répertoire Aïta renaît avec une identité contemporaine
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Experiences Section - Without Images */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2a1612] to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className=" text-4xl md:text-6xl font-black mb-6" style={{ color: '#FFE5C0' }}>
              UNIVERS IMMERSIFS
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#B06203] to-[#812216] mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Plongez dans plusieurs mondes thématiques pour une expérience sensorielle et culturelle complète
            </p>
          </div>

          {/* Experience Cards - Simple Design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl p-8"
                style={{ 
                  height: '280px',
                  background: `linear-gradient(145deg, ${experience.color}15, rgba(26, 15, 10, 0.6))`,
                  border: `1px solid ${experience.color}30`
                }}
              >
                {/* Content */}
                <div className="relative h-full flex flex-col justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight" style={{ color: '#FFE5C0' }}>
                      {experience.title}
                    </h3>
                    <p className="text-lg font-semibold mb-6 opacity-90" style={{ color: experience.color }}>
                      {experience.subtitle}
                    </p>
                    <p className="text-white/90 leading-relaxed text-sm lg:text-base">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casablanca Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full" 
                     style={{ backgroundColor: 'rgba(176, 98, 3, 0.2)' }}>
                  <span className="text-white/80 text-sm uppercase tracking-wider">Casablanca</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight" 
                    style={{ color: '#FFE5C0' }}>
                  SYMBOLE DE MODERNITÉ & CRÉATIVITÉ
                </h2>
                
                <div className="space-y-6">
                  <p className="text-xl text-white/90 leading-relaxed">
                    C&apos;est dans la ville de <span style={{ color: '#B06203' }}>Casablanca</span>, 
                    symbole de modernité et de créativité, que l&apos;événement 
                    <span style={{ color: '#FFE5C0' }}> Ayta D&apos;Bladi</span> s&apos;inscrit...
                  </p>
                  
                  <p className="text-lg text-white/80 leading-relaxed">
                    Une métropole vibrante où tradition et innovation coexistent harmonieusement, 
                    offrant le cadre parfait pour cette célébration unique du patrimoine marocain.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">
                    {['Innovation', 'Tradition', 'Créativité', 'Culture'].map((tag, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 rounded-full text-sm font-medium transition-colors hover:scale-105"
                        style={{ 
                          backgroundColor: index % 2 === 0 ? 'rgba(176, 98, 3, 0.2)' : 'rgba(255, 229, 192, 0.2)',
                          color: index % 2 === 0 ? '#B06203' : '#FFE5C0'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
                    <Image 
                      src="/feed.jpg" 
                      alt="Casablanca skyline" 
                      width={600}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Floating info cards */}
                    <div className="absolute top-6 left-6 right-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#B06203] to-[#812216] flex items-center justify-center">
                            <span className="text-white font-bold">CM</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-white">Casablanca</h4>
                            <p className="text-white/80 text-sm">Métropole Culturelle</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-4 border-current opacity-20"
                       style={{ color: '#B06203' }} />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full"
                       style={{ backgroundColor: '#812216', opacity: 0.3 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FestivalPage;