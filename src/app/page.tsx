'use client';

import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRouter } from 'next/navigation';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleProjectClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  useEffect(() => {
    // Handle initial scroll position to prevent text overlap
    const handleInitialScroll = () => {
      const scrollY = window.scrollY;
      const projectsSection = document.querySelector('.projects-section') as HTMLElement;
      
      if (projectsSection && scrollY > projectsSection.offsetTop) {
        // If page is refreshed while scrolled down, blur background text immediately
        gsap.set('.background-text', {
          filter: 'blur(10px)',
          opacity: 0.3
        });
      }
    };

    // Run initial check
    handleInitialScroll();

    // Background text blur effect on scroll
    gsap.to('.background-text', {
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
      filter: 'blur(10px)',
      opacity: 0.3,
    });

    // Smooth background color morphing between projects
    const projectColors = [
      '#3a54b1', // Blue
      '#de6495', // Pink  
      '#CB2B2B', // Red
      '#0a6e93', // Dark Blue
      '#014c47', // Dark Green
      '#CB952B', // Orange
    ];

    // Create a timeline for smooth background color transitions
    const colorTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: false,
      }
    });

    // Add color changes to timeline
    projectColors.forEach((color, index) => {
      const trigger = `.project-${index + 1}`;
      const progress = index / (projectColors.length - 1);
      
      colorTimeline.to('body', {
        backgroundColor: color,
        duration: 0.2,
        ease: 'power2.inOut'
      }, progress);
    });

    // Custom cursor functionality
    const cursor = cursorRef.current;
    const cursorText = cursorTextRef.current;

    // Mouse move event
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        gsap.to(cursor, {
          x: e.clientX - 50,
          y: e.clientY - 50,
          duration: 0.1,
          ease: 'power2.out'
        });
      }
    };

    // Project image hover events
    const projectImages = document.querySelectorAll('.project-image');
    
    projectImages.forEach(image => {
      image.addEventListener('mouseenter', () => {
        if (cursor) {
          gsap.to(cursor, {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
        if (cursorText) {
          gsap.to(cursorText, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });

      image.addEventListener('mouseleave', () => {
        if (cursor) {
          gsap.to(cursor, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
        if (cursorText) {
          gsap.to(cursorText, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });
    });

    // Add mouse move listener
    document.addEventListener('mousemove', handleMouseMove);

    // Text reveal animations
    const titleElements = document.querySelectorAll('.title-view-inter');
    titleElements.forEach((element, index) => {
      gsap.fromTo(element,
        { filter: 'blur(10px)', opacity: 0 },
        {
          filter: 'blur(0em)',
          opacity: 1,
          duration: 0.8,
          delay: 0.5 + (index * 0.1),
          ease: 'power2.out'
        }
      );
    });

    const italicElements = document.querySelectorAll('.title-italic');
    italicElements.forEach((element, index) => {
      gsap.fromTo(element,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.8 + (index * 0.1),
          ease: 'power2.out'
        }
      );
    });

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      projectImages.forEach(image => {
        image.removeEventListener('mouseenter', () => {});
        image.removeEventListener('mouseleave', () => {});
      });
    };

  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const projects = [
    {
      id: 1,
      title: 'ticket to go',
      category: 'mobile app design',
      year: '2023',
      image: '/images/1.jpeg',
      color: '#3a54b1',
      slug: 'ticket-to-go',
    },
    {
      id: 2,
      title: 'jam.art',
      category: 'ux/ui design / no-code dev',
      year: '2024',
      image: '/images/2.jpeg',
      color: '#de6495',
      slug: 'jam-art',
    },
    {
      id: 3,
      title: 'pro-creative',
      category: 'web design / no-code dev',
      year: '2024',
      image: '/images/3.jpeg',
      color: '#CB2B2B',
      slug: 'pro-creative',
    },
    {
      id: 4,
      title: 'uoem.pro',
      category: 'Web design / no-code dev',
      year: '2023',
      image: '/images/4.jpeg',
      color: '#0a6e93',
      slug: 'uoem-pro',
    },
    {
      id: 5,
      title: 'second life',
      category: 'ux/ui design',
      year: '2023',
      image: '/images/5.jpeg',
      color: '#014c47',
      slug: 'second-life',
    },
    {
      id: 6,
      title: 'No toxic conf',
      category: 'web design / no-code dev',
      year: '2022',
      image: '/images/6.jpeg',
      color: '#CB952B',
      slug: 'no-toxic-conf',
    }
  ];

  return (
    <div className="page-container">
      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor">
        <div ref={cursorTextRef} className="cursor-text">View</div>
      </div>

      {/* Fixed Background Text */}
      <div className="background-text">
        <h1 className="main-title">
        <div className="title-italic _1">Beth</div>
          <div className="title-view-inter _3">Fabregas. </div>
          {/* <div className="title-italic _4">Fullstack</div> */}
          <div className="title-italic _2">Web</div>
          <div className="title-view-inter _4">developer.</div>
          <div className="title-italic _6">CPA.</div>
        </h1>
      </div>

      {/* Menu */}
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="menu-content">
          <div className="menu-links">
            <a href="#projects" className="menu-link">case studies</a>
            <a href="/works" className="menu-link">All works</a>
            <a href="/about" className="menu-link">About me</a>
            <a href="https://confirmed-foam-eab.notion.site/Veronica-Zubakova-fdba2e0623de4ed3b9747f407c8c8d31?pvs=4" target="_blank" className="menu-link">CV</a>
          </div>
          <div className="menu-links">
            <a href="mailto:veronica.zubakova@gmail.com" className="menu-link">Email</a>
            <a href="https://www.linkedin.com/in/veroni%D1%81azubakova" target="_blank" className="menu-link">LinkedIn</a>
            <a href="https://www.behance.net/veronicazubakova" target="_blank" className="menu-link">Behance</a>
            <a href="https://instagram.com/veronique.nebloger" target="_blank" className="menu-link">Instagram</a>
          </div>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-text">{isMenuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="side-nav">
        <a href="https://instagram.com/veronique.nebloger" target="_blank" className="nav-link">Works</a>
        <a href="https://www.behance.net/veronicazubakova" target="_blank" className="nav-link">About</a>
        <a href="https://www.linkedin.com/in/veroni%D1%81azubakova" target="_blank" className="nav-link">Contact</a>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-card project-${index + 1}`}>
              <div 
                className="project-image"
                onClick={() => handleProjectClick(project.slug)}
                style={{ cursor: 'pointer' }}
              >
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h2 className="footer-title">
            <span className="title-italic">Blending </span>
            <span className="title-view-inter _2">code</span>
            <br />
            <span className="title-italic">& </span>
            <span className="title-view-inter _4">commerce</span>
            <br />
            <span className="title-italic _2">to </span>
            <span className="title-view-inter _5">craft solutions</span>
            <br />
            <span className="title-italic _6">since </span>
            <span className="title-view-inter _6">2019</span>
          </h2>
        </div>
        <div className="footer-nav">
          <a href="https://instagram.com/veronique.nebloger" target="_blank" className="footer-link">Instagram</a>
          <span className="footer-credit">design: Lilibeth Fabregas</span>
          <a href="https://www.behance.net/veronicazubakova" target="_blank" className="footer-link">Behance</a>
          <a href="https://t.me/lucius_wd" target="_blank" className="footer-link">development: kirill andreev</a>
          <a href="https://www.linkedin.com/in/veroni%D1%81azubakova" target="_blank" className="footer-link">LinkedIn</a>
          <a href="mailto:veronica.zubakova@gmail.com" className="footer-link">Email</a>
        </div>
      </footer>

      {/* Contact */}
      <div className="fixed-contact-badge">
        <a href="/contact" className="contact-link">
          <div className="contact-bg">
            <div className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className="contact-spacer"></div>
            <span className="contact-text">Contact</span>
          </div>
        </a>
      </div>
    </div>
  );
}
