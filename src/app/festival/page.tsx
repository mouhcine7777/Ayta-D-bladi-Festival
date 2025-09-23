// app/page.tsx
'use client'

import HeaderSection from "../components/HeaderSection";
import FestivalSection from "./components/FestivalSection";
import FooterSection from "../components/FooterSection";




export default function Home() {
  return (
    <main>
        <HeaderSection />
      <FestivalSection />
      <FooterSection />
    </main>
  );
}