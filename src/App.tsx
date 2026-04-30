import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import PhotoModal from "./components/PhotoModal";
import HireModal from "./components/HireModal";
import ProjectModal from "./components/ProjectModal";
import Tooltip from "./components/Tooltip";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  type: "design" | "development";
  tags: string[];
  detailedDescription: string;
  gallery: Array<{ type: "image" | "video"; src: string }>;
  link: string;
}

interface Slide {
  image: string;
  title: string;
  subtitle?: string;
}

const slides: Slide[] = [
  {
    image: "/bg_main1.jpg",
    title: "Я создаю цифровые продукты\nот концепта до кода",
    subtitle: "Graphic & Web Design • UI/UX • Frontend Development",
  },
  {
    image: "/bg_main2.jpg",
    title: "Создание уникального графического дизайна",
  },
  {
    image: "/bg_main3.jpg",
    title: "Проектирование мобильных и десктопных интерфейсов",
  },
  {
    image: "/bg_main4.jpg",
    title: "Разработка сайтов и web-приложений",
  },
  {
    image: "/bg_main5.jpg",
    title: "Backend для ваших сервисов",
  },
  {
    image: "/bg_main6.jpg",
    title: "Моушен-дизайн для ваших проектов или роликов",
  },
];

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<
    "design" | "development" | null
  >(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right",
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const projectsRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<number>(null);

  // const menuItems = ["Обо мне", "Дизайн", "Разработка"];

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Ошибка загрузки проектов:", error));
  }, []);

  // Автопереключение слайдов
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setSlideDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  // const prevSlide = () => {
  //   if (isAnimating) return;
  //   setSlideDirection("left");
  //   setIsAnimating(true);
  //   setTimeout(() => {
  //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  //     setTimeout(() => setIsAnimating(false), 50);
  //   }, 300);
  // };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    const direction = index > currentSlide ? "right" : "left";
    setSlideDirection(direction);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 50);
    }, 3000);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }
  };

  const filteredProjects = activeFilter
    ? projects.filter((project) => project.type === activeFilter)
    : projects;

  const scrollToProjects = (filter: "design" | "development") => {
    setActiveFilter(filter);
    setMobileMenuOpen(false);
    setTimeout(() => {
      projectsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const skills = [
    { name: "Figma", icon: "🎨" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Python", icon: "🐍" },
    { name: "Illustrator", icon: "🎭" },
    { name: "Photoshop", icon: "📸" },
    { name: "AfterEffects", icon: "🎬" },
  ];

  const workflowSteps = [
    {
      icon: "🔍",
      name: "Ресерч",
      tooltip: "Изучение рынка, анализ конкурентов, интервью с пользователями",
    },
    {
      icon: "✏️",
      name: "Дизайн",
      tooltip: "Создание концепции, прототипов и визуального стиля",
    },
    {
      icon: "📱",
      name: "Прототип",
      tooltip: "Интерактивные прототипы для тестирования гипотез",
    },
    {
      icon: "💻",
      name: "Разработка",
      tooltip: "Написание чистого кода, интеграция и тестирование",
    },
  ];

  const currentSlideData = slides[currentSlide];
  const titleLines = currentSlideData.title.split("\n");

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-black via-blue-950 to-purple-950">
      <div className="w-full max-w-5xl mx-auto bg-black border-x border-white/30 shadow-2xl shadow-black/50 min-h-screen">
        {/* Слайдер */}
        <div className="relative w-full overflow-hidden">
          <div
            className="w-full bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out"
            style={{
              backgroundImage: `url('${currentSlideData.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: isAnimating
                ? slideDirection === "right"
                  ? "translateX(-100%)"
                  : "translateX(100%)"
                : "translateX(0)",
              opacity: isAnimating ? 0 : 1,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <header className="relative z-10 w-full px-6 py-5">
              <div className="flex items-center justify-between">
                <div className="shrink-0">
                  <img
                    src="/port.png"
                    alt="Портфолио"
                    className="h-12 w-auto"
                  />
                </div>

                <nav className="hidden md:flex gap-1 razerBold text-base">
                  <button
                    onClick={() => setPhotoModalOpen(true)}
                    className="px-4 py-2 rounded-full text-gray-300 hover:text-white transition"
                  >
                    Обо мне
                  </button>
                  <button
                    onClick={() => scrollToProjects("design")}
                    className="px-4 py-2 rounded-full text-gray-300 hover:text-white transition"
                  >
                    Дизайн
                  </button>
                  <button
                    onClick={() => scrollToProjects("development")}
                    className="px-4 py-2 rounded-full text-gray-300 hover:text-white transition"
                  >
                    Разработка
                  </button>
                </nav>

                <div className="md:hidden">
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-white p-2"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {mobileMenuOpen ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      )}
                    </svg>
                  </button>
                </div>

                <button
                  onClick={() => setHireModalOpen(true)}
                  className="hidden md:block px-5 py-2 rounded-full bg-teal-300 text-gray-900 font-semibold text-base hover:bg-teal-50 transition shadow-md shadow-purple-500/30 razerBold"
                >
                  Нанять меня
                </button>
              </div>
            </header>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-75 md:min-h-100 px-6 text-center">
              <h1 className="text-2xl md:text-4xl lg:text-5xl razer text-white drop-shadow-lg whitespace-pre-line">
                {titleLines.map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < titleLines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
              {currentSlideData.subtitle && (
                <p className="text-white/80 text-sm md:text-base mt-4 tracking-wide">
                  {currentSlideData.subtitle}
                </p>
              )}
            </div>

            {/* Отступ для точек */}
            <div className="h-16"></div>
          </div>

          {/* Точки навигации */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide
                    ? "bg-purple-500 w-6 h-2"
                    : "bg-white/50 w-2 h-2 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Мобильное меню на весь экран */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-6">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              ✕
            </button>
            <button
              onClick={() => {
                setHireModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="px-6 py-3 rounded-full bg-teal-500 text-gray-900 font-semibold text-base hover:bg-teal-300 transition shadow-md shadow-purple-500/30"
            >
              Нанять меня
            </button>
            <button
              onClick={() => {
                setPhotoModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="text-white text-xl hover:text-purple-400 transition"
            >
              Обо мне
            </button>
            <button
              onClick={() => scrollToProjects("design")}
              className="text-white text-xl hover:text-purple-400 transition"
            >
              Дизайн
            </button>
            <button
              onClick={() => scrollToProjects("development")}
              className="text-white text-xl hover:text-purple-400 transition"
            >
              Разработка
            </button>
          </div>
        )}

        <section className="px-6 py-12 border-b border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold text-white mb-6">Обо мне</h2>
              <div
                className="cursor-pointer transition-transform hover:scale-105"
                onClick={() => setPhotoModalOpen(true)}
              >
                <img
                  src="/78140134.png"
                  alt="Фото дизайнера"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl mx-auto md:mx-0"
                />
              </div>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-3xl font-bold text-white mb-2">
                Ключевые скиллы
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Мои основные скилы и навыки для работы
              </p>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 rounded-full border border-gray-700"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-gray-200 text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section ref={projectsRef} className="px-6 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold text-white">Мои проекты</h2>
            <div className="flex gap-4">
              <button
                onClick={() =>
                  setActiveFilter(activeFilter === "design" ? null : "design")
                }
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === "design"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Дизайн
              </button>
              <button
                onClick={() =>
                  setActiveFilter(
                    activeFilter === "development" ? null : "development",
                  )
                }
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === "development"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Разработка
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <p className="text-gray-300 text-xs mb-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-purple-900/40 rounded-full text-xs text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center text-gray-400 py-12">
              Нет проектов в выбранной категории
            </div>
          )}
        </section>

        <section className="px-6 py-12 border-t border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Рабочий процесс
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={step.name}>
                <Tooltip text={step.tooltip}>
                  <div className="flex flex-col items-center gap-2 cursor-pointer group">
                    <div className="text-5xl transition-transform group-hover:scale-110">
                      {step.icon}
                    </div>
                    <div className="text-white font-medium text-sm">
                      {step.name}
                    </div>
                  </div>
                </Tooltip>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block w-16 h-px bg-white/30"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        <footer className="px-6 py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © 2025 Портфолио. Все права защищены.
        </footer>
      </div>

      <PhotoModal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
      />
      <HireModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
      />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
