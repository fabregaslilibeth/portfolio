'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Linkedin } from 'lucide-react';
import MaskText from '../../components/MaskText';
import styles from './page.module.css';
import HoverTextReveal from '@/components/HoverTextReveal';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <video 
        className={styles.backgroundVideo}
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/shadow-movie.mp4" type="video/mp4" />
      </video>
      
      <div className={styles.content}>
        <MaskText 
          phrases={[
            "Hello!",
          ]}
          fontSize="20rem"
          staggerDelay={0}
        />
        
        <MaskText 
          phrases={[
            "I'm Lilibeth",
            "I specialize in",
            "Full Stack Development",
            "User experience design",
            "And creative coding"
          ]}
          staggerDelay={0.5}
        />
        
        <MaskText 
          phrases={[
            "My journey in web development started",
            "With a curiosity for",
            "How things work",
            "And a love for creating"
          ]}
        />
        
        <MaskText 
          phrases={[
            "I believe in",
            "Clean, efficient code",
            "Intuitive user interfaces",
            "And meaningful interactions"
          ]}
        />
        
        <MaskText 
          phrases={[
            "Let's create",
            "Something amazing",
            "Together"
          ]}
        />
        
        <div className={styles.contactSection}>
          <div className={styles.contactTitle}>
            <HoverTextReveal text="CONTACT ME" />
          </div>
          <div className={styles.contactLinks}>
            <a href="mailto:lilibeth@example.com" className={styles.contactLink}>
              <Mail size={24} />
              <span>lilibeth@example.com</span>
            </a>
            <a href="https://linkedin.com/in/lilibeth" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className={styles.navigation}>
          <Link href="/">
            <HoverTextReveal text="HOME" />
          </Link>
          <Link href="/works">
          <HoverTextReveal text="WORKS" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
