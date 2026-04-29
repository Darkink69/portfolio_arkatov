// HireModal.tsx
import React, { useEffect } from "react";

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HireModal: React.FC<HireModalProps> = ({ isOpen, onClose }) => {
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
        className="relative max-w-md w-full bg-linear-to-br from-gray-900 to-black rounded-2xl border border-white/20 shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          &times;
        </button>
        <h3 className="text-xl font-bold text-white mb-4 text-center">
          Связаться со мной
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-6 text-center">
          Вы можете узнать о мне подробнее и обсудить сотрудничество связавшись
          со мной одним из следующих способов
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl border border-gray-700">
            <span className="text-2xl">📞</span>
            <span className="text-white">+7 (999) 123-45-67</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl border border-gray-700">
            <span className="text-2xl">📱</span>
            <span className="text-white">@portfolio_designer</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl border border-gray-700">
            <span className="text-2xl">💬</span>
            <span className="text-white">Max: @portfolio_max</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl border border-gray-700">
            <span className="text-2xl">✉️</span>
            <span className="text-white">hello@portfolio.ru</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireModal;
