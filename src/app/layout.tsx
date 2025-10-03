import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aytadbladi.com'),
  title: "Ayta d'bladi - Fusion Aïta × Pop | Show Musical Marocain",
  description: "Découvrez Ayta d'bladi, un show musical inédit où l'Aïta ancestrale marocaine fusionne avec la pop moderne. Concert unique alliant tradition et modernité, fusion Aïta × Pop.",
  keywords: [
    "Ayta d'bladi",
    "Aïta marocaine", 
    "fusion Aïta Pop",
    "Aïta × Pop",
    "fusion musicale",
    "pop moderne",
    "show musical",
    "concert",
    "chanson populaire",
    "musique du monde",
    "patrimoine musical",
    "artistes marocains",
    "concert Maroc",
    "tradition et modernité",
    "chaâbi",
    "world music"
  ],
  authors: [{ name: "Ayta d'bladi" }],
  creator: "Ayta d'bladi",
  publisher: "Ayta d'bladi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://aytadbladi.com',
    siteName: 'Ayta d\'bladi',
    title: 'Ayta d\'bladi - Fusion Aïta × Pop',
    description: 'Show musical inédit où l\'Aïta ancestrale marocaine fusionne avec la pop moderne. Découvrez notre concert unique.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Ayta d\'bladi - Show Musical Marocain',
      },
    ],
  },
  alternates: {
    canonical: 'https://aytadbladi.com',
  },
  category: 'entertainment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://aytadbladi.com" />
        
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '469339375526761');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=469339375526761&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
        
        {/* Structured data for better search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              "name": "Ayta d'bladi",
              "description": "Show musical inédit où l'Aïta ancestrale marocaine fusionne avec la pop moderne",
              "genre": ["World Music", "Pop", "Traditional", "Fusion"],
              "foundingLocation": {
                "@type": "Country",
                "name": "Morocco"
              },
              "url": "https://aytadbladi.com",
              "sameAs": [
                "https://www.facebook.com/aytadBladi",
                "https://instagram.com/aytadbladi",
                "https://www.tiktok.com/@aytadbladi"
              ]
            })
          }}
        />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-DMV8HSTR9V" />
      </body>
    </html>
  );
}