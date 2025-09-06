'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import './style.css';
import HoverTextReveal from '../HoverTextReveal';

export default function Menu() {
  useEffect(() => {
    // Set initial hidden state
    gsap.set('.menu', {
      y: '-100%',
      opacity: 0
    });

    let menuShown = false;

    // Menu animation based on about-section position
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about-section');
      
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Show menu when about-section reaches the top of viewport
        const shouldShow = rect.top <= -600;
        console.log(rect);
        if (shouldShow && !menuShown) {
          menuShown = true;
          gsap.to('.menu', {
            y: '0%',
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
          });
        } else if (!shouldShow && menuShown) {
          menuShown = false;
          gsap.to('.menu', {
            y: '-100%',
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
          });
        }
      }
    };

    // Add scroll listener with throttling for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  return (
    <nav className="menu">
      <div className="works">
        <a href="/works">
          <HoverTextReveal text="WORKS" />
        </a>
      </div>
      <div className="about">
        <a href="/about">
          <HoverTextReveal text="ABOUT" />
        </a>
      </div>
    </nav>
  );
}
