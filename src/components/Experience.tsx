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
      transition: { staggerChildren: 0.2 }
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

  const slideInRight: any = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const centerReveal:any = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const techImages = {
    left: [
      { src: '/public/images/nextjs.jpg', alt: 'Next.js', name: 'Next.js' },
      { src: '/public/images/react.jpg', alt: 'React', name: 'React' },
      { src: '/public/images/typescript.jpg', alt: 'TypeScript', name: 'TypeScript' },
      { src: '/public/images/nodejs.jpg', alt: 'Node.js', name: 'Node.js' },
      { src: '/public/images/mongodb.jpg', alt: 'MongoDB', name: 'MongoDB' }
    ],
    center: {
      src: '/public/images/reactnative.jpg',
      alt: 'React Native',
      name: 'React Native'
    },
    right: [
      { src: '/public/images/mysql.jpg', alt: 'MySQL', name: 'MySQL' },
      { src: '/public/images/firebase.jpg', alt: 'Firebase', name: 'Firebase' },
      { src: '/public/images/redux.jpg', alt: 'Redux', name: 'Redux' },
      { src: '/public/images/tailwind.jpg', alt: 'Tailwind', name: 'Tailwind' },
      { src: '/public/images/express.jpg', alt: 'Express', name: 'Express' }
    ]
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-16 sm:py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={container}
        className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center"
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

        <div className="w-full">
          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all"
            whileHover={{ y: -8, scale: 1.01 }}
            variants={slideUp}
          >
            {/* Header */}
            <motion.div
              className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8 sm:mb-12 gap-3 sm:gap-4"
              variants={slideUp}
            >
              <div className="space-y-1 sm:space-y-2">
                <motion.h3
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900"
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

            {/* Technology Stack with Images */}
            <motion.div
              className="mb-8 sm:mb-12"
              variants={slideUp}
            >
              <h4 className="font-semibold text-gray-800 mb-6 sm:mb-8 text-center text-lg sm:text-xl">
                Technologies & Tools
              </h4>

              {/* Technology Images Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-center justify-items-center">
                {/* Left Side */}
                <motion.div
                  className="grid grid-cols-3 gap-6 col-span-2 lg:justify-items-end"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {[
                    { src: '/images/html.png', alt: 'HTML', name: 'HTML' },
                    { src: '/images/css.png', alt: 'CSS', name: 'CSS' },
                    { src: '/images/javascript.svg', alt: 'Javascript', name: 'Javascript' },
                    { src: '/images/tailwind.png', alt: 'Tailwind', name: 'Tailwind' },
                    { src: '/images/react.svg', alt: 'React', name: 'React' },
                    { src: '/images/typescript.svg', alt: 'TypeScript', name: 'TypeScript' },
                    { src: '/images/nodejs.svg', alt: 'Node.js', name: 'Node.js' }
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      variants={slideInLeft}
                      className="relative group mt-8 mb-2"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        y: { duration: 3, repeat: Infinity, delay: index * 0.2 }
                      }}
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 group-hover:border-blue-400 transition-colors">
                        <img
                          src={tech.src}
                          alt={tech.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      {/* Tooltip positioned above */}
                      <motion.div
                        className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                      >
                        {tech.name}
                        {/* Tooltip arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Center */}
                <motion.div
                  className="col-span-1 flex flex-col items-center mt-8"
                  variants={centerReveal}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ scale: { duration: 4, repeat: Infinity } }}
                >
                  <motion.div
                    className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-gradient-to-r from-blue-500 to-purple-500"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 40px rgba(147, 51, 234, 0.4)",
                        "0 0 20px rgba(59, 130, 246, 0.3)"
                      ]
                    }}
                    transition={{ boxShadow: { duration: 3, repeat: Infinity } }}
                  >
                    <img
                      src="/images/nextjs.svg"
                      alt="Next.js"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold text-sm sm:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Next.js
                  </motion.div>
                </motion.div>

                {/* Right Side */}
                <motion.div
                  className="grid grid-cols-3 gap-6 col-span-2 lg:justify-items-start"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {[
                    { src: '/images/react_native.png', alt: 'React Native', name: 'React Native' },
                    { src: '/images/mysql.svg', alt: 'MYSQL', name: 'MYSQL' },
                    { src: '/images/express.svg', alt: 'Express', name: 'Express' },
                    { src: '/images/redux.png', alt: 'Redux', name: 'Redux' },
                    { src: '/images/firebase.webp', alt: 'Firebase', name: 'Firebase' },
                    { src: '/images/docker.png', alt: 'Docker', name: 'Docker' },
                    { src: '/images/motion.png', alt: 'Framer Motion', name: 'Framer Motion' }
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      variants={slideInRight}
                      className="relative group mt-8 mb-2"
                      whileHover={{
                        scale: 1.1,
                        rotate: -5,
                        transition: { duration: 0.3 }
                      }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        y: { duration: 3, repeat: Infinity, delay: index * 0.2 }
                      }}
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 group-hover:border-purple-400 transition-colors">
                        <img
                          src={tech.src}
                          alt={tech.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      {/* Tooltip positioned above */}
                      <motion.div
                        className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                      >
                        {tech.name}
                        {/* Tooltip arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
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
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
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
                      <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div className="space-y-3 sm:space-y-4" variants={slideInRight}>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Core Responsibilities
                </h4>
                <ul className="space-y-2 sm:space-y-3 text-gray-600">
                  {[
                    "Full-stack development including frontend UI/UX and backend API creation",
                    "Database design and optimization for various project requirements",
                    "Collaborated with other developers on integrated projects (frontend/backend separation)",
                    "Managed complete project deployment and maintenance for solo projects"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2 text-xs sm:text-sm lg:text-base"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: -5, color: "#7c3aed" }}
                    >
                      <span className="text-purple-500 mt-1 flex-shrink-0">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Achievement Metrics */}
            <motion.div
              className="pt-4 sm:pt-6 border-t border-gray-100"
              variants={slideUp}
            >
              <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base text-center">Key Achievements</h4>
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
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;