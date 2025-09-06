'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Code,
  Cpu,
  ExternalLink,
  Globe,
  HardDrive,
  Layers,
  Monitor,
  Server,
  Settings,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  Pause
} from 'lucide-react';

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
  videoPath?: string;
  duration: string;
  launched: boolean;
  launchDate?: string;
  officialLink?: string;
}

// Image Slider Component
const ImageSlider = ({ images, title, onImageClick }: {
  images: string[],
  title: string,
  onImageClick: (index: number) => void
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* Main slider container */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl bg-gray-100">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 relative cursor-pointer group"
              onClick={() => onImageClick(index)}
            >
              <Image
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority={index === 0}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90  px-3 py-1 rounded-full text-sm font-medium">
                  Click to expand
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80  hover:bg-white  p-2 rounded-full shadow-lg transition-all duration-200 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80  hover:bg-white  p-2 rounded-full shadow-lg transition-all duration-200 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Play/Pause button */}
        {images.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
            className="absolute top-4 right-4 bg-white/80  hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 z-10"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        )}

        {/* Image counter */}
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                ? 'bg-yellow-500 scale-110'
                : 'bg-gray-300  hover:bg-gray-400 '
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail strip for easy navigation */}
      {images.length > 3 && (
        <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${index === currentIndex
                ? 'ring-2 ring-yellow-500 ring-offset-2 ring-offset-white'
                : 'hover:ring-2 hover:ring-gray-300 '
                }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Full-screen Image Modal
const ImageModal = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  title
}: {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  title: string;
}) => {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 rounded-full hover:bg-white/10 transition-all duration-200 z-10"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Image counter */}
      <div className="absolute top-4 left-4 text-white bg-black/50 px-3 py-1 rounded-full text-sm font-medium z-10">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Main image */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="relative max-w-7xl max-h-full w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full hover:bg-white/10 transition-all duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full hover:bg-white/10 transition-all duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </>
      )}

      {/* Bottom thumbnail strip */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/50 p-2 rounded-lg max-w-full overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                // This would need to be handled by parent component
                const event = new CustomEvent('modalImageSelect', { detail: index });
                window.dispatchEvent(event);
              }}
              className={`relative w-12 h-12 rounded overflow-hidden flex-shrink-0 transition-all duration-200 ${index === currentIndex
                ? 'ring-2 ring-yellow-500'
                : 'hover:ring-2 hover:ring-white/50'
                }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="48px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center">
        <p>Use arrow keys or click arrows to navigate • Press ESC to close</p>
      </div>
    </div>
  );
};

export default function ProjectDetailPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Mock project data for demonstration
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/project/${slug}`);
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error('Failed to fetch project:', error);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchProject();
  }, [slug]);


  // Handle modal image selection
  useEffect(() => {
    const handleModalImageSelect = (e: CustomEvent) => {
      setModalImageIndex(e.detail);
    };

    window.addEventListener('modalImageSelect', handleModalImageSelect as EventListener);
    return () => window.removeEventListener('modalImageSelect', handleModalImageSelect as EventListener);
  }, []);

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextModalImage = () => {
    if (project?.pictures) {
      setModalImageIndex(prev => (prev + 1) % project.pictures.length);
    }
  };

  const prevModalImage = () => {
    if (project?.pictures) {
      setModalImageIndex(prev => (prev - 1 + project.pictures.length) % project.pictures.length);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center p-4">
        <div className="bg-red-100 dark:bg-red-900/20 p-6 rounded-lg max-w-md">
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Project Not Found</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The project you're looking for doesn't exist or may have been removed.
          </p>
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white  text-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm px-3 py-2 h-24 border-b border-gray-200 shadow-sm">
        <div className="relative flex items-center justify-center h-full">

          {/* Back Button - moved a bit inside */}
          <button
            onClick={() => router.back()}
            className="absolute left-20 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-10 h-10" />
          </button>

          {/* Center Content */}
          <div className="relative flex  items-center">
            <h1 className="text-lg font-semibold text-gray-900">
              {project.title}
            </h1>

            {/* Live Badge - positioned under the title */}
            {project.launched && (
              <span className="mt-1 flex items-center px-2 py-0.5 bg-green-100 text-green-800 text-[11px] font-medium rounded-full">
                <Sparkles className="w-3 h-3 mr-1" />
                Live
              </span>
            )}
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="px-14 py-8 ">
        {/* Gallery Section with Slider */}
        {project.pictures && project.pictures.length > 0 && (
          <section className="mb-10" style={{ padding: "2rem 3.5rem" }}>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 " style={{ marginBottom: "1rem" }}>Project Gallery</h2>
            <ImageSlider
              images={project.pictures}
              title={project.title}
              onImageClick={openModal}
            />
          </section>
        )}

        {/* Video Section */}
        {project.videoPath && (
          <section className="mb-10" style={{ padding: "2rem 3.5rem" }}>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 " style={{ marginBottom: "1rem" }}>Project Demo</h2>
            <div className="bg-black rounded-xl overflow-hidden shadow-xl">
              <video
                src={project.videoPath}
                controls
                className="w-full"
                poster={project.pictures?.[0]}
              />
            </div>
          </section>
        )}

        {/* Project Overview */}
        <section className="mb-10" style={{ padding: "2rem 3.5rem" }} >
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 text-gray-900 " style={{ marginBottom: "1rem" }}>
              <Layers className="w-6 h-6 text-yellow-500" />
              Project Overview
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {project.shortDescription}
            </p>

            <div
              className="prose-lg dark:prose-invert prose-a:text-yellow-600 hover:prose-a:text-yellow-500 prose-img:rounded-lg prose-img:shadow-md"
              dangerouslySetInnerHTML={{
                __html: `
      <div class="content-wrapper">
        ${project.content.replace(/<html>|<\/html>|<head>|<\/head>|<body>|<\/body>/gi, '')}
      </div>
    `
              }}
            />
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-10 " style={{ padding: "2rem 3.5rem" }}>

          <h2 className="flex items-center gap-2 text-2xl font-bold mb-6 text-gray-900 " style={{ marginBottom: "1rem" }}>
            <Code className="w-6 h-6 text-yellow-500" />
            Technology Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="bg-gray-50  p-5 rounded-xl shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-800 ">
                <Monitor className="w-5 h-5 text-yellow-500" />
                Frontend
              </h3>
              <ul className="space-y-2">
                {project.frontendTools.map((tool, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-gray-50  p-5 rounded-xl shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-800 ">
                <Server className="w-5 h-5 text-yellow-500" />
                Backend
              </h3>
              <ul className="space-y-2">
                {project.backendTools.map((tool, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Tools */}
            <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-800 ">
                <Settings className="w-5 h-5 text-yellow-500" />
                Other Tools
              </h3>
              <ul className="space-y-2">
                {project.otherTools.map((tool, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="bg-gray-50  p-6 rounded-xl shadow-sm" style={{ padding: "2rem 3.5rem" }}>
          <h2 className="flex items-center gap-2 text-2xl font-bold mb-6 text-gray-900" style={{ marginBottom: "1rem" }}>
            <HardDrive className="w-6 h-6 text-yellow-500" />
            Project Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-500  flex-shrink-0 relative -top-[1px]" />
              <div className="leading-tight">
                <p className="text-sm text-gray-500 ">Duration</p>
                <p className="font-medium">{project.duration}</p>
              </div>
            </div>


            {project.launchDate && (
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-500 " />
                <div>
                  <p className="text-sm text-gray-500 ">Launch Date</p>
                  <p className="font-medium">
                    {new Date(project.launchDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            )}

            {project.officialLink && (
              <div className="sm:col-span-2">
                <Link
                  href={project.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  Visit Official Website
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Full-screen Image Modal */}
      <ImageModal
        images={project.pictures}
        currentIndex={modalImageIndex}
        isOpen={modalOpen}
        onClose={closeModal}
        onNext={nextModalImage}
        onPrev={prevModalImage}
        title={project.title}
      />
    </div>
  );
}