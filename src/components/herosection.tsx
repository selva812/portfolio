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
        className="text-lg md:text-xl font-medium text-blue-400 flex items-center justify-center"
      >
        <span className="mr-2">👋</span> Hello, I'm
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
      >
        <span className="block">Selva S</span>
        <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Full Stack Developer
        </span>
      </motion.h1>

      {/* Enhanced Tagline with Numbers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto text-left bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
      >
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-blue-400 font-mono mr-3 mt-1">01.</span>
            <span>Full-Stack Web & Mobile Solutions That Scale.</span>
          </div>
          <div className="flex items-start">
            <span className="text-blue-400 font-mono mr-3 mt-1">02.</span>
            <span>Modern Web Experiences. Built for Performance.</span>
          </div>
          <div className="flex items-start">
            <span className="text-blue-400 font-mono mr-3 mt-1">03.</span>
            <span>Transforming Ideas into Scalable Applications.</span>
          </div>
          <div className="flex items-start">
            <span className="text-blue-400 font-mono mr-3 mt-1">04.</span>
            <span>Full-Stack Craftsmanship with React, Node & Next.js.</span>
          </div>
          <div className="flex items-start">
            <span className="text-blue-400 font-mono mr-3 mt-1">05.</span>
            <span>Fast, Responsive, Full-Stack Development for the Modern Web.</span>
          </div>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
      >
        <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center">
          <span>View My Work</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center">
          <span>Contact Me</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
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
      {[
        { value: "10+", label: "Projects", icon: "💻" },
        { value: "1+", label: "Years Experience", icon: "⏳" },
        { value: "98%", label: "Client Satisfaction", icon: "😊" }
      ].map((stat, index) => (
        <div key={index} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
          <div className="flex items-center justify-center">
            <span className="text-xl mr-2 opacity-70 group-hover:opacity-100">{stat.icon}</span>
            <div className="text-2xl md:text-3xl font-bold text-blue-400">{stat.value}</div>
          </div>
          <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
        </div>
      ))}
    </motion.div>


  </div>
</div>
  );
}