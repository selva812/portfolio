"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface SkillProficiency {
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'mobile' | 'tools';
  icon: string;
  color: string;
}

const skillsData: SkillProficiency[] = [
  { name: 'React.js', percentage: 92, category: 'frontend', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
  { name: 'Next.js', percentage: 88, category: 'frontend', icon: '▲', color: 'from-gray-700 to-gray-900' },
  { name: 'TypeScript', percentage: 85, category: 'frontend', icon: '📘', color: 'from-blue-600 to-blue-800' },
  { name: 'Tailwind CSS', percentage: 90, category: 'frontend', icon: '🎨', color: 'from-teal-500 to-teal-700' },
  { name: 'JavaScript', percentage: 94, category: 'frontend', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
  
  { name: 'Node.js', percentage: 82, category: 'backend', icon: '🟢', color: 'from-green-600 to-green-800' },
  { name: 'Express.js', percentage: 80, category: 'backend', icon: '🚀', color: 'from-gray-600 to-gray-800' },
  { name: 'MongoDB', percentage: 78, category: 'backend', icon: '🍃', color: 'from-green-500 to-green-700' },
  { name: 'MySQL', percentage: 75, category: 'backend', icon: '🐬', color: 'from-blue-500 to-blue-700' },
  { name: 'Python', percentage: 70, category: 'backend', icon: '🐍', color: 'from-blue-400 to-yellow-500' },
  
  { name: 'React Native', percentage: 85, category: 'mobile', icon: '📱', color: 'from-purple-500 to-pink-500' },
  { name: 'Expo', percentage: 80, category: 'mobile', icon: '⚫', color: 'from-gray-800 to-black' },
  
  { name: 'Git & GitHub', percentage: 88, category: 'tools', icon: '🔧', color: 'from-orange-500 to-red-500' },
  { name: 'Docker', percentage: 65, category: 'tools', icon: '🐳', color: 'from-blue-400 to-blue-600' },
  { name: 'AWS', percentage: 60, category: 'tools', icon: '☁️', color: 'from-orange-400 to-orange-600' },
  { name: 'Figma', percentage: 75, category: 'tools', icon: '🎭', color: 'from-purple-400 to-purple-600' },
];

const categories = [
  { key: 'frontend', title: 'Frontend Development', description: 'Building responsive, interactive user interfaces' },
  { key: 'backend', title: 'Backend Development', description: 'Robust APIs and database management' },
  { key: 'mobile', title: 'Mobile Development', description: 'Cross-platform mobile applications' },
  { key: 'tools', title: 'Tools & DevOps', description: 'Development workflow and deployment' },
];

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  const progressBar = {
    hidden: { width: 0 },
    show: (percentage: number) => ({
      width: `${percentage}%`,
      transition: { 
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  const filteredSkills = skillsData.filter(skill => skill.category === activeCategory);
const [bubbles, setBubbles] = useState<{ left: string; delay: number; duration: number }[]>([]);

useEffect(() => {
  const generated = Array.from({ length: 20 }, () => ({
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 2
  }));
  setBubbles(generated);
}, []);
  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={container}
      className="relative w-full py-20 px-6 lg:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
       {bubbles.map((b, i) => (
  <motion.div
    key={`bounce-${i}`}
    className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-20"
    animate={{ y: [-20, -100], opacity: [0, 1, 0] }}
    transition={{
      duration: b.duration,
      repeat: Infinity,
      delay: b.delay
    }}
    style={{ left: b.left, top: '100%' }}
  />
))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          variants={item}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={`cat-${category.title}`}
              onClick={() => setActiveCategory(category.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Category Description */}
        <motion.div
           key={`${activeCategory}-desc`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-600">
            {categories.find(cat => cat.key === activeCategory)?.description}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={`${activeCategory}-grid`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`skills-${skill.name}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <motion.span 
                    className="text-2xl"
                    animate={{ 
                      scale: hoveredSkill === skill.name ? 1.2 : 1,
                      rotate: hoveredSkill === skill.name ? 10 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.icon}
                  </motion.span>
                  <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </span>
                </div>
                <motion.span 
                  className="text-blue-600 font-bold text-lg"
                  animate={{ scale: hoveredSkill === skill.name ? 1.1 : 1 }}
                >
                  {skill.percentage}%
                </motion.span>
              </div>
              
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                <motion.div 
                  className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                  custom={skill.percentage}
                  variants={progressBar}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  whileHover={{ scale: 1.02 }}
                />
              </div>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: hoveredSkill === skill.name ? 'auto' : 0,
                  opacity: hoveredSkill === skill.name ? 1 : 0
                }}
                className="overflow-hidden mt-3"
              >
                <p className="text-sm text-gray-600">
                  {skill.category === 'frontend' && 'Building beautiful, responsive user interfaces'}
                  {skill.category === 'backend' && 'Creating robust server-side solutions'}
                  {skill.category === 'mobile' && 'Developing cross-platform mobile apps'}
                  {skill.category === 'tools' && 'Streamlining development workflow'}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div variants={item} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">
            Journey Highlights
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: 'March 2025',
                  title: 'Next Js Developer ',
                  description: 'Start working with Next js full stack developer . Working in Admin panel with Mysql as database .',
                  icon: '🚀'
                },
                {
                  year: 'February 2025',
                  title: 'Next Js for web page ',
                  description: 'Start working with Next js for static web page due to its Server Side Rendering(SSR) and SEO',
                  icon: '🚀'
                },
                {
                  year: 'December 2024',
                  title: 'Backend Developing',
                  description: 'Start working in backend with Node js  and React , React Native as frontend',
                  icon: '🚀'
                },
                {
                  year: 'October 2024',
                  title: 'Start building website usinge React',
                  description: 'Specialized in React with tailwind css .user friendly resposive for mobile .',
                  icon: '⚡'
                },
                {
                  year: 'june 2024',
                  title: 'Professional Development Journey',
                  description: 'Started building Mobile app using React Native ',
                  icon: '💡'
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                >
                  <div className={`bg-white p-6 rounded-xl shadow-lg border border-gray-200 max-w-md ${
                    index % 2 === 0 ? 'mr-8' : 'ml-8'
                  } hover:shadow-xl transition-all duration-300 group`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{milestone.icon}</span>
                      <div>
                        <div className="text-blue-600 font-bold text-sm">{milestone.year}</div>
                        <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {milestone.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                  
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={item}
          className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm10 0c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative z-10">
            <motion.h3 
              className="text-3xl font-bold mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Let's Build Something Amazing Together
            </motion.h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Ready to turn your vision into reality? Let's discuss how my skills can bring your project to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300"
                onClick={() => window.open('mailto:selva8121999@gmail.com')}
              >
                Start a Conversation
              </motion.button>
              
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                onClick={() => window.scrollTo({ top: document.querySelector('#projects')?.offsetTop || 0, behavior: 'smooth' })}
              >
                View My Work
              </motion.button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;