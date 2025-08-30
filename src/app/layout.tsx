import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-rubik"
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
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
