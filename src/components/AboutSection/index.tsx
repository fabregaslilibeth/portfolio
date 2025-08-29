'use client';

import React from 'react';
import Link from 'next/link';
import './style.css';

const AboutSection: React.FC = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <nav className="about-menu">
          <Link href="/works" className="menu-item">
            WORKS
          </Link>
          <Link href="/about" className="menu-item">
            ABOUT ME
          </Link>
          <Link href="/cv" className="menu-item">
            CV
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default AboutSection;
