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
        <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <path d="
    M 50 50          
    H 450            
    C 470 50, 470 90, 450 90   
    C 470 90, 470 130, 450 130 
    C 470 130, 470 170, 450 170
    C 470 170, 470 210, 450 210
    V 350            
    H 50             
    Z" 
    fill="none" stroke="black" stroke-width="4" />
</svg>

        <Services />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
