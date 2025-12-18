import type { Metadata } from "next";
import { DM_Sans, Poppins, Nunito, Lora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  "description": "Professional window cleaning services for residential homes and commercial buildings in Palm Harbor, FL and surrounding Pinellas County areas.",
  // TODO: Replace with actual logo URL
  "image": "https://faheywindowcleaning.com/logo.png",
  // TODO: Replace with actual phone number
  "telephone": "+1-727-555-0123",
  "email": "info@faheywindowcleaning.com",
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
    { "@type": "City", "name": "Trinity" }
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
          "description": "Professional window cleaning for homes and residential properties"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Window Cleaning",
          "description": "Professional window cleaning for businesses and commercial buildings"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="irish-green" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${dmSans.className} ${poppins.variable} ${nunito.variable} ${lora.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
