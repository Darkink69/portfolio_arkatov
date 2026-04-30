import React, { useState, useEffect } from "react";

interface GalleryItem {
  type: "image" | "video";
  src: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  type: "design" | "development";
  tags: string[];
  detailedDescription: string;
  gallery: GalleryItem[];
  link: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => (prev + 1) % (project?.gallery.length || 1));
      } else if (e.key === "ArrowLeft") {
        setCurrentSlide(
          (prev) =>
            (prev - 1 + (project?.gallery.length || 1)) %
            (project?.gallery.length || 1),
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentItem = project.gallery[currentSlide];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 overflow-y-auto">
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-2xl transition"
        >
          ✕
        </button>

        <div className="max-w-7xl w-full bg-linear-to-br from-gray-900 to-black rounded-2xl border border-white/20 overflow-hidden">
          {/* Слайдер */}
          <div className="relative bg-black/50">
            <div className="aspect-video flex items-center justify-center">
              {currentItem.type === "image" ? (
                <img
                  src={currentItem.src}
                  alt={project.title}
                  className="max-w-full max-h-[60vh] object-contain"
                />
              ) : (
                <iframe
                  src={currentItem.src}
                  title={project.title}
                  className="w-full h-full min-h-75 md:min-h-100"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {project.gallery.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentSlide(
                      (prev) =>
                        (prev - 1 + project.gallery.length) %
                        project.gallery.length,
                    )
                  }
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition"
                >
                  ‹
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide(
                      (prev) => (prev + 1) % project.gallery.length,
                    )
                  }
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition"
                >
                  ›
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {project.gallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        idx === currentSlide
                          ? "bg-purple-500 w-4 h-2"
                          : "bg-white/50 w-2 h-2 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Контент */}
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {project.title}
            </h2>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-purple-900/40 rounded-full text-sm text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-4 mb-6">
              {project.detailedDescription
                .split("\n\n")
                .map((paragraph, idx) => (
                  <p key={idx} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition text-center"
            >
              Посмотреть проект →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
