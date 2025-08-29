'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface CustomCursorProps {
  className?: string;
}

export default function CustomCursor({ className = '' }: CustomCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorText = cursorTextRef.current;

    if (!cursor || !cursorText) return;

    // Mouse move event
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 50,
        y: e.clientY - 50,
        duration: 0.1,
        ease: 'power2.out'
      });
    };

    // Project image hover events
    const handleProjectImageEnter = () => {
      console.log('Project image hover enter');
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(cursorText, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleProjectImageLeave = () => {
      console.log('Project image hover leave');
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(cursorText, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    // Add mouse move listener
    document.addEventListener('mousemove', handleMouseMove);

    // Use a timeout to ensure project images are rendered
    const timeoutId = setTimeout(() => {
      const projectImages = document.querySelectorAll('.project-image');
      console.log('Found project images:', projectImages.length);
      
      if (projectImages.length === 0) {
        // Try again after a longer delay
        setTimeout(() => {
          const retryImages = document.querySelectorAll('.project-image');
          console.log('Retry - Found project images:', retryImages.length);
          
          retryImages.forEach(image => {
            image.addEventListener('mouseenter', handleProjectImageEnter);
            image.addEventListener('mouseleave', handleProjectImageLeave);
          });
        }, 1000);
      } else {
        projectImages.forEach(image => {
          image.addEventListener('mouseenter', handleProjectImageEnter);
          image.addEventListener('mouseleave', handleProjectImageLeave);
        });
      }
    }, 500); // Increased timeout to ensure images are loaded

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
      
      const projectImages = document.querySelectorAll('.project-image');
      projectImages.forEach(image => {
        image.removeEventListener('mouseenter', handleProjectImageEnter);
        image.removeEventListener('mouseleave', handleProjectImageLeave);
      });
    };
  }, []);

  return (
    <div ref={cursorRef} className={`custom-cursor ${className}`}>
      <div ref={cursorTextRef} className="cursor-text">View</div>
    </div>
  );
}
