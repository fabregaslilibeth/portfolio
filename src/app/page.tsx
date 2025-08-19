'use client';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';
import CustomCursor from '../components/CustomCursor';
import ScrollProgress from '../components/ScrollProgress';
import FloatingActionButton from '../components/FloatingActionButton';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <FloatingActionButton />
      <SmoothScroll>
        <Header />
        <main className="min-h-screen bg-white pt-16">
          <Hero />
          <Services />
          <Testimonials />
          <FAQ />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  )
}
