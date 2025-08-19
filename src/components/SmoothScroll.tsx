'use client';
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Initialize Locomotive Scroll
    locomotiveRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.05, // Linear interpolation for smooth movement
      multiplier: 0.8, // Scroll speed multiplier
      smartphone: {
        smooth: true,
        lerp: 0.05,
      },
      tablet: {
        smooth: true,
        lerp: 0.05,
      },
      reloadOnContextChange: true,
      touchMultiplier: 2,
      smoothMobile: true,
    });

    // Update locomotive scroll on window resize
    const handleResize = () => {
      locomotiveRef.current?.update();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (locomotiveRef.current) {
        locomotiveRef.current.destroy();
      }
    };
  }, []);

  return (
    <div 
      ref={scrollRef} 
      data-scroll-container
      className="relative"
    >
      {children}
    </div>
  );
}
