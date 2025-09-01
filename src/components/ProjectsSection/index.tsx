'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';
import { projects, Project } from '../../data/projects';

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
    const projectColors = projects.map(project => project.color);

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


  return (
    <section id="projects" className={`projects-section ${className}`}>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={project.slug} className={`project-card project-${index + 1}`}>
            <div 
              className="project-image"
              onClick={() => handleProjectClick(project.slug)}
              style={{ cursor: 'pointer' }}
            >
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.name}</h3>
              <div className="project-meta">
                <span className="project-category">{project.category}</span>
                <div className="project-skills">
                  {project.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="project-skill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
