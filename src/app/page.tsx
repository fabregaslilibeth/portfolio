'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import components
import CustomCursor from '../components/CustomCursor';
import BackgroundText from '../components/BackgroundText';
import Menu from '../components/Menu';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import ContactBadge from '../components/ContactBadge';

// Import CSS files
import '../components/CustomCursor/style.css';
import '../components/BackgroundText/style.css';
import '../components/Menu/style.css';
import '../components/ProjectsSection/style.css';
import '../components/Footer/style.css';
import '../components/ContactBadge/style.css';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  useEffect(() => {
    // Smooth scroll
    const html = document.documentElement;
    html.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative">
       
      {/* <CustomCursor /> */}
      <Menu />
      <BackgroundText />
      {/* <AboutSection /> */}
      <ProjectsSection />
      <Footer />
      <ContactBadge />
    </div >
  );
}
