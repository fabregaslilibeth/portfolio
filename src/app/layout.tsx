import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LILIBETH - Portfolio",
  description: "I am Lilibeth, a visual designer. I am good at balancing logical and intuitive thinking, function and emotion, stillness and movement, and seeking and expressing the best visual expression that fulfills user needs and objectives.",
  keywords: ["visual designer", "web design", "graphic design", "art direction", "portfolio"],
  authors: [{ name: "Lilibeth" }],
  creator: "Lilibeth",
  openGraph: {
    title: "TAIKI SATO - Visual Designer Portfolio",
    description: "Visual designer specializing in web design, graphic design, and art direction.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className} >{children}</body>
    </html>
  );
}
