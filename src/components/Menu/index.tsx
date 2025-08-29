'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import './style.css';
import HoverTextReveal from '../HoverTextReveal';

export default function Menu() {
  useEffect(() => {
    // Set initial hidden state
    gsap.set('.menu', {
      y: '-200px',
      opacity: 0
    });

    let menuShown = false;

    // Menu animation based on scrollY
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPosition = 400; // Adjust this value to control when menu appears
      
      if (scrollY >= triggerPosition && !menuShown) {
        menuShown = true;
        gsap.to('.menu', {
          y: '0%',
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out'
        });
      } else if (scrollY < triggerPosition && menuShown) {
        menuShown = false;
        gsap.to('.menu', {
          y: '-200px',
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="menu">
      <div className="menu-item works">
        <a href="/works">
          <HoverTextReveal text="WORKS" />
        </a>
      </div>
      <div className="menu-item about">
        <a href="/about">
          <HoverTextReveal text="ABOUT" />
        </a>
      </div>
    </nav>
  );
}
