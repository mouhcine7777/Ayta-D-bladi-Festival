import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mirage = localFont({
  src: "../../public/fonts/Archane.ttf",
  variable: "--font-mirage",
});

export const metadata: Metadata = {
  title: "Ayta d'bladi",
  description: "Show inédit où l'Aïta ancestrale fusionne avec la Pop moderne.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${mirage.variable} antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-DMV8HSTR9V" />
      </body>
    </html>
  );
}