// app/page.tsx
'use client'

import HeaderSection from "../components/HeaderSection";
import ExperienceHero from "./components/ExperienceHero";
import ExperienceSection from "./components/ExperienceSection";
import FooterSection from "../components/FooterSection";




export default function Home() {
  return (
    <main>
        <HeaderSection />
        <ExperienceHero />
        <ExperienceSection />
      <FooterSection />
    </main>
  );
}