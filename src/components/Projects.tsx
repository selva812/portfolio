// "use client";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";

// interface Project {
//   id: string;
//   title: string;
//   slug: string;
//   shortDescription: string;
//   frontendTools: string[];
//   backendTools: string[];
//   otherTools: string[];
//   pictures: string[];
//   duration: string;
//   launched: boolean;
//   officialLink: string | null;
// }

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchProjects = async () => {
//       const res = await fetch("/api/project");
//       const data = await res.json();
//       setProjects(data);
//       setLoading(false);
//     };
//     fetchProjects();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-indigo-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white py-16 px-6 lg:px-16">
//       <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//         My Projects
//       </h2>

//       <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.id}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             onClick={() => router.push(`/projects/${project.slug}`)}
//             className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group"
//           >
//             {/* Image */}
//             <div className="relative h-56 overflow-hidden">
//               <img
//                 src={project.pictures[0] || "/images/project-placeholder.jpg"}
//                 alt={project.title}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               {project.officialLink && (
//                 <a
//                   href={project.officialLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   onClick={(e) => e.stopPropagation()}
//                   className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
//                 >
//                   <FaExternalLinkAlt size={16} className="text-gray-700" />
//                 </a>
//               )}
//             </div>

//             {/* Content */}
//             <div className="p-5">
//               <div className="flex justify-between items-start mb-3">
//                 <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
//                   {project.title}
//                 </h3>
//                 {project.launched && (
//                   <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
//                     Live
//                   </span>
//                 )}
//               </div>
//               <p className="text-sm text-gray-600 mb-4 line-clamp-3">
//                 {project.shortDescription}
//               </p>

//               {/* Tools */}
//               <div className="flex flex-wrap gap-2 mb-3">
//                 {[...project.frontendTools, ...project.backendTools, ...project.otherTools]
//                   .slice(0, 4)
//                   .map((tech, i) => (
//                     <span
//                       key={i}
//                       className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//               </div>

//               {/* Duration */}
//               <div className="text-xs text-gray-500 flex items-center">
//                 ⏳ {project.duration}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  frontendTools: string[];
  backendTools: string[];
  otherTools: string[];
  pictures: string[];
  duration: string;
  launched: boolean;
  officialLink: string | null;
  category: 'web' | 'mobile' | 'fullstack';
  featured?: boolean;
}
const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'fullstack'>('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

 useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/project");
      const data = await res.json();
      setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const filterButtons = [
    { key: 'all', label: 'All Projects', icon: '🎯' },
    { key: 'web', label: 'Web Apps', icon: '🌐' },
    { key: 'mobile', label: 'Mobile Apps', icon: '📱' },
    { key: 'fullstack', label: 'Full-Stack', icon: '⚡' },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96 bg-gradient-to-br from-slate-50 to-blue-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative w-full pt-2 px-6 lg:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50"
      id="projects"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-100 to-cyan-100 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900"
            whileHover={{ scale: 1.02 }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my passion for creating exceptional digital experiences
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "120px" } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterButtons.map((button) => (
            <motion.button
              key={button.key}
              onClick={() => setFilter(button.key as any)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                filter === button.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md'
              }`}
            >
              <span>{button.icon}</span>
              {button.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
                onClick={() => window.open(`/projects/${project.slug}`, '_blank')}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: -45 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="absolute top-4 -right-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-1 text-xs font-bold transform rotate-45 z-20"
                  >
                    FEATURED
                  </motion.div>
                )}

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.pictures[0] || "/images/project-placeholder.jpg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0 
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-between p-4"
                  >
                    <div className="flex gap-2">
                      {project.launched && (
                        <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full font-medium">
                          🟢 Live
                        </span>
                      )}
                      {/* <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full font-medium">
                        {project.category.toUpperCase()}
                      </span> */}
                    </div>
                    
                    {project.officialLink && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.officialLink!, '_blank');
                        }}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                      >
                        ↗
                      </motion.button>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <motion.h3 
                      className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1"
                      whileHover={{ x: 2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {project.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="space-y-3 mb-4">
                    <div className="flex flex-wrap gap-1">
                      {[...project.frontendTools, ...project.backendTools, ...project.otherTools]
                        .slice(0, 5)
                        .map((tech, i) => (
                          <motion.span
                            key={`Tech-${tech}`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-700 transition-all cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      {[...project.frontendTools, ...project.backendTools, ...project.otherTools].length > 5 && (
                        <span className="text-xs px-2 py-1 bg-gray-200 text-gray-500 rounded-md">
                          +{[...project.frontendTools, ...project.backendTools, ...project.otherTools].length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 10
                    }}
                    className="flex gap-2"
                  >
                    <button className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                      View Details
                    </button>
                    {project.officialLink && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.officialLink!, '_blank');
                        }}
                        className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm hover:border-blue-500 hover:text-blue-600 transition-all"
                      >
                        Live
                      </button>
                    )}
                  </motion.div>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: hoveredProject === project.id ? 1 : 0 
                  }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 origin-left"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Total Projects", value: projects.length, icon: "🚀" },
              { label: "Live Applications", value: projects.filter(p => p.launched).length, icon: "🌐" },
              { label: "Technologies Used", value: "15+", icon: "⚡" },
              { label: "Client Satisfaction", value: "100%", icon: "⭐" },
            ].map((stat) => (
              <motion.div
                key={`stat-${stat.label}`}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-default"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Like what you see?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            These are just a few highlights from my portfolio. I'd love to discuss 
            how I can help bring your next project to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg"
              onClick={() => window.open('mailto:selva8121999@gmail.com')}
            >
              Let's Work Together
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              onClick={() => window.open('/projects', '_blank')}
            >
              View All Projects
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Action Button */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg flex items-center justify-center text-xl hover:shadow-xl transition-all duration-300"
          >
            ↑
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
// "use client";
// import React, { useEffect, useMemo, useState } from "react";
// import { useInView } from "react-intersection-observer";

// interface Project {
//   id: string;
//   title: string;
//   slug: string;
//   shortDescription: string;
//   frontendTools: string[];
//   backendTools: string[];
//   otherTools: string[];
//   pictures: string[];
//   duration: string;
//   launched: boolean;
//   officialLink: string | null;
//   category: "web" | "mobile" | "fullstack";
//   featured?: boolean;
// }

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState<"all" | "web" | "mobile" | "fullstack">("all");
//   const [hoveredProject, setHoveredProject] = useState<string | null>(null);

//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   useEffect(() => {
//     let cancelled = false;
//     const fetchProjects = async () => {
//       try {
//         const res = await fetch("/api/project", { cache: "no-store" });
//         const data = await res.json();
//         console.log('data',data)
//         if (!cancelled) {
//           setProjects(data);
//           setLoading(false);
//         }
//       } catch {
//         if (!cancelled) setLoading(false);
//       }
//     };
//     fetchProjects();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filteredProjects = useMemo(
//     () => projects.filter((p) => filter === "all" || p.category === filter),
//     [projects, filter]
//   );

//   const filterButtons = [
//     { key: "all", label: "All Projects", icon: "🎯" },
//     { key: "web", label: "Web Apps", icon: "🌐" },
//     { key: "mobile", label: "Mobile Apps", icon: "📱" },
//     { key: "fullstack", label: "Full-Stack", icon: "⚡" },
//   ] as const;

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-96 bg-gradient-to-br from-slate-50 to-blue-50">
//         <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
//       </div> 
    
//     );
//   }

//   return (
//     <div
//       ref={ref}
//       className="relative w-full py-20 px-6 lg:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50"
//       id="projects"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 animate-pulse" />
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-100 to-cyan-100 rounded-full blur-3xl opacity-20 animate-pulse" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header */}
//         <div className={`text-center mb-16 transform transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//           <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 hover:scale-105 transition-transform duration-300">
//             Featured{" "}
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             A showcase of my passion for creating exceptional digital experiences
//           </p>
//           <div className={`h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full transition-all duration-1000 ${inView ? 'w-32' : 'w-0'}`} />
//         </div>

//         {/* Filter Buttons */}
//         <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//           {filterButtons.map((button) => (
//             <button
//               key={button.key}
//               onClick={() => setFilter(button.key as typeof filter)}
//               className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg ${
//                 filter === button.key
//                   ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
//                   : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
//               }`}
//             >
//               <span aria-hidden="true">{button.icon}</span>
//               <span>{button.label}</span>
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => {
//             const techs = [...project.frontendTools, ...project.backendTools, ...project.otherTools]

//             return (
//               <div
//                 key={project.id}
//                 className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer transform hover:-translate-y-3 hover:scale-105 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//                 onMouseEnter={() => setHoveredProject(project.id)}
//                 onMouseLeave={() => setHoveredProject(null)}
//                 onClick={() => window.open(`/projects/${project.slug}`, "_blank")}
//               >
//                 {/* Featured Badge */}
//                 {project.featured && (
//                   <div className="absolute top-4 -right-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-1 text-xs font-bold transform rotate-45 z-20 animate-pulse">
//                     FEATURED
//                   </div>
//                 )}

//                 {/* Image */}
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={project.pictures[0] || "/images/project-placeholder.jpg"}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />

//                   {/* Overlay */}
//                   <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-between p-4 transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
//                     <div className="flex gap-2">
//                       {project.launched && (
//                         <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full font-medium animate-bounce">🟢 Live</span>
//                       )}
//                       <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full font-medium">
//                         {/* {project.category.toUpperCase()} */}
//                       </span>
//                     </div>

//                     {project.officialLink && (
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           window.open(project.officialLink!, "_blank");
//                         }}
//                         className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
//                         aria-label="Open live project"
//                         title="Open live project"
//                       >
//                         ↗
//                       </button>
//                     )}
//                   </div>
//                 </div>

//                 {/* Card Content */}
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-3">
//                     <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-all duration-300 line-clamp-1 group-hover:translate-x-1">
//                       {project.title}
//                     </h3>
//                     <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{project.duration}</span>
//                   </div>

//                   <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{project.shortDescription}</p>

//                   {/* Tech Stack */}
//                   <div className="space-y-3 mb-4">
//                     <div className="flex flex-wrap gap-1">
//                       {techs.slice(0, 5).map((tech, i) => (
//                         <span
//                           key={`${project.id}-tech-${tech}-${i}`}
//                           className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-700 hover:scale-105 transition-all duration-300 cursor-default"
//                           style={{ transitionDelay: `${i * 50}ms` }}
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                       {techs.length > 5 && (
//                         <span className="text-xs px-2 py-1 bg-gray-200 text-gray-500 rounded-md">+{techs.length - 5} more</span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className={`flex gap-2 transform transition-all duration-300 ${hoveredProject === project.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
//                     <button className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
//                       View Details
//                     </button>
//                     {project.officialLink && (
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           window.open(project.officialLink!, "_blank");
//                         }}
//                         className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm hover:border-blue-500 hover:text-blue-600 hover:scale-105 transition-all duration-300"
//                       >
//                         Live
//                       </button>
//                     )}
//                   </div>
//                 </div>

//                 {/* Hover Bottom Border */}
//                 <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-transform duration-300 origin-left ${hoveredProject === project.id ? 'scale-x-100' : 'scale-x-0'}`} />
//               </div>
//             );
//           })}
//         </div>

//         {/* Stats Section */}
//         <div className={`mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform transition-all duration-1000 delay-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             {[
//               { label: "Total Projects", value: projects.length, icon: "🚀" },
//               { label: "Live Applications", value: projects.filter((p) => p.launched).length, icon: "🌐" },
//               { label: "Technologies Used", value: "15+", icon: "⚡" },
//               { label: "Client Satisfaction", value: "100%", icon: "⭐" },
//             ].map((stat, index) => (
//               <div 
//                 key={`stat-${stat.label}`} 
//                 className="group cursor-default hover:scale-105 hover:-translate-y-2 transition-all duration-300"
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 <div className="text-3xl mb-2 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-bold text-blue-600 mb-1 group-hover:text-purple-600 transition-colors duration-300">{stat.value}</div>
//                 <div className="text-sm text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//           <h3 className="text-2xl font-bold mb-4 text-gray-800">Like what you see?</h3>
//           <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
//             These are just a few highlights from my portfolio. I'd love to discuss how I can help bring your next project to life.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
//               onClick={() => window.open("mailto:selva8121999@gmail.com")}
//             >
//               Let's Work Together
//             </button>

//             <button
//               className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 hover:scale-105 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
//               onClick={() => window.open("/projects", "_blank")}
//             >
//               View All Projects
//             </button>
//           </div>
//         </div>

//         {/* Floating Action Button */}
//         <div className={`fixed bottom-8 right-8 z-50 transform transition-all duration-1000 delay-1000 ${inView ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-0'}`}>
//           <button
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg flex items-center justify-center text-xl hover:shadow-xl hover:scale-110 hover:rotate-6 transition-all duration-300 animate-bounce hover:animate-none"
//             aria-label="Scroll to top"
//             title="Scroll to top"
//           >
//             ↑
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         .line-clamp-1 {
//           display: -webkit-box;
//           -webkit-line-clamp: 1;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
        
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Projects;