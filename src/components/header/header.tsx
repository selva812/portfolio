"use client"
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { toggleTheme } from "@/store/themeslicer";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaEnvelope, FaPhone, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

import Experience from "../Experience";
import SkillsSection from "../Skills";
import EducationSection from "../EducationSection";
import Projects from "../Projects";
import ContactSection from "../ContactSection";
import HeroSection from "../herosection";
import AboutSidebar from "../about";
export default function HeaderComponent() {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch<AppDispatch>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  const navlist = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
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
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm "
            : "bg-transparent "
          }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={'/images/slogo.gif'}
              alt="logo"
              className="h-12 w-12 md:h-16 md:w-16 transition-all duration-300"
            />
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">Selva</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navlist.map((item, index) => (
              <div
                key={index}
                onClick={()=>handleNavClick(item.id)}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </div>
            ))}
          </nav>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <motion.svg
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </motion.svg>
              ) : (
                <motion.svg
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </motion.svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-gray-900"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col">
                {navlist.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.id}`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                    className="py-3 px-4 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <main className="container mx-auto px-6 py-16">
  <section id="home"><HeroSection/></section>
  
  {/* Create a flex container for about sidebar and main content */}
  <div className="flex gap-8">
    {/* About sidebar - will stick to the left */}
    <aside className="w-1/3">
      <AboutSidebar />
    </aside>
    
    {/* Main content area - will scroll on the right */}
    <div className="flex-1 space-y-16">
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
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
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