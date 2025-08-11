"use client";

import React, { JSX, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  hover: { scale: 1.03, transition: { duration: 0.18 } },
};

const buttonVariants = {
  hover: { scale: 1.03, boxShadow: "0px 8px 24px rgba(13,82,214,0.16)" },
};

export default function AboutSection(): JSX.Element {
  const sectionRef = useRef<HTMLElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(sectionRef, { once: true, margin: "-120px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Download resume from public/ folder
  const handleDownloadResume = () => {
    // create an anchor and trigger download
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // put resume.pdf inside public/
    link.download = "Selva_S_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-white text-gray-900"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* LEFT - Bio / Personal Info */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-[#0d52d6]">Me</span>
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            I'm a passionate Full-Stack Developer building reliable, scalable web and mobile apps.
            I focus on clean code, performance and real-world results — using React, Next.js, Node.js and modern toolchains.
          </p>

          <motion.ul
            variants={itemVariants}
            className="space-y-2 text-sm md:text-base text-gray-700"
          >
            <motion.li
              whileHover={{ x: 6 }}
              className="flex items-start gap-3"
            >
              <span className="text-[#0d52d6] font-mono">•</span>
              <span>Full-stack web & mobile solutions with Next.js & React Native</span>
            </motion.li>

            <motion.li whileHover={{ x: 6 }} className="flex items-start gap-3">
              <span className="text-[#0d52d6] font-mono">•</span>
              <span>Real-time features (Push, Firebase) & background sync</span>
            </motion.li>

            <motion.li whileHover={{ x: 6 }} className="flex items-start gap-3">
              <span className="text-[#0d52d6] font-mono">•</span>
              <span>Clean architecture, APIs (Node.js) & MySQL data handling</span>
            </motion.li>

            <motion.li whileHover={{ x: 6 }} className="flex items-start gap-3">
              <span className="text-[#0d52d6] font-mono">•</span>
              <span>UI & UX from Figma to responsive production-ready pages</span>
            </motion.li>
          </motion.ul>

          <motion.div className="flex gap-4 mt-4" variants={itemVariants}>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              onClick={() => window.location.assign("/projects")}
              className="px-5 py-2 inline-flex items-center gap-2 rounded-full bg-[#0d52d6] text-white text-sm md:text-base font-medium border-0"
            >
              View Projects
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              onClick={handleDownloadResume}
              className="px-4 py-2 inline-flex items-center gap-2 rounded-full border border-gray-200 text-sm md:text-base bg-white text-gray-800"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT - Compact Personal Info Card + Circular Image */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center md:items-end gap-6"
        >
          {/* compact personal info card with hover effects */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="w-full max-w-sm p-4 rounded-xl border border-gray-100 shadow-sm"
            style={{ background: "white" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[#0d52d6]">
                  <img
                    src="/avatar.jpg" // put your image in public/avatar.jpg or change path
                    alt="Selva"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold">Selva S</h3>
                <p className="text-sm text-gray-600">Full Stack Developer</p>
              </div>
            </div>

            {/* list */}
            <div className="mt-4 grid grid-cols-1 gap-2">
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span className="text-gray-500">Email</span>
                <span className="font-medium">selva8121999@gmail.com</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span className="text-gray-500">Phone</span>
                <span className="font-medium">+91 9943882575</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span className="text-gray-500">Location</span>
                <span className="font-medium">Madurai, India</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive circular image (mouse based scale) */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            {/* outer animated circle (decorative) */}
            <motion.div
              className="absolute -inset-4 rounded-full blur-2xl opacity-30"
              style={{ background: "radial-gradient(circle at 30% 30%, rgba(13,82,214,0.15), transparent 30%), radial-gradient(circle at 70% 70%, rgba(179,157,219,0.08), transparent 20%)" }}
              animate={{
                rotate: [0, 8, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* interactive circular wrapper */}
            <InteractiveCircularImage />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

/**
 * InteractiveCircularImage
 * - Uses pointer position to produce a subtle scale/translate of the image container.
 * - Very lightweight: uses requestAnimationFrame + CSS transforms (GPU-accelerated).
 */
function InteractiveCircularImage(): JSX.Element {
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = circleRef.current;
    if (!el) return;

    let frame = 0;
    let mouseX = 0;
    let mouseY = 0;
    let lastX = 0;
    let lastY = 0;

    const onMove = (e: PointerEvent) => {
      // Normalize to center of viewport so effect feels natural
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX = (e.clientX - cx) / cx; // -1 .. 1
      mouseY = (e.clientY - cy) / cy; // -1 .. 1
      if (!frame) frame = requestAnimationFrame(update);
    };

    const update = () => {
      // Linear interpolate for smoothness
      lastX += (mouseX - lastX) * 0.08;
      lastY += (mouseY - lastY) * 0.08;

      // map to small transform values
      const translateX = lastX * 10; // px
      const translateY = lastY * 8; // px
      const scale = 1 + Math.min(0.06, Math.abs(lastX) * 0.06 + Math.abs(lastY) * 0.03);

      if (el) {
        el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
      }

      frame = 0;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove as EventListener);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl"
      style={{ background: "#f6f8fb" }}
    >
      <img
        src="/avatar.jpg" // place your image in public/avatar.jpg
        alt="Selva"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
