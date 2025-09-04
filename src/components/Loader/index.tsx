'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './style.css';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Complete loading after 3 seconds
    const loadingTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        gsap.to('.loader', {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            setIsLoading(false);
            document.body.style.overflow = 'visible';
          }
        });
      }, 500);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(loadingTimer);
    };
  }, []);

  useEffect(() => {
    // Block scroll during loading
    document.body.style.overflow = 'hidden';
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-logo">
          <div className="loader-logo-text">B</div>
        </div>
        <div className="loader-progress">
          <div className="loader-progress-bar">
            <div 
              className="loader-progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="loader-progress-text">
            {Math.floor(progress)}%
          </div>
        </div>
        <div className="loader-subtitle">Loading Portfolio</div>
      </div>
    </div>
  );
}


