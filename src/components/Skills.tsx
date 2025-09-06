"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // allow re-trigger fade in/out
    threshold: 0.2,
  });

  const milestones = [
    { period: "Mar 2025", title: "Full-Stack Mastery", tech: "Next.js + MySQL", icon: "🚀" },
    { period: "Feb 2025", title: "SSR & SEO Focus", tech: "Next.js Optimization", icon: "⚡" },
    { period: "Dec 2024", title: "Backend Integration", tech: "Node.js + React", icon: "🔧" },
    { period: "Oct 2024", title: "Web Development", tech: "React + Tailwind", icon: "💻" },
    { period: "Jun 2024", title: "Mobile Development", tech: "React Native", icon: "📱" },
  ];

  return (
    <div
      ref={ref}
      className="max-w-5xl mx-auto px-6 pt-6 pb-6"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-center mb-8 text-gray-800"
      >
        Development Timeline
      </motion.h3>

      {/* Desktop horizontal layout */}
      <div className="relative hidden md:block">
        {/* Horizontal timeline line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2"></div>

        <div className="flex justify-between items-center relative">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.period}
              initial={{ opacity: 0, y: 20 }}
              animate={
                inView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center max-w-[180px]"
            >
              {/* Dot */}
              <motion.div
                className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 shadow-lg z-10"
                whileHover={{ scale: 1.3 }}
              />

              {/* Card */}
              <motion.div
                className="bg-white p-4 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-all group"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  {milestone.icon}
                </div>
                <div className="text-xs text-blue-600 font-semibold mb-1">
                  {milestone.period}
                </div>
                <div className="font-medium text-gray-800 text-sm mb-1">
                  {milestone.title}
                </div>
                <div className="text-xs text-gray-600">
                  {milestone.tech}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile vertical layout */}
      <div className="relative flex flex-col gap-8 md:hidden">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.period}
            initial={{ opacity: 0, y: 20 }}
            animate={
              inView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 relative"
          >
            {/* Dot */}
            <motion.div
              className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 z-10"
              whileHover={{ scale: 1.3 }}
            />

            {/* Card */}
            <motion.div
              className="bg-white p-4 rounded-lg shadow-md border border-gray-100 text-left hover:shadow-lg transition-all group flex-1"
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                {milestone.icon}
              </div>
              <div className="text-xs text-blue-600 font-semibold mb-1">
                {milestone.period}
              </div>
              <div className="font-medium text-gray-800 text-sm mb-1">
                {milestone.title}
              </div>
              <div className="text-xs text-gray-600">
                {milestone.tech}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
