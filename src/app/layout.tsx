import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({ 
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-hind-siliguri"
});

export const metadata: Metadata = {
  title: "Lilibeth Fabregas",
  description: "Digital and UX/UI designer with 6 years of experience creating user experience tailored to business needs since 2018",
  keywords: ["digital designer", "ux/ui designer", "web design", "mobile app design", "portfolio"],
  authors: [{ name: "Lilibeth Fabregas" }],
  creator: "Lilibeth Fabregas",
  openGraph: {
    title: "Lilibeth Fabregas - Digital & UX/UI Designer",
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
      <body className={hindSiliguri.className}>{children}</body>
    </html>
  );
}
