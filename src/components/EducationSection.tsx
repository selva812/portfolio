import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  percentage: string;
}

const educationHistory: Education[] = [
  {
    degree: 'B.E. Electrical and Electronics Engineering',
    institution: 'K.L.N College of Engineering',
    period: '2017 - 2021',
    percentage: '82.7%'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'S.D.A Matriculation Higher Secondary School',
    period: '2017',
    percentage: '91.4%'
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'S.D.A Matriculation Higher Secondary School',
    period: '2015',
    percentage: '79.4%'
  }
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: 90,
      transformOrigin: "top"
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className="max-w-4xl mx-auto px-4 sm:px-6 py-12 bg-white"
    >
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center text-gray-900 relative"
        variants={item}
      >
        <span className="relative z-10 px-4 bg-white">Education Journey</span>
        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent -z-0"></span>
      </motion.h2>

      <div className="relative">
        {/* Floating animated elements */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-blue-100 rounded-full blur-xl opacity-30"
          variants={floatingVariants}
          initial="initial"
          animate="float"
        />
        <motion.div
          className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-100 rounded-full blur-xl opacity-30"
          variants={floatingVariants}
          initial="initial"
          animate="float"
          transition={{ delay: 0.5 }}
        />

        {/* Timeline */}
        <div className="relative pl-8 sm:pl-12 border-l-2 border-blue-500">
          {educationHistory.map((education, index) => (
            <motion.div
              key={education.degree}
              variants={item}
              className="relative mb-10 group"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Timeline dot */}
              <motion.div 
                className="absolute w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full -left-[13px] top-1 shadow-lg z-10"
                whileHover={{ scale: 1.2 }}
              />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 rounded-xl -z-10 transition-opacity duration-300" />

              {/* Education card */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm group-hover:shadow-md transition-all duration-300 overflow-hidden">
                {/* Animated background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    {education.degree}
                  </motion.h3>
                  <motion.div 
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                  >
                    {education.period}
                  </motion.div>
                </div>

                <motion.p 
                  className="text-gray-600 mb-3"
                  whileHover={{ x: 3 }}
                >
                  {education.institution}
                </motion.p>

                <motion.div 
                  className="flex items-center mt-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full bg-gray-100 rounded-full h-2.5 mr-4">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${parseFloat(education.percentage)}%` }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-blue-600 font-medium">{education.percentage}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating degree cap animation */}
        <motion.div
          className="absolute -right-10 top-1/3 text-blue-400 opacity-80"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-7 10 7-10 7z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EducationSection;