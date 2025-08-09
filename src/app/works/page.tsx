'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: "Lorem Ipsum Project",
    slug: "lorem-ipsum-project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    details: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRduXFjNZQlYDT_bBSJiIS_EScBlqy6EtJgig&s"
  },
  {
    id: 2,
    name: "Dolor Sit Amet",
    slug: "dolor-sit-amet",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    details: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCtcGbeqqw5GpWJG0C0271mwvMhS8b_Co2A&s"
  },
  {
    id: 3,
    name: "Consectetur Adipiscing",
    slug: "consectetur-adipiscing",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    details: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
    image: "https://camo.githubusercontent.com/c2fd2f94aa55544327fc8ed8901aedb2eec8e3535243452b43646eb8086efe1a/68747470733a2f2f796176757a63656c696b65722e6769746875622e696f2f73616d706c652d696d616765732f696d6167652d34342e6a7067"
  },
  {
    id: 4,
    name: "Eiusmod Tempor",
    slug: "eiusmod-tempor",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    details: "Deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCtcGbeqqw5GpWJG0C0271mwvMhS8b_Co2A&s"
  },
  {
    id: 5,
    name: "Incididunt Labore",
    slug: "incididunt-labore",
    description: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    details: "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCtcGbeqqw5GpWJG0C0271mwvMhS8b_Co2A&s"
  },
  {
    id: 6,
    name: "Ut Enim Minim",
    slug: "ut-enim-minim",
    description: "Eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    details: "Omnis voluptas assumenda est, omnis dolor repellendus temporibus autem quibusdam et aut officiis.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCtcGbeqqw5GpWJG0C0271mwvMhS8b_Co2A&s"
  },
  {
    id: 7,
    name: "Veniam Quis Nostrud",
    slug: "veniam-quis-nostrud",
    description: "Debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    details: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCtcGbeqqw5GpWJG0C0271mwvMhS8b_Co2A&s"
  },
  {
    id: 8,
    name: "Exercitation Ullamco",
    slug: "exercitation-ullamco",
    description: "Consequatur aut perferendis doloribus asperiores repellat nam libero tempore cum soluta nobis est eligendi.",
    details: "Optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCtcGbeqqw5GpWJG0C0271mwvMhS8b_Co2A&s"
  },
  {
    id: 9,
    name: "Laboris Nisi",
    slug: "laboris-nisi",
    description: "Aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    details: "Dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCtcGbeqqw5GpWJG0C0271mwvMhS8b_Co2A&s"
  },
  {
    id: 10,
    name: "Aliquip Commodo",
    slug: "aliquip-commodo",
    description: "Officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit.",
    details: "Voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCtcGbeqqw5GpWJG0C0271mwvMhS8b_Co2A&s"
  }
];

export default function WorksPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(1);
  const [previousProject, setPreviousProject] = useState<number | null>(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageTransitionComplete, setImageTransitionComplete] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Determine slide direction based on project indices
  const isSlideDown = hoveredProject !== null && previousProject !== null && hoveredProject < previousProject;

  const slideVariants = {
    enter: {
      y: isSlideDown ? '-100%' : '100%',
    },
    center: {
      y: 0,
    },
    exit: {
      y: isSlideDown ? '100%' : '-100%',
      opacity: 0,
    }
  };

  const textVariants = {
    enter: {
      y: isSlideDown ? '-100%' : '100%',
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: isSlideDown ? '100%' : '-100%',
      opacity: 0,
    }
  };

  const handleProjectHover = (projectId: number) => {
    setPreviousProject(hoveredProject);
    setHoveredProject(projectId);
  };

  const handleImageClick = () => {
    setIsFullscreen(true);
    setImageTransitionComplete(false);
    setIsClosing(false);
    
    // Show details when image is halfway through transition
    setTimeout(() => {
      if (!isClosing) {
        setImageTransitionComplete(true);
      }
    }, 750); // Halfway through 1.5s animation
  };

  const handleFullscreenExit = async () => {
    setIsClosing(true);
    // Don't set imageTransitionComplete to false immediately - let scroll indicator stay
    
    // Wait for details to disappear, then close modal
    setTimeout(() => {
      setIsFullscreen(false);
      setIsClosing(false);
      setImageTransitionComplete(false); // Reset only when modal fully closes
    }, 600); // Shorter wait - let image animation complete naturally
  };

  const handleImageTransitionComplete = () => {
    // This is now handled by the timeout in handleImageClick
    // Keep this function for any future needs
  };

  return (
    <div className="w-full h-screen bg-black text-white overflow-hidden" style={{ background: 'url(/texture.png) center center repeat' }}>
      {/* Title */}
      <div className="absolute top-8 left-8 z-10">
        <h1 className="text-4xl font-light">All works</h1>
      </div>

      {/* Main Content Container */}
      <div className="flex items-center justify-center h-full">
        {/* Left Text Container */}
        <div className="w-[300px] h-[3rem] overflow-hidden relative mr-8">
          <AnimatePresence>
            {hoveredProject !== null && (
              <motion.div
                key={`left-${hoveredProject}`}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col justify-center z-10"
              >
                <h3 className="text-xl font-medium mb-4">{projects[hoveredProject - 1]?.name}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {projects[hoveredProject - 1]?.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Image Container */}
        <div 
          className="w-[400px] h-[250px] relative overflow-hidden cursor-pointer" 
          onClick={handleImageClick}
          style={{ minHeight: '250px', minWidth: '400px' }}
        >
          <AnimatePresence>
            {hoveredProject !== null && (
              <motion.img
                key={`image-${hoveredProject}`}
                src={projects[hoveredProject - 1]?.image}
                alt={projects[hoveredProject - 1]?.name}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
                draggable={false}
              />
            )}
          </AnimatePresence>
          {/* Invisible full-coverage clickable overlay */}
          <div className="absolute inset-0 w-full h-full z-20 cursor-pointer" onClick={handleImageClick}></div>
        </div>

        {/* Right Text Container */}
        <div className="w-[300px] h-[3rem] overflow-hidden relative ml-8">
          <AnimatePresence>
            {hoveredProject !== null && (
              <motion.div
                key={`right-${hoveredProject}`}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col justify-center z-10"
              >
                <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
                  {projects[hoveredProject - 1]?.details}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Project List */}
      <div 
        className="absolute bottom-8 left-8"
        onMouseLeave={() => handleProjectHover(1)}
      >
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`cursor-pointer transition-colors duration-200 text-sm ${
                hoveredProject === project.id
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
              onMouseEnter={() => handleProjectHover(project.id)}
            >
              <span className="font-mono text-xs mr-4">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              {project.name}
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence mode="wait">
        {isFullscreen && hoveredProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black"
          >
            {/* Header Image */}
            <div className="relative">
              {/* Image morphs to top header */}
              <motion.img 
                src={projects[hoveredProject - 1]?.image}
                alt={projects[hoveredProject - 1]?.name}
                initial={{ 
                  width: 400,      // Start with grid image dimensions
                  height: 250,
                  x: "calc(50vw - 200px)",  // Start centered horizontally
                  y: "calc(50vh - 125px)",  // Start centered vertically
                  opacity: 1,      // Always full opacity
                }}
                animate={{ 
                  width: "100vw",  // Scale to full viewport width
                  height: 500,     // Scale to 500px height
                  x: 0,            // Move to left edge
                  y: 0,            // Move to top edge
                  opacity: 1,      // Maintain full opacity
                }}
                exit={{ 
                  width: 400,
                  height: 250,
                  x: "calc(50vw - 200px)",
                  y: "calc(50vh - 125px)",
                  opacity: 1,      // Keep full opacity during morph back
                }}
                transition={{ 
                  type: "spring",
                  damping: isClosing ? 25 : 30,      // Slightly less damping on exit for smoother reverse
                  stiffness: isClosing ? 100 : 80,   // Bit more stiffness on exit
                  mass: isClosing ? 1.0 : 1.2,       // Less mass on exit for quicker response
                  duration: 1.5,    // Same duration for both directions
                  opacity: { duration: 0 }  // No opacity transition for image
                }}
                onAnimationComplete={handleImageTransitionComplete}
                className="object-cover"
                style={{ 
                  position: 'absolute',
                  transformOrigin: 'center center' 
                }}
              />
              
              {/* Close button overlay */}
              <button
                onClick={handleFullscreenExit}
                className="absolute top-8 right-8 text-white/70 hover:text-white text-xl transition-colors duration-300 bg-black/20 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm z-10"
              >
                ✕
              </button>

              {/* Scroll indicator - positioned below the 500px image */}
              {/* <AnimatePresence>
                {imageTransitionComplete && !isClosing && (
                  <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 30, opacity: 0, scale: 0.8 }}
                    transition={{ 
                      type: "spring",
                      damping: 25,
                      stiffness: 200,
                      duration: 0.6
                    }}
                    className="absolute left-1/2 transform -translate-x-1/2 text-center z-30"
                    style={{ top: '520px' }} // 500px + 20px spacing
                  >
                <div className="text-white text-sm mb-4 drop-shadow-lg">Scroll down for details</div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white text-2xl drop-shadow-lg"
                >
                  ↓
                </motion.div>
                  </motion.div>
                )}
              </AnimatePresence> */}
            </div>
            
            {/* Spacer to account for the 500px header */}
            <div style={{ height: '450px' }}></div>

            {/* Detailed Content Sections - Start from behind image */}
            <AnimatePresence>
              {imageTransitionComplete && !isClosing && (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ 
                    type: "spring",
                    damping: 20,
                    stiffness: 150,
                    duration: 0.5
                  }}
                  className="relative bg-black text-white"
                >
              {/* Project Header - Starts from behind image */}
              <motion.section 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="py-20 px-8 text-center"
              >
                <div className="max-w-4xl mx-auto">
                  <motion.h1 
                    className="text-6xl font-bold mb-6 overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {(projects[hoveredProject - 1]?.name).split('').map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ 
                          y: 30,
                          opacity: 0,
                          filter: "blur(4px)"
                        }}
                        whileInView={{ 
                          y: 0,
                          opacity: 1,
                          filter: "blur(0px)"
                        }}
                        transition={{
                          delay: 0.5 + (index * 0.03), // Staggered reveal, 30ms between letters
                          duration: 0.6,
                          ease: [0.25, 0.4, 0.25, 1], // Custom cubic bezier for smooth easing
                        }}
                        viewport={{ once: true }}
                        className="inline-block"
                        style={{ 
                          whiteSpace: letter === ' ' ? 'pre' : 'normal'
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1.2, // Wait for title animation to complete
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    className="text-2xl text-gray-300 leading-relaxed"
                  >
                    {projects[hoveredProject - 1]?.description}
                  </motion.p>
                </div>
              </motion.section>

              {/* Project Overview */}
              <motion.section 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="py-20 px-8"
              >
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-5xl font-bold mb-8 text-center">Project Overview</h2>
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Solution</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Gallery Section */}
              <motion.section 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="py-20 px-8 bg-gray-900/30"
              >
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-5xl font-bold mb-12 text-center">Gallery</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <motion.div
                        key={item}
                        whileHover={{ scale: 1.05 }}
                        className="aspect-square rounded-lg overflow-hidden shadow-lg"
                      >
                        <img 
                          src={projects[hoveredProject - 1]?.image}
                          alt={`${projects[hoveredProject - 1]?.name} - Gallery ${item}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Results & Impact */}
              <motion.section 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="py-20 px-8"
              >
                <div className="max-w-6xl mx-auto text-center">
                  <h2 className="text-5xl font-bold mb-12">Results & Impact</h2>
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div>
                      <div className="text-6xl font-bold text-blue-400 mb-4">250%</div>
                      <p className="text-xl text-gray-300">Increase in User Engagement</p>
                    </div>
                    <div>
                      <div className="text-6xl font-bold text-green-400 mb-4">50K+</div>
                      <p className="text-xl text-gray-300">Active Monthly Users</p>
                    </div>
                    <div>
                      <div className="text-6xl font-bold text-purple-400 mb-4">98%</div>
                      <p className="text-xl text-gray-300">Client Satisfaction Rate</p>
                    </div>
                  </div>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    The project exceeded all expectations, delivering significant improvements in user experience 
                    and business metrics. The innovative approach and attention to detail resulted in a 
                    solution that not only met the requirements but set new standards in the industry.
                  </p>
                </div>
              </motion.section>

              {/* Footer */}
              <motion.section 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="py-20 px-8 border-t border-white/10"
              >
                <div className="max-w-6xl mx-auto text-center">
                  <h2 className="text-4xl font-bold mb-8">Ready to start your project?</h2>
                  <p className="text-xl text-gray-300 mb-8">Let's create something amazing together.</p>
                  <div className="space-y-4">
                    <button
                      onClick={handleFullscreenExit}
                      className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 backdrop-blur-sm mr-4"
                    >
                      Back to All Works
                    </button>
                    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300">
                      Get in Touch
                    </button>
                  </div>
                </div>
              </motion.section>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
