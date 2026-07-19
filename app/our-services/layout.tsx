import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Tattoo Services",
  description:
    "Explore TattoStar's tattoo services including custom tattoos, fine line tattoos, realism, black & grey, color tattoos, cover-ups, consultations, and tattoo aftercare.",
  alternates: {
    canonical: "/services",
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
        {children}
        </body>
    </html>
  );
}
