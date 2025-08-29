'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './style.css';

interface MaskTextProps {
  phrases: string[];
  fontSize?: string;
  className?: string;
  staggerDelay?: number;
}

const MaskText: React.FC<MaskTextProps> = ({ 
  phrases, 
  fontSize = "3rem",
  className = "",
  staggerDelay = 0
}) => {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-10%" });

  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: staggerDelay + (0.075 * i)
      }
    })
  };

  return (
    <div ref={body} className={`mask-text-body ${className}`}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className="mask-text-line">
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={isInView ? "enter" : ""}
              style={{ fontSize }}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
};

export default MaskText;
