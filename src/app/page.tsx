'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const sections = [
  {
    id: 'hero',
    title: 'Welcome',
    subtitle: 'Scroll to explore',
    bgColor: '#667eea',
    textColor: '#ffffff'
  },
  {
    id: 'about',
    title: 'About',
    subtitle: 'Learn more about us',
    bgColor: '#f093fb',
    textColor: '#ffffff'
  },
  {
    id: 'services',
    title: 'Services',
    subtitle: 'What we offer',
    bgColor: '#4facfe',
    textColor: '#ffffff'
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    subtitle: 'Our work',
    bgColor: '#43e97b',
    textColor: '#000000'
  },
  {
    id: 'contact',
    title: 'Contact',
    subtitle: 'Get in touch',
    bgColor: '#fa709a',
    textColor: '#ffffff'
  }
];

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create smooth background color transitions
  const background = useTransform(
    scrollYProgress,
    sections.map((_, i) => i / (sections.length - 1)),
    sections.map(section => section.bgColor)
  );

  const textColor = useTransform(
    scrollYProgress,
    sections.map((_, i) => i / (sections.length - 1)),
    sections.map(section => section.textColor)
  );

  // Get current section colors for static elements
  const currentBgColor = sections[currentSection]?.bgColor || sections[0].bgColor;
  const currentTextColor = sections[currentSection]?.textColor || sections[0].textColor;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.floor(scrollTop / windowHeight);
      
      if (sectionIndex !== currentSection && sectionIndex < sections.length) {
        setCurrentSection(sectionIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: 'url(/texture.png) center center repeat' }}>
      {/* Morphing Background */}
      <motion.div
        className="fixed inset-0 z-0 transition-colors duration-1000"
        style={{ backgroundColor: background }}
      />
      
      {/* Content Container */}
      <div ref={containerRef} className="relative z-10">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="min-h-screen flex flex-col items-center justify-center px-4 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center max-w-4xl mx-auto">
                             <motion.h1
                 className="text-6xl md:text-8xl font-bold mb-6"
                 style={{ color: currentTextColor }}
                 initial={{ scale: 0.8 }}
                 whileInView={{ scale: 1 }}
                 transition={{ duration: 0.6 }}
               >
                 {section.title}
               </motion.h1>
               <motion.p
                 className="text-xl md:text-2xl opacity-90"
                 style={{ color: currentTextColor }}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 0.9, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
               >
                 {section.subtitle}
               </motion.p>
              
              {/* Section-specific content */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {index === 0 && (
                  <div className="space-y-4">
                                         <p className="text-lg opacity-80" style={{ color: currentTextColor }}>
                       Discover amazing experiences as you scroll through our sections
                     </p>
                     <motion.div
                       className="w-16 h-16 mx-auto border-4 border-current rounded-full border-t-transparent animate-spin"
                       style={{ borderColor: currentTextColor }}
                     />
                  </div>
                )}
                
                {index === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {['Innovation', 'Quality', 'Excellence'].map((item, i) => (
                      <motion.div
                        key={item}
                        className="p-6 rounded-lg bg-white/10 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                         <h3 className="text-xl font-semibold mb-2" style={{ color: currentTextColor }}>
                           {item}
                         </h3>
                         <p className="opacity-80" style={{ color: currentTextColor }}>
                           We believe in delivering the best in everything we do.
                         </p>
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {index === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {['Web Development', 'Design', 'Consulting', 'Support'].map((service, i) => (
                      <motion.div
                        key={service}
                        className="p-6 rounded-lg bg-white/10 backdrop-blur-sm"
                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                                                 <h3 className="text-2xl font-semibold mb-3" style={{ color: currentTextColor }}>
                           {service}
                         </h3>
                         <p className="opacity-80" style={{ color: currentTextColor }}>
                           Professional {service.toLowerCase()} services tailored to your needs.
                         </p>
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {index === 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {[1, 2, 3].map((item) => (
                      <motion.div
                        key={item}
                        className="aspect-square rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: item * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                                                 <span className="text-4xl font-bold" style={{ color: currentTextColor }}>
                           {item}
                         </span>
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {index === 4 && (
                  <div className="space-y-6 mt-8">
                    <motion.div
                      className="p-6 rounded-lg bg-white/10 backdrop-blur-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                                                                    <h3 className="text-2xl font-semibold mb-4" style={{ color: currentTextColor }}>
                         Let&apos;s work together
                       </h3>
                       <p className="opacity-80 mb-4" style={{ color: currentTextColor }}>
                         Ready to start your next project? Get in touch with us today.
                       </p>
                      <motion.button
                        className="px-8 py-3 rounded-full font-semibold transition-all duration-300"
                        style={{ 
                          backgroundColor: textColor,
                          color: sections[index].bgColor
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Contact Us
                      </motion.button>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.section>
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col items-center space-y-2">
          {sections.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSection ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}