// app/page.tsx
'use client'

import HeaderSection from "../components/HeaderSection";
import BilletsSection from "./components/BilletsSection";
import FooterSection from "../components/FooterSection";




export default function Home() {
  return (
    <main>
        <HeaderSection />
        <BilletsSection />
      <FooterSection />
    </main>
  );
}