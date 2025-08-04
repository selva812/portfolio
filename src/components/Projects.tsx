import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js, TypeScript, and Stripe integration. Includes product catalog, shopping cart, user authentication, and payment processing.",
      image: "/api/placeholder/800/600",
      technologies: ["Next.js", "TypeScript", "Stripe", "MySQL", "Redux Toolkit"],
      githubUrl: "https://github.com/selva812/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.example.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates. Features include task creation, assignment, status tracking, and team collaboration tools.",
      image: "/api/placeholder/800/600",
      technologies: ["React", "Firebase", "Tailwind CSS", "React DnD"],
      githubUrl: "https://github.com/selva812/task-management-app"
    },
    {
      id: 3,
      title: "Travel Blog",
      description: "A responsive travel blog with dynamic content loading, image galleries, and commenting system. Optimized for SEO and social sharing.",
      image: "/api/placeholder/800/600",
      technologies: ["Next.js", "MongoDB", "Cloudinary", "Markdown"],
      githubUrl: "https://github.com/selva812/travel-blog",
      liveUrl: "https://travel-blog-demo.example.com"
    }
  ];

  return (
    <div >
      {/* <SectionTitle>Projects</SectionTitle> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="relative overflow-hidden group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="flex space-x-3">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-gray-900 text-white p-2 rounded-full hover:bg-indigo-600 transition-colors duration-200"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={18} />
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-gray-900 text-white p-2 rounded-full hover:bg-indigo-600 transition-colors duration-200"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
