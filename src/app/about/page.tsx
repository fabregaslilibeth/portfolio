'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './style.module.css';
import Timeline from '@/components/Timeline/index';

const AboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slideshowRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: slideshowRef,
    offset: ["start end", "end start"]
  });
  
  const images = [
    "https://cdn.pixabay.com/photo/2022/05/26/22/14/lake-7223904_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/09/19/22/46/lake-1681485_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/21/01/19/tree-3095683_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/11/30/20/43/mountain-hut-4664186_1280.jpg"
  ];

  const careerTimeline = [
    {
      date: "2010.10",
      description: "Graduated BS Accountancy."
    },
    {
      date: "2011.07",
      description: "Passed the CPA Board Exam."
    },
    {
      date: "2011.07",
      description: "Started working as an Accountant."
    },
    {
      date: "2018.03",
      description: "Started training as a Software Developer."
    },
    {
      date: "2019.10",
      description: "Got my first job as a Software Developer - at Coreproc",
      projects: [
        {
          name: 'Marlboro',
          url: 'https://marlboro.ph',
          tools: ['Laravel', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Node.js', 'Nova', 'Docker', 'Git', 'MariaDB', 'AWS']
        },
        {
          name: 'Philip Morris',
          url: 'https://pmftc.ph',
          tools: ['Laravel', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Node.js', 'Nova', 'Docker', 'Git', 'MariaDB', 'AWS']
        },
        {
          name: 'Its more fun in the Philippines',
          url: 'https://itsmorefuninthephilippines.com',
          tools: ['Wordpress', 'PHP', 'MySQL', 'Git']
        },
        {
          name: 'Bonakid',
          url: 'https://bonakid.com',
          tools: ['Drupal']
        }
      ]
    },
    {
      date: "2019.03",
      description: "Started working from home due to the pandemic. Had time for a second job as a Software Developer - at Diversified Robotics",
      projects: [
        {
          name: 'Coast2Coast Signing',
          url: null,
          tools: ['Laravel', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Node.js', 'Nova', 'Docker', 'Git', 'MariaDB', 'AWS']
        },
        {
          name: 'Rulon Financial',
          url: null,
          tools: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Nova', 'Docker', 'Git', 'MariaDB', 'AWS']
        }
      ]
    },
    {
      date: "2021.08",
      description: "Moved to Acquire AI",
      projects: [
        {
          name: 'National Basketball League',
          url: 'https://nbl.com.au',
          tools: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Webflow', 'Docker', 'Git', 'Firebase', 'AWS', 'Devlink', 'Bitbucket']
        },
        {
          name: 'National Basketball League 1',
          url: 'https://nbl1.com.au',
          tools: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Webflow', 'Docker', 'Git', 'Firebase', 'AWS', 'Devlink', 'Bitbucket']
        },
        {
          name: 'Basketball League',
          url: 'https://basketball.com.au',
          tools: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Webflow', 'Docker', 'Git', 'Firebase', 'AWS', 'Devlink', 'Bitbucket']
        },
        {
          name: 'Women\'s Basketball League',
          url: 'https://wnbl.com.au',
          tools: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Webflow', 'Docker', 'Git', 'Firebase', 'AWS', 'Devlink', 'Bitbucket']
        }
      ]
    }
  ];

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Transform values for the scaling effect
  const scale = useTransform(scrollYProgress, [0.2, 0.8], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.8], [1, 0.9]);

  return (
    <div className="relative">
      {/* Video Background */}
      <video 
        className="fixed top-0 left-0 w-full h-full object-cover z-0 opacity-20"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/shadow-movie.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gray-900/30 z-1"></div>

      {/* Main Content */}
      <main className="relative z-2">
        {/* First Section - About Content */}
        <div className="flex min-h-screen">
          {/* Left Side - Vertical Title */}
          <div className="flex-1 flex flex-col justify-center items-center p-8">
            {/* <div className={`${styles['writing-mode-vertical']} text-4xl font-light text-amber-400 mb-4 tracking-widest font-serif`}>
              私について
            </div> */}
            <div className={`text-4xl font-light text-amber-400 mb-4 tracking-widest`}>
              ABOUT ME
            </div>
            {/* <div className={`${styles['writing-mode-vertical']} text-lg text-white font-light tracking-wide`}>
              (ABOUT)
            </div> */}
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 flex items-end p-8 pb-16">
            <div className="max-w-lg">
              <p className="text-gray-300 text-base leading-relaxed mb-6 font-light tracking-wide">
                I am Lilibeth, a full-stack developer with a passion for creating beautiful and functional web applications.
              </p>
              <p className="text-gray-300 text-base leading-relaxed mb-6 font-light tracking-wide">
                With over 5 years of experience in full-stack development, I have successfully delivered high-quality web applications for diverse clients ranging from sports organizations to financial institutions. My journey began with a background in accounting, which provided me with strong analytical skills and attention to detail that I now apply to software development.
              </p>
              <div className="mt-8">
                <p className="text-gray-300 text-base leading-relaxed mb-2 font-light tracking-wide">
                  I specialize in modern web technologies including React, Next.js, Laravel, and Vue.js.
                </p>
                <p className="text-gray-300 text-base leading-relaxed mb-2 font-light tracking-wide">
                  My expertise spans from frontend user experience design to backend API development and database architecture.
                </p>
                <p className="text-gray-300 text-base leading-relaxed mb-2 font-light tracking-wide">
                  I am passionate about creating scalable, maintainable solutions that deliver exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Slideshow */}
        <div ref={slideshowRef} className="min-h-screen flex items-center justify-center px-8">
          <div className="relative w-2/3">
            <motion.div
              style={{ scale, opacity }}
              className="relative overflow-hidden rounded-lg shadow-2xl"
            >
              <div className="relative w-full h-[600px]">
                {images.map((src, index) => (
                  <motion.div
                    key={src}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: index === currentImageIndex ? 1 : 0,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <Image 
                      src={src} 
                      alt={`Lake view ${index + 1}`} 
                      fill
                      className="object-cover"
                      priority={index === 0}
                      unoptimized
                    />
                  </motion.div>
                ))}
                
                {/* Extra space at the end for full screen scroll */}
                <div className="flex-shrink-0 w-screen"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Third Section - Profile Layout */}
        <div className="min-h-screen flex items-center justify-center px-8">
          <div className="max-w-6xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex gap-12"
            >
              {/* Left Side - Profile Image */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-2xl">
                  <Image 
                    src="/images/color.png"
                    alt="Lilibeth Fabregas"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* Right Side - Profile Information */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="mb-8">
                  <h1 className="text-3xl font-light text-white mb-2 tracking-wide">
                    LILIBETH FABREGAS
                  </h1>
                  <p className="text-lg text-gray-400 font-light tracking-wide">
                    リリベス・ファブレガス
                  </p>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="font-light">
                    Born in the Philippines, passionate about technology and creative problem-solving.
                  </p>
                  <p className="font-light">
                    During my studies, I discovered my love for web development and began creating digital experiences from concept to deployment.
                  </p>
                  <p className="font-light">
                    From that experience, I became deeply interested in full-stack development and user experience design, teaching myself modern technologies and frameworks.
                  </p>
                  <p className="font-light">
                    Now working as a full-stack developer, I specialize in creating beautiful, functional, and scalable web applications.
                  </p>
                  <p className="font-light">
                    While primarily focused on web development, I also handle UI/UX design, database architecture, and system optimization.
                  </p>
                </div>

                <div className="mt-8 flex gap-6">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-light tracking-wide">
                    GITHUB
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-light tracking-wide">
                    LINKEDIN
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Fourth Section - Career Timeline */}
        <Timeline title="(CAREER)" items={careerTimeline} />

        <div className='min-h-screen'></div>        
      </main>
    </div>
  );
};

export default AboutPage;
