// app/page.tsx
'use client'

import HeaderSection from "../components/HeaderSection";
import LineUpSection from "./components/LineUpSection";
import FooterSection from "../components/FooterSection";




export default function Home() {
  return (
    <main>
        <HeaderSection />
        <LineUpSection />
      <FooterSection />
    </main>
  );
}