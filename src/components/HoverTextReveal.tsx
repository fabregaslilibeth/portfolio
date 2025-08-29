'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface HoverTextRevealProps {
  text: string;
  className?: string;
  fontSize?: string;
  staggerDelay?: number;
}

export default function HoverTextReveal({ 
  text, 
  className = "",
  fontSize = "32px",
  staggerDelay = 0.03
}: HoverTextRevealProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const containerVariants = {
    hidden: { 
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        staggerDirection: 1,
      }
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        staggerDirection: 1,
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 1, 
      y: 0,
    },
    visible: {
      opacity: 1,
      y: -60, //should change depending on font size
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.2
      }
    }
  };

  const hiddenLetterVariants = {
    hidden: { 
      opacity: 1, 
      y: 60, //should change depending on font size
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.1
      }
    }
  };

    return (
    <div 
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative", minHeight: ".55em", fontSize: fontSize }}
    >
      {/* Visible text that animates up and out */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        style={{ 
          color: isHovered ? "#fff" : "inherit",
          transition: "color 0.3s ease",
        }}
      >
        {Array.from(text).map((letter, i) => (
          <motion.span
            key={`visible-${i}`}
            variants={letterVariants}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Hidden text that animates up and in */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        style={{ 
          color: "#fff",
          position: "absolute",
          top: "0em",
          left: 0,
          width: "100%"
        }}
      >
        {Array.from(text).map((letter, i) => (
          <motion.span
            key={`hidden-${i}`}
            variants={hiddenLetterVariants}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
