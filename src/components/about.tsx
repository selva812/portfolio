// "use client";
// import { motion } from "framer-motion";

// export default function AboutSection() {
//  const containerVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   const stats = [
//     { number: "1+", label: "Years Experience", icon: "🚀" },
//     { number: "7+", label: "Projects Completed", icon: "💼" },
//     { number: "10+", label: "Technologies", icon: "⚡" },
//     { number: "100%", label: "Client Satisfaction", icon: "⭐" }
//   ];

//   return (
//     <section className="w-full bg-gradient-to-br from-white via-blue-50/30 to-white pt-20 pb-10 px-6 lg:px-20">
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={containerVariants}
//         className="max-w-6xl mx-auto"
//       >
//         {/* Header */}
//         <motion.div variants={itemVariants} className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
//             Get To Know{" "}
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Me Better
//             </span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <motion.div variants={itemVariants} className="space-y-8">
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                   <span className="text-blue-600 text-sm">🎯</span>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">My Mission</h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     Transforming ideas into digital reality through clean code, innovative solutions, 
//                     and user-centered design. I believe technology should solve real problems and 
//                     create meaningful experiences.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                   <span className="text-green-600 text-sm">💡</span>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">What Drives Me</h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     The thrill of learning new technologies and solving complex challenges. 
//                     From React Native mobile apps to full-stack web applications, I'm constantly 
//                     pushing boundaries and expanding my skill set.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                   <span className="text-purple-600 text-sm">🔍</span>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">Beyond Coding</h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     When I'm not building applications, you'll find me solving LeetCode problems, 
//                     exploring the latest tech trends, or contributing to open-source projects. 
//                     I believe continuous learning is the key to staying relevant in tech.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* CTA */}
//             <motion.div 
//               className="flex gap-4 pt-6"
//               variants={itemVariants}
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
//               >
//                 Download Resume
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-blue-500 hover:text-blue-600 transition-all"
//               >
//                 Let's Connect
//               </motion.button>
//             </motion.div>
//           </motion.div>

//           {/* Right Stats */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <div className="grid grid-cols-2 gap-6">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   variants={itemVariants}
//                   whileHover={{ y: -5, scale: 1.02 }}
//                   className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all group"
//                 >
//                   <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
//                     {stat.icon}
//                   </div>
//                   <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">
//                     {stat.number}
//                   </div>
//                   <div className="text-sm text-gray-600">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Skills Preview */}
//             <motion.div 
//               variants={itemVariants}
//               className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
//             >
//               <h4 className="font-semibold text-gray-800 mb-4">Core Technologies</h4>
//               <div className="flex flex-wrap gap-2">
//                 {['React', 'Next.js', 'React Native', 'Node.js', 'TypeScript', 'Mysql'].map((tech) => (
//                   <span 
//                     key={tech}
//                     className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full border border-blue-100"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100, rotateY: -15 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100, rotateY: 15 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const stats = [
    { number: "1+", label: "Years Experience", icon: "🚀" },
    { number: "7+", label: "Projects Completed", icon: "💼" },
    { number: "10+", label: "Technologies", icon: "⚡" },
    { number: "100%", label: "Client Satisfaction", icon: "⭐" }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-white via-blue-50/30 to-white pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div 
          variants={fadeInScale} 
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Get To Know{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me Better
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left Content */}
          <motion.div variants={slideInFromLeft} className="space-y-6 sm:space-y-8">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              {[
                {
                  icon: "🎯",
                  title: "My Mission",
                  description: "Transforming ideas into digital reality through clean code, innovative solutions, and user-centered design. I believe technology should solve real problems and create meaningful experiences.",
                  color: "blue"
                },
                {
                  icon: "💡",
                  title: "What Drives Me",
                  description: "The thrill of learning new technologies and solving complex challenges. From React Native mobile apps to full-stack web applications, I'm constantly pushing boundaries and expanding my skill set.",
                  color: "green"
                },
                {
                  icon: "🔍",
                  title: "Beyond Coding",
                  description: "When I'm not building applications, you'll find me solving LeetCode problems, exploring the latest tech trends, or contributing to open-source projects. I believe continuous learning is the key to staying relevant in tech.",
                  color: "purple"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeInScale}
                  className="flex items-start gap-3 sm:gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className={`w-8 h-8 bg-${item.color}-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      y: { duration: 2, repeat: Infinity, delay: index * 0.5 }
                    }}
                  >
                    <span className={`text-${item.color}-600 text-sm`}>{item.icon}</span>
                  </motion.div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6"
              variants={fadeInScale}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
              >
                Download Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-blue-500 hover:text-blue-600 transition-all text-sm sm:text-base"
              >
                Let's Connect
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Stats */}
          <motion.div variants={slideInFromRight} className="space-y-4 sm:space-y-6">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInScale}
                  whileHover={{ y: -8, scale: 1.03, rotateY: 5 }}
                  className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all group cursor-pointer"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, delay: index * 0.7 }
                  }}
                >
                  <motion.div 
                    className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Preview */}
            <motion.div 
              variants={fadeInScale}
              className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">Core Technologies</h4>
              <motion.div 
                className="flex flex-wrap gap-1.5 sm:gap-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {['React', 'Next.js', 'React Native', 'Node.js', 'TypeScript', 'Mysql'].map((tech, index) => (
                  <motion.span 
                    key={tech}
                    variants={fadeInScale}
                    className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-600 text-xs sm:text-sm rounded-full border border-blue-100 hover:bg-blue-100 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    animate={{
                      y: [0, -1, 0],
                    }}
                    transition={{
                      y: { duration: 2, repeat: Infinity, delay: index * 0.2 }
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
