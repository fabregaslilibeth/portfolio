'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      style={{ opacity, scale }}
    >
      {/* Main FAB */}
      <motion.button
        className="w-14 h-14 bg-black text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
      >
        <motion.svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ y: isOpen ? -2 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </motion.svg>
      </motion.button>

      {/* Contact FAB */}
      <motion.button
        className="absolute bottom-0 right-0 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isOpen ? 1 : 0,
          opacity: isOpen ? 1 : 0,
          y: isOpen ? -20 : 0
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open('mailto:contact@example.com', '_blank')}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </motion.button>

      {/* Toggle button */}
      <motion.button
        className="absolute bottom-0 right-0 w-10 h-10 bg-gray-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isOpen ? 1 : 0,
          opacity: isOpen ? 1 : 0,
          y: isOpen ? -40 : 0
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </motion.svg>
      </motion.button>
    </motion.div>
  );
}
