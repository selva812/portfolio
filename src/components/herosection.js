"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-between bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -0.3,
            y: mousePosition.y * -0.3,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-15"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        {/* Left Content */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium"
              whileHover={{ scale: 1.05, backgroundColor: "#dbeafe" }}
            >
              👋 Welcome to my digital space
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              I'm{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Selva
              </motion.span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl lg:text-3xl text-gray-700 font-light">
              Full-Stack Developer & Digital Craftsman
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              I architect digital experiences that matter. Specializing in scalable web applications, 
              intuitive mobile solutions, and everything in between. From concept to deployment, 
              I transform ideas into powerful, user-centric products.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg transition-all duration-300"
              onClick={() => window.scrollTo({ top: document.querySelector('#projects')?.offsetTop || 800, behavior: 'smooth' })}
            >
              Explore My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              onClick={() => window.scrollTo({ top: document.querySelector('#contact')?.offsetTop || 1200, behavior: 'smooth' })}
            >
              Let's Connect
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start gap-8 pt-8"
          >
            {[
              { label: "Projects Completed", value: "15+" },
              { label: "Years Experience", value: "3+" },
              { label: "Technologies", value: "12+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Interactive Visual */}
        <motion.div
          variants={itemVariants}
          className="flex-1 flex justify-center items-center relative"
        >
          <div className="relative w-96 h-96">
            {/* Main Profile Circle */}
            <motion.div
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              className="relative w-80 h-80 mx-auto"
            >
              <motion.div
                animate={{
                  x: mousePosition.x * 0.5,
                  y: mousePosition.y * 0.5,
                  rotate: mousePosition.x * 0.1,
                }}
                className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 p-1 shadow-2xl"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-2">
                  <img
                    src="/avatar.jpg"
                    alt="Selva"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Orbiting Elements */}
            {["React", "Node.js", "Next.js", "MongoDB"].map((tech, index) => (
              <motion.div
                key={`element-${tech}`}
                className="absolute w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-xs font-semibold text-gray-700 border border-gray-100"
                animate={{
                  rotate: 360,
                  x: Math.cos((index * Math.PI) / 2 + Date.now() / 2000) * 150,
                  y: Math.sin((index * Math.PI) / 2 + Date.now() / 2000) * 150,
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "8px 8px",
                }}
              >
                {tech}
              </motion.div>
            ))}

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`float-${i}`}
                className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
                animate={{
                  y: [-20, -40, -20],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.6, 0.2, 0.6],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}