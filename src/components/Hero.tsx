'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main heading with large, bold typography */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-black leading-[0.85] tracking-tight">
            Better Off
          </h1>
        </motion.div>

        {/* Subtitle with medium weight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-20"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 leading-relaxed max-w-4xl">
            Premium quality creative at lean rates for growing businesses. 
            Packaged as subscriptions or bundled projects.
          </p>
        </motion.div>

        {/* Call to action section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mb-24"
        >
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Pick a plan, submit a job request, and your project will kickoff within 24 hours.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center text-xl md:text-2xl font-medium text-black border-b-2 border-black pb-2 hover:pb-4 transition-all duration-300"
          >
            Explore Plans
            <svg className="ml-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Bottom section with divider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="pt-20 border-t border-gray-200"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Strategy, Design, and Development. Lightning-fast, lean, and sensibly priced.
            </p>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Get max value and velocity in a turnkey platform that promises your brand will be Better Off®.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
