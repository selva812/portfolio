import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillProficiency {
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'mobile' | 'other';
}

const skillsList: SkillProficiency[] = [
  { name: 'Next.js', percentage: 90, category: 'frontend' },
  { name: 'React.js', percentage: 90, category: 'frontend' },
  { name: 'Tailwind CSS', percentage: 85, category: 'frontend' },
  { name: 'JavaScript', percentage: 90, category: 'frontend' },
  { name: 'TypeScript', percentage: 80, category: 'frontend' },
  { name: 'Node.js', percentage: 75, category: 'backend' },
  { name: 'Express.js', percentage: 70, category: 'backend' },
  { name: 'MongoDB', percentage: 70, category: 'backend' },
  { name: 'MySQL', percentage: 75, category: 'backend' },
  { name: 'React Native', percentage: 80, category: 'mobile' },
  { name: 'Git', percentage: 85, category: 'other' },
  { name: 'Python', percentage: 65, category: 'other' },
];

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const progressBar = {
    hidden: { width: 0 },
    show: { 
      width: '100%',
      transition: { 
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={container}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-indigo-900 dark:to-blue-900 rounded-2xl shadow-lg relative overflow-hidden"
      // className="max-w-6xl mx-auto px-4 sm:px-6 py-12"
    >
      {/* Animated background elements */}
<div className="absolute inset-0">
  <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-300/20 to-purple-300/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full animate-pulse"></div>
  <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-cyan-300/20 to-blue-300/20 dark:from-cyan-600/10 dark:to-blue-600/10 rounded-full animate-pulse delay-700"></div>
  <div className="absolute bottom-20 left-32 w-24 h-24 bg-gradient-to-r from-indigo-300/20 to-cyan-300/20 dark:from-indigo-600/10 dark:to-cyan-600/10 rounded-full animate-pulse delay-1000"></div>
</div>
      <motion.h2 
        variants={item}
        className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
      >
        Technical Skills
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Frontend Skills */}
        <motion.div 
          variants={item}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg dark:hover:shadow-indigo-900/30 transition-shadow duration-300"
        >
          <motion.h3 
            whileHover={{ x: 3 }}
            className="text-xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400 flex items-center"
          >
            <span className="w-3 h-3 mr-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
            Frontend Development
          </motion.h3>
          <ul className="space-y-4">
            {[
              "Next.js, React.js, Tailwind CSS",
              "JavaScript, TypeScript, HTML5, CSS3",
              "React Context, Redux Toolkit",
              "REST API Integration, OAuth",
              "Responsive & Mobile-first Design",
              "Performance Optimization"
            ].map((skill, index) => (
              <motion.li 
                key={index}
                variants={item}
               className=" flex items-start text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-indigo-900/30 transition-all duration-300 border border-white/50 dark:border-gray-700/50 relative overflow-hidden group"
              >
                <span className="w-2 h-2 mt-2 mr-3 bg-indigo-600 dark:bg-indigo-400 rounded-full flex-shrink-0"></span>
                <span>{skill}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Backend Skills */}
        <motion.div 
          variants={item}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg dark:hover:shadow-indigo-900/30 transition-shadow duration-300"
        >
          <motion.h3 
            whileHover={{ x: 3 }}
            className="text-xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400 flex items-center"
          >
            <span className="w-3 h-3 mr-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
            Backend Development
          </motion.h3>
          <ul className="space-y-4">
            {[
              "Node.js, Express.js",
              "MongoDB, MySQL",
              "API Design & Development",
              "Authentication (JWT, OAuth)",
              "Database Optimization",
              "Server Deployment & Maintenance"
            ].map((skill, index) => (
              <motion.li 
                key={index}
                variants={item}
               className=" flex items-start text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-indigo-900/30 transition-all duration-300 border border-white/50 dark:border-gray-700/50 relative overflow-hidden group"
              >
                <span className="w-2 h-2 mt-2 mr-3 bg-indigo-600 dark:bg-indigo-400 rounded-full flex-shrink-0"></span>
                <span>{skill}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Mobile & Other Skills */}
        <motion.div 
          variants={item}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg dark:hover:shadow-indigo-900/30 transition-shadow duration-300"
        >
          <motion.h3 
            whileHover={{ x: 3 }}
            className="text-xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400 flex items-center"
          >
            <span className="w-3 h-3 mr-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
            Mobile & Other Skills
          </motion.h3>
          <ul className="space-y-4">
            {[
              "React Native Development",
              "Cross-platform Mobile Apps",
              "Push Notifications, Analytics",
              "Git Version Control",
              "Python Scripting",
              "UI/UX Design Principles"
            ].map((skill, index) => (
              <motion.li 
                key={index}
                variants={item}
                className=" flex items-start text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-indigo-900/30 transition-all duration-300 border border-white/50 dark:border-gray-700/50 relative overflow-hidden group"
                // className="flex items-start text-gray-700 dark:text-gray-300"
              >
                <span className="w-2 h-2 mt-2 mr-3 bg-indigo-600 dark:bg-indigo-400 rounded-full flex-shrink-0"></span>
                <span>{skill}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Skills Proficiency */}
      <motion.div variants={item}>
        <motion.h3 
          className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white"
          variants={item}
        >
          Skills Proficiency
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsList.map((skill, index) => (
            <motion.div 
              key={index}
              variants={item}
           className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-lg dark:hover:shadow-indigo-900/20 transition-all duration-300 border border-white/30 dark:border-gray-700/30 group hover:border-indigo-200 dark:hover:border-indigo-700"
              // className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md dark:hover:shadow-indigo-900/20 transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                  variants={progressBar}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  custom={skill.percentage}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsSection;