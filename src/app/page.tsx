"use client"
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import HeroSection from "@/components/herosection";
import AboutSidebar from "@/components/about";
import Experience from "@/components/Experience";
import SkillsSection from "@/components/Skills";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Projects from "@/components/Projects";

export default function HeaderComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  const navlist = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "project" },
    { name: "Contact", id: "contact" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Add an offset
      for (let i = navlist.length - 1; i >= 0; i--) {
        const section = document.getElementById(navlist[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(navlist[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsMenuOpen(false);

    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };
  return (
    <>
      <header className={`fixed top-2 left-1/2 transform -translate-x-1/2 w-[90%] z-50 transition-all duration-300 ${scrolled ? 'shadow-2xl' : 'shadow-lg'}`}>
        <div className={`rounded-2xl transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border border-gray-200' : 'bg-white/80 backdrop-blur-sm border border-gray-100'}`}>
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo - Left */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Selva
              </span>
            </motion.div>

            {/* Navigation - Center */}
            <nav className="hidden md:flex items-center justify-center flex-1">
              <div className="flex gap-1 bg-gray-100 p-1.5 rounded-full">
                {navlist.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === item.id
                        ? 'bg-white text-blue-600 shadow-md'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Button - Right */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-6 flex items-center justify-center"
              >
                {isMenuOpen ? '✕' : '☰'}
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
              >
                <div className="container mx-auto px-4 py-3">
                  {navlist.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`block w-full text-left py-3 px-4 rounded-lg mb-1 transition-all ${
                        activeTab === item.id
                          ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
      <main className="container mx-auto px-6 py-5">
        <section id="home">
          <HeroSection />
        </section>

        <div className="flex flex-col md:flex-row gap-8 bg-white">
          <div className="w-full md:flex-1 space-y-16">
            <section id="about"><AboutSidebar /></section>
            <section id="experience"><Experience /></section>
            <section id="skills"><SkillsSection /></section>
            <section id="education"><EducationSection /></section>
            <section id="project"><Projects /></section>
            <section id="contact"><ContactSection /></section>
          </div>
        </div>
      </main>


      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow-md mt-2 sticky bottom-0 w-full z-20">
        <div className="container mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <p>© {new Date().getFullYear()} S. Selva. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/selva812" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">
              <FaGithub size={22} />
            </a>
            <a href="mailto:selva8121999@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">
              <FaEnvelope size={22} />
            </a>
            <a href="tel:9943882575" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">
              <FaPhone size={22} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600">
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}