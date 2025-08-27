'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Scripts() {
  useEffect(() => {
    // Preloader percent animation
    let percentText = { value: 0 };
    const percentElement = document.querySelector('.preloader_text-percent');
    
    if (percentElement) {
      gsap.to(percentText, {
        duration: 4,
        value: 100,
        ease: 'linear',
        onUpdate: function() {
          if (percentElement) {
            percentElement.textContent = Math.floor(percentText.value) + '%';
          }
        }
      });
    }

    // Menu animation
    const texts = document.querySelectorAll('.b-menu-mob_link');
    let index = 0;
    let intervalId: NodeJS.Timeout | null = null;
    let resetTimeoutId: NodeJS.Timeout | null = null;

    function showText() {
      if (index < texts.length) {
        texts[index].classList.add('active');
        index++;
      }
    }

    function startAnimation() {
      if (intervalId) {
        clearInterval(intervalId);
      }
      index = 0;
      intervalId = setInterval(showText, 200);
    }

    function resetAnimation() {
      if (intervalId) {
        clearInterval(intervalId);
      }
      texts.forEach(text => text.classList.remove('active'));
    }

    function handleMenuStateChange() {
      const menuBtn = document.querySelector('.b-menu_btn');
      if (menuBtn && menuBtn.classList.contains('w--open')) {
        startAnimation();
        if (resetTimeoutId) {
          clearTimeout(resetTimeoutId);
        }
      } else {
        if (resetTimeoutId) {
          clearTimeout(resetTimeoutId);
        }
        resetTimeoutId = setTimeout(() => {
          resetAnimation();
        }, 500);
      }
    }

    const menuBtn = document.querySelector('.b-menu_btn');
    if (menuBtn) {
      const observer = new MutationObserver(handleMenuStateChange);
      observer.observe(menuBtn, {
        attributes: true,
        attributeFilter: ['class']
      });
    }

    // Block scroll during preloader
    document.body.style.overflow = 'hidden';
    const preloader = document.querySelector('.preloader');
    
    if (preloader) {
      let checkInterval = setInterval(function () {
        const preloaderHeight = preloader.clientHeight;
        const windowHeight = window.innerHeight;

        if (preloaderHeight < windowHeight) {
          document.body.style.overflow = '';
          clearInterval(checkInterval);
        }
      }, 100);
    }

    // Cursor movement
    const cursorButton = document.querySelector('.b-button.is-circle');
    if (cursorButton) {
      document.addEventListener('mousemove', (e) => {
        if (cursorButton.classList.contains('is-active')) {
          gsap.to(cursorButton, {
            x: e.clientX - 40,
            y: e.clientY - 40,
            duration: 0.2,
            ease: 'power2.out'
          });
        }
      });
    }

    // Smooth color transitions for project cards
    const projectCards = document.querySelectorAll('.b-home-catalog_card-wrap');
    projectCards.forEach(card => {
      const bgElement = card.querySelector('.b-home-catalog_card-bg');
      const textElements = card.querySelectorAll('.g-text-bg-color, .b-project-card_text-line');
      
      card.addEventListener('mouseenter', () => {
        if (bgElement) {
          gsap.to(bgElement, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
          });
        }
        
        textElements.forEach((element, index) => {
          gsap.to(element, {
            y: -2,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out'
          });
        });
      });

      card.addEventListener('mouseleave', () => {
        if (bgElement) {
          gsap.to(bgElement, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
          });
        }
        
        textElements.forEach((element) => {
          gsap.to(element, {
            y: 0,
            duration: 0.6,
            ease: 'power2.out'
          });
        });
      });
    });

    // Cleanup
    return () => {
      if (intervalId) clearInterval(intervalId);
      if (resetTimeoutId) clearTimeout(resetTimeoutId);
    };
  }, []);

  return null;
}
