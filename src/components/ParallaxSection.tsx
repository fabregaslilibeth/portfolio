'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: [string, string];
}

export default function ParallaxSection({ 
  children, 
  className = "", 
  speed = 0.5,
  direction = 'up',
  offset = ["start end", "end start"]
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset
  });

  let transformValue;
  
  switch (direction) {
    case 'up':
      transformValue = useTransform(scrollYProgress, [0, 1], ["0%", `${-100 * speed}%`]);
      break;
    case 'down':
      transformValue = useTransform(scrollYProgress, [0, 1], ["0%", `${100 * speed}%`]);
      break;
    case 'left':
      transformValue = useTransform(scrollYProgress, [0, 1], ["0%", `${-100 * speed}%`]);
      break;
    case 'right':
      transformValue = useTransform(scrollYProgress, [0, 1], ["0%", `${100 * speed}%`]);
      break;
    default:
      transformValue = useTransform(scrollYProgress, [0, 1], ["0%", `${-100 * speed}%`]);
  }

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y: direction === 'up' || direction === 'down' ? transformValue : undefined,
        x: direction === 'left' || direction === 'right' ? transformValue : undefined,
        opacity,
        scale,
      }}
    >
      {children}
    </motion.div>
  );
}
