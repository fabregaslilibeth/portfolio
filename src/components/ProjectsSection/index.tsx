'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  color: string;
  slug: string;
}

interface ProjectsSectionProps {
  className?: string;
}

export default function ProjectsSection({ className = '' }: ProjectsSectionProps) {
  const router = useRouter();

  const handleProjectClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  useEffect(() => {
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
  }, []);

  const projects: Project[] = [
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
    <section id="projects" className={`projects-section ${className}`}>
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
  );
}
