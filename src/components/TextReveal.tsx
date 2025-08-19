'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  animationType?: 'letter' | 'word' | 'line';
}

export default function TextReveal({ 
  text, 
  className = "", 
  delay = 0, 
  staggerDelay = 0.05,
  animationType = 'letter' 
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const lineVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const renderContent = () => {
    if (animationType === 'letter') {
      return Array.from(text).map((letter, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          className="inline-block"
          whileHover={{ 
            scale: 1.2,
            color: "#3b82f6",
            transition: { duration: 0.2 }
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ));
    }

    if (animationType === 'word') {
      return text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className="inline-block mr-2"
          whileHover={{ 
            scale: 1.05,
            color: "#3b82f6",
            transition: { duration: 0.2 }
          }}
        >
          {word}
        </motion.span>
      ));
    }

    if (animationType === 'line') {
      return text.split('\n').map((line, i) => (
        <motion.div
          key={i}
          variants={lineVariants}
          className="block"
          whileHover={{ 
            x: 10,
            color: "#3b82f6",
            transition: { duration: 0.3 }
          }}
        >
          {line}
        </motion.div>
      ));
    }

    return text;
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {renderContent()}
    </motion.div>
  );
}
