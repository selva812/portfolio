"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | Category>("all");

  const [ref, inView] = useInView({
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="relative w-full pt-2 px-6 lg:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50"
      id="projects"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my passion for creating exceptional digital
            experiences across web, mobile, and full-stack applications
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "web", "mobile", "fullstack"].map((key) => (
            <button
              key={key}
              onClick={() => setFilter(key as "all" | Category)}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                filter === key
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer 
              animate-project-entry`}
              onClick={() => window.open(`/projects/${project.slug}`, "_blank")}
            >
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full text-white ${
                    project.category === "web"
                      ? "bg-blue-500"
                      : project.category === "mobile"
                      ? "bg-green-500"
                      : "bg-purple-500"
                  }`}
                >
                  {project.category}
                </span>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 -right-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-1 text-xs font-bold transform rotate-45 z-20">
                  FEATURED
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.pictures[0] || "/api/placeholder/400/300"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {project.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {project.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes projectEntry {
          0% {
            opacity: 0;
            transform: scale(0) rotate(0deg) translateY(100px);
          }
          40% {
            opacity: 0.7;
            transform: scale(0.8) rotate(180deg) translateY(30px);
          }
          70% {
            opacity: 1;
            transform: scale(1.1) rotate(300deg) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(360deg) translateY(0);
          }
        }

        .animate-project-entry {
          animation: projectEntry 1.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Projects;
