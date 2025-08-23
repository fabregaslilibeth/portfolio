'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-16 mb-16">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8">Beth Fabregas</h3>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
              Premium quality creative at lean rates for growing businesses. 
              Strategy, Design, and Development.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-200 transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
          
          {/* Sitemap */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8">Sitemap</h4>
            <ul className="space-y-4 text-lg text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feed</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Legal & Social */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8">Legal</h4>
            <ul className="space-y-4 text-lg text-gray-300 mb-12">
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
            
            <h4 className="text-xl font-bold text-white mb-8">Social</h4>
            <ul className="space-y-4 text-lg text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-12 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-lg text-gray-400 mb-6 lg:mb-0">
            Copyright © Beth Fabregas 2025
          </p>
          <div className="flex items-center space-x-8">
            <span className="text-lg text-gray-400">This website uses Cookies</span>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-6 py-3 rounded-xl text-lg font-bold hover:bg-gray-200 transition-colors"
            >
              Accept
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
