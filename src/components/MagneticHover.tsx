'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, ReactNode } from 'react';

interface MagneticHoverProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  scale?: number;
}

export default function MagneticHover({ 
  children, 
  className = "", 
  strength = 0.3,
  scale = 1.1 
}: MagneticHoverProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
      }}
    >
      {children}
    </motion.div>
  );
}
