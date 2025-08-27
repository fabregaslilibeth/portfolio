'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import TextReveal from './TextReveal';
import MagneticHover from './MagneticHover';
import ParallaxSection from './ParallaxSection';

const works = [
  {
    id: 1,
    title: "Digital Experience",
    subtitle: "Web Design & Development",
    year: "2024",
    image: "/images/1.jpeg",
    description: "A comprehensive digital platform that redefines user interaction through innovative design and seamless functionality."
  },
  {
    id: 2,
    title: "Brand Identity",
    subtitle: "Visual Design & Strategy",
    year: "2024",
    image: "/images/2.jpeg",
    description: "Complete brand transformation that captures the essence of modern business while maintaining timeless appeal."
  },
  {
    id: 3,
    title: "Mobile Application",
    subtitle: "UX/UI Design",
    year: "2023",
    image: "/images/3.jpeg",
    description: "Intuitive mobile experience designed to enhance user engagement and streamline complex workflows."
  },
  {
    id: 4,
    title: "Creative Campaign",
    subtitle: "Marketing & Design",
    year: "2023",
    image: "/images/4.jpeg",
    description: "Multi-channel campaign that connects brands with their audience through compelling visual storytelling."
  }
];

export default function Works() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Background colors for morphing effect
  const backgroundColors = [
    "rgba(255, 255, 255, 0)", // Transparent
    "rgba(239, 68, 68, 0.2)", // Light red
    "rgba(59, 130, 246, 0.2)", // Light blue
    "rgba(16, 185, 129, 0.2)", // Light green
    "rgba(245, 158, 11, 0.2)", // Light orange
    "rgba(168, 85, 247, 0.2)", // Light purple
  ];

  // Calculate current color based on scroll progress
  const getCurrentColor = () => {
    const totalColors = backgroundColors.length - 1; // Exclude transparent
    const colorIndex = Math.floor(scrollProgress * totalColors);
    return backgroundColors[Math.min(colorIndex + 1, totalColors)];
  };

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const containerHeight = rect.height;
        
        // Calculate progress based on how much of the container has been scrolled
        const progress = Math.max(0, Math.min(1, 
          (windowHeight - rect.top) / (containerHeight - windowHeight)
        ));
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-[200vh]"
    >
      {/* Fixed morphing background */}
      <div
        className="fixed inset-0 z-0 transition-all duration-1000 ease-in-out"
        style={{
          background: getCurrentColor()
        }}
      />
      
      {/* Content container */}
      <div className="sticky top-0 h-screen flex items-center">
        <section className="w-full py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Section Header */}
        <ParallaxSection speed={0.3} className="mb-32">
          <TextReveal
            text="Works"
            className="text-6xl md:text-7xl lg:text-8xl font-black text-black leading-[0.85] tracking-tight mb-12"
            animationType="letter"
            staggerDelay={0.05}
          />
          <TextReveal
            text="Selected projects that showcase creative excellence and innovative solutions."
            className="text-2xl md:text-3xl font-medium text-gray-700 leading-relaxed max-w-4xl"
            animationType="word"
            delay={0.5}
            staggerDelay={0.1}
          />
        </ParallaxSection>

        {/* Works Grid */}
        <div className="space-y-48">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
            >
              {/* Left side - Image */}
              <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <MagneticHover strength={0.1} scale={1.02}>
                  <motion.div 
                    className="relative overflow-hidden rounded-2xl shadow-2xl"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-[600px] object-cover"
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300" />
                  </motion.div>
                </MagneticHover>
              </div>
              
              {/* Right side - Content */}
              <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6">
                    <motion.span 
                      className="text-sm font-medium text-gray-500 tracking-wider uppercase"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      {work.year}
                    </motion.span>
                  </div>
                  
                  <TextReveal
                    text={work.title}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4"
                    animationType="letter"
                    delay={0.8}
                    staggerDelay={0.05}
                  />
                  
                  <TextReveal
                    text={work.subtitle}
                    className="text-xl md:text-2xl font-medium text-gray-600 mb-8"
                    animationType="word"
                    delay={1.0}
                    staggerDelay={0.05}
                  />
                  
                  <TextReveal
                    text={work.description}
                    className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
                    animationType="word"
                    delay={1.2}
                    staggerDelay={0.03}
                  />
                  
                  <motion.button
                    className="inline-flex items-center text-lg font-medium text-black hover:text-gray-600 transition-colors duration-300"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    View Project
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
        </section>
      </div>
    </div>
  );
}
