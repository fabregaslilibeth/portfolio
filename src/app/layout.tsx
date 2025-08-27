import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veronica Zubakova - Digital & UX/UI Designer",
  description: "Digital and UX/UI designer with 6 years of experience creating user experience tailored to business needs since 2018",
  keywords: ["digital designer", "ux/ui designer", "web design", "mobile app design", "portfolio"],
  authors: [{ name: "Veronica Zubakova" }],
  creator: "Veronica Zubakova",
  openGraph: {
    title: "Veronica Zubakova - Digital & UX/UI Designer",
    description: "Digital and UX/UI designer with 6 years of experience creating user experience tailored to business needs since 2018",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
