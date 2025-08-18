"use client"
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { toggleTheme } from "@/store/themeslicer";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaEnvelope, FaPhone, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import HeroSection from "@/components/herosection";
import AboutSidebar from "@/components/about";
import Experience from "@/components/Experience";
import SkillsSection from "@/components/Skills";
import EducationSection from "@/components/EducationSection";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";


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
            <Image
              src={'/images/slogo.gif'}
              alt="logo"
              width={40}
              height={40}
              className="h-8 w-10 md:h-12 md:w-12 transition-all duration-300"
            />
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">Selva</span>
          </div>

          <nav className="hidden md:flex gap-6">
            {navlist.map((item, index) => (
              <div
                key={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </div>
            ))}
          </nav>
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
                    key={`mobnav-${item.id}`}
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
      <main className="container mx-auto px-6 py-5">
        <section id="home">
          <HeroSection />
        </section>

        <div className="flex flex-col md:flex-row gap-8">
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