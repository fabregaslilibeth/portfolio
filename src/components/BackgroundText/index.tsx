'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface BackgroundTextProps {
  className?: string;
}

export default function BackgroundText({ className = '' }: BackgroundTextProps) {
  useEffect(() => {
    // Register ScrollTrigger plugin
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Handle initial scroll position to prevent text overlap
    const handleInitialScroll = () => {
      const scrollY = window.scrollY;
      const projectsSection = document.querySelector('.projects-section') as HTMLElement;
      
      if (projectsSection && scrollY > projectsSection.offsetTop) {
        // If page is refreshed while scrolled down, blur background text immediately
        gsap.set('.background-text', {
          filter: 'blur(10px)',
          opacity: 0.3
        });
      }
    };

    // Run initial check
    handleInitialScroll();

    // Background text scroll animation - move down as user scrolls
    gsap.to('.background-text', {
      scrollTrigger: {
        trigger: '.background-text',
        start: 'center center',
        end: 'bottom top',
        scrub: true,
      },
      top: '50%',
      transform: 'translate(-50%, -50%)',
      ease: 'none',
    });

    // Background text blur effect on scroll
    gsap.to('.background-text', {
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top top',
        end: 'bottom center',
        scrub: true,
      },
      filter: 'blur(10px)',
      opacity: 0.3,
    });

    // Text reveal animations
    const titleElements = document.querySelectorAll('.title-view-inter');
    titleElements.forEach((element, index) => {
      gsap.fromTo(element,
        { filter: 'blur(50px)', opacity: 0, scale: 5 },
        {
          filter: 'blur(0em)',
          opacity: 1, 
          scale: 1,
          duration: 0.8,
          delay: 0.5 + (index * 0.1),
          ease: 'power2.out'
        }
      );
    });

    const italicElements = document.querySelectorAll('.title-italic');
    italicElements.forEach((element, index) => {
      gsap.fromTo(element,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          delay: 0.8 + (index * 0.1),
          ease: 'power2.out'
        }
      );
    });
  }, []);

  return (
    <div className={`background-text ${className}`}>
      <h1 className="main-title">
        <div className="title-view-inter _1">WEB </div>
        <div className="title-view-inter _2"> DEVELOPER </div>
        <br />
        <div className="title-view-inter _3">& </div>
        <div className="title-view-inter _4">CPA.</div>
      </h1>
    </div>
  );
}
