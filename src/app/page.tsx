'use client';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16">
        <Hero />
        <Services />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
