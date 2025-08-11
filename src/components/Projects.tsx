"use client";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/project");
      const data = await res.json();
      setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 px-6 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        My Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => router.push(`/projects/${project.slug}`)}
            className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.pictures[0] || "/images/project-placeholder.jpg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {project.officialLink && (
                <a
                  href={project.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
                >
                  <FaExternalLinkAlt size={16} className="text-gray-700" />
                </a>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                {project.launched && (
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                    Live
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {project.shortDescription}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-3">
                {[...project.frontendTools, ...project.backendTools, ...project.otherTools]
                  .slice(0, 4)
                  .map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
              </div>

              {/* Duration */}
              <div className="text-xs text-gray-500 flex items-center">
                ⏳ {project.duration}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
