import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Contact TattoStar",
  description:
    "Book your tattoo appointment with TattoStar in Bengaluru. Contact our professional tattoo artists for consultations, custom tattoo designs, and appointments.",
  alternates: {
    canonical: "/contact",
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
