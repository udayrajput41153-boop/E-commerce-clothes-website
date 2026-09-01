import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative bg-gray-900 h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Fashion background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
        >
          Redefine Your Style
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
        >
          Discover the latest trends in fashion. Curated collections for the modern individual who values quality and aesthetics.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors transform hover:scale-105"
        >
          Shop Collection
        </motion.button>
      </div>
    </div>
  );
}
