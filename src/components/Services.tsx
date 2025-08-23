'use client';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Lenis from 'lenis';
import TextReveal from './TextReveal';
import MagneticHover from './MagneticHover';
import ParallaxSection from './ParallaxSection';

const services = [
  {
    number: "01",
    title: "Web Development",
    description: "Behind every surprising campaign, compelling site launch, or must-watch piece of content, there's a well-considered strategy that engineered the outcome. During this crucial phase, we address the foundational and psychological factors that drive the desired interaction between brand and customer. We match logic-based journeys with pinpoint executions that create memorable and lasting engagements.",
    features: [
      "Brand Architecture & Roadmaps",
      "Brand Strategy",
      "Digital Strategy",
      "Product Launch Strategy",
      "SEO & Content Strategy",
      "Information Architecture (IA)",
      "Design Systems",
      "Brand Messaging",
      "User Research & Testing",
      "New Revenue Streams"
    ]
  },
];

export default function Services() {
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
    <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-50 rounded-full opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-gray-100 rounded-full opacity-40"
        animate={{
          y: [0, -30, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ParallaxSection speed={0.3} className="mb-32">
          <TextReveal
            text="Services"
            className="text-6xl md:text-7xl lg:text-8xl font-black text-black leading-[0.85] tracking-tight mb-12"
            animationType="letter"
            staggerDelay={0.05}
          />
          <TextReveal
            text="Superior brands require sophisticated capabilities that many businesses couldn't access until now."
            className="text-2xl md:text-3xl font-medium text-gray-700 leading-relaxed max-w-4xl"
            animationType="word"
            delay={0.5}
            staggerDelay={0.1}
          />
        </ParallaxSection>

        {/* Services List */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
            >
              {/* Left side - Content */}
              <div className="order-2 lg:order-1">
                <div className="flex items-start mb-8">
                  <motion.span 
                    className="text-8xl md:text-9xl font-black text-gray-200 leading-none mr-8"
                    whileHover={{ 
                      scale: 1.1,
                      color: "#3b82f6",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {service.number}
                  </motion.span>
                  <TextReveal
                    text={service.title}
                    className="text-4xl md:text-5xl font-bold text-black leading-tight pt-4"
                    animationType="letter"
                    delay={0.2}
                    staggerDelay={0.05}
                  />
                </div>
                
                <TextReveal
                  text={service.description}
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12"
                  animationType="word"
                  delay={0.4}
                  staggerDelay={0.05}
                />
                
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="text-lg md:text-xl text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        x: 10,
                        color: "#3b82f6",
                        transition: { duration: 0.3 }
                      }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Right side - Visual placeholder with magnetic hover */}
              <div className="order-1 lg:order-2">
                <MagneticHover strength={0.2} scale={1.05}>
                  <motion.div 
                    className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    whileHover={{ 
                      background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                  >
                    <div className="text-center">
                      <motion.div 
                        className="text-9xl md:text-[12rem] font-black text-gray-300 leading-none mb-4"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {service.number}
                      </motion.div>
                      <motion.div 
                        className="text-2xl md:text-3xl font-bold text-gray-400"
                        whileHover={{ 
                          color: "#3b82f6",
                          scale: 1.1,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {service.title}
                      </motion.div>
                    </div>
                  </motion.div>
                </MagneticHover>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
