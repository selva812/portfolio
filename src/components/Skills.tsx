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
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    }
  };

  const progressBar = {
    hidden: { width: 0 },
    show: (percentage: number) => ({
      width: `${percentage}%`,
      transition: { 
        duration: 1,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={container}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 bg-white"
    >
      <motion.h2 
        variants={item}
        className="text-3xl font-bold mb-12 text-center text-gray-900 relative"
      >
        <span className="relative z-10 px-4 bg-white">Technical Skills</span>
        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-0"></span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Frontend Skills */}
        <motion.div 
          variants={item}
          className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          
          <motion.h3 
            whileHover={{ x: 3 }}
            className="text-xl font-semibold mb-6 text-blue-600 flex items-center group-hover:text-blue-700 transition-colors"
          >
            <span className="w-3 h-3 mr-2 bg-blue-600 rounded-full group-hover:bg-blue-700 transition-colors"></span>
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
                className="flex items-start text-gray-700 hover:text-gray-900 transition-colors p-3 rounded-lg hover:bg-blue-50"
                whileHover={{ x: 5 }}
              >
                <span className="w-2 h-2 mt-2 mr-3 bg-blue-600 rounded-full flex-shrink-0"></span>
                <span>{skill}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Backend Skills */}
        <motion.div 
          variants={item}
          className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          
          <motion.h3 
            whileHover={{ x: 3 }}
            className="text-xl font-semibold mb-6 text-blue-600 flex items-center group-hover:text-blue-700 transition-colors"
          >
            <span className="w-3 h-3 mr-2 bg-blue-600 rounded-full group-hover:bg-blue-700 transition-colors"></span>
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
                className="flex items-start text-gray-700 hover:text-gray-900 transition-colors p-3 rounded-lg hover:bg-blue-50"
                whileHover={{ x: 5 }}
              >
                <span className="w-2 h-2 mt-2 mr-3 bg-blue-600 rounded-full flex-shrink-0"></span>
                <span>{skill}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Mobile & Other Skills */}
        <motion.div 
          variants={item}
          className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          
          <motion.h3 
            whileHover={{ x: 3 }}
            className="text-xl font-semibold mb-6 text-blue-600 flex items-center group-hover:text-blue-700 transition-colors"
          >
            <span className="w-3 h-3 mr-2 bg-blue-600 rounded-full group-hover:bg-blue-700 transition-colors"></span>
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
                className="flex items-start text-gray-700 hover:text-gray-900 transition-colors p-3 rounded-lg hover:bg-blue-50"
                whileHover={{ x: 5 }}
              >
                <span className="w-2 h-2 mt-2 mr-3 bg-blue-600 rounded-full flex-shrink-0"></span>
                <span>{skill}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Skills Proficiency */}
      <motion.div variants={item}>
        <motion.h3 
          className="text-2xl font-semibold mb-8 text-center text-gray-900 relative"
          variants={item}
        >
          <span className="relative z-10 px-4 bg-white">Skills Proficiency</span>
          <span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-0"></span>
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsList.map((skill, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-white p-5 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
              whileHover={{ y: -3 }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </span>
                <span className="text-blue-600 font-medium">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full"
                  custom={skill.percentage}
                  variants={progressBar}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
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