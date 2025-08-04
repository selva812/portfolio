"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="Portfolio Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full px-4 md:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl font-medium text-blue-400"
          >
            Hello, I'm
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
          >
            <span className="block">Alex Morgan</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Creative Developer
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            I build beautiful, responsive web experiences that help businesses grow and stand out in the digital world.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30">
              View My Work
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-16 md:mt-24 grid grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-blue-400">120+</div>
            <div className="text-gray-300 text-sm mt-1">Projects</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-blue-400">8+</div>
            <div className="text-gray-300 text-sm mt-1">Years Experience</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-blue-400">98%</div>
            <div className="text-gray-300 text-sm mt-1">Client Satisfaction</div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <div className="text-gray-300 text-sm mb-2">Scroll Down</div>
            <div className="w-0.5 h-12 bg-gradient-to-b from-blue-400 to-transparent"></div>
          </motion.div>
        )}
      </div>
    </div>
  );
}