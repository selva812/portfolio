// "use client";
// import React, { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";

// export type Category = "web" | "mobile" | "fullstack";

// export interface Project {
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
//   category: Category;
//   featured?: boolean;
// }

// const Projects: React.FC = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState<"all" | Category>("all");

//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await fetch("/api/project");
//         if (!res.ok) throw new Error("Failed to fetch projects");
//         const data = await res.json();
//         setProjects(data);
//       } catch (error) {
//         console.error("Failed to fetch projects:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProjects();
//   }, []);

//   const filteredProjects = projects.filter(
//     (project) => filter === "all" || project.category === filter
//   );

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-96 bg-gradient-to-br from-slate-50 to-blue-50">
//         <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <div
//       ref={ref}
//       className="relative w-full pt-2 px-6 lg:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50"
//       id="projects"
//     >
//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
//             Featured{" "}
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             A showcase of my passion for creating exceptional digital
//             experiences across web, mobile, and full-stack applications
//           </p>
//         </div>

//         {/* Filter buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {["all", "web", "mobile", "fullstack"].map((key) => (
//             <button
//               key={key}
//               onClick={() => setFilter(key as "all" | Category)}
//               className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
//                 filter === key
//                   ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
//                   : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
//               }`}
//             >
//               {key}
//             </button>
//           ))}
//         </div>

//         {/* Projects grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project) => (
//             <div
//               key={project.id}
//               className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer 
//               animate-project-entry`}
//               onClick={() => window.open(`/projects/${project.slug}`, "_blank")}
//             >
//               {/* Category Badge */}
//               <div className="absolute top-4 left-4 z-20">
//                 <span
//                   className={`px-3 py-1 text-xs font-bold rounded-full text-white ${
//                     project.category === "web"
//                       ? "bg-blue-500"
//                       : project.category === "mobile"
//                       ? "bg-green-500"
//                       : "bg-purple-500"
//                   }`}
//                 >
//                   {project.category}
//                 </span>
//               </div>

//               {/* Featured Badge */}
//               {project.featured && (
//                 <div className="absolute top-4 -right-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-1 text-xs font-bold transform rotate-45 z-20">
//                   FEATURED
//                 </div>
//               )}

//               {/* Image */}
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={project.pictures[0] || "/api/placeholder/400/300"}
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-3">
//                   <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
//                     {project.title}
//                   </h3>
//                   <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
//                     {project.duration}
//                   </span>
//                 </div>
//                 <p className="text-sm text-gray-600 line-clamp-2">
//                   {project.shortDescription}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Animation CSS */}
//       <style jsx>{`
//         @keyframes projectEntry {
//           0% {
//             opacity: 0;
//             transform: scale(0) rotate(0deg) translateY(100px);
//           }
//           40% {
//             opacity: 0.7;
//             transform: scale(0.8) rotate(180deg) translateY(30px);
//           }
//           70% {
//             opacity: 1;
//             transform: scale(1.1) rotate(300deg) translateY(-10px);
//           }
//           100% {
//             opacity: 1;
//             transform: scale(1) rotate(360deg) translateY(0);
//           }
//         }

//         .animate-project-entry {
//           animation: projectEntry 1.5s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Projects;

"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";

export type Category = "web" | "mobile" | "fullstack";

export interface Project {
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
  category: Category;
  featured?: boolean;
}

const ThreeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.ConeGeometry(0.5, 1, 8),
      new THREE.TetrahedronGeometry(0.7),
      new THREE.OctahedronGeometry(0.6),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x06b6d4, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x10b981, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true }),
    ];

    const meshes: THREE.Mesh[] = [];

    // Create multiple floating objects
    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      meshes.push(mesh);
      scene.add(mesh);
    }

    camera.position.z = 15;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.01 * (index % 2 === 0 ? 1 : -1);
        mesh.rotation.y += 0.01 * (index % 3 === 0 ? 1 : -1);
        mesh.rotation.z += 0.005;

        // Floating motion
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.02;
        mesh.position.x += Math.cos(Date.now() * 0.0015 + index) * 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-20" />;
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | Category>("all");

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/project");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data);

      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  const containerVariants:any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants:any = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: 90,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const headerVariants:any = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const filterVariants:any = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: { scale: 0.95 }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "web":
        return "🌐";
      case "mobile":
        return "📱";
      case "fullstack":
        return "⚡";
      default:
        return "🔥";
    }
  };

  const getCategoryGradient = (category: Category) => {
    switch (category) {
      case "web":
        return "from-blue-500 to-cyan-500";
      case "mobile":
        return "from-green-500 to-emerald-500";
      case "fullstack":
        return "from-purple-500 to-pink-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96 bg-gradient-to-br from-slate-50 to-blue-50">
        <motion.div
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen pt-20 pb-20 px-6 lg:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
      id="projects"
    >
      {/* 3D Background */}
      <ThreeBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A showcase of my passion for creating exceptional digital
            experiences across web, mobile, and full-stack applications
          </motion.p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {["all", "web", "mobile", "fullstack"].map((key) => (
            <motion.button
              key={key}
              variants={filterVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              whileTap="tap"
              onClick={() => setFilter(key as "all" | Category)}
              className={`relative overflow-hidden px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 text-lg ${filter === key
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl"
                  : "bg-white text-gray-600 border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-xl"
                }`}
            >
              <motion.span
                animate={{
                  rotate: filter === key ? 360 : 0,
                  scale: filter === key ? [1, 1.2, 1] : 1
                }}
                transition={{
                  duration: 0.5,
                  scale: { duration: 2, repeat: Infinity }
                }}
                className="text-2xl"
              >
                {getCategoryIcon(key)}
              </motion.span>

              <span className="capitalize font-semibold tracking-wide">
                {key}
              </span>

              {filter === key && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 -z-10 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          ref={projectsRef}
          variants={containerVariants}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${filter}`}
                variants={projectVariants}
                layout
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 cursor-pointer transform-gpu"
                onClick={() => window.open(`/projects/${project.slug}`, "_blank")}
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Category Badge */}
                <motion.div
                  className="absolute top-4 left-4 z-20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <motion.span
                    className={`px-4 py-2 text-sm font-bold rounded-full text-white bg-gradient-to-r ${getCategoryGradient(project.category)} shadow-lg`}
                    animate={{
                      boxShadow: [
                        "0 0 10px rgba(0,0,0,0.1)",
                        "0 0 20px rgba(0,0,0,0.2)",
                        "0 0 10px rgba(0,0,0,0.1)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {getCategoryIcon(project.category)} {project.category}
                  </motion.span>
                </motion.div>

                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    className="absolute top-4 -right-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-12 py-2 text-sm font-bold transform rotate-45 z-20 shadow-lg"
                    animate={{
                      rotate: [45, 50, 45],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ✨ FEATURED
                  </motion.div>
                )}

                {/* Image with parallax effect */}
                <motion.div
                  className="relative h-56 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={project.pictures[0] || "/api/placeholder/400/300"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <motion.h3
                      className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.span
                      className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium"
                      whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
                    >
                      {project.duration}
                    </motion.span>
                  </div>
                  <motion.p
                    className="text-gray-600 line-clamp-2 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.shortDescription}
                  </motion.p>

                  {/* Launch status */}
                  <motion.div
                    className="mt-4 flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`w-3 h-3 rounded-full ${project.launched ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    <span className="text-sm text-gray-600">
                      {project.launched ? 'Live Project' : 'In Development'}
                    </span>
                  </motion.div>
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔍
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;