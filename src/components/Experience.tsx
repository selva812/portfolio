import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  // Animation variants
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

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={container}
      className="max-w-4xl mx-auto px-4 sm:px-6 py-12 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 rounded-2xl shadow-lg relative overflow-hidden"
      // className="max-w-4xl mx-auto px-4 sm:px-6 py-12"
    >
     {/* Background decoration */}

      <motion.h2 
        variants={item}
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center"
      >
        Work Experience
      </motion.h2>

      <motion.div 
        variants={container}
        className="relative pl-8 sm:pl-12 pb-12 border-l-2 border-indigo-600 dark:border-indigo-400"
      >
        {/* Timeline dot */}
        <motion.div 
          variants={item}
          className="absolute w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 rounded-full -left-[13px] top-1 shadow-md"
        ></motion.div>

        {/* Experience card */}
        <motion.div 
          variants={item}
          className="mb-10 p-6 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-indigo-900/30 transition-all duration-300 border border-white/50 dark:border-gray-700/50 relative overflow-hidden"
          // className="mb-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg dark:hover:shadow-indigo-900/30 transition-shadow duration-300"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
            <motion.h3 
              whileHover={{ x: 3 }}
              className="text-xl font-semibold text-gray-900 dark:text-white"
            >
              Full Stack Developer
            </motion.h3>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full text-sm bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 font-medium border border-indigo-200 dark:border-indigo-700"
            >
              July 2024 - Present
            </motion.div>
          </div>

          <motion.p 
            variants={item}
            className="text-indigo-600 dark:text-indigo-400 mb-6 font-medium"
          >
            Intelixent IT Solutions, Madurai
          </motion.p>

          <motion.ul 
            variants={container}
            className="space-y-4 list-disc pl-5"
          >
            {[
              "Developed and maintained 3+ full stack web and mobile applications using Next.js, Tailwind CSS, and React Native, ensuring seamless user experiences across platforms.",
              "Built a scalable e-commerce platform with Next.js and TypeScript, integrating Stripe for payments, Redux Toolkit for state management, and MySQL for product data storage.",
              "Designed and deployed responsive websites using Next.js and Tailwind CSS, improving mobile performance and enhancing SEO through server-side rendering (SSR).",
              "Collaborated on cross-platform React Native mobile apps, implementing features like push notifications, user authentication, and API integration with Firebase.",
              "Worked in Agile teams to deliver features end-to-end, from UI/UX prototyping (Figma) to backend API development (Node.js/Express) and database optimization.",
              "Conducted code reviews, resolved bugs, and improved application maintainability by refactoring legacy components into reusable React modules."
            ].map((point, index) => (
              <motion.li 
                key={index}
                variants={item}
                className="text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {point}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div 
            variants={item}
            className="mt-8"
          >
            <h4 className="font-medium mb-4 text-gray-900 dark:text-white">Tools & Technologies:</h4>
            <div className="flex flex-wrap gap-3">
              {[
                'Next.js',
                'React Native',
                'Tailwind CSS',
                'TypeScript',
                'Node.js',
                'Express',
                'Firebase',
                'MongoDB',
                'MySQL',
                'Git',
                'Figma',
                'Redux Toolkit'
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  variants={item}
                  whileHover={{ y: -3 }}
                  className="px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 border border-indigo-200 dark:border-gray-600 rounded-full text-sm font-medium text-indigo-600 dark:text-indigo-300 shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;