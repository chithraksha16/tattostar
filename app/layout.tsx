import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



const siteUrl = "https://www.tattostar.com"; 

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "TattoStar | Best Tattoo Studio in Bengaluru",
    template: "%s | TattoStar",
  },

  description:
    "TattoStar is a professional tattoo studio in Bengaluru offering custom tattoos, cover-up tattoos, fine line tattoos, black & grey tattoos, color tattoos, tattoo consultations, and aftercare guidance. Get premium tattoo artistry from experienced artists.",

  keywords: [
    "TattoStar",
    "Tattoo Studio Bengaluru",
    "Best Tattoo Studio in Bengaluru",
    "Custom Tattoos",
    "Tattoo Artist Bengaluru",
    "Fine Line Tattoos",
    "Minimal Tattoos",
    "Black and Grey Tattoos",
    "Color Tattoos",
    "Sleeve Tattoos",
    "Cover Up Tattoos",
    "Realism Tattoos",
    "Portrait Tattoos",
    "Mandala Tattoos",
    "Traditional Tattoos",
    "Geometric Tattoos",
    "Tattoo Consultation",
    "Tattoo Aftercare",
    "Bengaluru Tattoo Shop",
    "Professional Tattoo Studio",
  ],

  authors: [
    {
      name: "TattoStar",
    },
  ],

  creator: "TattoStar",
  publisher: "TattoStar",

  category: "Tattoo Studio",

  applicationName: "TattoStar",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "TattoStar | Best Tattoo Studio in Bengaluru",
    description:
      "Premium tattoo studio in Bengaluru specializing in custom tattoos, fine line, black & grey, realism, color tattoos, cover-ups, and unique tattoo designs.",
    siteName: "TattoStar",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TattoStar Tattoo Studio Bengaluru",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TattoStar | Best Tattoo Studio in Bengaluru",
    description:
      "Professional tattoo artists in Bengaluru creating custom, fine line, realism, black & grey, and color tattoos.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

 

  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "12.9716;77.5946",
    ICBM: "12.9716, 77.5946",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
