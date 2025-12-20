import type { Metadata } from "next";
import { DM_Sans, Inter, Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";
import { ThemeProvider } from "./components/ThemeContext";

// Layout 1: Original - DM Sans (friendly, approachable)
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Layout 2: Clean & Simple - Inter (clean, trustworthy, readable)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Layout 3: Bold & Dynamic - Syne (bold, modern, distinctive)
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// TODO: Update metadataBase with actual domain when available
export const metadata: Metadata = {
  metadataBase: new URL('https://faheywindowcleaning.com'),
  title: {
    default: "Fahey's Window Cleaning | Palm Harbor, FL | Residential & Commercial",
    template: "%s | Fahey's Window Cleaning",
  },
  description: "Professional window cleaning services in Palm Harbor, FL and surrounding Pinellas County. Residential homes, commercial buildings. Licensed & insured. Free estimates!",
  keywords: [
    'window cleaning',
    'window cleaning Palm Harbor',
    'window cleaning Palm Harbor FL',
    'residential window cleaning',
    'commercial window cleaning',
    'Pinellas County window cleaning',
    'window washers near me',
    'professional window cleaning',
    'Tarpon Springs window cleaning',
    'Clearwater window cleaning',
    'Dunedin window cleaning',
    'Sarasota window cleaning',
    'French door cleaning',
    'sliding glass door cleaning',
  ],
  authors: [{ name: "Fahey's Window Cleaning" }],
  creator: "Fahey's Window Cleaning",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://faheywindowcleaning.com',
    siteName: "Fahey's Window Cleaning",
    title: "Fahey's Window Cleaning | Palm Harbor, FL",
    description: "Professional window cleaning services for homes and businesses in Palm Harbor and Pinellas County, FL.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Fahey's Window Cleaning - Palm Harbor, FL",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fahey's Window Cleaning | Palm Harbor, FL",
    description: "Professional window cleaning services in Palm Harbor and Pinellas County, FL.",
  },
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
  verification: {
    // TODO: Add Google Search Console verification when ready
    // google: 'your-google-verification-code',
  },
};

// JSON-LD Structured Data for Local Business
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://faheywindowcleaning.com",
  "name": "Fahey's Window Cleaning",
  "description": "Professional window cleaning services for residential homes and commercial buildings in Palm Harbor, FL and surrounding areas. Windows stay clean 6-8 months with our professional technique.",
  "image": "https://faheywindowcleaning.com/logo.png",
  "telephone": "+1-727-278-7045",
  "email": "faheyswc@gmail.com",
  "url": "https://faheywindowcleaning.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Palm Harbor",
    "addressRegion": "FL",
    "postalCode": "34683",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.0836,
    "longitude": -82.7534
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Palm Harbor",
      "sameAs": "https://en.wikipedia.org/wiki/Palm_Harbor,_Florida"
    },
    { "@type": "City", "name": "Tarpon Springs" },
    { "@type": "City", "name": "Dunedin" },
    { "@type": "City", "name": "Clearwater" },
    { "@type": "City", "name": "Safety Harbor" },
    { "@type": "City", "name": "Oldsmar" },
    { "@type": "City", "name": "East Lake" },
    { "@type": "City", "name": "Trinity" },
    { "@type": "City", "name": "Sarasota" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Check",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Window Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Window Cleaning",
          "description": "Professional window cleaning for homes and residential properties including French doors and sliding glass doors"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Window Cleaning",
          "description": "Professional window cleaning for businesses and commercial buildings"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "French Door Cleaning",
          "description": "Professional cleaning for French doors and glass panels"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sliding Glass Door Cleaning",
          "description": "Professional cleaning for sliding glass doors"
        }
      }
    ]
  }
};

// FAQ Schema for rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long do windows stay clean after professional cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With our professional cleaning technique, your windows stay clean for 6-8 months! Our thorough process removes buildup and prevents rapid re-soiling."
      }
    },
    {
      "@type": "Question",
      "name": "Do you clean French doors and sliding glass doors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We clean all types of glass doors including French doors and sliding glass doors. These are included in our window cleaning service."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We carry full liability insurance and workers' compensation coverage. This protects you and your property."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="irish-green" data-layout="bold" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${dmSans.variable} ${inter.variable} ${syne.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyMobileCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
