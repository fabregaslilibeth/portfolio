'use client';

import React, { useState, useEffect } from 'react';
import './style.css';
import HoverTextReveal from '../HoverTextReveal';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Throttled scroll handler for better performance
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
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  return (
    <div className={`about-section ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="about-content">
        <nav className="about-menu">
          <a href="/">
            <HoverTextReveal text="BETH FABREGAS" />
          </a>
          <a href="/works">
            <HoverTextReveal text="WORKS" />
          </a>
          <a href="/about">
            <HoverTextReveal text="ABOUT ME" />
          </a>
          <a href="/works">
            <HoverTextReveal text="CV" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default AboutSection;
