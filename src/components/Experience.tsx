// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const Experience = () => {
//     const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1
//   });

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, x: -50 },
//     show: { 
//       opacity: 1, 
//       x: 0, 
//       transition: { duration: 0.6, ease: "easeOut" } 
//     }
//   };

//   return (
//     <motion.div 
//       ref={ref}
//       initial="hidden"
//       animate={inView ? "show" : "hidden"}
//       variants={container}
//       className="max-w-6xl mx-auto px-4 sm:px-6 py-16 bg-white"
//     >
//       <motion.div variants={item} className="text-center mb-12">
//         <h2 className="text-4xl font-bold mb-4 text-gray-900">
//           Professional{" "}
//           <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Journey
//           </span>
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Building scalable applications and growing as a developer
//         </p>
//       </motion.div>

//       <div className="relative">
//         {/* Timeline Line */}
//         <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

//         <motion.div variants={item} className="relative pl-20">
//           {/* Timeline Dot */}
//           <motion.div 
//             className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[7px] top-8 shadow-lg"
//             whileHover={{ scale: 1.3 }}
//           />

//           <motion.div 
//             className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all group"
//             whileHover={{ y: -5 }}
//           >
//             {/* Header */}
//             <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 gap-4">
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
//                   Full Stack Developer
//                 </h3>
//                 <p className="text-blue-600 font-medium text-lg">Intelixent IT Solutions</p>
//                 <p className="text-gray-500">Madurai, Tamil Nadu</p>
//               </div>
//               <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
//                 July 2024 - Present
//               </div>
//             </div>

//             {/* Key Achievements */}
//             <div className="grid md:grid-cols-2 gap-6 mb-8">
//               <div className="space-y-4">
//                 <h4 className="font-semibold text-gray-800 flex items-center gap-2">
//                   <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                   Key Projects & Impact
//                 </h4>
//                 <ul className="space-y-2 text-gray-600">
//                   <li className="flex items-start gap-2">
//                     <span className="text-blue-500 mt-1">•</span>
//                     Built scalable e-commerce platform with Stripe integration
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-blue-500 mt-1">•</span>
//                     Developed 3+ cross-platform mobile applications
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-blue-500 mt-1">•</span>
//                     Improved mobile performance by 40% with SSR optimization
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-blue-500 mt-1">•</span>
//                     Led code reviews and mentored junior developers
//                   </li>
//                 </ul>
//               </div>
              
//               <div className="space-y-4">
//                 <h4 className="font-semibold text-gray-800 flex items-center gap-2">
//                   <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
//                   Technologies & Methodologies
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     'Next.js', 'React Native', 'TypeScript', 'Node.js', 
//                     'MongoDB', 'MySQL', 'Firebase', 'Redux Toolkit', 
//                     'Tailwind CSS', 'Agile/Scrum'
//                   ].map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Responsibilities */}
//             <div>
//               <h4 className="font-semibold text-gray-800 mb-3">Core Responsibilities</h4>
//               <div className="grid md:grid-cols-2 gap-4">
//                 {[
//                   "End-to-end feature development from UI/UX to deployment",
//                   "API design and database optimization for scalability",
//                   "Cross-platform mobile app development with React Native",
//                   "Collaborative development in Agile teams"
//                 ].map((responsibility, index) => (
//                   <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//                     <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
//                       <span className="text-blue-600 text-xs">✓</span>
//                     </div>
//                     <span className="text-gray-700 text-sm">{responsibility}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };
// export default Experience;

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const container:any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const slideUp:any = {
    hidden: { opacity: 0, y: 100 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const slideInLeft:any = {
    hidden: { opacity: 0, x: -100 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const slideInRight:any = {
    hidden: { opacity: 0, x: 100 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-16 sm:py-20">
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={container}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center"
      >
        <motion.div variants={slideUp} className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Building scalable applications and growing as a developer
          </motion.p>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.div>

        <div className="relative max-w-6xl mx-auto w-full">
          {/* Timeline Line - Hidden on mobile */}
          <motion.div 
            className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden sm:block"
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <motion.div 
            variants={slideInLeft} 
            className="relative sm:pl-16 lg:pl-20"
          >
            {/* Timeline Dot - Hidden on mobile */}
            <motion.div 
              className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[7px] top-8 shadow-lg hidden sm:block"
              whileHover={{ scale: 1.5 }}
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0.7)",
                  "0 0 0 10px rgba(59, 130, 246, 0)",
                  "0 0 0 0 rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            <motion.div 
              className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all group"
              whileHover={{ y: -8, scale: 1.02 }}
              variants={slideInRight}
            >
              {/* Header */}
              <motion.div 
                className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 sm:mb-8 gap-3 sm:gap-4"
                variants={slideUp}
              >
                <div className="space-y-1 sm:space-y-2">
                  <motion.h3 
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors"
                    animate={{
                      color: ["#111827", "#2563eb", "#111827"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Full Stack Developer
                  </motion.h3>
                  <p className="text-blue-600 font-medium text-base sm:text-lg lg:text-xl">Intelixent IT Solutions</p>
                  <p className="text-gray-500 text-sm sm:text-base">Madurai, Tamil Nadu</p>
                </div>
                <motion.div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium w-fit"
                  whileHover={{ scale: 1.05 }}
                >
                  July 2024 - Present
                </motion.div>
              </motion.div>

              {/* Key Achievements */}
              <motion.div 
                className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div className="space-y-3 sm:space-y-4" variants={slideInLeft}>
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2 text-sm sm:text-base">
                    <motion.span 
                      className="w-2 h-2 bg-green-500 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    Key Projects & Impact
                  </h4>
                  <ul className="space-y-2 sm:space-y-3 text-gray-600">
                    {[
                      "Built scalable e-commerce platform with Stripe integration",
                      "Developed 3+ cross-platform mobile applications",
                      "Improved mobile performance by 40% with SSR optimization",
                      "Led code reviews and mentored junior developers"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start gap-2 text-xs sm:text-sm lg:text-base"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5, color: "#2563eb" }}
                      >
                        <motion.span 
                          className="text-blue-500 mt-1 flex-shrink-0"
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.3,
                            ease: "linear",
                          }}
                        >
                          •
                        </motion.span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div className="space-y-3 sm:space-y-4" variants={slideInRight}>
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2 text-sm sm:text-base">
                    <motion.span 
                      className="w-2 h-2 bg-purple-500 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    />
                    Technologies & Methodologies
                  </h4>
                  <motion.div 
                    className="flex flex-wrap gap-1.5 sm:gap-2"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                  >
                    {[
                      'Next.js', 'React Native', 'TypeScript', 'Node.js', 
                      'MongoDB', 'MySQL', 'Firebase', 'Redux Toolkit', 
                      'Tailwind CSS', 'Agile/Scrum'
                    ].map((tech, index) => (
                      <motion.span
                        key={tech}
                        variants={slideUp}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                        whileHover={{ 
                          scale: 1.1, 
                          y: -3,
                          backgroundColor: "#dbeafe",
                          color: "#2563eb" 
                        }}
                        animate={{
                          y: [0, -2, 0],
                        }}
                        transition={{
                          y: {
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.1,
                          }
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Responsibilities */}
              <motion.div variants={slideUp}>
                <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">Core Responsibilities</h4>
                <motion.div 
                  className="grid sm:grid-cols-2 gap-3 sm:gap-4"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {[
                    "End-to-end feature development from UI/UX to deployment",
                    "API design and database optimization for scalability",
                    "Cross-platform mobile app development with React Native",
                    "Collaborative development in Agile teams"
                  ].map((responsibility, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                      variants={slideUp}
                      whileHover={{ 
                        scale: 1.02, 
                        backgroundColor: "#eff6ff",
                        borderLeft: "4px solid #2563eb" 
                      }}
                    >
                      <motion.div 
                        className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.5,
                          ease: "linear",
                        }}
                      >
                        <span className="text-blue-600 text-xs font-bold">✓</span>
                      </motion.div>
                      <span className="text-gray-700 text-xs sm:text-sm lg:text-base group-hover:text-blue-700 transition-colors">
                        {responsibility}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Achievement Metrics */}
              <motion.div 
                className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100"
                variants={slideUp}
              >
                <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">Key Achievements</h4>
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                >
                  {[
                    { metric: "7+", label: "Projects Delivered", color: "blue" },
                    { metric: "40%", label: "Performance Boost", color: "green" },
                    { metric: "3+", label: "Mobile Apps", color: "purple" },
                    { metric: "100%", label: "On-Time Delivery", color: "indigo" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      variants={slideUp}
                      className="text-center p-3 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
                      whileHover={{ 
                        y: -5, 
                        scale: 1.05,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                      }}
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }
                      }}
                    >
                      <motion.div 
                        className={`text-lg sm:text-xl font-bold text-${item.color}-600 mb-1`}
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      >
                        {item.metric}
                      </motion.div>
                      <div className="text-xs sm:text-sm text-gray-600">{item.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          variants={slideUp}
        >
          <motion.div className="space-y-4">
            <motion.p 
              className="text-gray-600 text-sm sm:text-base"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              Ready to bring your next project to life?
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
              >
                Get In Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-8 py-2 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-blue-500 hover:text-blue-600 transition-all text-sm sm:text-base"
              >
                View All Projects
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;