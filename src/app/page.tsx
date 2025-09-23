// app/page.tsx
'use client'

import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import LineupSection from "./components/LineupSection";
import AboutFestival from "./components/AboutFestival";
import FooterSection from "./components/FooterSection";


export default function Home() {
  return (
    <main>
       <HeaderSection />
      <HeroSection />
      <LineupSection />
      <AboutFestival />
      <FooterSection />
    </main>
  );
}