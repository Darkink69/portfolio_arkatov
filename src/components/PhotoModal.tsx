// PhotoModal.tsx
import React, { useEffect } from "react";

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-linear-to-br from-gray-900 to-black rounded-2xl border border-white/20 shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          &times;
        </button>
        <div className="text-center">
          <div className="w-24 h-24 rounded-full border-4 border-purple-500 mx-auto mb-4 overflow-hidden">
            <img
              src="/78140134.png"
              alt="Дизайнер"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-2 razerBold">
            Владимир Аркатов
          </h3>
          <p className="text-purple-400 text-xl mb-4 razerBold">
            Фронтенд разработчик, UI/UX, графический дизайнер
          </p>
          <p className="text-gray-300 text-base leading-relaxed razer text-left">
            10+ лет опыта в создании цифровых продуктов.<br></br>
            Специализируюсь <br></br>• Электронный город<br></br>• DataEast
          </p>
          <a
            href="https://github.com/Darkink69"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition text-center"
          >
            Мой GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
