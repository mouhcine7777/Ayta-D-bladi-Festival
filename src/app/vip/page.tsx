// app/page.tsx
'use client'

import HeaderSection from "../components/HeaderSection";
import VipSection from "./components/VipSection";
import FooterSection from "../components/FooterSection";




export default function Home() {
  return (
    <main>
        <HeaderSection />
        <VipSection />
      <FooterSection />
    </main>
  );
}