'use client';
import { motion } from 'framer-motion';

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
}

export default function Motion() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Framer Motion Examples
        </motion.h1>

        {/* Original Box Animation */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Original Box Animation</h2>
          <motion.div 
            style={box}
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: 2,
              scale: {
                type: "spring",
                visualDuration: 2,
                bounce: 0.5,
              }
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}