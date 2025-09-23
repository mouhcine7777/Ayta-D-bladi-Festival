// app/page.tsx
'use client'

import HeaderSection from "../components/HeaderSection";
import ContactSection from "./components/ContactSection";




export default function Home() {
  return (
    <main>
        <HeaderSection />
      <ContactSection />
    </main>
  );
}