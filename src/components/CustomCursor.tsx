'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        const isInteractive = e.target.closest('button, a, [role="button"], input, textarea, select');
        setIsHovering(!!isInteractive);
      }
    };

    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea, select');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => setIsHovering(true));
      el.addEventListener('mouseleave', () => setIsHovering(false));
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-black rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-black rounded-full pointer-events-none z-40 mix-blend-difference"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 2 : isClicking ? 0.5 : 1,
          opacity: isHovering ? 1 : 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.5,
        }}
      />

      {/* Text indicator for interactive elements */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 bg-black text-white px-3 py-1 rounded-full text-sm font-medium pointer-events-none z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mousePosition.x + 20,
            y: mousePosition.y - 10,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          {isHovering ? 'View' : ''}
        </motion.div>
      )}
    </>
  );
}
