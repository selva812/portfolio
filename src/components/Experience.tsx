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
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    }
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
      className="max-w-4xl mx-auto px-4 sm:px-6 py-12 bg-white"
    >
      <motion.h2 
        variants={item}
        className="text-3xl font-bold mb-12 text-gray-900 text-center relative"
      >
        <span className="relative z-10 px-4 bg-white">Work Experience</span>
        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-0"></span>
      </motion.h2>

      <motion.div 
        variants={container}
        className="relative pl-8 sm:pl-12 pb-12 border-l-2 border-blue-500"
      >
        {/* Animated timeline dot */}
        <motion.div 
          variants={item}
          className="absolute w-6 h-6 bg-blue-500 rounded-full -left-[13px] top-1 shadow-md"
          whileHover={{ scale: 1.2, backgroundColor: "#3B82F6" }}
        ></motion.div>

        {/* Experience card with enhanced hover effects */}
        <motion.div 
          variants={item}
          className="mb-10 p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
          whileHover={{ y: -5 }}
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
            <motion.h3 
              whileHover={{ x: 3 }}
              className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors"
            >
              Full Stack Developer
            </motion.h3>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full text-sm bg-blue-100 text-blue-600 font-medium border border-blue-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors"
            >
              July 2024 - Present
            </motion.div>
          </div>

          <motion.p 
            variants={item}
            className="text-blue-600 mb-6 font-medium"
          >
            Intelixent IT Solutions, Madurai
          </motion.p>

          <motion.ul 
            variants={container}
            className="space-y-4 list-disc pl-5 marker:text-blue-400"
          >
            {[
              "Developed and maintained 3+ full stack web and mobile applications using Next.js, Tailwind CSS, and React Native, ensuring seamless user experiences across platforms.",
              "Built a scalable e-commerce platform with Next.js and TypeScript, integrating Stripe for payments, Redux Toolkit for state management, and MySQL for product data storage.",
              "Designed and deployed responsive websites using Next.js and Tailwind CSS, improving mobile performance and enhancing SEO through server-side rendering (SSR).",
              "Collaborated on cross-platform React Native mobile apps, implementing features like push notifications, user authentication, and API integration with Firebase.",
              "Worked in Agile teams to deliver features end-to-end, from UI/UX prototyping (Figma) to backend API development (Node.js/Express) and database optimization.",
              "Conducted code reviews, resolved bugs, and improved application maintainability by refactoring legacy components into reusable React modules."
            ].map((point) => (
              <motion.li 
                key={point}
                variants={item}
                className="text-gray-700 leading-relaxed hover:text-gray-900 transition-colors"
                whileHover={{ x: 5 }}
              >
                {point}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div 
            variants={item}
            className="mt-8"
          >
            <h4 className="font-medium mb-4 text-gray-900">Tools & Technologies:</h4>
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
                'Redux',
                'Redux Toolkit',
                'Puppeteer',
                'Prisma',
                'Framer Motion',
                'Rest API'
              ].map((tech) => (
                <motion.span
                  key={tech}
                  variants={item}
                  whileHover={{ 
                    y: -3,
                    backgroundColor: "#3B82F6",
                    color: "white"
                  }}
                  className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 shadow-sm transition-colors cursor-default"
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