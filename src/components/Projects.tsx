import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  content: string;
  frontendTools: string[];
  backendTools: string[];
  otherTools: string[];
  pictures: string[];
  videoPath: string | null;
  duration: string;
  launched: boolean;
  launchDate: string | null;
  officialLink: string | null;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/project');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 p-4 rounded-lg">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 p-8 rounded-2xl shadow-xl relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-800/10 dark:to-pink-800/10 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-yellow-200/20 to-orange-200/20 dark:from-yellow-800/10 dark:to-orange-800/10 rounded-full translate-y-24 -translate-x-24"></div>

      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => router.push(`/projects/${project.slug}`)}
            className="cursor-pointer bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-[0.5deg] flex flex-col h-full border border-white/30 dark:border-gray-700/30 group relative"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-48">
              <img
                src={project.pictures[0] || '/images/project-placeholder.jpg'}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex space-x-3">
                  {project.officialLink && (
                    <a
                      href={project.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // Prevent card navigation
                      className="bg-gray-900 text-white p-2 rounded-full hover:bg-indigo-600 transition-colors duration-200"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                {project.launched && (
                  <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full">
                    Live
                  </span>
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 leading-relaxed">
                {project.shortDescription}
              </p>

              <div className="mt-4 space-y-3">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="mr-2">⏳</span>
                  <span>{project.duration}</span>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {[...project.frontendTools, ...project.backendTools, ...project.otherTools].slice(0, 5).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {[...project.frontendTools, ...project.backendTools, ...project.otherTools].length > 5 && (
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full shadow-sm">
                      +{[...project.frontendTools, ...project.backendTools, ...project.otherTools].length - 5}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Link */}
            <div className="px-6 pb-4">
              <span className="text-indigo-600 dark:text-indigo-400 text-sm font-medium inline-flex items-center group-hover:underline">
                View project details
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
