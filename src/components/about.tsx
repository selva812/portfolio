import { useState } from 'react';
import { FaGithub, FaEnvelope, FaPhone, FaLinkedin, FaDownload, FaMapMarkerAlt, FaGlobe, FaTimes, FaCalendarAlt, FaLanguage, FaHeart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const AboutSidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      {/* Desktop Sidebar - Always Visible */}
   <motion.div 
  className="hidden lg:block sticky top-14 w-[100%] bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-800/50 z-10 h-[calc(100vh-5rem)] overflow-y-auto"
  initial={{ x: -320 }}
  animate={{ x: 0 }}
  transition={{ duration: 0.5 }}
>
  <div className="w-full p-4 overflow-y-auto">
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-indigo-500 dark:border-indigo-400">
      About Me
    </h3>
    
    <p className="mb-6 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
     I'm a Full Stack Developer with around a year of hands-on experience building web and mobile apps. I have worked on projects like hotel booking systems, farm management apps with RFID and Bluetooth integration, and real-time notifications using Firebase. I'm comfortable working across the stack using tools like Next.js, React Native, Node.js, and MySQL 
    </p>

    <div className="grid grid-cols-1 gap-3">
      {[
        { value: 'selva8121999@gmail.com', icon: <FaEnvelope size={18} /> },
        { value: '+91 9943882575', icon: <FaPhone size={18} /> },
        { value: '08 Dec 1999', icon: <FaCalendarAlt size={18} /> },
        { value: 'Tamil, English', icon: <FaLanguage size={18} /> },
        { value: 'Madurai, India', icon: <FaMapMarkerAlt size={18} /> },
        { value: 'Cricket, Music', icon: <FaHeart size={18} /> },
      ].map((itemData, index) => (
        <motion.div 
          key={index}
          variants={item}
          className="flex items-center p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
          whileHover={{ y: -2 }}
        >
          <div className="bg-indigo-600 text-white p-2 rounded-lg mr-3">
            {itemData.icon}
          </div>
          <p className="text-gray-900 dark:text-white font-medium text-sm">{itemData.value}</p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>

      {/* Mobile Trigger Button */}
      <div className="lg:hidden fixed left-4 bottom-4 z-20">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="w-16 h-16 rounded-full bg-indigo-600 text-white shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-colors"
        >
          <FaGlobe size={24} />
        </button>
      </div>

      {/* Mobile Modal */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <button
                onClick={() => setIsMobileOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <FaTimes size={24} />
              </button>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b-2 border-indigo-500 dark:border-indigo-400">
                  About Me
                </h3>
                
                <p className="mb-8 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  Full Stack Developer with 7+ months of experience delivering client-driven solutions, including e-commerce platforms and custom APIs. Skilled in rapid prototyping and client communication. Looking to join a dynamic team to tackle large-scale projects with measurable impact.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    { label: 'Email', value: 'selva8121999@gmail.com', icon: <FaEnvelope size={20} /> },
                    { label: 'Phone', value: '+91 9943882575', icon: <FaPhone size={20} /> },
                    { label: 'Birth Date', value: '08 Dec 1999', icon: <FaGlobe size={20} /> },
                    { label: 'Languages', value: 'Tamil, English', icon: <FaGlobe size={20} /> },
                    { label: 'Location', value: 'Madurai, India', icon: <FaMapMarkerAlt size={20} /> },
                    { label: 'Interests', value: 'Cricket, Music', icon: <FaGlobe size={20} /> },
                  ].map((itemData, index) => (
                    <motion.div 
                      key={index}
                      variants={item}
                      className="flex items-start p-4 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                      whileHover={{ y: -3 }}
                    >
                      <div className="bg-indigo-600 text-white p-2 rounded-lg mr-4">
                        {itemData.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-1">{itemData.label}</h4>
                        <p className="text-gray-900 dark:text-white font-medium">{itemData.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutSidebar;