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
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <SmoothScroll>
        <Header />
        <main className="min-h-screen pt-16 relative">
          <Hero />
          <motion.div 
            ref={servicesRef}
            className="transition-colors duration-1000 ease-in-out"
          >
            <Services />
            <Testimonials />
          </motion.div>
          <FAQ />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  )
}
