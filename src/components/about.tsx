// "use client";

// import React, { JSX, useEffect, useRef } from "react";
// import { motion, useAnimation, useInView } from "framer-motion";

// const containerVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       staggerChildren: 0.12,
//       when: "beforeChildren",
//       duration: 0.6,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 12 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
//   hover: { scale: 1.03, transition: { duration: 0.18 } },
// };

// const buttonVariants = {
//   hover: { scale: 1.03, boxShadow: "0px 8px 24px rgba(13,82,214,0.16)" },
// };

// export default function AboutSection(): JSX.Element {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const controls = useAnimation();
//   const inView = useInView(sectionRef, { once: true, margin: "-120px" });

//   useEffect(() => {
//     if (inView) controls.start("visible");
//   }, [controls, inView]);

//   // Download resume from public/ folder
//   const handleDownloadResume = () => {
//     // create an anchor and trigger download
//     const link = document.createElement("a");
//     link.href = "/resume.pdf"; // put resume.pdf inside public/
//     link.download = "Selva_S_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <motion.section
//       ref={sectionRef}
//       initial="hidden"
//       animate={controls}
//       variants={containerVariants}
//       className="w-full py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-white text-gray-900"
//     >
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//         {/* LEFT - Bio / Personal Info */}
//         <motion.div variants={itemVariants} className="space-y-4">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             About <span className="text-[#0d52d6]">Me</span>
//           </h2>

//           <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//             I'm a passionate Full-Stack Developer building reliable, scalable web and mobile apps.
//             I focus on clean code, performance and real-world results — using React, Next.js, Node.js and modern toolchains.
//           </p>

//           <motion.ul
//             variants={itemVariants}
//             className="space-y-2 text-sm md:text-base text-gray-700"
//           >
//             <motion.li
//               whileHover={{ x: 6 }}
//               className="flex items-start gap-3"
//             >
//               <span className="text-[#0d52d6] font-mono">•</span>
//               <span>Full-stack web & mobile solutions with Next.js & React Native</span>
//             </motion.li>

//             <motion.li whileHover={{ x: 6 }} className="flex items-start gap-3">
//               <span className="text-[#0d52d6] font-mono">•</span>
//               <span>Real-time features (Push, Firebase) & background sync</span>
//             </motion.li>

//             <motion.li whileHover={{ x: 6 }} className="flex items-start gap-3">
//               <span className="text-[#0d52d6] font-mono">•</span>
//               <span>Clean architecture, APIs (Node.js) & MySQL data handling</span>
//             </motion.li>

//             <motion.li whileHover={{ x: 6 }} className="flex items-start gap-3">
//               <span className="text-[#0d52d6] font-mono">•</span>
//               <span>UI & UX from Figma to responsive production-ready pages</span>
//             </motion.li>
//           </motion.ul>

//           <motion.div className="flex gap-4 mt-4" variants={itemVariants}>
//             <motion.button
//               variants={buttonVariants}
//               whileHover="hover"
//               onClick={() => window.location.assign("/projects")}
//               className="px-5 py-2 inline-flex items-center gap-2 rounded-full bg-[#0d52d6] text-white text-sm md:text-base font-medium border-0"
//             >
//               View Projects
//             </motion.button>

//             <motion.button
//               variants={buttonVariants}
//               whileHover="hover"
//               onClick={handleDownloadResume}
//               className="px-4 py-2 inline-flex items-center gap-2 rounded-full border border-gray-200 text-sm md:text-base bg-white text-gray-800"
//             >
//               Download Resume
//             </motion.button>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT - Compact Personal Info Card + Circular Image */}
//         <motion.div
//           variants={itemVariants}
//           className="flex flex-col items-center md:items-end gap-6"
//         >
//           {/* compact personal info card with hover effects */}
//           <motion.div
//             variants={itemVariants}
//             whileHover="hover"
//             className="w-full max-w-sm p-4 rounded-xl border border-gray-100 shadow-sm"
//             style={{ background: "white" }}
//           >
//             <div className="flex items-center gap-3">
//               <div className="flex-shrink-0">
//                 <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[#0d52d6]">
//                   <img
//                     src="/avatar.jpg" // put your image in public/avatar.jpg or change path
//                     alt="Selva"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               <div className="flex-1">
//                 <h3 className="text-lg font-semibold">Selva S</h3>
//                 <p className="text-sm text-gray-600">Full Stack Developer</p>
//               </div>
//             </div>

//             {/* list */}
//             <div className="mt-4 grid grid-cols-1 gap-2">
//               <div className="flex items-center justify-between text-sm text-gray-700">
//                 <span className="text-gray-500">Email</span>
//                 <span className="font-medium">selva8121999@gmail.com</span>
//               </div>
//               <div className="flex items-center justify-between text-sm text-gray-700">
//                 <span className="text-gray-500">Phone</span>
//                 <span className="font-medium">+91 9943882575</span>
//               </div>
//               <div className="flex items-center justify-between text-sm text-gray-700">
//                 <span className="text-gray-500">Location</span>
//                 <span className="font-medium">Madurai, India</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Interactive circular image (mouse based scale) */}
       
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }


// function InteractiveCircularImage(): JSX.Element {
//   const circleRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const el = circleRef.current;
//     if (!el) return;

//     let frame = 0;
//     let mouseX = 0;
//     let mouseY = 0;
//     let lastX = 0;
//     let lastY = 0;

//     const onMove = (e: PointerEvent) => {
//       // Normalize to center of viewport so effect feels natural
//       const cx = window.innerWidth / 2;
//       const cy = window.innerHeight / 2;
//       mouseX = (e.clientX - cx) / cx; // -1 .. 1
//       mouseY = (e.clientY - cy) / cy; // -1 .. 1
//       if (!frame) frame = requestAnimationFrame(update);
//     };

//     const update = () => {
//       // Linear interpolate for smoothness
//       lastX += (mouseX - lastX) * 0.08;
//       lastY += (mouseY - lastY) * 0.08;

//       // map to small transform values
//       const translateX = lastX * 10; // px
//       const translateY = lastY * 8; // px
//       const scale = 1 + Math.min(0.06, Math.abs(lastX) * 0.06 + Math.abs(lastY) * 0.03);

//       if (el) {
//         el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
//       }

//       frame = 0;
//     };

//     window.addEventListener("pointermove", onMove, { passive: true });
//     return () => {
//       window.removeEventListener("pointermove", onMove as EventListener);
//       if (frame) cancelAnimationFrame(frame);
//     };
//   }, []);

//   return (
//     <div
//       ref={circleRef}
//       className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl"
//       style={{ background: "#f6f8fb" }}
//     >
//       <img
//         src="/avatar.jpg" // place your image in public/avatar.jpg
//         alt="Selva"
//         className="w-full h-full object-cover"
//       />
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Selva_S_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const expertise = [
    {
      icon: "🚀",
      title: "Performance Focused",
      description: "Optimized applications with lighthouse scores 95+",
    },
    {
      icon: "🎨",
      title: "Design Systems",
      description: "Scalable UI components with consistent branding",
    },
    {
      icon: "⚡",
      title: "Modern Stack",
      description: "Latest technologies for robust, future-proof solutions",
    },
    {
      icon: "🔄",
      title: "Agile Approach",
      description: "Iterative development with continuous feedback loops",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative w-full py-20 px-6 lg:px-16 bg-gradient-to-b from-white to-gray-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "80px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story & Philosophy */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">My Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With over 3 years of experience in full-stack development, I've evolved from 
                  a curious problem-solver into a seasoned digital architect. My journey spans 
                  from crafting pixel-perfect interfaces to building robust backend systems.
                </p>
                <p>
                  I believe in writing code that not only works but tells a story—clean, 
                  maintainable, and scalable solutions that stand the test of time and growth.
                </p>
              </div>
            </motion.div>

            {/* Philosophy Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                My Philosophy
              </h3>
              <blockquote className="text-lg italic text-gray-700 border-l-4 border-blue-500 pl-6">
                "Great software is built at the intersection of technical excellence 
                and human empathy. Every line of code should serve a purpose, 
                every interaction should feel natural."
              </blockquote>
            </motion.div>
          </motion.div>

          {/* Right Column - Expertise & Contact */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Expertise Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800">Get In Touch</h3>
              
              <div className="space-y-4">
                {[
                  { label: "Email", value: "selva8121999@gmail.com", type: "email" },
                  { label: "Phone", value: "+91 9943882575", type: "phone" },
                  { label: "Location", value: "Madurai, India", type: "location" },
                ].map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    whileHover={{ x: 5 }}
                    className="flex justify-between items-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => {
                      if (contact.type === "email") {
                        window.open(`mailto:${contact.value}`);
                      } else if (contact.type === "phone") {
                        window.open(`tel:${contact.value}`);
                      }
                    }}
                  >
                    <span className="text-gray-500 text-sm">{contact.label}</span>
                    <span className="font-medium text-gray-800">{contact.value}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadResume}
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              >
                📄 Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16 pt-12 border-t border-gray-200"
        >
          <motion.h3
            className="text-2xl font-bold mb-4 text-gray-800"
            whileHover={{ scale: 1.02 }}
          >
            Ready to bring your ideas to life?
          </motion.h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you're a startup looking to build your MVP or an established company 
            seeking to modernize your tech stack, I'm here to help you succeed.
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg"
            onClick={() => window.open('mailto:selva8121999@gmail.com')}
          >
            Start a Project
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}