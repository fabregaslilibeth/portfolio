'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Text reveal animation variants with spring effect (inspired by Droomedaeris)
  const textRevealVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 0.7,
        duration: 1.2
      }
    })
  };

  // Magnetic hover effect
  const magneticVariants = {
    hover: {
      x: mousePosition.x * 0.01,
      y: mousePosition.y * 0.01,
      transition: { type: "spring", stiffness: 150, damping: 15 }
    }
  };

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background texture overlay */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-600"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main heading with letter-by-letter reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h1 className="text-8xl md:text-9xl lg:text-[20rem] font-black text-black leading-[0.85] tracking-tight">
            {Array.from("Lilibeth").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={textRevealVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  scale: 1.15,
                  color: "#3b82f6",
                  y: -5,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.3
                  }
                }}
                className="inline-block cursor-pointer"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Subtitle with magnetic hover effect */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-20"
          variants={magneticVariants}
          whileHover="hover"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 leading-relaxed max-w-4xl">
            Certified Public Accountant. Full Stack Developer.
          </p>
        </motion.div> */}

        {/* Call to action section with enhanced hover effects */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mb-24"
        >
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Pick a plan, submit a job request, and your project will kickoff within 24 hours.
          </p>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center text-xl md:text-2xl font-medium text-black border-b-2 border-black pb-2 hover:pb-4 transition-all duration-300 group"
          >
            <span className="relative overflow-hidden">
              <motion.span
                className="block"
                whileHover={{ y: -100, transition: { duration: 0.3 } }}
              >
                Contact Me
              </motion.span>
              <motion.span
                className="absolute top-0 left-0 text-blue-600"
                initial={{ y: 100 }}
                whileHover={{ y: 0, transition: { duration: 0.3 } }}
              >
                View CV
              </motion.span>
            </span>
            <motion.svg 
              className="ml-4 w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ rotate: 90, transition: { duration: 0.3 } }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>
        </motion.div> */}

        {/* Bottom section with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="pt-20 border-t border-gray-200"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 leading-relaxed"
              whileHover={{ 
                x: 10,
                color: "#3b82f6",
                transition: { duration: 0.3 }
              }}
            >
              Strategy, Design, and Development. Lightning-fast, lean, and sensibly priced.
            </motion.p>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 leading-relaxed"
              whileHover={{ 
                x: 10,
                color: "#3b82f6",
                transition: { duration: 0.3 }
              }}
            >
              Get max value and velocity in a turnkey platform that promises your brand will be Better Off®.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Floating elements for visual interest */}
      {/* <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-gray-200 rounded-full opacity-30"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      /> */}
    </section>
  );
}
