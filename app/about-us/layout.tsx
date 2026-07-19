import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "About TattoStar",
  description:
    "Learn about TattoStar, our experienced tattoo artists, creative process, hygiene standards, and commitment to delivering exceptional tattoos in Bengaluru.",
  alternates: {
    canonical: "/about",
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
