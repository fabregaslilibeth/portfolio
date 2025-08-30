'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface Project {
  name: string;
  url?: string | null;
  tools?: string[];
}

interface TimelineItem {
  date: string;
  description: string;
  projects?: (Project | string)[];
}

interface TimelineProps {
  title: string;
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ title, items }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs array
  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, items.length);
  }, [items.length]);

  // Check which item should be active based on scroll position
  useEffect(() => {
    const checkActiveItem = () => {
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.90; // 20% from bottom

      for (let i = 0; i < itemRefs.current.length; i++) {
        const element = itemRefs.current[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          
          if (elementCenter <= triggerPoint) {
            setActiveIndex(i);
          }
        }
      }
    };

    window.addEventListener('scroll', checkActiveItem);
    checkActiveItem(); // Check on mount

    return () => window.removeEventListener('scroll', checkActiveItem);
  }, []);

  // Helper function to get project display name
  const getProjectName = (project: Project | string): string => {
    if (typeof project === 'string') {
      return project;
    }
    return project.name;
  };

  // Helper function to get project URL
  const getProjectUrl = (project: Project | string): string | null => {
    if (typeof project === 'string') {
      return null;
    }
    return project.url || null;
  };

  // Helper function to get project tools
  const getProjectTools = (project: Project | string): string[] => {
    if (typeof project === 'string') {
      return [];
    }
    return project.tools || [];
  };

  return (
    <div className="min-h-screen flex justify-center w-full">
      <div className="w-9/12 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full flex items-center flex-col"
        >
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-2xl font-light text-white tracking-wide">
              {title}
            </h2>
          </div>

          {/* Timeline Container */}
          <div className="relative w-6/12">
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-600"></div>
            
            {/* Timeline Items */}
            <div className="relative space-y-16">
              {items.map((item, index) => {
                const isActive = index <= activeIndex;
                const isPreviousActive = index < activeIndex;
                const isCurrentActive = index === activeIndex;

                return (
                  <div 
                    key={index} 
                    ref={(el) => { itemRefs.current[index] = el; }}
                    className="relative flex items-start"
                  >
                    {/* Circle positioned on the line */}
                    <motion.div 
                      className="absolute left-8 w-3 h-3 rounded-full transform -translate-x-1/2 z-10"
                      initial={{ backgroundColor: "#9CA3AF" }}
                      animate={{ 
                        backgroundColor: isActive ? "#F97316" : "#9CA3AF"
                      }}
                      transition={{ 
                        duration: 0.5,
                        delay: isCurrentActive ? 0.2 : 0
                      }}
                    />
                    
                    {/* Animated line segment */}
                    {index < items.length - 1 && (
                      <motion.div
                        className="absolute left-8 w-px bg-orange-500 z-5"
                        style={{
                          top: "12px",
                          height: "100%"
                        }}
                        initial={{ height: 0 }}
                        animate={{ 
                          height: isPreviousActive ? "100%" : 0
                        }}
                        transition={{ 
                          duration: 0.8,
                          delay: isCurrentActive ? 0.7 : 0
                        }}
                      />
                    )}
                    
                    {/* Content */}
                    <motion.div 
                      style={{ margin: '-5px 50px 100px 50px' }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : -20
                      }}
                      transition={{ 
                        duration: 0.6,
                        delay: isCurrentActive ? 0.3 : 0
                      }}
                    >
                      {/* Date */}
                      <div className="mb-6">
                        <span className="text-gray-400 font-light tracking-wide text-base">
                          {item.date}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <div className="mb-6">
                        <p className="text-gray-300 font-light leading-relaxed text-base">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Projects if available */}
                      {item.projects && (
                        <motion.div 
                          className="mt-6"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ 
                            opacity: isActive ? 1 : 0,
                            y: isActive ? 0 : 10
                          }}
                          transition={{ 
                            duration: 0.4,
                            delay: isCurrentActive ? 0.6 : 0
                          }}
                        >
                         <div style={{ margin: '20px' }}>NOTABLE PROJECTS</div>
                          <ol style={{ margin: '20px' }}>
                            {item.projects.map((project, projectIndex) => {
                              const projectName = getProjectName(project);
                              const projectUrl = getProjectUrl(project);
                              const projectTools = getProjectTools(project);
                              
                              return (
                                <motion.li 
                                  key={projectIndex} 
                                  className="text-gray-400 font-light text-sm leading-relaxed"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ 
                                    opacity: isActive ? 1 : 0,
                                    x: isActive ? 0 : -10
                                  }}
                                  transition={{ 
                                    duration: 0.3,
                                    delay: isCurrentActive ? (0.7 + (projectIndex * 0.1)) : 0
                                  }}
                                  style={{ margin: '36px 0px' }}
                                >
                                  <div className="flex items-start gap-2">
                                    <div>
                                      {projectUrl ? (
                                        <a 
                                          href={projectUrl} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="uppercase"
                                          style={{
                                            color: '#aca693',
                                          }}
                                        >
                                          {projectName}
                                        </a>
                                      ) : (
                                        <span>{projectName}</span>
                                      )}
                                      
                                      {projectTools.length > 0 && (
                                        <div>
                                          {/* <span className="text-gray-500 text-xs">
                                            TOOLS: 
                                          </span> */}
                                        <div className="flex flex-wrap gap-2">
                                          {projectTools.map((tool, toolIndex) => (
                                            <span key={toolIndex}
                                                className="text-gray-800 px-2 py-1 font-semibold text-xs bg-[#aca693] rounded-full"
                                                style={{
                                                  padding: '3px 15px'
                                                }}
                                            >
                                              {tool}
                                            </span>
                                          ))}
                                        </div>
                                        </div>
                                        
                                      )}
                                    </div>
                                  </div>
                                </motion.li>
                              );
                            })}
                          </ol>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
