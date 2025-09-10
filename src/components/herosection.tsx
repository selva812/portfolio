// "use client";
// import React, { useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function HeroSection() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isLoaded, setIsLoaded] = useState(false);

//   // Track scroll
//   const { scrollY } = useScroll();

//   // Spiral effect when scrolling
//   const rotate = useTransform(scrollY, [0, 300], [0, 360]); // full rotation
//   const scale = useTransform(scrollY, [0, 300], [1, 0]); // shrink on scroll down
//   const opacity = useTransform(scrollY, [0, 300], [1, 0]); // fade out

//   useEffect(() => {
//     setIsLoaded(true);

//     const handleMouseMove = (e: any) => {
//       setMousePosition({
//         x: (e.clientX - window.innerWidth / 2) / 50,
//         y: (e.clientY - window.innerHeight / 2) / 50,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.6, -0.05, 0.01, 0.99],
//       },
//     },
//   };

//   const floatingVariants = {
//     initial: { y: 0 },
//     animate: {
//       y: [-10, 10, -10],
//       transition: {
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <motion.div
//       style={{
//         rotate,
//         scale,
//         opacity,
//       }}
//       className="relative w-full min-h-screen flex items-center justify-between bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
//     >
//       {/* Background effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           animate={{
//             x: mousePosition.x * 0.5,
//             y: mousePosition.y * 0.5,
//           }}
//           className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20"
//         />
//         <motion.div
//           animate={{
//             x: mousePosition.x * -0.3,
//             y: mousePosition.y * -0.3,
//           }}
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-15"
//         />
//       </div>

//       {/* Content */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate={isLoaded ? "visible" : "hidden"}
//         className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12"
//       >
//         {/* Left Content */}
//         <div className="flex-1 space-y-8 text-center lg:text-left">
//           <motion.div variants={itemVariants} className="space-y-4">
//             <motion.div
//               className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium"
//               whileHover={{ scale: 1.05, backgroundColor: "#dbeafe" }}
//             >
//               👋 Welcome to my digital space
//             </motion.div>

//             <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
//               I'm{" "}
//               <motion.span
//                 className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
//                 animate={{
//                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                 }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               >
//                 Selva
//               </motion.span>
//             </h1>
//           </motion.div>
//           <motion.div variants={itemVariants} className="space-y-6">
//             <h2 className="text-2xl lg:text-3xl text-gray-700 font-light">
//               Full-Stack Developer | React Native, Next.js & Node.js
//             </h2>

//             <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
//               I’m a Full-Stack Developer with 1 year of experience building responsive web and mobile applications using Next.js, Node.js, and React Native. I focus on developing scalable apps with real-time features, RESTful API integration, and clean architecture. Passionate about solving real-world problems and continuously learning new technologies to deliver impactful digital solutions.
//             </p>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             variants={itemVariants}
//             className="flex justify-center lg:justify-start gap-8 pt-8"
//           >
//             {[
//               { label: "Projects Completed", value: "7+" },
//               { label: "Years Experience", value: "1+" },
//               { label: "Technologies", value: "10+" },
//             ].map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 className="text-center"
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="text-2xl lg:text-3xl font-bold text-blue-600">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm text-gray-500">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Right Side - Interactive Visual */}
//         <motion.div
//           variants={itemVariants}
//           className="flex-1 flex justify-center items-center relative"
//         >
//           <div className="relative w-96 h-96">
//             {/* Main Profile Circle */}
//             <motion.div
//               variants={floatingVariants}
//               initial="initial"
//               animate="animate"
//               className="relative w-80 h-80 mx-auto"
//             >
//               <motion.div
//                 animate={{
//                   x: mousePosition.x * 0.5,
//                   y: mousePosition.y * 0.5,
//                   rotate: mousePosition.x * 0.1,
//                 }}
//                 className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 p-1 shadow-2xl"
//               >
//                 <div className="w-full h-full rounded-full overflow-hidden bg-white p-2">
//                   <img
//                     src="/avatar.jpg"
//                     alt="Selva"
//                     className="w-full h-full object-cover rounded-full"
//                   />
//                 </div>
//               </motion.div>
//             </motion.div>
//             {/* Floating Particles */}
//             {[...Array(6)].map((_, i) => (
//               <motion.div
//                 key={`float-${i}`}
//                 className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
//                 animate={{
//                   y: [-20, -40, -20],
//                   x: [0, Math.random() * 20 - 10, 0],
//                   opacity: [0.6, 0.2, 0.6],
//                 }}
//                 transition={{
//                   duration: 1 + Math.random() * 2,
//                   repeat: Infinity,
//                   delay: i * 0.5,
//                 }}
//                 style={{
//                   top: `${20 + Math.random() * 60}%`,
//                   left: `${20 + Math.random() * 60}%`,
//                 }}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track scroll
  const { scrollY } = useScroll();

  // Desktop animations - spiral effect when scrolling
  const rotate = useTransform(scrollY, [0, 300], [0, 360]);
  const scale = useTransform(scrollY, [0, 300], [1, 0]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mobile animations - slide up effect
  const mobileY = useTransform(scrollY, [0, 400], [0, -200]);
  const mobileOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: any) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const containerVariants:any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants:any = {
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

  const mobileItemVariants:any = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatingVariants:any = {
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

  const mobileFloatingVariants:any = {
    initial: { x: 0 },
    animate: {
      x: [-5, 5, -5],
      y: [-8, 8, -8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      style={isMobile ? {
        y: mobileY,
        opacity: mobileOpacity,
      } : {
        rotate,
        scale,
        opacity,
      }}
      className="relative w-full min-h-screen flex items-center justify-between bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={isMobile ? {
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.1, 0.2],
          } : {
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
          transition={isMobile ? {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          } : {}}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={isMobile ? {
            scale: [1, 0.8, 1],
            opacity: [0.15, 0.3, 0.15],
          } : {
            x: mousePosition.x * -0.3,
            y: mousePosition.y * -0.3,
          }}
          transition={isMobile ? {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          } : {}}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-15"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
      >
        {/* Left Content */}
        <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left">
          <motion.div 
            variants={isMobile ? mobileItemVariants : itemVariants} 
            className="space-y-4"
          >
            <motion.div
              className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs sm:text-sm font-medium"
              whileHover={{ scale: 1.05, backgroundColor: "#dbeafe" }}
              whileTap={{ scale: 0.95 }}
            >
              👋 Welcome to my digital space
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              I'm{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
                animate={isMobile ? {
                  scale: [1, 1.05, 1],
                } : {
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={isMobile ? {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                } : {
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                Selva
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.div 
            variants={isMobile ? mobileItemVariants : itemVariants} 
            className="space-y-4 lg:space-y-6"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-light">
              Full-Stack Developer | React Native, Next.js & Node.js
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I'm a Full-Stack Developer with 1 year of experience building responsive web and mobile applications using Next.js, Node.js, and React Native. I focus on developing scalable apps with real-time features, RESTful API integration, and clean architecture. Passionate about solving real-world problems and continuously learning new technologies to deliver impactful digital solutions.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={isMobile ? mobileItemVariants : itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-6 lg:pt-8"
          >
            {[
              { label: "Projects Completed", value: "7+" },
              { label: "Years Experience", value: "1+" },
              { label: "Technologies", value: "10+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ y: -5 }}
                animate={isMobile ? {
                  y: [0, -2, 0],
                } : {}}
                transition={isMobile ? {
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut",
                } : {}}
              >
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Interactive Visual */}
        <motion.div
          variants={isMobile ? mobileItemVariants : itemVariants}
          className="flex-1 flex justify-center items-center relative mt-8 lg:mt-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Main Profile Circle */}
            <motion.div
              variants={isMobile ? mobileFloatingVariants : floatingVariants}
              initial="initial"
              animate="animate"
              className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto"
            >
              <motion.div
                animate={isMobile ? {
                  rotate: [0, 5, -5, 0],
                } : {
                  x: mousePosition.x * 0.5,
                  y: mousePosition.y * 0.5,
                  rotate: mousePosition.x * 0.1,
                }}
                transition={isMobile ? {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                } : {}}
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
            
            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`float-${i}`}
                className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full opacity-60"
                animate={isMobile ? {
                  y: [-15, -25, -15],
                  x: [0, Math.random() * 15 - 7.5, 0],
                  opacity: [0.6, 0.2, 0.6],
                  scale: [1, 0.8, 1],
                } : {
                  y: [-20, -40, -20],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.6, 0.2, 0.6],
                }}
                transition={{
                  duration: isMobile ? 1.5 + Math.random() * 1.5 : 1 + Math.random() * 2,
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
    </motion.div>
  );
}