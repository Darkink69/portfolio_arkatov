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
          <h3 className="text-xl font-bold text-white mb-2">
            Алексей Дизайнеров
          </h3>
          <p className="text-purple-400 mb-4">Старший продуктовый дизайнер</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            8+ лет опыта в создании цифровых продуктов. Работал с такими
            брендами как Google, Microsoft и Spotify. Специализируюсь на UX/UI
            дизайне, продуктовой стратегии и создании дизайн-систем.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
