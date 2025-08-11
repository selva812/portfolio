"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Layers, Code, FolderOpen, Mail } from 'lucide-react';
export default function HeroSection() {
  const [circleSize, setCircleSize] = useState(250);
  const [isMobile, setIsMobile] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mouse move interaction
  const handleMouseMove = (e: any) => {
    const { innerWidth, innerHeight } = window;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    );

    // Map distance to size (closer = bigger circle)
    let newSize = 250 + Math.max(0, 150 - distance / 5);
    setCircleSize(newSize);

    // Update cursor position for secondary circle
    setCursorPosition({
      x: (e.clientX - centerX) / 20, // Divided by 20 to make movement subtle
      y: (e.clientY - centerY) / 20
    });
  };

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center bg-white text-gray-800 px-6 md:px-20"
      onMouseMove={handleMouseMove}
    >
      {/* Left Content */}
     <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex-1 space-y-6"
>
  <h1 className="text-4xl md:text-5xl font-bold">
    Hey, I'm <span className="text-blue-600">Selva</span>
  </h1>

  <p className="text-lg text-gray-600">
    I'm a full-stack developer passionate about building fast, responsive, and scalable web applications. With a strong focus on clean architecture and modern technologies, I specialize in crafting seamless digital experiences using tools like React, Next.js, and Node.js. My work blends performance and design, ensuring every solution is both efficient and user-friendly.
  </p>
</motion.div>


      {/* Right Side - Image with interactive circles */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center items-center relative"
        >
          {/* Main circle with image */}
          <motion.div
            animate={{
              width: circleSize,
              height: circleSize,
              x: cursorPosition.x,
              y: cursorPosition.y
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="rounded-full overflow-hidden border-4 border-blue-600 shadow-xl relative z-10"
          >
            <img
              src="/profile.jpg" // Replace with your actual image
              alt="Selva"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Secondary circle that follows mouse more dramatically */}
          <motion.div
            animate={{
              x: cursorPosition.x * 2,
              y: cursorPosition.y * 2
            }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
            className="absolute rounded-full border-2 border-blue-300 w-64 h-64 opacity-70"
          />
        </motion.div>
      )}
    </div>
  );
}